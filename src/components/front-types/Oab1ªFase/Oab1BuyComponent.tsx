import {
  styled,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
  DialogActions,
  Slide,
  Grid,
} from "@mui/material";
import { H2, H3, H5, Paragraph } from "../../Typography";
import { currency } from "lib";
import axios from "axios";
import { forwardRef, useEffect, useState } from "react";
import useCartStore from "store/useCartStore";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { LoadingButton } from "@mui/lab";
import DialogTitle from "@mui/material/DialogTitle";
import ChildrenTree from "pages-sections/product-details/ChildrenTree";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import BazaarImage from "../../BazaarImage";
import LoginModal from "pages-sections/sessions/LoginModal";
import SignupModal from "pages-sections/sessions/SignupModal";
import { useRouter } from "next/router";

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
    width: "100%",
    fontWeight: "bolder",
    color: "white",
    transition: "0.3s",
    "@media (max-width: 600px)": {
      width: 200,
      fontSize: "100%",
    },
    "&:hover": {
      filter: "brightness(0.8)",
    },
  },
  "@media (max-width: 600px)": {
    bottom: 65,
    padding: 5,
    flexDirection: "column",
  },
});

const DialogBox = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.26)",
  backdropFilter: "blur(30px) saturate(180%)",
});

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Oab1BuyComponent = ({ singleProduct }) => {
  const { ProductId } = singleProduct;
  const theme = useTheme();
  const [productChild, setProductChild] = useState(null);
  const [updatedFamilyTree, setUpdatedFamilyTree] = useState(null);
  const [selectedButtonId, setSelectedButtonId] = useState(null);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogSignUpOpen, setDialogSignupOpen] = useState(false);
  const [openChildren, setOpenChildren] = useState(false);

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { data: session } = useSession();

  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const toggleDialogSignup = () => setDialogSignupOpen(!dialogSignUpOpen);

  const route = useRouter();
  const handleCloseDialogChildren = () => {
    setOpenChildren(false);
  };
  const handleOpenDialogChildren = () => {
    if (singleProduct.Children.length === 1) {
      const child = singleProduct.Children[0];
      setProductChild(child);
      setSelectedButtonId(child.SKU);
      const cloneFamilyTree = (node) => {
        return JSON.parse(JSON.stringify(node));
      };

      const updatedFamilyTree = cloneFamilyTree(singleProduct);

      setUpdatedFamilyTree(updatedFamilyTree);

      const updateSelectedInTree = (node) => {
        if (node.ProductId === child.ProductId) {
          node.Selected = true;
          updatedFamilyTree.Selected = true;
        } else if (node.Children && node.Children.length > 0) {
          node.Children.forEach(updateSelectedInTree);
        }
      };

      updateSelectedInTree(updatedFamilyTree);
    }

    setOpenChildren(true);
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
  const hasSelectedChildren = (product) => {
    return (product.Children || [])
      .map((child) => {
        return (
          child.Selected || (child.Children && hasUnselectedChildren(child))
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
      <Dialog
        maxWidth={"lg"}
        TransitionComponent={Transition}
        fullWidth={true}
        onClose={handleCloseDialogChildren}
        open={openChildren}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
          },
          "& .css-1q0piun-MuiPaper-root-MuiDialog-paper": {
            backgroundColor: "transparent",
          },
          zIndex: 10,
        }}
      >
        <DialogBox>
          <DialogContent sx={{ textAlign: "center" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <BazaarImage
                  sx={{
                    maxWidth: "100%",
                    width: "25rem",
                    height: "auto",
                    mx: "auto",
                    my: 3,
                    borderRadius: "5px",
                    display: { xs: "none", md: "block" },
                  }}
                  src={singleProduct.LargeImageUrl}
                  alt={singleProduct.Name}
                />
              </Grid>
              <Grid item xs={12} md={6} my={"auto"} textAlign={"center"}>
                <H5 py={5} textAlign={"center"} color={"white"}>
                  Selecione uma das opções abaixo:
                </H5>
                <ChildrenTree
                  selectedChild={productChild}
                  setSelectedChild={setProductChild}
                  familyTree={singleProduct}
                  setUpdatedFamilyTree={setUpdatedFamilyTree}
                  updatedFamilyTree={updatedFamilyTree}
                  selectedButtonId={selectedButtonId}
                  setSelectedButtonId={setSelectedButtonId}
                />
                <Box mt={3}>
                  <H5 textAlign={"center"} color={"white"}>
                    {" "}
                    {currency(updatedPrice)}
                  </H5>
                  <H2 textAlign={"center"} color={"white"}>
                    12x de {currency(updatedPrice / 12)}{" "}
                  </H2>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      color: "#ffff",
                    }}
                  >
                    no cartão de crédito
                  </span>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions
            sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
          >
            {!singleProduct.InStock && (
              <Button variant="contained" disabled>
                Fora de estoque
              </Button>
            )}
            {singleProduct.InStock && (
              <LoadingButton
                loading={loading}
                color="primary"
                type="submit"
                variant="contained"
                onClick={handleCartAmountChange(1)}
                sx={{ display: "block" }}
              >
                Matricular-se já!
              </LoadingButton>
            )}
            <Button
              variant="contained"
              sx={{ ml: 2 }}
              onClick={handleCloseDialogChildren}
            >
              Fechar
            </Button>
          </DialogActions>
        </DialogBox>
      </Dialog>
      <Grid
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
        textAlign={"center"}
        sx={{
          position: "fixed",
          bottom: { xs: 65, md: 0 },
          padding: 0.5,
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
              <s>{currency(updatedScratchPrice)}</s>
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
          {singleProduct.InStock && hasUnselectedChildren(singleProduct) && (
            <LoadingButton
              loading={loading}
              type="submit"
              variant="contained"
              onClick={handleOpenDialogChildren}
              color="primary"
              sx={{
                p: 2,
                minWidth: { xs: 0, md: "200px" },
                textTransform: "none",
              }}
            >
              Matricule-se já!
            </LoadingButton>
          )}
          {singleProduct.InStock && hasSelectedChildren(singleProduct) && (
            <LoadingButton
              loading={loading}
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleCartAmountChange(1)}
            >
              Matricule-se já!
            </LoadingButton>
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
            {(singleProduct.ProductGroupId === 3 ||
              singleProduct.ProductGroupId === 2) && (
              <Paragraph color={"white"}>A partir de </Paragraph>
            )}
            <H5
              sx={{ fontSize: { xs: "13px", md: "16px" } }}
              color={"white"}
            >
              {" "}
              <span style={{ fontWeight: "light" }}>
                <s>{currency(singleProduct.Price)}</s>
              </span>{" "}
              por {currency(updatedPrice)}
            </H5>
            <H2
              sx={{ fontSize: { xs: "18px", md: "25px" } }}
              color={"white"}
            >
              12x de {currency(updatedPrice / 12)}{" "}
            </H2>
            {!singleProduct.InStock && (
              <Button variant="contained" disabled>
                Fora de estoque
              </Button>
            )}
            {singleProduct.InStock &&
              hasUnselectedChildren(singleProduct) && (
                <LoadingButton
                  loading={loading}
                  type="submit"
                  variant="contained"
                  onClick={handleOpenDialogChildren}
                  color="primary"
                >
                  Comprar
                </LoadingButton>
              )}
            {singleProduct.InStock && hasSelectedChildren(singleProduct) && (
              <LoadingButton
                loading={loading}
                type="submit"
                variant="contained"
                color="primary"
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

export default Oab1BuyComponent;
