import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { Box, Button, Container, Typography } from "@mui/material";

import api from "utils/__api__/meu-curso";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useProducts } from "hooks/useProducts";
import { Clarity } from "components/metrics/Clarity";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import { NextPage } from "next";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";
import { useBanners } from "hooks/useBanners";
import NewCountdown from "components/NewCountdown";

const Black: NextPage = () => {
  const { products: oab2 } = useProducts(api.getProductsById("161"));
  const { products: oab } = useProductsWithOrder(api.getProductsById, 203);
  const { products: assinaturas } = useProductsWithOrder(
    api.getProductsById,
    288
  );
  const { products: concursos } = useProductsWithOrder(
    api.getProductsById,
    285
  );
  const { banners } = useBanners(api.getIndexBanners("13"));
  const { products: pos } = useProducts(api.getProductsById("3"));

  const { products: oabBlack } = useProducts(api.getProductsById("286"));
  const { products: atualizacaoEPratica } = useProducts(api.getProductsById("12"));


  return (
    <ShopLayout1>
      <SEO title="Black Friday" sitename="MeuCurso" />
      <Container
        sx={{
          position: "relative",
          backgroundImage: "url('background-black.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: { xs: "scroll", md: "fixed" }
        }}
        disableGutters={true}
        maxWidth="xl"
      >
        <Box>
          <Section1 carouselData={banners} />
          <Container
            sx={{ h2: { color: "white" }, textAlign: "center", py: 2 }}
          >
            {new Date() < new Date(2024, 10, 29, 23, 59) &&
              <NewCountdown expirationDate={new Date(2024, 10, 29, 23, 59)} /> 
            }
          <Section6
            textTemplate="🔥 OAB  🔥"
            category="Super-Black-OAB-super-black"
            products={oabBlack}
          />
              <Section6
              textTemplate="🔥 Pós Graduação - Turmas 2024 🔥"
              category="pos-graduacao"
              products={pos}
            />
             <Section6
              textTemplate="🔥 Assinaturas 🔥"
              category="Super-Black-Assinatura-Super-Black"
              products={assinaturas}
            />
            
                <Section6
                  textTemplate="🔥 Atualização e prática 🔥"
                  category="atualizacao-e-pratica"
                  products={atualizacaoEPratica}
                />
            {/* <H2 my={5}>
            Aproveite a Black do MeuCurso. Ofertas por tempo{" "}
            <span style={{ color: "#e72e2e" }}>limitado:</span>
            </H2>
            <Countdown expireDate={1700880659000} /> */}
            <Section6
              textTemplate="🔥 1ª Fase OAB 🔥"
              category="oab-1-fase-destaques"
              products={oab}
            />
            <Section6
              textTemplate="🔥 2ª Fase OAB 🔥"
              category="oab-2-fase-todas-as-areas"
              products={oab2}
            />
            <Section6
              textTemplate="🔥 Concursos Públicos 🔥"
              category="concursos-publicos-planos-de-assinatura"
              products={concursos}
            />
            {/* <ResponsiveBanners bannerData={"assets/ext_block.png"} /> */}
            {/* <ResponsiveBanners bannerData={"assets/concursos_block.png"} /> */}
            {/* <ResponsiveBanners bannerData={"assets/black-dates.jpeg"} /> */}
            <Button
              href={"/black2024"}
              target="_blank"
              sx={{
                color: "white",
                bgcolor: "#D23F57",
                ":hover": {
                  bgcolor: "#8b182c",
                },
              }}
              variant="contained"
            >
              Acesse o regulamento para concorrer ao Notebook!
            </Button>
          </Container>
        </Box>
        <Clarity />
      </Container >
    </ShopLayout1 >
  );
};

export default Black;
