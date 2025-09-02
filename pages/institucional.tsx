import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Grid, Card, CardContent, Button, Divider, useTheme } from "@mui/material";
import { Container } from "@mui/system";

import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";

import SEO from "components/SEO";
import { H1, H2, H3, Paragraph } from "components/Typography";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import ComputerIcon from "@mui/icons-material/Computer";
import PublicIcon from "@mui/icons-material/Public";

const Institucional = (props) => {
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
          title="Quem Somos"
          sitename="MeuCurso - Do seu jeito. No seu tempo."
        />
        <Container maxWidth="xl" disableGutters={true}>
          <Box
            sx={{
              background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
              py: 8,
              mb: 4,
            }}
          >
            <Container>
              <Grid container spacing={5} alignItems="center">
                <Grid item md={8} xs={12}>
                  <Box textAlign={{ xs: "center", md: "left" }}>
                    <H1 sx={{ color: theme.palette.primary.main, mb: 2 }}>Quem Somos</H1>
                    <Paragraph textAlign={{ xs: "center", md: "left" }} sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                      A FADEG – Faculdade de Direito, Educação e Gestão – é uma instituição de ensino
                      superior comprometida com a formação de profissionais éticos, inovadores e
                      preparados para transformar a sociedade. Nossa missão é oferecer uma aprendizagem
                      personalizada, com uso intensivo de tecnologia e foco no desenvolvimento humano,
                      social e profissional. Com forte atuação na Educação a Distância (EAD), somos uma
                      instituição moderna, acessível e conectada com as demandas do presente e do
                      futuro.
                    </Paragraph>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12} display="flex" justifyContent="center">
                  <Image
                    width={300}
                    height={200}
                    src="/emec.png"
                    alt="logo fadeg"
                    style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
            <Container>
              <Box display="flex" alignItems="center" mb={4}>
                <SchoolIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <H2 sx={{ color: theme.palette.primary.main }}>Sobre a FADEG</H2>
              </Box>
              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                A FADEG – Faculdade de Direito, Educação e Gestão – é uma instituição de ensino
                superior comprometida com a formação de profissionais éticos, inovadores e
                preparados para transformar a sociedade. Nossa missão é oferecer uma aprendizagem
                personalizada, com uso intensivo de tecnologia e foco no desenvolvimento humano,
                social e profissional. Com forte atuação na Educação a Distância (EAD), somos uma
                instituição moderna, acessível e conectada com as demandas do presente e do
                futuro.
              </Paragraph>
            </Container>
          </Box>

          <Box sx={{ backgroundColor: "#fff", py: 6 }}>
            <Container>
              <Box display="flex" alignItems="center" mb={4}>
                <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <H2 sx={{ color: theme.palette.primary.main }}>Por que escolher a FADEG</H2>
              </Box>
              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                Só aqui você encontra uma metodologia de ensino moderna e inovadora em conjunto
                com cursos com nota máxima do MEC e infraestrutura de padrão internacional.
              </Paragraph>
              <Grid container spacing={4} alignItems="center">
                <Grid item md={8} xs={12}>
                  <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                    Nossa instituição se destaca pela combinação de excelência acadêmica, inovação
                    tecnológica e compromisso social. Oferecemos uma formação completa que vai além
                    do conhecimento técnico, preparando profissionais para os desafios do mercado de
                    trabalho e para contribuir com a sociedade de forma ética e responsável.
                  </Paragraph>
                </Grid>
                <Grid item md={4} xs={12} display="flex" justifyContent="center">
                  <Image
                    width={256}
                    height={256}
                    src="https://fadeg.com.br/_next/image?url=%2Fmec.png&w=256&q=75"
                    alt="nota máxima mec"
                    style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
            <Container>
              <Box display="flex" alignItems="center" mb={4}>
                <PeopleIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <H2 sx={{ color: theme.palette.primary.main }}>Conheça nosso propósito</H2>
              </Box>

              <Grid container spacing={4}>
                <Grid item md={4} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <SchoolIcon sx={{ fontSize: 30, color: theme.palette.primary.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Missão</H3>
                      </Box>
                      <Paragraph textAlign="justify">
                        Ser referência em Direito, Educação e Gestão, formando profissionais
                        comprometidos com a ética, a inovação e a responsabilidade social, por meio de uma
                        aprendizagem personalizada e disruptiva.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <PublicIcon sx={{ fontSize: 30, color: theme.palette.secondary.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Visão</H3>
                      </Box>
                      <Paragraph textAlign="justify">
                        Tornar-se uma das principais instituições de ensino superior do país, promovendo
                        transformação por meio de métodos inovadores e com alta performance acadêmica.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <StarIcon sx={{ fontSize: 30, color: theme.palette.success.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Valores</H3>
                      </Box>
                      <ul style={{ paddingLeft: "20px" }}>
                        <li>Ética e respeito à diversidade</li>
                        <li>Confiança e responsabilidade</li>
                        <li>Inclusão e acessibilidade</li>
                        <li>Inovação tecnológica</li>
                        <li>Compromisso com a qualidade</li>
                        <li>Engajamento comunitário</li>
                      </ul>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Box py={5}>
                <H3 sx={{ mb: 3 }}>Links Úteis</H3>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Button variant="contained" fullWidth href="/processo-seletivo">
                      Processo Seletivo
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button variant="outlined" fullWidth href="/">
                      Cursos
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button variant="outlined" fullWidth href="https://blog.meucurso.com.br/" target="_blank">
                      Notícias
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Container>
      </ShopLayout1>
    </>
  );
};

export default Institucional;
