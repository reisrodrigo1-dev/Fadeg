import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import { Box, Card, Container, Grid, useTheme } from "@mui/material";
import { useBanners } from "hooks/useBanners";
import api from "utils/__api__/meu-curso";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useProducts } from "hooks/useProducts";
import { H2 } from "components/Typography";

const Passei = () => {
  const { products: oab2 } = useProducts(api.getProductsById("156"));
  const { products: pos } = useProducts(api.getProductsById("3"));
  const { products: att } = useProducts(api.getProductsById("12"));
  const { banners } = useBanners(api.getIndexBanners("15"));


  return (
    <ShopLayout1>
      <SEO title="Passei" sitename="MeuCurso" />
      <Container
        sx={{ backgroundColor: "#FDFCF8" }}
        disableGutters={true}
        maxWidth="xl"
      >
        <Section1 carouselData={banners} />

        <Container sx={{ textAlign: "center", py: 2 }}>
          <H2>Pós Graduação</H2>
          <Section6 category="pos-graduacao" products={pos} />
          <H2>Atualização e Prática</H2>
          <Section6 category="atualizacao-e-pratica" products={att} />
        </Container>
      </Container>
    </ShopLayout1>
  );
};

export default Passei;
