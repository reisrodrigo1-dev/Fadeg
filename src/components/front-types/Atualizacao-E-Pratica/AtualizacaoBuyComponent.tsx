import {
  styled,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  Dialog,
} from "@mui/material";
import { H2, H3, Paragraph } from "../../Typography";
import { currency } from "lib";
import axios from "axios";
import { useEffect, useState } from "react";
import useCartStore from "store/useCartStore";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { LoadingButton } from "@mui/lab";
import LoginModal from "pages-sections/sessions/LoginModal";
import SignupModal from "pages-sections/sessions/SignupModal";
import { useRouter } from "next/router";

const BuyButton = styled(LoadingButton)({
  backgroundColor: "#D25400",
  color: "white",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#D25400",
    filter: "brightness(0.8)",
  },
});
const Buy = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  padding: 5,
  backgroundColor: "rgba(17, 25, 40, 0.75)",
  bottom: 0,
  backdropFilter: "blur(5px) saturate(180%)",
  "& button": {
    backgroundColor: "#CC7B1C",
    color: "white",
    transition: "0.3s",

    "&:hover": {
      filter: "brightness(0.8)",
      backgroundColor: "#CC7B1C",
    },
  },
  "@media (max-width: 600px)": {
    bottom: 65,
    padding: 5,
    flexDirection: "column",
  },
});
const ExclusivePosBuyComponent = ({ singleProduct }) => {
  const { ProductId } = singleProduct;
  const theme = useTheme();
  const [productChild, setProductChild] = useState(null);
  const [updatedFamilyTree, setUpdatedFamilyTree] = useState(null);
  const [selectedButtonId, setSelectedButtonId] = useState(null);
  const [cupomText, setCupomText] = useState<string>();
  const [cupom, setCupom] = useState<any>();
  const [cupomButton, setCupomButton] = useState<boolean>(false);
  const [frete, setFrete] = useState<any>();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogSignUpOpen, setDialogSignupOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();

  const route = useRouter();

  const fetchCartItems = useCartStore((state) => state.fetchCartItems);

  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const toggleDialogSignup = () => setDialogSignupOpen(!dialogSignUpOpen);
  const handleCupomButton = () => {
    setCupomButton((prev) => !prev);
  };

  const [updatedPrice, setUpdatedPrice] = useState(singleProduct.SpecialPrice);
  const [updatedScratchPrice, setUpdatedScratchPrice] = useState(
    singleProduct.Price
  );

  const updatePrice = (specialPrice: number) => {
    setUpdatedPrice(specialPrice);
  };

  const upateScratchPrice = (price: number) => {
    setUpdatedScratchPrice(price);
  };

  useEffect(() => {
    if (singleProduct.ProductGroupId !== 2) {
      if (productChild && productChild.SpecialPrice) {
        updatePrice(productChild.SpecialPrice);
      }
      if (productChild && productChild.Price) {
        upateScratchPrice(productChild.Price);
      }
    }
  }, [productChild, singleProduct.ProductGroupId]);

  const hasUnselectedChildren = (product) => {
    return (product.Children || [])
      .map((child) => {
        return (
          !child.Selected || (child.Children && hasUnselectedChildren(child))
        );
      })
      .includes(true);
  };

  const updateNestedObject = (arr, targetID, updates) => {
    return arr.map((item) => {
      if (item?.ProductId === targetID) {
        return { ...item, ...updates };
      } else if (item?.Children && item?.Children?.length > 0) {
        const updatedChildren = updateNestedObject(
          item?.Children,
          targetID,
          updates
        );
        return {
          ...item,
          Children: updatedChildren,
        };
      }
      return item;
    });
  };

  const updatedSingleProduct = updateNestedObject(
    singleProduct?.Children,
    updatedFamilyTree?.ProductId,
    updatedFamilyTree
  );

  const handleCartAmountChange = (amount: number) => () => {
    if (!session) {
      setDialogOpen(true);
      enqueueSnackbar("Faça o login para adicionar itens ao carrinho!", {
        variant: "warning",
      });
    } else {
      setLoading(true);
      let cartItem;
      if (singleProduct.ProductId === updatedFamilyTree?.ProductId) {
        cartItem = {
          price: updatedPrice,
          qty: amount,
          name: updatedFamilyTree.Name,
          imgUrl: updatedFamilyTree.SmallImageUrl,
          ProductId,
          Children: updatedFamilyTree.Children,
          SKU: updatedFamilyTree.SKU,
          URLKey: updatedFamilyTree.URLKey,
          Selected: true,
        };
      } else {
        cartItem = {
          price: updatedPrice,
          qty: amount,
          name: singleProduct.Name,
          imgUrl: singleProduct.SmallImageUrl,
          ProductId,
          Children: updatedSingleProduct,
          SKU: singleProduct.SKU,
          URLKey: singleProduct.URLKey,
          Selected: true,
        };
      }
      axios
        .post(
          "https://apiecommerce.meucurso.com.br/BIPEStore/AddToCart",
          {
            CustomerId: session.user.CustomerId,
            Children: [cartItem],
          },
          {
            headers: {
              Authorization: `Bearer ${session.user.Token}`,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          const responseData = response.data;
          fetchCartItems(session);
          enqueueSnackbar("Produto adicionado no carrinho!", {
            variant: "success",
          });
          localStorage.setItem("apiResponseData", JSON.stringify(responseData));
          route.push("/carrinho");
        })
        .catch((err) => {
          setLoading(false);
          if (err.response.status == 401) {
            enqueueSnackbar(
              "Login expirado! Por favor, saia e entre novamente em sua conta!",
              {
                variant: "warning",
                autoHideDuration: 7000,
              }
            );
          } else if (hasUnselectedChildren(singleProduct) && !productChild) {
            enqueueSnackbar("Selecione uma das opções para prosseguir", {
              variant: "warning",
              autoHideDuration: 3000,
            });
          } else {
            console.log(err);
            enqueueSnackbar(err.message, {
              variant: "error",
            });
          }
        });
    }
  };
  return (
    <>
      {!session && (
        <>
          <Dialog
            scroll="body"
            open={dialogOpen}
            fullWidth={isMobile}
            onClose={toggleDialog}
            sx={{ zIndex: 999 }}
          >
            <LoginModal
              handleModal={{
                modalSignUp: toggleDialogSignup,
                modalLogin: toggleDialog,
              }}
            />
          </Dialog>
          <Dialog
            scroll="body"
            open={dialogSignUpOpen}
            fullWidth={isMobile}
            onClose={toggleDialogSignup}
            sx={{ zIndex: 999 }}
          >
            <SignupModal
              handleModal={{
                modalSignUp: toggleDialogSignup,
                modalLogin: toggleDialog,
              }}
            />
          </Dialog>
        </>
      )}
      <Grid
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
        textAlign={"center"}
        sx={{
          position: "fixed",
          bottom: { xs: 65, md: 0 },
          padding: 1,
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          backdropFilter: "blur(5px) saturate(180%)",
        }}
      >
        <Grid item md={4}>
          <H2
            sx={{
              display: { xs: "none", md: "block" },
              textAlign: { xs: "center" },
              color: "white",
              width: { md: 500 },
            }}
          >
            {singleProduct.Name}
          </H2>
        </Grid>
        <Grid item md={4}>
          {(singleProduct.ProductGroupId === 3 ||
            singleProduct.ProductGroupId === 2) && (
            <Paragraph color={"white"}>A partir de </Paragraph>
          )}
          <H3 sx={{ fontSize: { xs: "13px", md: "16px" } }} color={"white"}>
            {" "}
            <span style={{ fontWeight: "light" }}>
              <s>{currency(singleProduct.Price)}</s>
            </span>{" "}
            por {currency(updatedPrice)}
          </H3>
          <H3 sx={{ fontSize: { xs: "18px", md: "25px" } }} color={"white"}>
            12x de {currency(updatedPrice / 12)}{" "}
          </H3>
          <span style={{ fontWeight: "400", fontSize: "16px", color: "#ffff" }}>
            no cartão de crédito
          </span>
        </Grid>
        <Grid item md={4}>
          {!singleProduct.InStock && (
            <Button variant="contained" disabled>
              Fora de estoque
            </Button>
          )}
          {singleProduct.InStock && (
            <BuyButton
              data-testid="addCart-button"
              loading={loading}
              type="submit"
              variant="contained"
              onClick={handleCartAmountChange(1)}
              sx={{ textTransform: 'none'}}
            >
              Matricule-se já!
            </BuyButton>
          )}
        </Grid>
      </Grid>
      {/* <Buy>
            <H2
              sx={{
                display: { xs: "none", md: "block" },
                textAlign: { xs: "center" },
                color: "white",
                width: { md: 500 },
              }}
            >
              {singleProduct.Name}
            </H2>
            <Box
              display={"flex"}
              sx={{ flexDirection: "column", alignItems: "center" }}
            >
              <s style={{ color: "white" }}>{currency(singleProduct.Price)}</s>
              <H5 color={"white"}>{currency(singleProduct.SpecialPrice)}</H5>
              <H2 color={"white"}>
                12x de {currency(singleProduct.SpecialPrice / 12)}{" "}
              </H2>
              {!singleProduct.InStock && (
                <Button variant="contained" disabled>
                  Fora de estoque
                </Button>
              )}
              {singleProduct.InStock && (
                <LoadingButton
                  loading={loading}
                  type="submit"
                  variant="contained"
                  onClick={handleCartAmountChange(1)}
                >
                  Adicionar ao Carrinho
                </LoadingButton>
              )}
            </Box>
          </Buy> */}
    </>
  );
};

export default ExclusivePosBuyComponent;
