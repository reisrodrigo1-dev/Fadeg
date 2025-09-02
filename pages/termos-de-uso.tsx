import ShopLayout1 from "components/layouts/ShopLayout1";
import { Box, Grid, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SEO from "components/SEO";

import { H1, Paragraph } from "components/Typography";

const TermosDeUso = () => {
  const theme = useTheme();

  return (
    <>
      <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
        <SEO
          title="Termos de Uso"
          sitename="MeuCurso - Do seu jeito.  No seu tempo."
        />
        <Container maxWidth="xl" disableGutters={true}>
          <Container>
            <Grid container spacing={2} marginTop={5}>
              <Grid item md={12}>
                <Box my={5} textAlign={{ xs: "center", lg: "start" }}>
                  <h1 style={{ color: "#D01212" }}>Termos de uso</h1>
                  <h3>
                    Política de privacidade para MEU CURSO INTELIGÊNCIA E
                    TECNOLOGIA EDUCACIONAL
                  </h3>
                  <p>
                    Todas as suas informações pessoais recolhidas, serão
                    usadas para o ajudar a tornar a sua visita no nosso
                    site o mais produtiva e agradável possível.
                  </p>
                  <p>
                    A garantia da confidencialidade dos dados pessoais dos
                    utilizadores do nosso site é importante para o MEU
                    CURSO INTELIGÊNCIA E TECNOLOGIA EDUCACIONAL.
                  </p>
                  <p>
                    Todas as informações pessoais relativas a membros,
                    assinantes, clientes ou visitantes que usem o MEU CURSO
                    INTELIGÊNCIA E TECNOLOGIA EDUCACIONAL serão tratadas em
                    concordância com a Lei da Proteção de Dados Pessoais de
                    26 de outubro de 1998 (Lei n.º 67/98).
                  </p>
                  <p>
                    A informação pessoal recolhida pode incluir o seu nome,
                    e-mail, número de telefone e/ou celular, endereço, data
                    de nascimento e/ou outros.
                  </p>
                  <p>
                    O uso do MEU CURSO INTELIGÊNCIA E TECNOLOGIA
                    EDUCACIONAL pressupõe a aceitação deste Acordo de
                    privacidade. A equipe do MEU CURSO INTELIGÊNCIA E
                    TECNOLOGIA EDUCACIONAL reserva-se ao direito de alterar
                    este acordo sem aviso prévio. Deste modo, recomendamos
                    que consulte a nossa política de privacidade com
                    regularidade de forma a estar sempre atualizado.
                  </p>
                  <p>
                    Os anúncios Tal como outros websites, coletamos e
                    utilizamos informação contida nos anúncios. A
                    informação contida nos anúncios, inclui o seu endereço
                    IP (Internet Protocol), o seu ISP (Internet Service
                    Provider, como o VIVO, CLARO, ou outro), o browser que
                    utilizou ao visitar o nosso website (como o Internet
                    Explorer ou o Firefox), o tempo da sua visita e que
                    páginas visitou dentro do nosso website.
                  </p>
                </Box>

                <hr />
                <Box my={5} textAlign={{ xs: "center", lg: "start" }}>
                  <h3>Cookie DoubleClick Dart</h3>
                  <p>
                    O Google, como fornecedor de terceiros, utiliza cookies
                    para exibir anúncios no nosso website;
                  </p>
                  <p>
                    Com o cookie DART, o Google pode exibir anúncios com
                    base nas visitas que o leitor fez a outros websites na
                    Internet;.
                  </p>
                  <p>
                    Os utilizadores podem desativar o cookie DART visitando
                    a Política de privacidade da rede de conteúdo e dos
                    anúncios do Google.
                  </p>
                  <p>
                    Os Cookies e Web Beacons Utilizamos cookies para
                    armazenar informação, tais como as suas preferências
                    pessoas quando visita o nosso website. Isto poderá
                    incluir um simples popup, ou uma ligação em vários
                    serviços que providenciamos, tais como fóruns.
                  </p>
                  <p>
                    Em adição também utilizamos publicidade de terceiros no
                    nosso website para suportar os custos de manutenção.
                    Alguns destes publicitários, poderão utilizar
                    tecnologias como os cookies e/ou web beacons quando
                    publicitam no nosso website, o que fará com que esses
                    publicitários (como o Google através do Google AdSense)
                    também recebam a sua informação pessoal, como o
                    endereço IP, o seu ISP, o seu browser, etc. Esta função
                    é geralmente utilizada para geotargeting (mostrar
                    publicidade de São Paulo apenas aos leitores oriundos
                    de São Paulo por ex.) ou apresentar publicidade
                    direcionada a um tipo de utilizador (como mostrar
                    publicidade de restaurante a um utilizador que visita
                    sites de culinária regularmente, por ex.).
                  </p>
                  <p>
                    Você detém o poder de desligar os seus cookies, nas
                    opções do seu browser, ou efetuando alterações nas
                    ferramentas de programas Anti-Virus, como o Norton
                    Internet Security. No entanto, isso poderá alterar a
                    forma como interage com o nosso website, ou outros
                    websites. Isso poderá afetar ou não permitir que faça
                    logins em programas, sites ou fóruns da nossa e de
                    outras redes.
                  </p>
                </Box>
                <hr />
                <Box my={5} textAlign={{ xs: "center", lg: "start" }}>
                  <h3>Ligações a sites de terceiros</h3>
                  <p>
                    O MEU CURSO INTELIGÊNCIA E TECNOLOGIA EDUCACIONAL
                    possui ligações para outros sites, os quais, a nosso
                    ver, podem conter informações / ferramentas úteis para
                    os nossos visitantes. A nossa política de privacidade
                    não é aplicada a sites de terceiros, pelo que, caso
                    visite outro site a partir do nosso deverá ler a
                    politica de privacidade do mesmo.
                  </p>
                  <p>
                    Não nos responsabilizamos pela política de privacidade
                    ou conteúdo presente nesses mesmos sites.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </ShopLayout1>
    </>
  );
};
export default TermosDeUso;
