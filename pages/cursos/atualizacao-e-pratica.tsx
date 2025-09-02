import ShopLayout1 from "components/layouts/ShopLayout1";
import { GetStaticProps } from "next";
import { Box, Button, Grid, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import api from "utils/__api__/meu-curso";
import SEO from "components/SEO";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { H1 } from "components/Typography";

import Section1 from "pages-sections/fashion-shop-2/Section1";
import { useProducts } from "hooks/useProducts";
import { useBanners } from "hooks/useBanners";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";

const AtualizacaoEPratica = () => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  const { products } = useProducts(api.getProductsById("12"));

  const { banners } = useBanners(api.getIndexBanners("8"));

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
        <SEO
          title="Atualização e Prática: Mantenha-se Preparado"
          sitename="MeuCurso"
          description="Eleve sua carreira jurídica com nossos cursos de atualização e prática. Fique à frente da concorrência e alcance o sucesso com o Meu Curso agora!"
        />
        <Container>
          <Section1 carouselData={banners} />
          <Box py={5} my={5}>
            <Container>
              <Grid container>
                <Grid item md={12} textAlign={"center"}>
                  <H1>Cursos em Destaque</H1>
                </Grid>
              </Grid>
              <Section6 category="atualizacao-e-pratica" products={products} />
            </Container>
          </Box>
          <Box sx={{ backgroundColor: "#fff" }}></Box>
        </Container>
      </ShopLayout1>
    </>
  );
};
export default AtualizacaoEPratica;
