import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Slide,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import axios from "axios";
import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography";
import Product from "../../models/Product.model";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSnackbar } from "notistack";
import LoginModal from "pages-sections/sessions/LoginModal";
import SignupModal from "pages-sections/sessions/SignupModal";
import { FC, forwardRef, useState } from "react";

type ProductCardProps = {
  product: Product;
};

const Card = styled(Box)({
  boxShadow: "1px 1px 5px 1px black",
  backgroundColor: "white",
  position: "relative",
  zIndex: 10,
  cursor: "pointer",
  overflow: "hidden",
  transition: " all .15s",
  "& img": { transition: "0.3s" },
  ":hover": {
    "& .product-actions": { right: 10 },
    "& img": {
      filter: "brightness(0.5)",
    },
    transform: "translateY(-10px)",
    boxShadow: "2px 2px 20px 2px black",
  },
});

const CardMedia = styled(Box)({
  maxHeight: 300,
  aspectRatio: "3/2",
  objectFit: "cover",
});
const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 0,
  opacity: 1,
  borderRadius: 0,
  position: "absolute",
  transition: "all 0.3s",
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

const ProductCard22: FC<ProductCardProps> = ({ product }) => {
  const theme = useTheme();

  const { data: session } = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const [dialogProductsOpen, setDialogProductsOpen] = useState(false);
  const [dialogLoginOpen, setDialogLoginOpen] = useState(false);
  const [dialogSignupOpen, setDialogSignupOpen] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const toggleLoginDialog = () => setDialogLoginOpen(!dialogLoginOpen);
  const toggleSignupDialog = () => setDialogSignupOpen(!dialogSignupOpen);
  const toggleProductDialog = () => setDialogProductsOpen(!dialogProductsOpen);

  const handleCloseDialogProducts = () => {
    setDialogProductsOpen(false);
  };
  const handleClaim = (studentId: number, sku: string, capaignId: number) => {
    setLoading(true);
    axios
      .post(
        `https://apiecommerce.meucurso.com.br/BIPEStore/ClaimProduct?studentId=${studentId}&sku=${sku}&capaignId=${capaignId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session?.user?.Token}`,
          },
        }
      )
      .then((response) => {
        setLoading(false);
        if (
          response.data.includes(
            "Aluno já reivindicou um porduto nesta campanha."
          )
        ) {
          enqueueSnackbar("Você ja resgatou um produto nesta campanha!", {
            variant: "error",
          });
        } else {
          enqueueSnackbar("Produto resgatado com sucesso!", {
            variant: "success",
          });
        }
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar("Algo deu errado! Tente novamente mais tarde.", {
          variant: "error",
        });
      });
  };

  const handleLogin = () => {
    setDialogLoginOpen(true);
    enqueueSnackbar("Entre em sua conta para resgatar o produto", {
      variant: "error",
    });
  };

  return (
    <>
      <Dialog
        scroll="body"
        open={dialogLoginOpen}
        fullWidth={isMobile}
        onClose={toggleLoginDialog}
        sx={{ zIndex: 999 }}
      >
        <LoginModal
          handleModal={{
            modalSignUp: toggleSignupDialog,
            modalLogin: toggleLoginDialog,
          }}
        />
      </Dialog>
      <Dialog
        scroll="body"
        open={dialogSignupOpen}
        fullWidth={isMobile}
        onClose={toggleSignupDialog}
        sx={{ zIndex: 999 }}
      >
        <SignupModal
          handleModal={{
            modalSignUp: toggleSignupDialog,
            modalLogin: toggleLoginDialog,
          }}
        />
      </Dialog>
      <Dialog
        maxWidth={product.Description ? "lg" : "md"}
        TransitionComponent={Transition}
        fullWidth={true}
        onClose={handleCloseDialogProducts}
        open={dialogProductsOpen}
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
              {product.Description && (
                <>
                  <Grid item xs={12} md={6}>
                    <BazaarImage
                      sx={{
                        maxWidth: "100%",
                        width: "25rem",
                        height: "auto",
                        mx: "auto",
                        my: 3,
                        borderRadius: "5px",
                      }}
                      src={product.SmallImageUrl}
                      alt={product.Name}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    my={"auto"}
                    textAlign={"center"}
                    color={"white"}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product?.Description,
                      }}
                    />
                  </Grid>
                </>
              )}
              {!product.Description && (
                <>
                  <Grid item xs={12} md={12}>
                    <BazaarImage
                      sx={{
                        maxWidth: "100%",
                        width: "25rem",
                        height: "auto",
                        mx: "auto",
                        my: 3,
                        borderRadius: "5px",
                      }}
                      src={product.SmallImageUrl}
                      alt={product.Name}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </DialogContent>
          <DialogActions
            sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
          >
            <LoadingButton
              loading={loading}
              color="primary"
              type="submit"
              variant="contained"
              onClick={() =>
                session
                  ? handleClaim(session.user.StudentId, product.SKU, 65)
                  : handleLogin()
              }
              sx={{ display: "block" }}
            >
              Resgatar
            </LoadingButton>
            <Button
              variant="contained"
              sx={{ ml: 2 }}
              onClick={handleCloseDialogProducts}
            >
              Fechar
            </Button>
          </DialogActions>
        </DialogBox>
      </Dialog>
      <Card
        onClick={toggleProductDialog}
        sx={{ pointerEvents: loading ? "none" : "all" }}
        my={2}
      >
        <Image
          unoptimized={true}
          src={product.SmallImageUrl}
          alt={product.Name}
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <QuickViewButton
          fullWidth
          size="large"
          color="dark"
          variant="contained"
          className="product-view-action"
        >
          <Paragraph color={"white"}>Resgatar</Paragraph>
        </QuickViewButton>
        <CardMedia>{product.ProductName}</CardMedia>
      </Card>
    </>
  );
};
export default ProductCard22;
