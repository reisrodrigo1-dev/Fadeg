import { FC } from "react";
import Link from "next/link";
import { Add, Close, Remove } from "@mui/icons-material";
import { Box, Button, Card, IconButton, styled } from "@mui/material";
import Image from "components/BazaarImage";
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import { useAppContext } from "contexts/AppContext";
import { currency } from "lib";

// styled components
const Wrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  position: "relative",
  borderRadius: "10px",
  marginBottom: "1.5rem",
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,

  "@media only screen and (max-width: 425px)": {
    flexWrap: "wrap",
    img: { height: "auto", minWidth: "100%" },
  },
}));

// =========================================================
type ProductCardProps = {
  SKU?: string;
  ProductName?: string;
  Price?: number;
  OriginalPrice?: number;
  Qty: number;
  name?: string;
  ShortDescription?: string;
  URLKey?: string;
  price?: number;
  SmallImageUrl?: string;
  ProductId?: string | number;
  onClickFunction: any;
};
// =========================================================

const ProductCard7: FC<ProductCardProps> = ({
  ProductId,
  ProductName,
  Qty,
  Price,
  OriginalPrice,
  SmallImageUrl,
  URLKey,
  ShortDescription,
  onClickFunction,
  SKU,
}) => {
  const { dispatch } = useAppContext();
  // handle change cart
  const handleCartAmountChange = (amount: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        ProductId,
        ProductName,
        SmallImageUrl,
        Price,
        OriginalPrice,
        Qty: amount,
        URLKey,
        ShortDescription,
      },
    });
  };

  return (
    <Wrapper>
      <Image
        alt={ProductName}
        width={220}
        height={140}
        display="block"
        sx={{ objectFit: "cover" }}
        src={SmallImageUrl}
        loading="lazy"
      />

      <IconButton
        size="small"
        onClick={() => {
          onClickFunction(SKU);
        }}
        sx={{ position: "absolute", right: 15, top: 15 }}
      >
        <Box sx={{ backgroundColor: { xs: "whitesmoke", sm: "transparent" }, display: "flex", borderRadius: 1 }}>
          <Close fontSize="small" />
        </Box>
      </IconButton>

      <FlexBox p={2} rowGap={2} width="100%" flexDirection="column">
        <Link href={`/produto/${URLKey}`}>
          <Span ellipsis fontWeight="600" fontSize={18}>
            {ProductName}
          </Span>
        </Link>

        <FlexBox gap={1} flexWrap="wrap" alignItems="center">
          <Span color="grey.600">{currency(Price)}</Span>

          {/* <Span fontWeight={600} color="primary.main">
            {currency(Price * Qty)}
          </Span> */}
        </FlexBox>

        {/* <FlexBox alignItems="center">
          <Button
            color="primary"
            sx={{ p: "5px" }}
            variant="outlined"
            disabled={Qty === 1}
            onClick={handleCartAmountChange(Qty - 1)}
          >
            <Remove fontSize="small" />
          </Button>

          <Span mx={1} fontWeight={600} fontSize={15}>
            {Qty}
          </Span>
          <Button
            color="primary"
            sx={{ p: "5px" }}
            variant="outlined"
            onClick={handleCartAmountChange(Qty + 1)}
          >
            <Add fontSize="small" />
          </Button>
        </FlexBox> */}
      </FlexBox>
    </Wrapper>
  );
};

export default ProductCard7;
