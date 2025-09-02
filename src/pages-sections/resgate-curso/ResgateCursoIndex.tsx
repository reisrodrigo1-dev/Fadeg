import styled from "@emotion/styled";
import {
  Box,
  Container,
  Dialog,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ProductCard1 from "components/product-cards/ProductCard1";
import ProductCard21 from "components/product-cards/ProductCard21";
import ProductCard22 from "components/product-cards/ProductCard22";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { H1, H2, H3 } from "components/Typography";
import { useProducts } from "hooks/useProducts";
import { useSession } from "next-auth/react";
import { Sora } from "next/font/google";
import LoginModal from "pages-sections/sessions/LoginModal";
import { useEffect, useState } from "react";
import api from "utils/__api__/meu-curso";

const sora = Sora({ subsets: ["latin"] });

const OrderList = styled("ol")({
  li: {
    margin: "30px 0 30px 0",
  },
});

export default function ResgateCursoIndex() {
  const { data: session } = useSession();
  const [products, setProducts] = useState<any[]>([]);

  const [isClaimed, setIsClaimed] = useState<Boolean>(false);

  useEffect(() => {
    api.getProductsCampain().then((response) => {
      if (
        response.includes("Aluno já reivindicou um porduto nesta campanha.")
      ) {
        setProducts(response);
        setIsClaimed(true);
      } else {
        setProducts(response);
        setIsClaimed(false);
      }
    });
  }, []);

  return (
    <Container maxWidth="xl" disableGutters={true} className={sora.className}>
      <ResponsiveBanners
        bannerData={
          "https://arquivos.meucurso.com.br/Banners/Banner-PrimeiroPassos.jpg"
        }
      />
      <Container>
        <Box
          sx={{
            position: "relative",
            borderRadius: 500,
            backgroundColor: "#0E4E4E",
            padding: 5,
            color: "#ffffff",
            textAlign: "end",
            width: "800px",
            left: { xs: -300, lg: -250, xl: -450 },
            marginTop: 20,
          }}
        >
          <H1 fontWeight={400}>PRIMEIROS PASSOS</H1>
          <H1 fontWeight={400}>NA ADVOCACIA</H1>
        </Box>
      </Container>
      <Container sx={{ mt: 8 }}>
        <H2 fontWeight={400} textAlign={"center"} color={"#0E4E4E"}>
          RESGATE O SEU CURSO
        </H2>
        <Grid
          container
          justifyContent={"center"}
          mt={5}
          gap={2}
          color={"#0E4E4E"}
        >
          <Grid item xs={12} md={5} p={2} sx={{ backgroundColor: "#D9D9D9" }}>
            <H3 textAlign={"center"}>Ja é aluno Meu Curso?</H3>
            <OrderList>
              <li style={{}}>
                Selecione o seu curso (clique em Resgatar/Matricule-se);
              </li>
              <li>Faça o login em nossa plataforma;</li>
              <li>Prossiga com o resgate do seu curso. </li>
            </OrderList>
          </Grid>
          <Grid item xs={12} md={5} p={2} sx={{ backgroundColor: "#D9D9D9" }}>
            <H3 textAlign={"center"}>É sua primeira vez?</H3>
            <OrderList>
              <li>Escolha o seu curso (clique em Resgatar/Matricule-se);</li>
              <li>Realize o seu cadastro em nossa plataforma;</li>
              <li>Complete o resgate do seu curso. </li>
            </OrderList>
          </Grid>
        </Grid>
      </Container>
      <Container
        disableGutters={true}
        maxWidth="xl"
        sx={{ mt: 8, position: "relative" }}
      >
        <Box
          sx={{
            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
            position: "absolute",
            backgroundColor: "#0E4E4E",
            width: "100%",
            height: "100%",
            top: 0,
          }}
        ></Box>
        <Container>
          <Grid container spacing={3}>
            {products?.map((item) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={item.ProductId}>
                <ProductCard22 product={item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>

      {/* {isClaimed && (
        <Container>
          <H2
            fontWeight={400}
            textAlign={"center"}
            color={"#0E4E4E"}
            my={10}
          >
            Você já reivindicou um produto nesta campanha!
          </H2>
        </Container>
      )} */}
    </Container>
  );
}
