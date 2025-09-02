import { FC, Fragment } from "react";
import { Grid, Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import ProductCard1 from "components/product-cards/ProductCard1";
import { Span } from "components/Typography";
import Product from "../../models/Product.model";

// ========================================================
type ProductListProps = { products: Product[] };
// ========================================================

const ProductList1: FC<ProductListProps> = ({ products }) => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        {products.map((item: Product) => (
          <Grid item lg={4} sm={6} xs={12} key={item.ProductId}>
            <ProductCard1
              ProductId={item.ProductId}
              URLKey={item.URLKey}
              title={item.Name}
              price={item.SpecialPrice}
              imgUrl={item.SmallImageUrl}
              ShortDescription={item.ShortDescription}
            />
          </Grid>
        ))}
      </Grid>

      <FlexBetween justifyContent={"end"} flexWrap="wrap" mt={4}>
        {/* <Span color="grey.600">Showing 1-9 of 1.3k Products</Span> */}
        <Pagination count={10} variant="outlined" color="primary" />
      </FlexBetween>
    </Fragment>
  );
};

export default ProductList1;
