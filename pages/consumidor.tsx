import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import { Box, Card, Container, Grid, useTheme } from "@mui/material";
import { useBanners } from "hooks/useBanners";
import api from "utils/__api__/meu-curso";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useProducts } from "hooks/useProducts";
import { H2 } from "components/Typography";
import bannerBlack from "../public/assets/banner_black_70.jpg";
import Countdown from "pages-sections/fashion-shop-1/countdown";
// import useCountdown from "hooks/useCountdown";

const Consumidor = () => {
  const { products: pos } = useProducts(api.getProductsById("3"));
  const { products: oab } = useProducts(api.getProductsById("133"));
  const { products: att } = useProducts(api.getProductsById("12"));

  return (
    <ShopLayout1>
      <SEO title="Dia do Consumidor" sitename="MeuCurso" />
      <Container
        disableGutters={true}
        maxWidth="xl"
        sx={{ backgroundColor: "#E2DCCE" }}
      >
        <ResponsiveBanners
          bannerData={
            "https://campanhas.meucurso.com.br/banner_consumidor.jpg"
          }
          bannerDataMobile={
            "https://campanhas.meucurso.com.br/banner_consumidor_mobile.jpg"
          }
        />

        <Container sx={{ textAlign: "center", py: 2 }}>
          {/* <H2 my={5}>
            Aproveite a Black do MeuCurso. Ofertas por tempo{" "}
            <span style={{ color: "#E72EA5" }}>limitado:</span>
          </H2>
          <Countdown expireDate={1700880659000} /> */}
          <H2>Pós Graduação</H2>
          <Section6 category="pos-graduacao" products={pos} />
          <H2>Exame de Ordem</H2>
          <Section6 category="oab-1-fase-40-exame" products={oab} />
          <H2>Atualização e Prática</H2>
          <Section6 category="atualizacao-e-pratica" products={att} />
          <ResponsiveBanners
            bannerData={"https://campanhas.meucurso.com.br/bn_rodape.jpg"}
          />
        </Container>
      </Container>
    </ShopLayout1>
  );
};

export default Consumidor;
