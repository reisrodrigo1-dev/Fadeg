import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Button, Grid, useTheme } from "@mui/material";
import { Container } from "@mui/system";

import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import api from "utils/__api__/meu-curso";
import SEO from "components/SEO";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import { useProducts } from "hooks/useProducts";
import { useBanners } from "hooks/useBanners";
import Depoiments from "components/Depoiments";

const Procuradorias = () => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  const { products } = useProducts(api.getProductsById("140"));

  const { banners } = useBanners(api.getIndexBanners("16"));

  const sortedProducts = (categoryId, data) => {
    const products = data.filter((product) =>
      product.CategoryProducts.some(
        (category) => category.CategoryId === categoryId
      )
    );

    return products.sort((a, b) => {
      const orderA = a.CategoryProducts.find(
        (category) => category.CategoryId === categoryId
      )?.OrderInStore;
      const orderB = b.CategoryProducts.find(
        (category) => category.CategoryId === categoryId
      )?.OrderInStore;

      if (orderA !== undefined && orderB !== undefined) {
        return orderA - orderB;
      } else {
        return 0;
      }
    });
  };

  const procuradorias = sortedProducts(140, products);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else if (width < 1200) setVisibleSlides(4);
    else setVisibleSlides(5);
  }, [width]);
  const theme = useTheme();

  return (
    <>
      <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
        <SEO title="Procuradorias" sitename="MeuCurso" />
        <Container maxWidth="xl" disableGutters={true}>
          <Section1 carouselData={banners} />
          <Container>
            <Grid container spacing={2} marginTop={5}>
              <Grid item xs={12} md={6}>
                <Box textAlign={{ xs: "center", lg: "start" }}>
                  <h1>
                    Estude para Procuradorias: Conheça Nossa Metodologia!
                  </h1>
                  <p>
                    Seu sonho é ser procurador federal, estadual ou
                    municipal? Assista ao vídeo do nosso coordenador de
                    carreiras nesta área, Marcos Oliveira. Procurador da
                    Fazenda Nacional e professor. Oferecemos uma preparação
                    completa, aulas práticas e material exclusivo para
                    prepará-lo para os concursos. Personalize seu estudo e
                    comece sua jornada rumo ao sucesso conosco!
                  </p>
                  <p>
                    Conteúdo atualizado: no novo formato da prova com 20
                    disciplinas!
                  </p>
                </Box>
                {/* <Box
                  textAlign={{
                    lg: "start",
                    xs: "center",
                  }}
                  my={2}
                >
                  <Button href="#cursos" variant="contained" color="error">
                    QUERO COMERÇAR MEUS ESTUDOS!
                  </Button>
                </Box> */}
              </Grid>
              <Grid mx={"auto"} item lg={6}>
                <Box>
                  <iframe
                    style={{ aspectRatio: "16/9" }}
                    width="100%"
                    height="auto"
                    src="https://www.youtube.com/embed/GNlcQMjgnmU?si=M0JDThYwQX4uibQ8"
                    title="YouTube video player"
                  ></iframe>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container>
              <Grid item md={12} textAlign={"center"}>
                <h1>Procuradorias</h1>
              </Grid>
            </Grid>
          </Container>
          <Section6
            category="concursos-publicos-procuradorias"
            products={procuradorias}
          />
          <Depoiments />
        </Container>
      </ShopLayout1>
    </>
  );
};
export default Procuradorias;
