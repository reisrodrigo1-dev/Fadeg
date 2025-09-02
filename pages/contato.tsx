import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Grid, Card, CardContent, Button, Divider, useTheme } from "@mui/material";
import { Container } from "@mui/system";

import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";

import SEO from "components/SEO";
import { H1, H2, H3, Paragraph } from "components/Typography";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contato = (props) => {
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
          title="Contato - FADEG"
          sitename="FADEG - Faculdade de Direito e Gestão Pública"
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
                    <H1 sx={{ color: theme.palette.primary.main, mb: 2 }}>Entre em Contato</H1>
                    <H2 sx={{ color: theme.palette.grey[800], mb: 3 }}>Estamos aqui para ajudar você</H2>
                    <Paragraph textAlign={{ xs: "center", md: "left" }} sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                      A FADEG está sempre pronta para esclarecer suas dúvidas e fornecer todas as informações
                      necessárias sobre nossos cursos, processos seletivos e serviços. Entre em contato conosco
                      através dos canais disponíveis abaixo.
                    </Paragraph>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12} display="flex" justifyContent="center">
                  <Image
                    width={300}
                    height={200}
                    src="https://fadeg.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocesso.639ceaed.png&w=750&q=75"
                    alt="contato fadeg"
                    style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box sx={{ backgroundColor: "#f9f9f9", py: 6 }}>
            <Container>
              <Box display="flex" alignItems="center" mb={4}>
                <PhoneIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <H2 sx={{ color: theme.palette.primary.main }}>Setores de Atendimento</H2>
              </Box>
              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                Conheça os setores específicos da FADEG e os canais de comunicação apropriados para cada tipo de atendimento.
                Cada setor possui especialistas preparados para oferecer o suporte necessário.
              </Paragraph>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <WhatsAppIcon sx={{ fontSize: 50, color: theme.palette.success.main, mb: 2 }} />
                      <H3>Matrículas e Processo Seletivo</H3>
                      <Paragraph sx={{ mb: 2, fontSize: "0.9rem" }}>
                        Caso deseje falar com nossos consultores sobre dúvidas no processo seletivo e realização da pré-matrícula
                      </Paragraph>
                      <Button
                        variant="contained"
                        color="success"
                        href="https://meucurso.com.br/matricula"
                        target="_blank"
                        startIcon={<WhatsAppIcon />}
                      >
                        Falar no WhatsApp
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <EmailIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
                      <H3>Secretaria</H3>
                      <Paragraph sx={{ mb: 2, fontSize: "0.9rem" }}>
                        Para dúvidas e expedição de documentos pela secretaria FADEG
                      </Paragraph>
                      <Paragraph sx={{ mb: 2, fontWeight: "bold", color: theme.palette.primary.main }}>
                        secretaria@fadeg.com.br
                      </Paragraph>
                      <Button
                        variant="contained"
                        color="primary"
                        href="mailto:secretaria@fadeg.com.br"
                      >
                        Enviar E-mail
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <WhatsAppIcon sx={{ fontSize: 50, color: theme.palette.secondary.main, mb: 2 }} />
                      <H3>Coordenação</H3>
                      <Paragraph sx={{ mb: 2, fontSize: "0.9rem" }}>
                        O Prof. Darlan Barroso, coordenador dos cursos de graduação, fica à disposição para auxiliar em dúvidas e assuntos acadêmicos.
                      </Paragraph>
                      <Button
                        variant="contained"
                        color="secondary"
                        href="https://meucurso.com.br/whatsapp-darlan"
                        target="_blank"
                        startIcon={<WhatsAppIcon />}
                      >
                        Falar com Coordenador
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <EmailIcon sx={{ fontSize: 50, color: theme.palette.warning.main, mb: 2 }} />
                      <H3>Ouvidoria</H3>
                      <Paragraph sx={{ mb: 2, fontSize: "0.9rem" }}>
                        Canal direto para denúncias, reclamações e assuntos dirigidos à ouvidoria FADEG
                      </Paragraph>
                      <Paragraph sx={{ mb: 2, fontWeight: "bold", color: theme.palette.warning.main }}>
                        ouvidoria@fadeg.com.br
                      </Paragraph>
                      <Button
                        variant="contained"
                        color="warning"
                        href="mailto:ouvidoria@fadeg.com.br"
                      >
                        Enviar Denúncia
                      </Button>
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

export default Contato;
