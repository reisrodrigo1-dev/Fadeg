import api from "../src/utils/__api__/meu-curso";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { Box, Card, Container, Grid, useTheme } from "@mui/material";
import SEO from "components/SEO";
import { H5, Paragraph } from "components/Typography";
import ProductCard1 from "components/product-cards/ProductCard1";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { useProducts } from "hooks/useProducts";
import { useRouter } from "next/router";

const AtualizacaoEPratica = () => {
  const theme = useTheme();
  const router = useRouter();

  const { products } = useProducts(api.getProductsById("12"));
  return (
    <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
      <SEO
        title={"Atualização e Prática"}
        sitename="MeuCurso - Do seu jeito.  No seu tempo."
      />
      <Container disableGutters={true} maxWidth="xl">
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
            <Box>
              <H5>Atualização e Prática</H5>
              <Paragraph color="grey.600">
                {products.length} resultados encontrados
              </Paragraph>
            </Box>
          </Card>
          {/* PRODUCT LIST AREA */}

          <Grid container spacing={3} minHeight={500}>
            {products.map((item) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={item.ProductId}>
                <ProductCard1
                  title={item.Name}
                  SpecialPrice={item.SpecialPrice}
                  price={item.Price}
                  imgUrl={item.SmallImageUrl}
                  URLKey={item.URLKey}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </ShopLayout1>
  );
};

export default AtualizacaoEPratica;
