import { FC } from "react";
import { styled } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import Image from "next/image";

// styled component
const Images = styled(Image)({
  display: "block",
});
const StyledBox = styled(FlexBetween)(({ theme }) => ({
  ".title": {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: "1.35rem",
  },
  [theme.breakpoints.up("sm")]: {
    ".grid-item": {
      minHeight: 424,
      display: "flex",
      alignItems: "baseline",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": { fontSize: 32 },
  },
  [theme.breakpoints.down("xs")]: {
    ".title": { fontSize: 16 },
    ".title + *": { fontSize: 13 },
    ".button-link": { height: 36, padding: "0 1.5rem", fontSize: 13 },
  },
}));

// ==================================================
type CarouselCard1Props = {
  title?: string;
  imgUrl?: string;
  imgUrlMobile?: string;
  alt?: string;
  buttonLik?: string;
  buttonText?: string;
  description?: string;
  buttonColor?: "dark" | "primary";
};
// ==================================================

const CarouselCard1: FC<CarouselCard1Props> = ({
  imgUrl,
  imgUrlMobile,
  alt,
}) => {
  return (
    <StyledBox>
      {imgUrl && (
        <Images
          quality={100}
          priority
          width={1273}
          height={400}
          src={imgUrl}
          alt={alt}
          sx={{
            mx: "auto",
            width: "100%",
            height: "auto",
            display: { xs: "none", md: "block" },
          }}
        />
      )}
      {imgUrlMobile && (
        <Images
          priority
          width={1080}
          height={1080}
          src={imgUrlMobile}
          alt={alt}
          sx={{
            mx: "auto",
            maxHeight: "auto",
            width: "100dvw",
            height: "auto",
            display: { xs: "block", md: "none" },
          }}
        />
      )}
    </StyledBox>
  );
};

export default CarouselCard1;
