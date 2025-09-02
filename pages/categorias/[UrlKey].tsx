import api from "../../src/utils/__api__/meu-curso";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { Box, Card, Container, Grid, useTheme } from "@mui/material";
import SEO from "components/SEO";
import { H1, H5, Paragraph } from "components/Typography";
import ProductCard1 from "components/product-cards/ProductCard1";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { sortedProducts } from "utils/sortedProducts";
import ProductCard18 from "components/product-cards/ProductCard18";

export const getStaticPaths = async () => {
  // const categories = await api.getProductsCategories();

  // const generatePaths = (category, parentPath = "") => {
  //   const currentPath = parentPath ? category.UrlKey : category.UrlKey;

  //   if (category.children && category.children.length > 0) {
  //     const childPaths = category.children.reduce((acc, childCategory) => {
  //       return acc.concat(generatePaths(childCategory, currentPath));
  //     }, []);
  //     return [currentPath, ...childPaths];
  //   }

  //   return [currentPath];
  // };

  // const paths = categories.reduce((acc, category) => {
  //   return acc.concat(generatePaths(category));
  // }, []);

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const categories = await api.getProductsCategoriesByUrlKey(params.UrlKey);

  const categoryId = categories.map((category) => category.id);
  const categoryName = categories.map((category) => category.text);
  const categoryBanner = categories.map((category) => category.BannerFileUrl);

  const data = await api.getProductsById(categoryId);
  const products = sortedProducts(categoryId[0], data);

  return {
    props: {
      categoryName,
      categoryBanner,
      products,
      data,
    },
    revalidate: 1,
  };
};

const Categories = ({ categoryName, products, categoryBanner, data }) => {
  const theme = useTheme();


   

  return (
    <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
      <SEO
        title={categoryName[0] ? categoryName[0] : "Categoria não encontrada"}
        sitename="MeuCurso - Do seu jeito.  No seu tempo."
      />
      <Container disableGutters={true} maxWidth="xl">
        <ResponsiveBanners bannerData={categoryBanner[0]} />
        <Container sx={{ mt: 4 }}>
          <Card
            elevation={1}
            sx={{
              mb: "55px",
              display: categoryName[0] ? "flex" : "none",
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
            <Box>
              <H1 fontWeight={"600"} fontSize={"16px"}>
                {categoryName}
              </H1>
              <Paragraph color="grey.600">
                {products.length > 0 ? products.length : data.length} resultados
                encontrados
              </Paragraph>
            </Box>
          </Card>
          {/* PRODUCT LIST AREA */}

          <Grid container spacing={3} minHeight={500}>
            {!categoryName[0] && (
              <Paragraph
                color="grey.800"
                textAlign={"center"}
                py={5}
                mx={"auto"}
              >
                Categoria não encontrada
              </Paragraph>
            )}
            {categoryName[0] && (
              <>
                {products.length > 0 &&
                  products.map((item) => (
                    <Grid
                      item
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                      key={item.ProductId}
                    >
                      <ProductCard18 
                      product={item} 
                      textButton={
                        (  item.Name.includes("Kit") 
                        || item.Name.includes("E-book") 
                        || item.Name.includes("Vade")) 
                        ? "Comprar" : null}
                      />
                    </Grid>
                  ))}
                {products.length <= 0 &&
                  data.map((item) => (
                    <Grid
                      item
                      lg={3}
                      md={4}
                      sm={6}
                      xs={12}
                      key={item.ProductId}
                    >
                      <ProductCard18 product={item}  />
                    </Grid>
                  ))}
              </>
            )}
          </Grid>
        </Container>
      </Container>
    </ShopLayout1>
  );
};

export default Categories;
