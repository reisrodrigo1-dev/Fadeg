import { useBanners } from "hooks/useBanners";
import api from "../src/utils/__api__/meu-curso";
import { Container, Grid } from "@mui/material";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { useTheme } from "@mui/material";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useProducts } from "hooks/useProducts";
import SEO from "components/SEO";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";

const OabGeral = () => {
  const theme = useTheme();
  const { banners } = useBanners(api.getIndexBanners("14"));
  const { products: oab } = useProductsWithOrder(api.getProductsById, 203);
  const { products: oab2 } = useProducts(api.getProductsById("161"));
  const { products: livraria } = useProducts(api.getProductsById("148"));

  return (
    <>
      <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
        <SEO title="Exame de Ordem" sitename="MeuCurso" />
        <Section1 carouselData={banners} />
        <Container>
          <Section6
            textTemplate="1ª Fase OAB"
            category="oab-1-fase-destaques"
            products={oab}
          />
          <Section6
            textTemplate="2ª Fase OAB"
            category="oab-2-fase-regular"
            products={oab2}
          />
          <Section6
            textTemplate="Livraria OAB"
            category="livraria-livraria-oab"
            products={livraria}
          />
        </Container>
      </ShopLayout1>
    </>
  );
};

export default OabGeral;
