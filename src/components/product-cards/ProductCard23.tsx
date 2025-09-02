import Link from "next/link";
import { FC } from "react";
import { Box, Button, Chip, Skeleton, styled } from "@mui/material";

import { currency } from "lib";
import { H3, Span } from "components/Typography";
import Product from "../../models/Product.model";
import Image, { StaticImageData } from "next/image";

const Card = styled(Box)({
  backgroundColor: "white",
  borderRadius: "28px",
  maxWidth: "300px",
  height: "400px",
  margin: "20px auto",

  boxShadow: "1px 8px 10px 1px #2828289",
  ":hover": {
    "& .product-actions": { right: 10 },
    "& img": { transform: "scale(1.23)" },
    "& .product-view-action": { opacity: 1 },
  },
});

const StyledChip = styled(Chip)({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
});

const CardMedia = styled(Box)(({ theme }) => ({
  padding: "20px",
  maxHeight: 300,
  aspectRatio: "3/2",
  objectFit: "cover",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  borderTopLeftRadius: "28px",
  borderTopRightRadius: "28px",
  "& img": { transition: "0.3s" },
}));

const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: 0,
  position: "absolute",
  textTransform: "none",
  transition: "all 0.3s",
});

// ==============================================================
type ProductCardProps = {
  product: Product;
  cta?: StaticImageData;
  backgroundCard?: string;
};
// ==============================================================

const ProductCard23: FC<ProductCardProps> = ({
  product,
  cta,
  backgroundCard,
}) => {
  const discount = product.Price - product.SpecialPrice;
  const dicountPercent = discount / product.Price;
  const totalPercentDiscount = dicountPercent * 100;

  return (
    <Link href={!product.CommingSoon ? `/produto/${product.URLKey}` : "#"}>
      <Card>
        <CardMedia>
          {product.Price !== product.SpecialPrice && (
            <StyledChip
              color="default"
              sx={{ backgroundColor: "#FF9900" }}
              size="small"
              label={`${totalPercentDiscount.toFixed()}% OFF`}
            />
          )}

          {product.SmallImageUrl && (
            <>
              {!product.CommingSoon && (
                <>
                  <Image
                    quality={30}
                    src={product.SmallImageUrl}
                    alt={product.Name}
                    width={500}
                    height={500}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "28px",
                    }}
                  />

                  <QuickViewButton
                    fullWidth
                    size="large"
                    color="dark"
                    variant="contained"
                    className="product-view-action"
                  >
                    {product.Name}
                  </QuickViewButton>
                </>
              )}
              {product.CommingSoon && (
                <>
                  <Image
                    quality={30}
                    src={product.SmallImageUrl}
                    alt={product.Name}
                    width={500}
                    height={500}
                    style={{
                      width: "100%",
                      height: "auto",
                      filter: "grayscale(1)",
                      borderRadius: "28px",
                    }}
                  />

                  <QuickViewButton
                    fullWidth
                    size="large"
                    color="dark"
                    variant="contained"
                    className="product-view-action"
                  >
                    Em Breve
                  </QuickViewButton>
                </>
              )}
            </>
          )}
        </CardMedia>

        <Box p={1} textAlign="center">
          {product.CommingSoon && (
            <Box>
              <strong>Atenção!</strong>
              <br />
              <strong>Oferta desbloqueada em 29/11</strong>
            </Box>
          )}
          {!product.CommingSoon && (
            <>
              <H3 fontSize={"12px"} fontWeight={"400"}>
                <s>{currency(product.Price)}</s>
              </H3>
              <H3
                fontSize={"21px"}
                fontWeight={700}
                py={0.5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mr: 0.5,
                  }}
                >
                  <Span sx={{ fontSize: "12px", fontWeight: "400" }}>12x</Span>
                  <Span sx={{ fontSize: "14px" }}>R$</Span>
                </Box>
                {}
                <Span sx={{ fontSize: "40px", fontWeight: 700 }}>
                  {currency(product.SpecialPrice / 12)}
                </Span>
              </H3>

              <H3 fontSize="12px" fontWeight="700">
                ou {currency(product.SpecialPrice)} à vista
              </H3>

              {cta && (
                <Image src={cta} width={200} height={54} alt={product.title} />
              )}
            </>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 7,
              mt: 5,
              mb: 1,
              position: "absolute",
              bottom: 18,
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "white",
                fontSize: "15px",
                backgroundColor: "#FF9900",
                transition: "0.3s",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#FF9900",
                  filter: "brightness(0.8)",
                },
              }}
            >
              Matricule-se
            </Button>
            <Button sx={{ fontSize: "15px", borderRadius: "20px" }}>
              Saiba Mais
            </Button>
          </Box>
        </Box>
      </Card>
    </Link>
  );
};

export default ProductCard23;
