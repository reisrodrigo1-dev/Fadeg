import Link from "next/link";
import { FC, useEffect, useState, useRef } from "react";
import { Add, Remove } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  Grid,
  IconButton,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { H1, H2, H3, H6, Paragraph } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { FlexBox, FlexRowCenter } from "../../components/flex-box";
import Product from "../../models/Product.model";
import { currency } from "lib";
import ChildrenTree from "./ChildrenTree";
import { useSession } from "next-auth/react";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "notistack";
import { useCart } from "contexts/CartContext";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { ReadMore } from "components/ReadMore";
import Login from "pages-sections/sessions/Login";
import { useTheme } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import api from "../../utils/__api__/meu-curso";
import useCartStore from "store/useCartStore";
import Signup from "pages-sections/sessions/Signup";
import LoginModal from "pages-sections/sessions/LoginModal";
import SignupModal from "pages-sections/sessions/SignupModal";
import Image from "next/image";
import { useRouter } from "next/router";

// ================================================================
type ProductIntroProps = { singleProduct: Product };
// ================================================================

const ProductIntro: FC<ProductIntroProps> = ({ singleProduct }) => {
  const {
    Name,
    Children,
    price,
    shortDescription,
    title,
    SmallImageUrl,
    SpecialPrice,
    ProductId,
    SKU,
    thumbnail,
    URLKey,
  } = singleProduct;
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

  const [updatedPrice, setUpdatedPrice] = useState(
    singleProduct.SpecialPrice
  );
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
    if (product.Children) {
      for (const child of product.Children) {
        if (!child.Selected) {
          return true;
        }

        if (child.Children) {
          if (hasUnselectedChildren(child)) {
            return true;
          }
        }
      }
    }

    return false;
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
          localStorage.setItem(
            "apiResponseData",
            JSON.stringify(responseData)
          );
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
          } else if (
            hasUnselectedChildren(singleProduct) &&
            !productChild
          ) {
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

  // const handleCoupon = async () => {
  //   const encodedCoupomName = encodeURIComponent(cupomText);
  //   await api
  //     .getCouponByPUrlKey(singleProduct.URLKey, encodedCoupomName)
  //     .then((response) => setCupom(response))
  //     .catch((err) => console.log(err));
  // };
  const handleFrete = async () => {
    const data = await api.getFreteByCEP(
      singleProduct.ProductId,
      cupomText
    );
    setFrete(data);
  };

  const freteValue = frete?.ShippingSevicesArray.map(
    (value) => value.ShippingPrice
  )[0];

  return (
    <Box width="100%">
      {!session && (
        <>
          <Dialog
            scroll="body"
            open={dialogOpen}
            fullWidth={isMobile}
            onClose={toggleDialog}
            sx={{ zIndex: 999 }}
          >
            <LoginModal handleModal={{ modalSignUp: toggleDialogSignup, modalLogin: toggleDialog }} />
          </Dialog>
          <Dialog
            scroll="body"
            open={dialogSignUpOpen}
            fullWidth={isMobile}
            onClose={toggleDialogSignup}
            sx={{ zIndex: 999 }}
          >
            <SignupModal handleModal={{ modalSignUp: toggleDialogSignup, modalLogin: toggleDialog }}/>
          </Dialog>
        </>
      )}
      <Grid container spacing={3} justifyContent="space-around">
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" mb={6}>
            {singleProduct.LargeImageUrl && (
              <Image
                priority
                width={350}
                height={100}
                style={{
                  width: "100dvw",
                  height: "auto",
                  objectFit: "contain",
                  aspectRatio: "16/9",
                }}
                src={singleProduct.LargeImageUrl}
                alt={singleProduct.Name}
              />
            )}
            {!singleProduct.LargeImageUrl && (
              <Image
                priority
                width={350}
                height={100}
                style={{
                  width: "100dvw",
                  height: "auto",
                  objectFit: "contain",
                  aspectRatio: "16/9",
                  filter: "grayscale(100%)",
                }}
                src={"/favicon.ico"}
                alt={singleProduct.Name}
              />
            )}
          </FlexBox>

          <Paragraph
            id=""
            sx={{
              color: "grey",
              textAlign: "center",
              marginTop: -5,
              fontStyle: "italic",
            }}
          >
            SKU: #{singleProduct.SKU}
          </Paragraph>
        </Grid>

        <Grid item md={6} xs={12} alignItems="center">
          <H1 mb={1}>{singleProduct.Name}</H1>

          <FlexBox
            flexDirection={"column"}
            justifyContent={"center"}
            mb={1}
          >
            {singleProduct.ShortDescription && (
              <ReadMore>{singleProduct.ShortDescription}</ReadMore>
            )}
            {singleProduct.ShortDescription === null ||
              (singleProduct.ShortDescription === "" && <></>)}
          </FlexBox>

          {hasUnselectedChildren(singleProduct) && (
            <h4 style={{ marginLeft: 10 }}>
              Selecione uma das opções abaixo:{" "}
            </h4>
          )}

          <ChildrenTree
            selectedChild={productChild}
            setSelectedChild={setProductChild}
            familyTree={singleProduct}
            setUpdatedFamilyTree={setUpdatedFamilyTree}
            updatedFamilyTree={updatedFamilyTree}
            selectedButtonId={selectedButtonId}
            setSelectedButtonId={setSelectedButtonId}
          />

          <Box pt={1} mb={3}>
            {(singleProduct.ProductGroupId === 3 ||
              singleProduct.ProductGroupId === 2) && <p>A partir de </p>}
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              12 x de {currency(updatedPrice / 12)} (PayPal)
            </H2>
            <s>{currency(updatedScratchPrice)}</s>
            <H2 color="primary.main" mb={0.5} lineHeight="1">
              {currency(updatedPrice)}
            </H2>
          </Box>
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
              sx={{ mb: 4.5, px: "1.75rem", height: 40 }}
              // disabled={
              //   hasUnselectedChildren(singleProduct) && !productChild
              // }
            >
              Adicionar ao Carrinho
            </LoadingButton>
          )}
          {/* {singleProduct.Children === null ||
            (singleProduct.Children.length <= 0 && (
              <>
                <Paragraph
                  onClick={handleCupomButton}
                  sx={{ display: "flex", cursor: "pointer" }}
                >
                  Calcular preço com cupom
                  <ArrowDropDownIcon />
                </Paragraph>
                <Collapse in={cupomButton}>
                  <>
                    <Box sx={{ mt: 1 }} display={"flex"}>
                      <TextField
                        value={cupomText}
                        onChange={(e) => setCupomText(e.target.value)}
                        placeholder="Insira o cupom"
                        variant="standard"
                        sx={{ display: "block", justifyContent: "center" }}
                      />
                      <Button
                        sx={{ ml: 1 }}
                        variant="outlined"
                        color="primary"
                        onClick={handleCoupon}
                        disabled={cupomText?.length <= 0}
                      >
                        Calcular
                      </Button>
                    </Box>
                    {cupom && (
                      <Box display={"grid"}>
                        <p>Desconto : {currency(cupom.DiscountAmount)}</p>
                        <p>
                          Seu produto custará :{" "}
                          <span style={{ fontWeight: "bolder" }}>
                            {currency(cupom.Total)}
                          </span>{" "}
                        </p>
                      </Box>
                    )}
                  </>
                </Collapse>
              </>
            ))} */}
          {singleProduct.ProductTypeId === 4 ||
            (singleProduct.ProductTypeId === 2 && (
              <>
                <Paragraph
                  onClick={handleCupomButton}
                  sx={{ display: "flex", cursor: "pointer" }}
                >
                  Calcular frete
                  <ArrowDropDownIcon />
                </Paragraph>
                <Collapse in={cupomButton}>
                  <>
                    <Box sx={{ mt: 1 }} display={"flex"}>
                      <TextField
                        value={cupomText}
                        onChange={(e) => setCupomText(e.target.value)}
                        placeholder="Insira o CEP"
                        variant="standard"
                        sx={{ display: "block", justifyContent: "center" }}
                      />
                      <Button
                        sx={{ ml: 1 }}
                        variant="outlined"
                        color="primary"
                        onClick={handleFrete}
                        disabled={cupomText?.length <= 0}
                      >
                        Calcular
                      </Button>
                    </Box>
                    {frete && (
                      <Box display={"grid"}>
                        <p>Valor do frete : {currency(freteValue)}</p>
                      </Box>
                    )}
                  </>
                </Collapse>
              </>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
