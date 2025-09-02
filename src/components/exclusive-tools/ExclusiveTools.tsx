import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import { Paragraph, Span } from "components/Typography";
import Image from "next/image";

const P = styled(Paragraph)({
  textAlign: "center",
  transform: "translateY(-50px)",
  opacity: 0,
  visibility: "hidden",
  transition: "0.5s",
  height: "auto",
  maxHeight: 0,
});
const DropDown = styled(Grid)({
  cursor: "pointer",
  transition: "0.2s",
  display: "block",
  ":hover > p": {
    opacity: 1,
    transform: "translateY(0px)",
    visibility: "visible",
    maxHeight: "400px",
  },
  ":hover > .testing ": {
    transition: "0.5s",
    transform: "rotate(180deg)",
  },
});

const ExclusiveTools = () => {
  return (
    <div>
      <Container>
        <Grid
          container
          justifyContent={"center"}
          textAlign={"center"}
          py={3}
        >
          <Grid item md={12} textAlign={"center"}>
            <h1>
              Ferramentas <Span color="#D01212">Exclusivas</Span>
            </h1>
          </Grid>
          <Grid item xs={12} md={3}>
            <P>
              Nosso foco é te ajudar a conquistar a sonhada aprovação na
              OAB. Desta forma, investimos pesado todos os anos em
              tecnologia e didática. Com a plataforma B.I.P.E, você se
              preocupa apenas com estudar e fazer os exercícios, ela cuida
              da organização para você.
            </P>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/D01212/journey.png"
                  alt="journey"
                />

                <h3>Rota de Estudos</h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Uma trilha de aprendizado preparada até a sua aprovação.
                  Nossos pilares: Saber + Praticar + Revisar + Aprofundar
                  (em cada aula).
                </P>
              </DropDown>
            </Grid>

            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/D01212/planner.png"
                  alt="planner"
                />
                <h3>Planner de Estudos ou Sumário</h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Se preferir, organize e acompanhe seus estudos por um
                  Planner (cronograma) ou um Sumário (todas as aulas são
                  temáticas).
                </P>
              </DropDown>
            </Grid>
            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/dotty/50/D01212/today.png"
                  alt="today"
                />
                <h3>Calendário Personalizável </h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Você poderá personalizar seu calendário, arrastando as
                  aulas para os dias desejados e até recalcular sua rota de
                  estudos.
                </P>
              </DropDown>
            </Grid>
            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/D01212/search--v1.png"
                  alt="search--v1"
                />
                <h3>Diagnóstico Sistêmico</h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Simular a prova no formato OAB/FGV e diagnóstico
                  personalizado com a performance de disciplina e tema, com
                  gráficos e plano de estudo.
                </P>
              </DropDown>
            </Grid>
          </Grid>
          <Grid container spacing={2} marginTop={2}>
            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/D01212/literature--v1.png"
                  alt="literature--v1"
                />

                <h3>Biblioteca Virtual</h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Legislação, glossário e jurisprudência, por tema da aula.
                </P>
              </DropDown>
            </Grid>
            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/D01212/help--v1.png"
                  alt="help--v1"
                />
                <h3>Central de Dúvidas</h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Sabe aquela dúvida da aula? Disponibilizamos um canal
                  direto para você enviar a sua pergunta para nossos
                  professores! Mesmo para quem está online, estamos sempre
                  juntos.
                </P>
              </DropDown>
            </Grid>
            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/glyph-neue/64/D01212/idea--v1.png"
                  alt="idea--v1"
                />
                <h3>Ferramentas inovadoras</h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Professor virtual - em cada aula, ele falará o que você
                  precisa melhorar. Comunidade MeuCurso - conecte-se aos
                  seus amigos de rota. App MeuCurso - aplicativo exclusive
                  com o conteúdo da rota de estudos, inclusive permite
                  assistir aula off-line..
                </P>
              </DropDown>
            </Grid>
            <Grid item xs={12} md={3}>
              <DropDown>
                <Image
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/D01212/goal--v1.png"
                  alt="goal--v1"
                />
                <h3>Simulado com correção Individualizada</h3>
                <Image
                  className="testing"
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/circled-chevron-down.png"
                  alt="circled-chevron-down"
                />
                <P>
                  Simular a prova no formato OAB/FGV faz diferença na
                  evolução da performance.
                </P>
              </DropDown>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ExclusiveTools;
