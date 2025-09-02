import { FC } from "react";
import { Box, Button } from "@mui/material";
import { H3 } from "components/Typography";
import Product from "../../models/Product.model";
import useWindowSize from "hooks/useWindowSize";

// ======================================================
type ProductDescriptionProps = { product: Product | null };
// ======================================================

const ProductDescriptionPDF: FC<ProductDescriptionProps> = ({
  product,
}) => {
  const width = useWindowSize();

  const { DescriptionFileUrl } = product;

  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Button
          target="_blank"
          href={DescriptionFileUrl}
          variant="contained"
          color="error"
        >
          BAIXE O DESCRITIVO COMPLETO
        </Button>
      </Box>
      <Box
        sx={{
          height: "130vh",
          width: "100%",
          display: { xs: "none", md: "block" },
        }}
      >
        <iframe
          src={DescriptionFileUrl}
          width="100%"
          height="100%"
        ></iframe>
      </Box>
    </>
  );
};

export default ProductDescriptionPDF;
