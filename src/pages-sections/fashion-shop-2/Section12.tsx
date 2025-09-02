import { Container, Grid, styled } from "@mui/material";
import { H2 } from "components/Typography";
import { Krona_One, Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });
const krona = Krona_One({ subsets: ["latin"], weight: "400" });
const slideLeft = {
  "@keyframes slide-in-left": {
    " 0%": {
      transform: "translateX(-1000px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
};
const slideRight = {
  "@keyframes slide-in-right": {
    " 0%": {
      transform: "translateX(1000px)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
};
const LeftGrid = styled(Grid)({
  ...slideLeft,
  animation:
    "slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
});
const RightGrid = styled(Grid)({
  ...slideRight,
  animation:
    "slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
});
const RedirectLink = styled(Link)({
  borderRadius: "10px",
  backgroundColor: "#FE973A",
  color: "#ffff",
  padding: "10px",
  cursor: "pointer",
  textAlign: "center",
  transition: ".3s",
  marginTop: "50px",
  "&:hover": {
    filter: "brightness(0.8)",
  },
});
export default function Section12() {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        backgroundColor: "#cc3384",
        backgroundImage: "url('/bg-imersao.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflowX: "hidden",
      }}
    >
      <Container>
        <Grid
          container
          className={krona.className}
          sx={{
            flexDirection: { xs: "column-reverse", md: "unset" },
            height: { xs: "auto", md: "78vh", xl: "50vh" },
          }}
        >
          <LeftGrid
            item
            pt={5}
            xs={12}
            md={6}
            sx={{
              display: "grid",
              justifyContent: "center",
              margin: "auto",
              color: "white",
            }}
          >
            <H2
              sx={{ textAlign: { xs: "center", md: "start" } }}
              fontSize={45}
            >
              A Revisão Final OAB chegou!!
            </H2>
            <p>
              Na nossa super revisão, a Imersão OAB, você terá acesso
              GRATUITO a:
            </p>
            <ul style={{ listStyle: "inside" }}>
              <li>Mais de 60 horas de conteúdo;</li>
              <li>Aulas, e-books e materiais de apoio;</li>
              <li>Uma revisão completa, objetiva e sem enrolação;</li>
              <li>
                No último evento, 72% do conteúdo abordado caiu na prova
              </li>
            </ul>
            <RedirectLink
              sx={{
                width: { xs: "100%", md: "300px" },
                marginBottom: { xs: "20px" },
                md: 0,
              }}
              href={"https://conteudo.meucurso.com.br/oab-1-fase-meucurso"}
              target="_blank"
            >
              Quero participar!
            </RedirectLink>
          </LeftGrid>
          <RightGrid
            item
            xs={12}
            md={6}
            my={"auto"}
            mx={"auto"}
            sx={{ pt: { xs: 5, md: 0 } }}
          >
            <Image
              priority
              src="/logofdg.png"
              width={800}
              height={300}
              alt="logo"
              style={{ width: "100%", height: "auto" }}
            />
          </RightGrid>
        </Grid>
      </Container>
    </Container>
  );
}
