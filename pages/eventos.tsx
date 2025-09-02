import { Box, Container, styled } from "@mui/material";
import CoursesTabs from "components/CoursesTabs";
import SEO from "components/SEO";
import { H1 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { useBanners } from "hooks/useBanners";
import Image from "next/image";
import Link from "next/link";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import api from "utils/__api__/meu-curso";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type EventosProps = {};

const StyledButton = styled(Link)({
  backgroundColor: "#10BDC4",
  padding: 6,
  width: "100%",
  fontSize: 32,
  borderRadius: 999,
  color: "white",
  fontWeight: 700,
  zIndex: 20,
  border: "0px",
  boxShadow: "0px 0px 26px 0px rgba(0,0,0,0.2)",
  transition: "all .2s linear",
  ":hover": {
    transform: "scale(1.02)",
  },
});

export default function Eventos(props: EventosProps) {
  const tabs = [
    {
      id: 1,
      name: "Eventos",
      value: "1",
      textTemplate: "",
      buttonColor: "#D23F57",
      categoryId: {
        id: 134,
        UrlKey: "oab-1-fase-destaques",
      },
    },
    // {
    // 	id: 4,
    // 	name: "Eventos Concursos",
    // 	value: "4",
    // 	textTemplate: "Eventos Concursos",
    // 	buttonColor: "#3C098E",
    // 	categoryId: {
    // 		id: 290,
    // 		UrlKey: "concursos-publicos-home-procuradorias",
    // 	},
    // },
  ];

  const { banners } = useBanners(api.getIndexBanners("13"));
  return (
    <ShopLayout1>
      <SEO title="Revisão Detona OAB" sitename="MeuCurso" />
      <Container
        disableGutters={true}
        maxWidth="xl"
        sx={{
          background:
            "linear-gradient(45deg, rgb(206, 48, 126) 0%, rgb(185, 88, 193) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 1000,
            height: 100,
            top: "25%",
            right: 0,
          }}
        >
          <Image alt="" fill src={"/visual-elements/stripe-cyan.svg"} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            bottom: "0",
            animation: "spin 15s linear infinite",
          }}
        >
          <Image alt="" fill src={"/visual-elements/asterisk-orange.svg"} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            right: 0,
            bottom: "20%",
            animation: "spin 15s linear infinite",
          }}
        >
          <Image alt="" fill src={"/visual-elements/star-yellow.svg"} />
        </Box>
        <Container>
          <Section1 carouselData={banners} />
          <Container
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: 2,
            }}
          >
            <H1
              sx={{
                fontSize: "52px",
                width: "max-content",
                position: "relative",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 55,
                  height: 55,
                  left: -13,
                  zIndex: 0,
                  bottom: "15%",
                }}
              >
                <Image alt="" fill src={"/visual-elements/star-orange.svg"} />
              </div>
              <span style={{ zIndex: 1, position: "relative" }}>EVENTOS</span>
            </H1>
            <Box sx={{ position: "relative", zIndex: 10 }}>
              <CoursesTabs textColor="white" tabs={tabs} />
            </Box>
            <StyledButton
              target="_blank"
              href={"https://conteudo.meucurso.com.br/detona-oab-1-fase"}
            >
              Inscreva-se para ficar antenado nas novidades!
            </StyledButton>
          </Container>
        </Container>
      </Container>
    </ShopLayout1>
  );
}

export { Eventos, type EventosProps };
