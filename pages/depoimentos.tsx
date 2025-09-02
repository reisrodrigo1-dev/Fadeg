import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Grid, useTheme, styled, Paper } from "@mui/material";
import { Container } from "@mui/system";

import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";

import SEO from "components/SEO";
import { H2, H3, Paragraph } from "components/Typography";
import Image from "next/image";

const Depoimentos = (props) => {
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

  const StyledGrid = styled(Grid)({
    backgroundColor: "#fff",
    borderRadius: "10px",
  });

  return (
    <>
      <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
        <SEO
          title="Depoimentos"
          sitename="MeuCurso - Do seu jeito.  No seu tempo."
        />
        <Container maxWidth="xl" disableGutters={true}>
          <Container>
            <Grid container spacing={5} marginTop={0}>
              <Grid item md={9}>
                <Box textAlign={{ xs: "center", lg: "start" }}>
                  <h1 style={{ color: "#D01212" }}>Depoimentos</h1>
                  <Paragraph textAlign={"justify"} my={3}>
                    Nós sempre gostamos de receber o feedback dos nossos
                    #Bipelovers, quanto mais vocês compartilham suas
                    experiências, mais nos motivamos a melhorar nossos
                    serviços para vocês!
                  </Paragraph>
                  <Paragraph
                    fontWeight={"bolder"}
                    textAlign={"justify"}
                    my={3}
                  >
                    Seguimos em busca dos nossos 1.000.000 de fãs!.
                  </Paragraph>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image
                  width={222}
                  height={199}
                  src="/assets/images/Bipe/bipe_depoimentos.webp"
                  alt="icone do bipe brasileiro"
                />
              </Grid>
            </Grid>
            <Grid container>
              {depoiments.map((item, index) => (
                <Grid
                  key={index}
                  p={5}
                  my={5}
                  textAlign={"center"}
                  item
                  xs={12}
                  md={4}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "50px",
                      height: "420px",
                      position: "relative",
                    }}
                  >
                    <Image
                      width={120}
                      height={120}
                      src={item.img}
                      alt={item.name}
                    />
                    <Paragraph>{item.text}</Paragraph>
                    <Paragraph
                      sx={{
                        position: "absolute",
                        bottom: "8px",
                        right: "0",
                        left: "0",
                        margin: "0 auto",
                      }}
                      fontWeight={"bolder"}
                      mt={5}
                    >
                      {item.name}
                    </Paragraph>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </ShopLayout1>
    </>
  );
};

const depoiments = [
  {
    img: "/assets/images/Bipe/depoiments_1.png",
    text: "Queridos ♥️ Sempre se atualizando para oferecer o melhor do melhor ♥️",
    name: "Vanessa Netto | @van.netto",
  },
  {
    img: "/assets/images/Bipe/depoiments_2.png",
    text: "Muito bom, conseguir recalcular toda minha rota me fez voltar a rotina de estudos com mais determinação e foco! Amei as novidades!",
    name: "Thamirys Calandro | @thamiscalandro",
  },
  {
    img: "/assets/images/Bipe/depoiments_3.png",
    text: "O melhor! O ambiente físico super acolhedor, aulas on-line totalmente direcionadas, feedback dos professores, simulados padrões da FGV! Não me arrependo em nada na escolha ????.",
    name: "Mykarla Francyelli | @mykarlafrancyelli",
  },
  {
    img: "/assets/images/Bipe/depoiments_4.png",
    text: "Fiz Meu Curso na segunda fase No começo parecia que estavam falando em Grego ai com os dias fui entendo cada fez mais e consegui aprovação e o melhor de tudo que fui aprovado de primeira.",
    name: "Alexandre A Brollo | @alexandreabrollo",
  },
  {
    img: "/assets/images/Bipe/depoiments_5.png",
    text: "Que time lindo e amoroso! Obrigada professores! Obrigada 51 vezes! Obrigada 51 acertos! Se eu não tivesse passado, faria mil vezes o curso com vocês se necessário!! ",
    name: "Érika Teixeira | @erika.txra",
  },
  {
    img: "/assets/images/Bipe/depoiments_6.png",
    text: "Quando a gente pensa que não tem mais como sermos surpreendidos, vocês vem e PAAAAM  , nos surpreende novamente ❤️ ‘ Parabéns a toda equipe que trabalha pela desenvoltura desse curso brilhante! ",
    name: "Barbie do Direito | @barbiedodireito",
  },
  {
    img: "/assets/images/Bipe/depoiments_7.png",
    text: "Eu tb estava laaaa qnd era tudo mato ainda... rsrs ... primeira turma de segunda fase OAB... constitucional..e claro, aprovada....❤",
    name: "Carla Rangel |@carlarafaela.rangel",
  },
  {
    img: "/assets/images/Bipe/depoiments_8.png",
    text: "Profissionais extraordinários. Sou muito satisfeito pela minha escolha de estudar com Meu Curso.",
    name: "Robson Pontes Jr |@robsonpontesjr",
  },
  {
    img: "/assets/images/Bipe/depoiments_9.png",
    text: "Ótimo, adoro esse curso. Sempre atenciosos e prestativos. Obrigada pelo carinho.",
    name: "Dinorá Thynna | @dinorathynna",
  },
];
export default Depoimentos;
