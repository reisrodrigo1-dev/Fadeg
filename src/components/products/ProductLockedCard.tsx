import { Box, Button, Chip, Skeleton, styled } from "@mui/material";
import LockedImage from '../../../public/locked-product.png'
import Image from "next/image";

// custom styled components
const Card = styled(Box)({
  ":hover": {
    "& .product-actions": { right: 10 },
    "& img": { transform: "scale(1.1)" },
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

  "& img": { transition: "0.3s" },
}));

const QuickViewButton = styled(Button)({
  left: 0,
  bottom: 0,
  opacity: 0,
  borderRadius: 0,
  position: "absolute",
  textTransform: 'none',
  transition: "all 0.3s",
});


const ProductLockedCard = () => {
  return (
    <Card>
      <CardMedia>
        <Image
          quality={30}
          src={LockedImage}
          alt={'Em breve'}
          width={500}
          height={500}
          style={{
            width: "100%",
            height: "auto",
            filter: "grayscale(1)",
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
      </CardMedia>
    </Card >
  );
};

export default ProductLockedCard;
