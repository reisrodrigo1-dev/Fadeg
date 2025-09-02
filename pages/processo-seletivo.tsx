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

const ProcessoSeletivo = (props) => {
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
          title="Processo Seletivo"
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
                    <H1 sx={{ color: theme.palette.primary.main, mb: 2 }}>Processo Seletivo</H1>
                    <H2 sx={{ color: theme.palette.grey[800], mb: 3 }}>Deixe sua marca no mundo</H2>
                    <Paragraph textAlign={{ xs: "center", md: "left" }} sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                      A FADEG disponibiliza diferentes formas de ingresso na graduação, permitindo que
                      cada estudante escolha a alternativa que melhor se encaixe em seu momento de
                      vida, objetivos acadêmicos e profissionais. Nosso compromisso é oferecer
                      acessibilidade, flexibilidade e qualidade desde o primeiro passo da sua jornada
                      universitária.
                    </Paragraph>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12} display="flex" justifyContent="center">
                  <Image
                    width={300}
                    height={200}
                    src="https://fadeg.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprocesso.639ceaed.png&w=750&q=75"
                    alt="processo seletivo"
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
                <H2 sx={{ color: theme.palette.primary.main }}>Como ingressar na graduação FADEG?</H2>
              </Box>
              <Paragraph textAlign="justify" sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 4 }}>
                A FADEG disponibiliza diferentes formas de ingresso na graduação, permitindo que
                cada estudante escolha a alternativa que melhor se encaixe em seu momento de
                vida, objetivos acadêmicos e profissionais. Nosso compromisso é oferecer
                acessibilidade, flexibilidade e qualidade desde o primeiro passo da sua jornada
                universitária.
              </Paragraph>
              <H3 sx={{ mb: 3 }}>Modalidades disponíveis</H3>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <SchoolIcon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} />
                      <H3>Vestibular Tradicional</H3>
                      <Paragraph sx={{ mb: 2 }}>Prova presencial ou online para ingresso.</Paragraph>
                      <Button variant="contained" color="primary" href="https://meucurso.com.br/produto/GraduaoTcnlogoGestoPblica" target="_blank">
                        Saiba Mais
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <StarIcon sx={{ fontSize: 50, color: theme.palette.secondary.main, mb: 2 }} />
                      <H3>ENEM</H3>
                      <Paragraph sx={{ mb: 2 }}>Utilização da nota do ENEM (Em construção).</Paragraph>
                      <Button variant="outlined" disabled>
                        Em Breve
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3 }}>
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <PeopleIcon sx={{ fontSize: 50, color: theme.palette.success.main, mb: 2 }} />
                      <H3>Programa de Bolsa</H3>
                      <Paragraph sx={{ mb: 2 }}>Oportunidades de bolsas de estudo (Em construção).</Paragraph>
                      <Button variant="outlined" disabled>
                        Em Breve
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box sx={{ backgroundColor: "#fff", py: 6 }}>
            <Container>
              <Box display="flex" alignItems="center" mb={4}>
                <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <H2 sx={{ color: theme.palette.primary.main }}>Nossos Diferenciais</H2>
              </Box>

              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <SchoolIcon sx={{ fontSize: 30, color: theme.palette.primary.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Metodologia Personalizada com ROTA DE ESTUDOS®</H3>
                      </Box>
                      <Paragraph textAlign="justify">
                        A FADEG adota uma metodologia exclusiva que respeita a individualidade e o ritmo
                        de aprendizagem do aluno, com a ROTA DE ESTUDOS® — marca registrada da
                        instituição. O estudante é guiado pelos pilares Saber, Praticar, Revisar e Aprofundar,
                        em uma plataforma tecnológica (BIPE) que permite trilhas personalizadas de
                        aprendizado.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <PeopleIcon sx={{ fontSize: 30, color: theme.palette.secondary.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Formação Voltada para a Prática Profissional e Cidadã</H3>
                      </Box>
                      <Paragraph textAlign="justify">
                        Os cursos são estruturados com forte base prática, por meio de projetos
                        integradores, atividades extensionistas e o programa FADEG SOCIAL, que promove ações com
                        impacto real na comunidade. Isso proporciona ao aluno não só a formação
                        técnica, mas também o desenvolvimento de consciência cidadã e responsabilidade social.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <ComputerIcon sx={{ fontSize: 30, color: theme.palette.success.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Corpo Docente Qualificado e Atuação Multidisciplinar</H3>
                      </Box>
                      <Paragraph textAlign="justify">
                        A equipe docente da FADEG é composta por especialistas, mestres e doutores com
                        sólida experiência prática e acadêmica nas áreas de Direito e Gestão Pública,
                        muitos deles autores de obras e atuantes em órgãos de classe, como a OAB e o
                        Ministério Público. A atuação do Núcleo Docente Estruturante (NDE) garante atualização
                        constante dos conteúdos.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <PublicIcon sx={{ fontSize: 30, color: theme.palette.warning.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Plataforma BIPE: Ensino Digital com Alta Interatividade</H3>
                      </Box>
                      <Paragraph textAlign="justify">
                        A FADEG utiliza a plataforma BIPE, desenvolvida para promover um ambiente
                        virtual de aprendizagem moderno, intuitivo e interativo, que inclui aulas síncronas e
                        assíncronas, fóruns, chats, biblioteca digital e secretaria acadêmica virtual. É
                        um sistema completo, que favorece o engajamento e autonomia do aluno na
                        modalidade EAD.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Card sx={{ boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <StarIcon sx={{ fontSize: 30, color: theme.palette.info.main, mr: 2 }} />
                        <H3 sx={{ mb: 0 }}>Inclusão, Diversidade e Sustentabilidade como Princípios Ativos de Transformação Social</H3>
                      </Box>
                      <Paragraph textAlign="justify">
                        A FADEG vai além do ensino técnico: seus cursos são integrados a projetos que
                        promovem a equidade, o respeito às diferenças e o desenvolvimento sustentável. Por
                        meio de iniciativas como o FADEG Social, os estudantes vivenciam a aplicação
                        prática do conhecimento em ações voltadas à defesa dos direitos humanos, inclusão
                        de minorias, proteção ambiental e fortalecimento das comunidades locais. É a
                        formação de profissionais éticos, conscientes e preparados para transformar
                        realidades.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Box py={5}>
                <H3 sx={{ mb: 3 }}>Links Úteis</H3>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Button variant="contained" fullWidth href="https://campanhas.meucurso.com.br//Edital_FADEG_Vestibular_2025.docx" target="_blank">
                      Edital de Processo Seletivo 2025/2
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button variant="outlined" fullWidth href="https://fadeg.com.br/sobre" target="_blank">
                      Quem Somos
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button variant="outlined" fullWidth href="https://fadeg.com.br/politicas" target="_blank">
                      Cursos
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

export default ProcessoSeletivo;
