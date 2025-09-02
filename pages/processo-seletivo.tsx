import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Grid, Card, CardContent, Button, Divider, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Paper, Chip } from "@mui/material";
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from "@mui/icons-material/Description";

const ProcessoSeletivo = (props) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [openModal, setOpenModal] = useState(false);
  const [openEnemModal, setOpenEnemModal] = useState(false);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else if (width < 1200) setVisibleSlides(4);
    else setVisibleSlides(5);
  }, [width]);
  const theme = useTheme();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenEnemModal = () => {
    setOpenEnemModal(true);
  };

  const handleCloseEnemModal = () => {
    setOpenEnemModal(false);
  };

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
                    <H2 sx={{ color: theme.palette.grey[800], mb: 3 }}>Começe o seu projeto de sucesso!</H2>

                    <Paper
                      elevation={1}
                      sx={{
                        p: 3,
                        background: `linear-gradient(135deg, ${theme.palette.primary.light}10, ${theme.palette.secondary.light}5)`,
                        border: `1px solid ${theme.palette.primary.light}20`,
                        borderRadius: 2,
                        mb: 2
                      }}
                    >
                      <Box display="flex" alignItems="center" mb={2}>
                        <StarIcon sx={{ fontSize: 24, color: theme.palette.primary.main, mr: 2 }} />
                        <Paragraph sx={{ mb: 0, fontSize: "1.1rem", lineHeight: 1.6, fontWeight: 500 }}>
                          A FADEG disponibiliza duas formas de ingresso na graduação, com cursos que permitem aos alunos o estudo com flexibilidade, excelência acadêmica e foco na empregabilidade. O <strong>processo seletivo</strong> está aberto para a unidade sede da Fadeg.
                        </Paragraph>
                      </Box>
                      <Box display="flex" alignItems="center" mt={2}>
                        <CheckCircleIcon sx={{ fontSize: 20, color: theme.palette.success.main, mr: 1 }} />
                        <Paragraph sx={{ mb: 0, fontSize: "1rem", lineHeight: 1.6, fontStyle: 'italic' }}>
                          É fácil participar: Realize a pré-matricula e após acesse a área do aluno para o processo seletivo.
                        </Paragraph>
                      </Box>
                    </Paper>
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

              {/* Pré-requisitos Section */}
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  mb: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}10)`,
                  border: `1px solid ${theme.palette.primary.light}30`,
                  borderRadius: 3
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <CheckCircleIcon sx={{ fontSize: 28, color: theme.palette.primary.main, mr: 2 }} />
                  <H3 sx={{ color: theme.palette.primary.main, mb: 0, fontWeight: 600 }}>
                    Pré-requisitos para o Ingresso
                  </H3>
                </Box>

                <Box sx={{ pl: 1 }}>
                  <Box display="flex" alignItems="flex-start" mb={2}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: theme.palette.success.main, mr: 2, mt: 0.5 }} />
                    <Paragraph sx={{ mb: 0, fontSize: "1.1rem", lineHeight: 1.6 }}>
                      <strong>Ter concluído o Ensino Médio ou equivalente.</strong>
                    </Paragraph>
                  </Box>
                  <Box display="flex" alignItems="flex-start">
                    <CheckCircleIcon sx={{ fontSize: 20, color: theme.palette.success.main, mr: 2, mt: 0.5 }} />
                    <Paragraph sx={{ mb: 0, fontSize: "1.1rem", lineHeight: 1.6 }}>
                      <strong>Aprovação no processo seletivo</strong> (Vestibular ou Nota do Enem - superior a 450 pontos, dentro do prazo de 5 anos de validade).
                    </Paragraph>
                  </Box>
                </Box>
              </Paper>

              {/* Processo após pré-matrícula */}
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  mb: 4,
                  background: `linear-gradient(135deg, ${theme.palette.secondary.light}15, ${theme.palette.primary.light}10)`,
                  border: `1px solid ${theme.palette.secondary.light}30`,
                  borderRadius: 3
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <AccountCircleIcon sx={{ fontSize: 28, color: theme.palette.secondary.main, mr: 2 }} />
                  <H3 sx={{ color: theme.palette.secondary.main, mb: 0, fontWeight: 600 }}>
                    Após a Pré-matrícula
                  </H3>
                </Box>

                <Paragraph sx={{ mb: 3, fontSize: "1.1rem", lineHeight: 1.6, fontStyle: 'italic' }}>
                  Ao realizar a pré-matrícula, o candidato receberá o link para acesso à <strong>Área do Aluno</strong> para:
                </Paragraph>

                <Box sx={{ pl: 1 }}>
                  <Box display="flex" alignItems="flex-start" mb={2}>
                    <SchoolIcon sx={{ fontSize: 20, color: theme.palette.primary.main, mr: 2, mt: 0.5 }} />
                    <Paragraph sx={{ mb: 0, fontSize: "1.1rem", lineHeight: 1.6 }}>
                      Realizar a prova do vestibular ou remeter a comprovação da nota do Enem.
                    </Paragraph>
                  </Box>
                  <Box display="flex" alignItems="flex-start">
                    <DescriptionIcon sx={{ fontSize: 20, color: theme.palette.primary.main, mr: 2, mt: 0.5 }} />
                    <Paragraph sx={{ mb: 0, fontSize: "1.1rem", lineHeight: 1.6 }}>
                      Encaminhar os documentos necessários para a efetivação da matrícula, conforme Manual do Aluno.
                    </Paragraph>
                  </Box>
                </Box>
              </Paper>

              {/* Documentos necessários */}
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  mb: 4,
                  background: `linear-gradient(135deg, ${theme.palette.success.light}15, ${theme.palette.warning.light}10)`,
                  border: `1px solid ${theme.palette.success.light}30`,
                  borderRadius: 3
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <DescriptionIcon sx={{ fontSize: 28, color: theme.palette.success.main, mr: 2 }} />
                  <H3 sx={{ color: theme.palette.success.main, mb: 0, fontWeight: 600 }}>
                    Documentos Necessários
                  </H3>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Chip
                        label="a"
                        size="small"
                        sx={{
                          mr: 2,
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                      <Paragraph sx={{ mb: 0, fontSize: "1rem", lineHeight: 1.5 }}>
                        Certificado de conclusão do Ensino Médio e histórico escolar.
                      </Paragraph>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Chip
                        label="b"
                        size="small"
                        sx={{
                          mr: 2,
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                      <Paragraph sx={{ mb: 0, fontSize: "1rem", lineHeight: 1.5 }}>
                        Foto recente.
                      </Paragraph>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Chip
                        label="c"
                        size="small"
                        sx={{
                          mr: 2,
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                      <Paragraph sx={{ mb: 0, fontSize: "1rem", lineHeight: 1.5 }}>
                        Comprovante de endereço.
                      </Paragraph>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Chip
                        label="d"
                        size="small"
                        sx={{
                          mr: 2,
                          backgroundColor: theme.palette.primary.main,
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                      <Paragraph sx={{ mb: 0, fontSize: "1rem", lineHeight: 1.5 }}>
                        Comprovante de estado civil.
                      </Paragraph>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
              <H3 sx={{ mb: 3, color: theme.palette.primary.main, fontWeight: 600 }}>Modalidades disponíveis</H3>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <Card sx={{
                    height: "100%",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                    }} />
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Box sx={{
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.light,
                        display: 'inline-flex',
                        mb: 2
                      }}>
                        <SchoolIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />
                      </Box>
                      <H3 sx={{ color: theme.palette.primary.main, mb: 2 }}>Vestibular Tradicional</H3>
                      <Paragraph sx={{ mb: 3, color: theme.palette.grey[700] }}>Prova presencial ou online para ingresso.</Paragraph>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenModal}
                        sx={{
                          borderRadius: 2,
                          px: 3,
                          '&:hover': {
                            transform: 'scale(1.05)',
                            transition: 'all 0.2s ease'
                          }
                        }}
                      >
                        Saiba Mais
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card sx={{
                    height: "100%",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
                    }} />
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Box sx={{
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.secondary.light,
                        display: 'inline-flex',
                        mb: 2
                      }}>
                        <StarIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />
                      </Box>
                      <H3 sx={{ color: theme.palette.secondary.main, mb: 2 }}>ENEM</H3>
                      <Paragraph sx={{ mb: 3, color: theme.palette.grey[700] }}>Utilização da nota do ENEM para ingresso.</Paragraph>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleOpenEnemModal}
                        sx={{
                          borderRadius: 2,
                          px: 3,
                          '&:hover': {
                            transform: 'scale(1.05)',
                            transition: 'all 0.2s ease'
                          }
                        }}
                      >
                        Saiba Mais
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12} sx={{ display: 'none' }}>
                  <Card sx={{
                    height: "100%",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.light})`
                    }} />
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Box sx={{
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.success.light,
                        display: 'inline-flex',
                        mb: 2
                      }}>
                        <PeopleIcon sx={{ fontSize: 50, color: theme.palette.success.main }} />
                      </Box>
                      <H3 sx={{ color: theme.palette.success.main, mb: 2 }}>Programa de Bolsa</H3>
                      <Paragraph sx={{ mb: 3, color: theme.palette.grey[700] }}>Oportunidades de bolsas de estudo (Em construção).</Paragraph>
                      <Button
                        variant="outlined"
                        disabled
                        sx={{
                          borderRadius: 2,
                          px: 3
                        }}
                      >
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
                  <Card sx={{
                    height: "100%",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                    }} />
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.light,
                          mr: 2
                        }}>
                          <SchoolIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
                        </Box>
                        <H3 sx={{ mb: 0, color: theme.palette.primary.main }}>Metodologia Personalizada com ROTA DE ESTUDOS®</H3>
                      </Box>
                      <Paragraph textAlign="justify" sx={{ color: theme.palette.grey[700] }}>
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
                  <Card sx={{
                    height: "100%",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
                    }} />
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.secondary.light,
                          mr: 2
                        }}>
                          <PeopleIcon sx={{ fontSize: 30, color: theme.palette.secondary.main }} />
                        </Box>
                        <H3 sx={{ mb: 0, color: theme.palette.secondary.main }}>Formação Voltada para a Prática Profissional e Cidadã</H3>
                      </Box>
                      <Paragraph textAlign="justify" sx={{ color: theme.palette.grey[700] }}>
                        Os cursos são estruturados com forte base prática, por meio de projetos
                        integradores, atividades extensionistas e o programa FADEG SOCIAL, que promove ações com
                        impacto real na comunidade. Isso proporciona ao aluno não só a formação
                        técnica, mas também o desenvolvimento de consciência cidadã e responsabilidade social.
                      </Paragraph>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Card sx={{
                    height: "100%",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.success.main}, ${theme.palette.success.light})`
                    }} />
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.success.light,
                          mr: 2
                        }}>
                          <ComputerIcon sx={{ fontSize: 30, color: theme.palette.success.main }} />
                        </Box>
                        <H3 sx={{ mb: 0, color: theme.palette.success.main }}>Corpo Docente Qualificado e Atuação Multidisciplinar</H3>
                      </Box>
                      <Paragraph textAlign="justify" sx={{ color: theme.palette.grey[700] }}>
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
                  <Card sx={{
                    height: "100%",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.warning.main}, ${theme.palette.warning.light})`
                    }} />
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.warning.light,
                          mr: 2
                        }}>
                          <PublicIcon sx={{ fontSize: 30, color: theme.palette.warning.main }} />
                        </Box>
                        <H3 sx={{ mb: 0, color: theme.palette.warning.main }}>Plataforma BIPE: Ensino Digital com Alta Interatividade</H3>
                      </Box>
                      <Paragraph textAlign="justify" sx={{ color: theme.palette.grey[700] }}>
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
                  <Card sx={{
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                      transition: 'all 0.3s ease'
                    },
                    borderRadius: 3,
                    overflow: 'hidden'
                  }}>
                    <Box sx={{
                      height: 4,
                      background: `linear-gradient(90deg, ${theme.palette.info.main}, ${theme.palette.info.light})`
                    }} />
                    <CardContent sx={{ p: 3 }}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Box sx={{
                          p: 1,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.info.light,
                          mr: 2
                        }}>
                          <StarIcon sx={{ fontSize: 30, color: theme.palette.info.main }} />
                        </Box>
                        <H3 sx={{ mb: 0, color: theme.palette.info.main }}>Inclusão, Diversidade e Sustentabilidade como Princípios Ativos de Transformação Social</H3>
                      </Box>
                      <Paragraph textAlign="justify" sx={{ color: theme.palette.grey[700] }}>
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

              <Divider sx={{ my: 4, borderColor: theme.palette.primary.light }} />

              <Box py={5}>
                <Box display="flex" alignItems="center" mb={3}>
                  <DescriptionIcon sx={{ fontSize: 32, color: theme.palette.primary.main, mr: 2 }} />
                  <H3 sx={{ mb: 0, color: theme.palette.primary.main }}>Links Úteis</H3>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      href="https://campanhas.meucurso.com.br/edital-fadeg.pdf"
                      target="_blank"
                      startIcon={<DescriptionIcon />}
                      sx={{
                        py: 2,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease',
                          boxShadow: 4
                        }
                      }}
                    >
                      Edital de Processo Seletivo 2025/2
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Container>

        {/* Modal do Vestibular Tradicional */}
        <Dialog open={openModal} onClose={handleCloseModal} maxWidth="md" fullWidth>
          <DialogTitle sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }}>
            Vestibular Tradicional - Informações Detalhadas
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <Paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
              Após realizar a pré-matrícula, o candidato tem até 30 dias para realizar a prova do vestibular dentro da área do aluno. Será considerado aprovado no vestibular o candidato que obtiver nota igual ou superior a 6,00 na redação.
            </Paragraph>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} variant="contained" color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>

        {/* Modal do ENEM */}
        <Dialog open={openEnemModal} onClose={handleCloseEnemModal} maxWidth="md" fullWidth>
          <DialogTitle sx={{ backgroundColor: theme.palette.secondary.main, color: 'white' }}>
            Processo Seletivo via ENEM - Informações Detalhadas
          </DialogTitle>
          <DialogContent sx={{ mt: 2 }}>
            <Paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 2 }}>
              O processo de admissão nos cursos de graduação da FADEG também poderá ocorrer, além do vestibular, por meio do aproveitamento da nota do ENEM.
            </Paragraph>
            <H3 sx={{ mb: 2 }}>Critérios:</H3>
            <Paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.6, mb: 1 }}>
              • Nota superior ou igual a 400 pontos dentro do tempo de validade do Exame.
            </Paragraph>
            <Paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
              • Para utilizar a nota do ENEM no processo seletivo realize a pré-matrícula e, na área do aluno, faça o envio do comprovante do ENEM para a validação pela secretaria.
            </Paragraph>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEnemModal} variant="contained" color="secondary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </ShopLayout1>
    </>
  );
};

export default ProcessoSeletivo;
