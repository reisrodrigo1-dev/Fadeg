import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Box, Card, Container, Grid, Skeleton, useTheme } from "@mui/material";
import SEO from "components/SEO";
import ProductCard1 from "components/product-cards/ProductCard1";
import api from "../src/utils/__api__/meu-curso";
import { useRouter } from "next/router";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { H5, Paragraph } from "components/Typography";
import ProductCard18 from "components/product-cards/ProductCard18";

const SearchCategory: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const CategoryId = router.query.CategoryId as string;
  const theme = useTheme();

  useEffect(() => {
    if (CategoryId) {
      setLoading(true);

      api
        .getProductsById(CategoryId)
        .then((response) => {
          setResults(response);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [CategoryId]);

  useEffect(() => {
    api
      .getProductsCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const allCategories = (items) => {
    const results = [];

    items.map((item) => {
      results.push({ id: item.id, text: item.text });

      if (item.children && item.children.length > 0) {
        const childResults = allCategories(item.children);
        results.push(...childResults);
      }
    });

    return results;
  };

  const categoryResults = allCategories(categories);

  const category = categoryResults.find(
    (item) => item.id === parseInt(CategoryId)
  );

  return (
    <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
      <SEO
        title={category?.text}
        sitename="MeuCurso - Do seu jeito.  No seu tempo."
      />
      <Container sx={{ mt: 4 }}>
        <Card
          elevation={1}
          sx={{
            mb: "55px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            p: {
              sm: "1rem 1.25rem",
              md: "0.5rem 1.25rem",
              xs: "1.25rem 1.25rem 0.25rem",
            },
          }}
        >
          {!loading && (
            <Box>
              <H5>{category?.text}</H5>
              <Paragraph color="grey.600">
                {results.length} resultados encontrados
              </Paragraph>
            </Box>
          )}
        </Card>
        {/* PRODUCT LIST AREA */}
        {/* {loading && (
          
        )} */}
        {loading && (
          <Grid container spacing={3} minHeight={500}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Skeleton variant="rectangular" width={"100%"} height={350} />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Skeleton variant="rectangular" width={"100%"} height={350} />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Skeleton variant="rectangular" width={"100%"} height={350} />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Skeleton variant="rectangular" width={"100%"} height={350} />
            </Grid>
          </Grid>
        )}
        {!loading && (
          <Grid container spacing={3} minHeight={500}>
            {results.map((item) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={item.ProductId}>
                <ProductCard18 product={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </ShopLayout1>
  );
};

export default SearchCategory;
