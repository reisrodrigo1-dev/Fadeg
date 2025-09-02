import ShopLayout1 from "components/layouts/ShopLayout1";
import { Box, Grid, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import SEO from "components/SEO";

import { H1 } from "components/Typography";
import Image from "next/image";

const Sobre = (props) => {
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
          title="Quem somos"
          sitename="MeuCurso - Do seu jeito.  No seu tempo."
        />
        <Container maxWidth="xl" disableGutters={true}>
          <Container>
            <Grid container spacing={2} marginTop={5}>
              <Grid item md={7}>
                <Box textAlign={{ xs: "center", lg: "justify" }}>
                  <h1 style={{ color: "#D01212" }}>Quem somos</h1>
                  <p>
                    Meu Curso Inteligência e Tecnologia Educacional surgiu
                    da longa experiência de coordenação pedagógica dos
                    professores Marco Antonio Araujo Jr., Darlan Barroso e
                    da executiva de marketing Malu Mortari, obtida por mais
                    de 18 anos em diferentes Instituições de Ensino. O ano
                    era 2018 e juntos deram início a um projeto
                    transformador em suas vidas com o lançamento da
                    empresa.
                  </p>
                  <p>
                    Meu Curso desenvolveu a metodologia BIPE, um ambiente
                    virtual que transforma o aprendizado em uma experiência
                    prazerosa, interativa e sistêmica, sendo uma das mais
                    atuais no mercado de educação digital. Permite que o
                    aluno personalize seus estudos de acordo com suas
                    demandas pessoais.
                  </p>
                  <p>
                    A sede do MeuCurso em São Paulo, possui estúdios com
                    aulas presenciais em uma estrutura descontraída e
                    acolhedora. O time de professores capacitados e
                    reconhecidos em cada área completa a experiência do
                    aluno, tanto no modelo digital como no presencial.
                  </p>
                </Box>
              </Grid>
              <Grid display={"flex"} alignItems={"center"} item md={5}>
                <Image
                  style={{ maxWidth: "100%", height: "auto" }}
                  width={479}
                  height={335}
                  src="/assets/images/Bipe/socios_1.webp"
                  alt="socios"
                />
              </Grid>
              <Grid my={5} item display={"flex"}>
                <Image
                  style={{ maxWidth: "100%", height: "auto" }}
                  width={1200}
                  height={198}
                  src="/assets/images/Bipe/sede_1.webp"
                  alt="sede"
                />
              </Grid>
              <Grid item md={12}>
                <h3>O nosso propósito</h3>
                <p>
                  Nós do MeuCurso acreditamos que cada aluno merece um
                  ensino personalizado e que o tempo dedicado a novos
                  aprendizados seja uma experiência prazerosa, interativa e
                  sistêmica. Desenvolvemos uma plataforma virtual
                  diferenciada, que evolui a cada dia para motivar,
                  incentivar e desafiar o aluno a aprofundar seu
                  conhecimento. O conceito Rota de Estudos é a trajetória
                  do aluno para uma formação ampla com a revisão do que foi
                  estudado, por meio de elementos pedagógicos de vídeo,
                  áudio, imagens e games.
                </p>
              </Grid>
            </Grid>
            <hr />
          </Container>
          <Container>
            <Grid container spacing={5} marginTop={5}>
              <Grid item md={4} textAlign={"center"}>
                <Image
                  width={114}
                  height={117}
                  style={{ maxWidth: "100%", height: "auto" }}
                  src="/assets/images/Bipe/ico_missao.webp"
                  alt="icone foguete simbolizando a missão"
                />
                <h3>Missão</h3>
                <p>
                  Proporcionar uma rota de sucesso com aprendizagem
                  personalizada, disruptiva e criativa
                </p>
              </Grid>
              <Grid item md={4} textAlign={"center"}>
                <Image
                  width={131}
                  height={120}
                  style={{ maxWidth: "100%", height: "auto" }}
                  src="/assets/images/Bipe/ico_visao.webp"
                  alt="icone coração simbolizando a visão"
                />
                <h3>Visão</h3>
                <p>
                  Ter 1.000.000 de fãs, alunos, embaixadores e
                  colaboradores
                </p>
              </Grid>
              <Grid item md={4} textAlign={"center"}>
                <Image
                  width={122}
                  height={114}
                  style={{ maxWidth: "100%", height: "auto" }}
                  src="/assets/images/Bipe/ico_valores.webp"
                  alt="icone diamante simbolizando os valores"
                />
                <h3>Valores</h3>
                <p>
                  Somos parte do Meu, do Seu e do Nosso Curso. Proporcionar
                  uma experiência incrível ao aluno, superando
                  expectativas. Comunicação transparente e comportamento
                  ético. Onde há confianca, há tolerância. Tecnologia,
                  inovação e inteligência em educação estão no nosso DNA.
                </p>
              </Grid>
            </Grid>
            <hr />
          </Container>
          <Container>
            <Grid container spacing={5} my={5}>
              <Grid item md={12}>
                <h1>Onde estamos</h1>
                <p>
                  A sede do MeuCurso está localizada no coração de São
                  Paulo, a uma quadra da Avenida Paulista, e foi preparada
                  para que nosso aluno presencial,nosso aluno visitante e
                  nosso aluno online perceba que, além da alta qualidade do
                  conteúdo programático, da alta performance na didática,
                  dos professores que são referência em suas áreas, também
                  existe um time de colaboradores dedicados para que o
                  aluno sinta-se acolhido em vários canais virtuais ou
                  presencialmente nesse momento especial, quando estão no
                  preparo de uma nova fase em suas vidas profissionais.
                </p>
                <p>
                  <strong>R. Luís Coelho, 340 - Consolação </strong>
                </p>
                <p style={{ lineHeight: "0" }}>
                  300 metros das estações Consolação na linha verde e
                  Paulista da linha amarela do metrô.
                </p>
                <iframe
                  style={{ border: "none", borderRadius: "10px" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3577679370014!2d-46.662705623868916!3d-23.55559086138178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583297128f69%3A0x1e871cb73adcbd89!2zUi4gTHXDrXMgQ29lbGhvLCAzNDAgLSBDb25zb2xhw6fDo28sIFPDo28gUGF1bG8gLSBTUCwgMDEzMDktMDAx!5e0!3m2!1spt-BR!2sbr!4v1691690013810!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  loading="lazy"
                ></iframe>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </ShopLayout1>
    </>
  );
};
export default Sobre;
