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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
                <H2 sx={{ color: theme.palette.primary.main }}>Canais de Atendimento</H2>
              </Box>
              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                Oferecemos diversos canais de comunicação para facilitar o seu contato com a FADEG.
                Escolha a opção mais conveniente para você e nossa equipe estará pronta para atendê-lo.
              </Paragraph>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <PhoneIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
                      <H3>Telefone</H3>
                      <Paragraph sx={{ mb: 2 }}>(11) 99999-9999</Paragraph>
                      <Paragraph sx={{ fontSize: "0.9rem", color: theme.palette.grey[600] }}>
                        Atendimento de segunda a sexta-feira, das 8h às 18h
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <WhatsAppIcon sx={{ fontSize: 50, color: theme.palette.success.main, mb: 2 }} />
                      <H3>WhatsApp</H3>
                      <Paragraph sx={{ mb: 2 }}>(11) 99999-9999</Paragraph>
                      <Paragraph sx={{ fontSize: "0.9rem", color: theme.palette.grey[600] }}>
                        Atendimento rápido e direto
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <EmailIcon sx={{ fontSize: 50, color: theme.palette.secondary.main, mb: 2 }} />
                      <H3>E-mail</H3>
                      <Paragraph sx={{ mb: 2 }}>contato@fadeg.com.br</Paragraph>
                      <Paragraph sx={{ fontSize: "0.9rem", color: theme.palette.grey[600] }}>
                        Resposta em até 24 horas úteis
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <LocationOnIcon sx={{ fontSize: 50, color: theme.palette.warning.main, mb: 2 }} />
                      <H3>Endereço</H3>
                      <Paragraph sx={{ mb: 2 }}>
                        Rua das Faculdades, 123<br />
                        Centro - São Paulo/SP<br />
                        CEP: 01234-567
                      </Paragraph>
                      <Paragraph sx={{ fontSize: "0.9rem", color: theme.palette.grey[600] }}>
                        Próximo ao metrô República
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box sx={{ backgroundColor: "#fff", py: 6 }}>
            <Container>
              <Box display="flex" alignItems="center" mb={4}>
                <AccessTimeIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <H2 sx={{ color: theme.palette.primary.main }}>Horário de Atendimento</H2>
              </Box>

              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <H3 sx={{ mb: 2 }}>Secretaria Acadêmica</H3>
                      <Paragraph>
                        <strong>Segunda a Sexta-feira:</strong> 8h às 18h<br />
                        <strong>Sábado:</strong> 8h às 12h<br />
                        <strong>Domingo:</strong> Fechado
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <H3 sx={{ mb: 2 }}>Atendimento Online</H3>
                      <Paragraph>
                        <strong>Segunda a Sexta-feira:</strong> 8h às 20h<br />
                        <strong>Sábado:</strong> 9h às 15h<br />
                        <strong>Domingo:</strong> 10h às 14h
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={12} xs={12}>
                  <Card sx={{ boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <H3 sx={{ mb: 2 }}>Informações Importantes</H3>
                      <Paragraph textAlign="justify">
                        Para dúvidas sobre matrículas, processos seletivos e informações acadêmicas,
                        entre em contato conosco pelos canais disponíveis. Nossa equipe está preparada
                        para esclarecer todas as suas dúvidas e fornecer orientações completas sobre
                        nossos cursos de graduação em Direito e Gestão Pública.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Box py={5}>
                <H3 sx={{ mb: 3 }}>Redes Sociais</H3>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      href="https://www.instagram.com/fadegoficial"
                      target="_blank"
                      sx={{ backgroundColor: '#E4405F', '&:hover': { backgroundColor: '#D1384A' } }}
                    >
                      Siga-nos no Instagram: @fadegoficial
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

export default Contato;
