import { Box, Container, Grid } from "@mui/material";
import Blog from "components/Blog";
import SEO from "components/SEO";
import { H1, H2 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { useProducts } from "hooks/useProducts";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import api from "utils/__api__/meu-curso";

const PosGraduacao = () => {
  const { products: pos } = useProducts(api.getProductsById("3"));
  const { products: atualizacao } = useProducts(api.getProductsById("12"));

  return (
    <ShopLayout1>
      <SEO title="Pós Graduação" sitename="meuCurso" />
      <Box sx={{ backgroundColor: "#FDFCF8" }}>
        <H1 sx={{ maxHeight: "265px", overflow: "hidden" }}>
          <ResponsiveBanners
            bannerData={"assets/images/capa_site_pos_mobile.png"}
          />
        </H1>
        <Container sx={{ display: "flex", gap: "4rem", paddingY: "3rem" }}>
          <H2
            sx={{
              maxWidth: "35rem",
              textJustify: "inter-character",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            at quaerat beatae, iure voluptas dolorum eius necessitatibus
            officiis itaque distinctio corrupti possimus sapiente
            voluptatum assumenda quam, natus asperiores magni ipsa.
          </H2>
          <iframe
            style={{ aspectRatio: "16/9", border: "none" }}
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/GNlcQMjgnmU?si=M0JDThYwQX4uibQ8"
            title="YouTube video player"
          ></iframe>
        </Container>
        <Container sx={{ textAlign: "center", py: 2 }}>
          <H2>Pós Graduação</H2>
          <Section6 products={pos} />
          <H2>Atualização e prática</H2>
          <Section6 products={atualizacao} />
        </Container>
        <Container sx={{ pb: 8 }}>
          <Blog />
        </Container>
      </Box>
    </ShopLayout1>
  );
};

export default PosGraduacao;
