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

const PoliticaDePrivacidade = (props) => {
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
          title="Política de Privacidade"
          sitename="MeuCurso - Do seu jeito.  No seu tempo."
        />
        <Container maxWidth="xl" disableGutters={true}>
          <Container>
            <Grid container spacing={2} marginTop={5}>
              <Grid item md={8}>
                <Box textAlign={{ xs: "center", lg: "start" }}>
                  <h1 style={{ color: "#D01212" }}>
                    Política de Privacidade
                  </h1>
                  <p>
                    Para oferecer a melhor experiência em nossa plataforma
                    precisamos coletar e tratar alguns dos seus dados, mas
                    nos preocupando com a sua privacidade desenvolvemos
                    esta Política para explicar de modo fácil e objetivo
                    como acontecerá esse processo e quais são os seus
                    direitos, já cotejados segundo o Marco Civil da
                    Internet e à Lei Geral de Proteção de Dados - LGPD.
                  </p>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Image
                  width="340"
                  height="167"
                  src="/assets/images/Bipe/security.webp"
                  alt="bipe"
                />
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ backgroundColor: "#fff" }}>
            <Container>
              <Grid
                py={5}
                my={5}
                container
                spacing={2}
                justifyContent={"center"}
              >
                <Grid item md={12} textAlign={"start"}>
                  <h1 style={{ color: "#D01212" }}>
                    Definições da Política de Privacidade
                  </h1>
                </Grid>
                <Grid item md={4} textAlign={"center"}>
                  <Image
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/D01212/lock.png"
                    alt="lock"
                  />
                  <h3>O que são Bases Legais?</h3>
                  <p>
                    Estão descritas nos artigos 7º e 11º da LGPD, sendo
                    situações em que a lei permite que sejam tratados os
                    dados pessoais dos usuários
                  </p>
                </Grid>
                <Grid item md={4} textAlign={"center"}>
                  <Image
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/D01212/lock.png"
                    alt="lock"
                  />
                  <h3>Quem é o Controlador?</h3>
                  <p>
                    É a pessoa (natural ou jurídica) que tem o poder de
                    decisão sobre o processo de tratamento dos dados
                    pessoais
                  </p>
                </Grid>
                <Grid item md={4} textAlign={"center"}>
                  <Image
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/D01212/lock.png"
                    alt="lock"
                  />
                  <h3>Quais dados são pessoais?</h3>
                  <p>
                    É a pessoa (natural ou jurídica) que tem o poder de
                    decisão sobre o processo de tratamento dos dados
                    pessoais
                  </p>
                </Grid>
              </Grid>
              <Grid
                py={5}
                my={5}
                container
                spacing={2}
                justifyContent={"center"}
              >
                <Grid item md={4} textAlign={"center"}>
                  <Image
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/D01212/lock.png"
                    alt="lock"
                  />
                  <h3>Quais são as finalidades do Tratamento de Dados?</h3>
                  <p>
                    As finalidades são específicas e estão informadas em
                    tópico específico desta Política de Privacidade.
                  </p>
                </Grid>
                <Grid item md={4} textAlign={"center"}>
                  <Image
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/D01212/lock.png"
                    alt="lock"
                  />
                  <h3>O que é a Política de Privacidade?</h3>
                  <p>
                    Este documento, explicando aos usuários quais são os
                    dados pessoais que o MeuCurso precisa coletar e como
                    fará isso da forma mais adequada e necessária possível
                  </p>
                </Grid>
                <Grid item md={4} textAlign={"center"}>
                  <Image
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/D01212/lock.png"
                    alt="lock"
                  />
                  <h3>Quem são os usuários?</h3>
                  <p>
                    Todos os que acessarem a Plataforma do MeuCurso, com a
                    intenção ou não de adquirir produto ou contratar algum
                    serviço.
                  </p>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container>
            <Box display={"flex"}>
              <Image
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/D01212/faq.png"
                alt="faq"
              />
              <H1 ml={3}>Perguntas frequentes</H1>
            </Box>
            <Box my={3} py={5}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    QUAIS SÃO OS DADOS COLETADOS E PARA QUAIS FINALIDADES?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Para conferir ao usuário a melhor experiência possível
                    na nossa Plataforma será necessário que sejam coletadas
                    informações sobre o usuário. Com a finalidade de
                    identificar os usuários e a modalidade de serviço a ser
                    prestado e/ou produto a ser fornecido, coletamos os
                    dados cadastrais como nome, RG, CPF, Data de
                    nascimento, estado civil, sexo, endereço, naturalidade,
                    email, foto e telefone. Para viabilizar os pagamentos,
                    transações financeiras e emissão de notas fiscais,
                    precisamos do seu nome, CPF, dados do seu cartão e do
                    seu endereço aonde a cobrança deve ser direcionada. Com
                    a intenção de cumprir obrigações legais, regulamentares
                    e regulatórias, o MeuCurso pode ter acesso aos seus
                    dados de identificação digital (IP, tipo de versão do
                    navegador e versão do sistema operacional, além de
                    informações de geolocalização).
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    QUAIS SÃO OS MEUS DIREITOS COMO USUÁRIO?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      - Acessar os dados pessoais que sejam de sua
                      titularidade;
                    </p>
                    <p>
                      - Solicitar a correção dos dados que estejam
                      desatualizados, inexatos ou incompletos;
                    </p>
                    <p>
                      - Portabilidade dos dados para outros fornecedores de
                      produtos e/ou de serviços;
                    </p>
                    <p>
                      - Informação sobre o compartilhamento dos seus dados
                      pessoais com terceiros;
                    </p>
                    <p>
                      - A eliminação dos seus dados pessoais, nos termos já
                      explicados acima.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    QUEM PODE TER ACESSO AOS MEUS DADOS?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    O MeuCurso poderá compartilhar os seus dados a fim de
                    te oferecer a melhor experiência e os melhores produtos
                    de acordo com o seu perfil. Assim, os dados podem ser
                    compartilhados com empresas ou prestadoras de serviços
                    específicos para o MeuCurso, com as empresas
                    pertencentes ao mesmo grupo do MeuCurso, além das
                    autoridades (nos casos de obrigação legal e
                    determinação judicial). Do mesmo modo que o MeuCurso
                    preza pelos seus direitos, os terceiros que tiverem
                    acesso os utilizarão apenas e tão somente com
                    finalidades específicas, ficando vedado
                    compartilhamento com outros terceiros.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    O QUE EU ESTOU AUTORIZANDO?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Ao concordar com esta Política de Privacidade, o
                    usuário está de acordo e dá o seu expresso e inequívoco
                    consentimento, para que o MeuCurso:O MeuCurso poderá
                    compartilhar os seus dados a fim de te oferecer a
                    melhor experiência e os melhores produtos de acordo com
                    o seu perfil. Assim, os dados podem ser compartilhados
                    com empresas ou prestadoras de serviços específicos
                    para o MeuCurso, com as empresas pertencentes ao mesmo
                    grupo do MeuCurso, além das autoridades (nos casos de
                    obrigação legal e determinação judicial). Do mesmo modo
                    que o MeuCurso preza pelos seus direitos, os terceiros
                    que tiverem acesso os utilizarão apenas e tão somente
                    com finalidades específicas, ficando vedado
                    compartilhamento com outros terceiros.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    POR QUANTO TEMPO OS MEUS DADOS PERMANECERÃO EM
                    TRATAMENTO?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      {" "}
                      - Tempo necessário para cumprir obrigações legais,
                      regulatórias e regulamentares;
                    </p>
                    <p>
                      {" "}
                      - Tempo para a execução completa dos serviços
                      contratados;
                    </p>
                    <p>
                      {" "}
                      - Tempo para a prestação de contas ou requisição da
                      autoridade competente.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    OS MEUS DADOS ESTÃO SEGUROS?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Sim, todos são armazenados em sistema de nuvem
                    gerenciado pelo MeuCurso ou contratados especificamente
                    para essa finalidade, estando protegidos contra
                    utilização indevida, de modo a preservar a sua
                    integridade. Ademais, o MeuCurso adota medidas de
                    segurança para proteger os seus dados. Contudo,
                    precisamos também da colaboração do usuário. Afinal, ao
                    verificar que os seus dados estão com tratamento
                    indevido, deve o usuário prontamente avisar ao MeuCurso
                    para que as medidas sejam prontamente tomadas. Além
                    disso, em caso de incidente envolvendo dados pessoais
                    dos usuários, o MeuCurso tomará as medidas necessárias
                    para mitigar os danos, além de notificar todos.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    POSSO SOLICITAR A EXCLUSÃO DOS MEUS DADOS?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Sim. Basta enviar e-mail para
                    privacidade@meucurso.com.br, então, serão excluídos os
                    dados que não forem mais necessários à prestação
                    completa e efetiva deste serviço. Neste caso, serão
                    mantidos apenas os dados estritamente necessários ao
                    cumprimento dos deveres legal, regulatório e
                    regulamentares do MeuCurso.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography sx={{ fontWeight: "bolder" }}>
                    ESTA POLÍTICA DE PRIVACIDADE SERÁ SEMPRE A MESMA?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Não. O MeuCurso poderá alterar a presente Política de
                    Privacidade a qualquer momento, a fim de satisfazer a
                    sua conformidade legal, regulamentar e regulatória,
                    devendo o Usuário se cientificar da existência ou não
                    de Política alternativa. Por fim, é necessário
                    ressaltar que esta Política será regida pelas leis
                    Brasileiras, estando os usuários desta plataforma
                    submetidos ao Foro da Comarca de São Paulo - SP, com
                    exclusão de qualquer outro, por mais privilegiado que
                    seja
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Container>
        </Container>
      </ShopLayout1>
    </>
  );
};
export default PoliticaDePrivacidade;
