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
  const [showFullBio, setShowFullBio] = useState(false);

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
                      A FADEG – Faculdade de Direito, Educação e Gestão – é uma Instituição de Ensino Superior, autorizada pelo MEC (Portaria 1382/2003), mantida pelo MeuCurso Educacional.
                      Nosso compromisso é com a formação de profissionais éticos, inovadores e preparados para transformar a sociedade.
                      Nossa missão é oferecer uma aprendizagem personalizada, com uso intensivo de tecnologia e foco no desenvolvimento humano, social e profissional. Com forte atuação na Educação a Distância (EAD), somos uma Instituição moderna, acessível e conectada com as demandas do presente e do futuro.
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
                <H2 sx={{ color: theme.palette.primary.main }}>Corpo Diretivo</H2>
              </Box>

              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                A Direção da FADEG é exercida pelo Prof. Marco Antonio Araujo Junior e a coordenação dos cursos de graduação está sob o comando do Prof. Darlan Barroso.
              </Paragraph>
              {/* Cards do Corpo Diretivo */}
              <Grid container spacing={4} sx={{ mb: 4 }}>
                {/* Card do Prof. Marco Antônio */}
                <Grid item xs={12} md={6}>
                  <Card sx={{
                    height: '100%',
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                          <Box
                            sx={{
                              width: 120,
                              height: 120,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.grey[300],
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: `3px solid ${theme.palette.primary.main}`
                            }}
                          >
                            <PeopleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <H3 sx={{ color: theme.palette.primary.main, mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                            Marco Antônio
                          </H3>
                          <Paragraph sx={{ mb: 3, fontSize: "1rem", lineHeight: 1.6 }}>
                            Advogado e Mestre.
                          </Paragraph>
                          <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                   
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Card do Prof. Darlan Barroso */}
                <Grid item xs={12} md={6}>
                  <Card sx={{
                    height: '100%',
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3
                  }}>
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} md={4} display="flex" justifyContent="center">
                          <Box
                            sx={{
                              width: 120,
                              height: 120,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.grey[300],
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              border: `3px solid ${theme.palette.primary.main}`
                            }}
                          >
                            <PeopleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <H3 sx={{ color: theme.palette.primary.main, mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                            Darlan Barroso
                          </H3>
                          <Paragraph sx={{ mb: 2, fontSize: "1rem", lineHeight: 1.6 }}>
                            Advogado. Professor. Doutor em Processo Civil pela PUC/SP.
                          </Paragraph>


                          {!showFullBio && (
                            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }} mb={2}>
                              <Button
                                variant="text"
                                color="primary"
                                onClick={() => setShowFullBio(true)}
                                sx={{
                                  textTransform: 'none',
                                  fontSize: '0.9rem',
                                  '&:hover': {
                                    backgroundColor: 'transparent',
                                    textDecoration: 'underline'
                                  }
                                }}
                              >
                                Ver mais
                              </Button>
                            </Box>
                          )}
                          {showFullBio && (

                            <Paragraph sx={{ mb: 2, fontSize: "1rem", lineHeight: 1.6 }}>
                                                     Especialista em Direito Processual Civil pela PUC/SP. Co-fundador do MeuCurso Educacional, onde também é Professor de Direito Processual Civil nos cursos preparatórios para o Exame de Ordem e Concursos Públicos.
     Autor e coordenador de diversas obras jurídicas pela Editora JusPodivm. Membro do Instituto Brasileiro de Direito Processual - IBP. Presidente da Comissão de Ensino Jurídico da OAB/SP e Membro da Comissão Nacional de Educação Jurídica do Conselho Federal da OAB.
                            </Paragraph>
                          )}
                          {showFullBio && (
                            <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }} mb={2}>
                              <Button
                                variant="text"
                                color="primary"
                                onClick={() => setShowFullBio(false)}
                                sx={{
                                  textTransform: 'none',
                                  fontSize: '0.9rem',
                                  '&:hover': {
                                    backgroundColor: 'transparent',
                                    textDecoration: 'underline'
                                  }
                                }}
                              >
                                Ver menos
                              </Button>
                            </Box>
                          )}

                          <Box display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                            <Button
                              variant="outlined"
                              color="primary"
                              href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4231833Z0&tokenCaptchar=0cAFcWeA5CQXd0ENm1okhidmyt3UZf04yA5aaBC233JZi8C7G9ZM7V7VJlymymMqLaNKTyMgJ5ckzRfwEG_BlvJmUUcQZkfZ-SjO8fBfGJ6SA9C0V3k9nDgHxtznmcZEfgn1YBy3hoQaeWO9_Fg2xNAs7iWmbwDZEGEXXOFlBar5erlvsb6ppz5NXyrqLRMBRiGc8x5S9aDWX_tHb0CPGqDCqXvPDY4F7hy62fkGpy0j7gOUd1TXgHBodV_OUFiC8AFf7FtKjpd5vmoGAroNT2LFGU31Zusyqm8iD4g3bVoJNxCkSlul3MuoUVks9PBnBuzB4UQUulKjMW0q5Md3AtqN374K3S2B1UlfpFkDusyy4f_Vur4w0373DdZ9COsffpcY2nYffjKQVBXlLrj6zCiGNnt6-9XyCrfHafGurPXhQLECbI6W0uI8PdbPpgah9baVMjgxXRGTdK4XnEOVpC7aRPjasnYK5PKMpGjCM3kdH-moMBMv5G_0AEOBz8I9fAYzholBg1JZyGNxPv4G5ghheBSPJPJcd1iMmsfBucj4t34jwhMybDhoWQiCfv2B-lD8Qysi-SLtuMawla9p09Vcu5Cpcgit892PVWu6fgE2UUrCv8er1Xu4Sw8RVeETuP6S9x-1Orgu8OtF9yYYl8UNShyBI_Xqpleklzc_QpNa1vLduMF4OHoL9ZY3r_M7YPWfJkTEsqFW6qlEw_uGGkIRgGYqJDoIV75fRlfvpx5oTw_0gBCcLGAEyGcZ7DDfPjmyleEUueBS_I9MRbJX7qR76YyBNAgmoOd3oQSnqWFGq5ZL9GvjV_L0t8GWPe-riYgqKS2y2qpMT_Hps5oUpFlBv0HUTlLSNxBWrijqw-2o5bYKFpX087eSK4f5VAjIW1TNKlTxpbLtr8"
                              target="_blank"
                              startIcon={<PublicIcon />}
                              sx={{
                                borderRadius: 2,
                                '&:hover': {
                                  backgroundColor: theme.palette.primary.main,
                                  color: 'white'
                                }
                              }}
                            >
                              Ver Currículo Lattes
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>            </Container>
          </Box>

          <Box sx={{ backgroundColor: "#fff", py: 6 }}>
            <Container>
              <Box display="flex" alignItems="center" mb={4}>
                <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <H2 sx={{ color: theme.palette.primary.main }}>Por que escolher a FADEG?</H2>
              </Box>
              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                Os cursos de graduação da FADEG estão diretamente focados na empregabilidade. A formação em Gestão Pública ou em Serviços Jurídicos Notariais e de Registros visa contribuir para que o aluno possa exercer atividades como:
              </Paragraph>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    mr: 2,
                    flexShrink: 0
                  }} />
                  <Paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 0 }}>
                    Ingresso no serviço público por meio de concursos.
                  </Paragraph>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    mr: 2,
                    flexShrink: 0
                  }} />
                  <Paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 0 }}>
                    Assessoria em empresas públicas ou privadas.
                  </Paragraph>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                  <Box sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: theme.palette.primary.main,
                    mr: 2,
                    flexShrink: 0
                  }} />
                  <Paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 0 }}>
                    Atuação em órgãos públicos
                  </Paragraph>
                </Box>
              </Box>
              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                Ao cursar a graduação, de forma simultânea, o aluno FADEG já pode se preparar para concursos relevantes como o CNU, Analista dos Tribunais, Analistas Administrativos de diversos órgãos estaduais ou municipais (conteúdo bônus de preparatório para concursos).
              </Paragraph>
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

            </Container>
          </Box>
        </Container>
      </ShopLayout1>
    </>
  );
};

export default Institucional;
