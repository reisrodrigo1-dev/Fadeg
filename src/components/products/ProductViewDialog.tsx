import { FC } from "react";
import { Add, Close, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import { FlexBox } from "components/flex-box";
import BazaarImage from "components/BazaarImage";
import BazaarRating from "components/BazaarRating";
import Carousel from "components/carousel/Carousel";
import { H1, H2, H3, H6, Paragraph } from "components/Typography";
import { useAppContext } from "contexts/AppContext";
import { currency } from "lib";

// styled components
const ContentWrapper = styled(Box)(({ theme }) => ({
  "& .carousel:hover": {
    cursor: "pointer",
    "& .carousel__back-button": { opacity: 1, left: 10 },
    "& .carousel__next-button": { opacity: 1, right: 10 },
  },
  "& .carousel__next-button, & .carousel__back-button": {
    opacity: 0,
    boxShadow: "none",
    transition: "all 0.3s",
    background: "transparent",
    color: theme.palette.primary.main,
    ":disabled": { color: theme.palette.grey[500] },
    ":hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
  "& .carousel__back-button": { left: 0 },
  "& .carousel__next-button": { right: 0 },
}));

// =====================================================
type ProductViewDialogProps = {
  product: any;
  openDialog: boolean;
  handleCloseDialog: () => void;
};
// =====================================================

const ProductViewDialog: FC<ProductViewDialogProps> = (props) => {
  const { product, openDialog, handleCloseDialog } = props;

  return (
    <Dialog
      open={openDialog}
      maxWidth={false}
      onClose={handleCloseDialog}
      sx={{ zIndex: 1501 }}
    >
      <DialogContent sx={{ maxWidth: 900, width: "100%" }}>
        <ContentWrapper>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Carousel totalSlides={1} visibleSlides={1}>
                <img
                  src={product.imgUrl}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    aspectRatio: "16/9",
                    height: "400px",
                  }}
                  alt={product.title}
                />
              </Carousel>
            </Grid>

            <Grid item md={6} xs={12} alignSelf="center">
              <H2>{product.title}</H2>

              <H1 color="primary.main">{currency(product.price)}</H1>

              {/* <Paragraph my={2}>{product.shortDescription}</Paragraph> */}

              <Divider sx={{ mb: 2 }} />
              <Grid
                display={"flex"}
                justifyContent={"start"}
                textAlign={"justify"}
              >
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ height: 45 }}
                  href={`/produto/${product.URLKey}`}
                >
                  Mais detalhes
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </ContentWrapper>

        <IconButton
          sx={{ position: "absolute", top: 3, right: 3 }}
          onClick={handleCloseDialog}
        >
          <Close fontSize="small" color="secondary" />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

export default ProductViewDialog;
