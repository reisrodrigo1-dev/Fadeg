import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import Product from "../../models/Product.model";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ProductCardProps = {
  product: Product;
};

const Card = styled(Box)({
  ":hover": {
    "& .product-actions": { right: 10 },
    "& .product-view-action": { opacity: 1 },
  },
});

const CardMedia = styled(Box)(({ theme }) => ({
  maxHeight: 300,
  aspectRatio: "3/2",
  objectFit: "cover",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  transition: " all .15s",
  "& img": { transition: "0.3s" },
  ":hover": {
    "& img": {
      filter: "brightness(0.5)",
    },
    transform: "translateY(-10px)",
    boxShadow: "2px 2px 20px 2px black",
  },
}));
const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: 0,
  position: "absolute",
  transition: "all 0.3s",
});

const ProductCard21: FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      <Card my={2}>
        <CardMedia>
          <Link href={`/produto/${product.URLKey}`}>
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
              {product.Name}
            </QuickViewButton>
          </Link>
        </CardMedia>
      </Card>
    </>
  );
};
export default ProductCard21;
