import { FC } from "react";
import { H4 } from "components/Typography";
import { Box, styled } from "@mui/material";
import LazyImage from "components/LazyImage";
import Image from "next/image";

// custom styled components
const Wrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "16px",
  "& img": { transition: ".3s ease-in-out" },
  ":hover": {
    img: { transform: "scale(1.050)" },
    "& .category-title": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.dark.main,
    },
  },
}));

const CategoryTitle = styled(Box)({
  left: 10,
  right: 10,
  bottom: 10,
  padding: 8,
  textAlign: "center",
  borderRadius: "2px",
  position: "absolute",
  transition: "all 0.3s",
  color: "transparent",
  // backgroundColor: "rgba(255,255,255, .67)",
});

const Images = styled(Image)({
  width: "100%",
});
// ============================================================
type CategoryCard1Props = {
  image: string;
  imageMobile: string;
  size?: {height: number, width: number}
};
// ============================================================

const CategoryCard1: FC<CategoryCard1Props> = ({ image, imageMobile, size = {height: 130, width: 392} }) => {
  return (
    <Wrapper position="relative">
      <Images
        style={{ borderRadius: "2px" }}
        src={image}
        width={size.width}
        height={size.height}
        alt="category"
        sx={{
          display: { xs: "none", md: "block" },
        }}
      />
      <Images
        src={imageMobile}
        width={250}
        height={120}
        alt="category"
        sx={{
          width: "250px",
          margin: "0 auto",
          display: { xs: "block", md: "none" },
        }}
      />
    </Wrapper>
  );
};

export default CategoryCard1;
