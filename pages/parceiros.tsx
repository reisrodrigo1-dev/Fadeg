import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Grid, useTheme } from "@mui/material";
import { Container } from "@mui/system";

import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";

import SEO from "components/SEO";
import { H2, H3, Paragraph } from "components/Typography";
import Image from "next/image";

const Parceiros = (props) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

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
          title="Parceiros"
          sitename="MeuCurso - Do seu jeito.  No seu tempo."
        />
        <Container maxWidth="xl" disableGutters={true}>
          <Container>
            <Grid container spacing={5} marginTop={0}>
              <Grid item md={9} py={5}>
                <Box textAlign={{ xs: "center", lg: "start" }}>
                  <h1 style={{ color: "#D01212" }}>Parceiros</h1>
                  <Paragraph textAlign={"justify"} my={3}>
                    Temos o orgulho de ser parceiros de inúmeras
                    Instituições de Ensino, Associações, Diretórios
                    Acadêmicos e Atléticas, entre outros.
                  </Paragraph>
                  <Paragraph textAlign={"justify"} my={3}>
                    Ser parceiro MeuCurso traz inúmeros benefícios. Dentre
                    eles:
                  </Paragraph>
                  <Paragraph>
                    - Eventos e cursos exclusivos com certificado de horas;{" "}
                  </Paragraph>
                  <Paragraph>- Patrocínio financeiro; </Paragraph>
                  <Paragraph>
                    - Simulados, Bolsas de Estudos e muito mais!{" "}
                  </Paragraph>
                </Box>
              </Grid>
              <Grid item md={3} display={"flex"} alignItems={"center"}>
                <Image
                  width={293}
                  height={197}
                  src="/assets/images/Bipe/brasil_bipe.webp"
                  alt="icone do bipe brasileiro"
                />
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ backgroundColor: "#fff" }}>
            <Container>
              <Box display={"flex"} alignItems={"center"} py={2}>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/glyph-neue/64/D01212/handshake.png"
                  alt="handshake"
                />
                <H2 ml={3}>INSTITUIÇÕES DE ENSINO</H2>
              </Box>
              <Grid py={5} my={5} container spacing={2}>
                {partners
                  .filter((item) => item.partnerId === 1)
                  .map((item, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      md={3}
                      mx={"auto"}
                      textAlign={"center"}
                    >
                      <Image
                        width={263}
                        height={177}
                        quality={60}
                        src={item.img}
                        alt="new-post"
                      />
                      <Paragraph sx={{ fontWeight: "bolder" }}>
                        {item.name}
                      </Paragraph>
                    </Grid>
                  ))}
              </Grid>
              <Box display={"flex"} alignItems={"center"} py={2}>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/glyph-neue/64/D01212/handshake.png"
                  alt="handshake"
                />
                <H2 ml={3}>ASSOCIAÇÕES</H2>
              </Box>
              <Grid py={5} my={5} container spacing={2}>
                {partners
                  .filter((item) => item.partnerId === 2)
                  .map((item, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      md={3}
                      textAlign={"center"}
                      mx={"auto"}
                    >
                      <Image
                        width={263}
                        height={177}
                        src={item.img}
                        alt="new-post"
                      />
                      <Paragraph sx={{ fontWeight: "bolder" }}>
                        {item.name}
                      </Paragraph>
                    </Grid>
                  ))}
              </Grid>
              <Box display={"flex"} alignItems={"center"} py={2}>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/glyph-neue/64/D01212/handshake.png"
                  alt="handshake"
                />
                <H2 ml={3}>DIRETÓRIOS ACADÊMICOS E ATLÉTICAS</H2>
              </Box>
              <Grid py={5} my={5} container spacing={2}>
                {partners
                  .filter((item) => item.partnerId === 3)
                  .map((item, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      md={3}
                      textAlign={"center"}
                    >
                      <Image
                        width={263}
                        quality={10}
                        height={177}
                        loading="lazy"
                        src={item.img}
                        alt="new-post"
                      />
                      <Paragraph sx={{ fontWeight: "bolder" }}>
                        {item.name}
                      </Paragraph>
                    </Grid>
                  ))}
              </Grid>
              <Box display={"flex"} alignItems={"center"} py={2}>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/glyph-neue/64/D01212/handshake.png"
                  alt="handshake"
                />
                <H2 ml={3}>ESCRITÓRIOS</H2>
              </Box>
              <Grid py={5} my={5} container spacing={2}>
                {partners
                  .filter((item) => item.partnerId === 4)
                  .map((item, index) => (
                    <Grid
                      key={index}
                      item
                      md={6}
                      xs={12}
                      my={2}
                      mx={"auto"}
                      textAlign={"center"}
                    >
                      <Image
                        width={263}
                        height={177}
                        src={item.img}
                        alt="new-post"
                      />
                      <Paragraph sx={{ fontWeight: "bolder" }}>
                        {item.name}
                      </Paragraph>
                    </Grid>
                  ))}
              </Grid>
              <Box display={"flex"} alignItems={"center"} py={2}>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/glyph-neue/64/D01212/handshake.png"
                  alt="handshake"
                />
                <H2 ml={3}>CLUBES DE VANTAGENS</H2>
              </Box>
              <Grid
                py={5}
                my={5}
                container
                spacing={2}
                justifyContent={"center"}
              >
                {partners
                  .filter((item) => item.partnerId === 5)
                  .map((item, index) => (
                    <Grid
                      key={index}
                      mx={"auto"}
                      item
                      md={6}
                      xs={12}
                      my={2}
                      textAlign={"center"}
                    >
                      <Image
                        width={263}
                        height={177}
                        src={item.img}
                        alt="new-post"
                      />
                      <Paragraph sx={{ fontWeight: "bolder" }}>
                        {item.name}
                      </Paragraph>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </Box>
        </Container>
      </ShopLayout1>
    </>
  );
};

const partners = [
  {
    partnerId: 1,
    img: "/assets/images/Parceiros/Instituições de Ensino/1.webp",
    name: "Fundação Getúlio Vargas (FGV) Direito SP",
  },
  {
    partnerId: 1,
    img: "/assets/images/Parceiros/Instituições de Ensino/2.webp",
    name: "Universidade Tiradentes (UNIT)",
  },
  {
    partnerId: 2,
    img: "/assets/images/Parceiros/Associações/1.webp",
    name: "Associação dos Advogados de São Paulo (AASP)",
  },
  {
    partnerId: 2,
    img: "/assets/images/Parceiros/Associações/2.webp",
    name: "Associação dos Delegados do Estado de São Paulo (ADEPESP)",
  },
  {
    partnerId: 2,
    img: "/assets/images/Parceiros/Associações/3.webp",
    name: "Associação Brasileira de Mulheres de Carreiras Jurídicas  (ABMCJ) ",
  },
  {
    partnerId: 2,
    img: "/assets/images/Parceiros/Associações/4.webp",
    name: "Associação dos Oficiais de Justiça do Estado SP (AOJESP)",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/1.webp",
    name: "Atlética Rio das Cobras Faculdade de Direito Braz Cubas ",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/2.webp",
    name: "Centro Acadêmico Prof. FernandoCapez – CA Direito IX de Julho Faculdade UNINOVE",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/3.webp",
    name: "Centro Acadêmico de DireitoXI de Agosto (CADIR) Faculdade de Educação São Luís Jaboticabal",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/4.webp",
    name: "Centro Acadêmico João Mendes Júnior (CAJMJR)  Faculdade de Direito Mackenzie - SP",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/5.webp",
    name: "Centro Acadêmico da Faculdade de Direito Católica /SC",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/6.webp",
    name: "Diretório Acadêmico Carlos Alberto Bittar (DA Direito FAAP)Faculdade de Direito FAAP",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/7.webp",
    name: "Diretório Acadêmico 28 de Março – Faculdade de Direito de Franca",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/8.webp",
    name: "Diretório Acadêmico XIII de Setembro (Diretório 13) – Curso de Direito das FMU",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/9.webp",
    name: "Associação Atlética Acadêmica Patas de Aço (Atlética Direito UNIFTC)",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/10.webp",
    name: "A.A.A 22 de Agosto Faculdade de Direito da PUC -SP",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/11.webp",
    name: "Associação Atlética Acadêmica João Mendes Júnior  Faculdade de Direito Mackenzie - SP",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/12.webp",
    name: "Associação Atlética Acadêmica XX de Agosto Faculdade de Direito - SBC",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/13.webp",
    name: "Atlética do Direito UFV",
  },
  {
    partnerId: 3,
    img: "/assets/images/Parceiros/Diretórios Academicos/14.webp",
    name: "Centro acadêmico de Direito da UnP (CA.UNP)",
  },
  {
    partnerId: 4,
    img: "/assets/images/Parceiros/Escritórios/1.webp",
    name: "Lee, Brock, Camargo Advogados",
  },
  {
    partnerId: 4,
    img: "/assets/images/Parceiros/Escritórios/2.webp",
    name: "Tavares, Ragazzi e Associados",
  },

  {
    partnerId: 5,
    img: "/assets/images/Parceiros/Clube de Vantagens/1.webp",
    name: "Convênia",
  },
  {
    partnerId: 5,
    img: "/assets/images/Parceiros/Clube de Vantagens/2.webp",
    name: "Marktclub",
  },
];
export default Parceiros;
