import styled from "@emotion/styled";
import {
  Diversity3,
  FolderCopy,
  Groups3,
  PsychologyAlt,
} from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import { H2, H3, Paragraph, Span } from "components/Typography";

const TenMotives = () => {
  const motives = [
    {
      id: 1,
      icone: <Groups3 sx={{ fontSize: "50px", color: "#FF9900" }} />,
      title: "Corpo docente",
      paragraph: "Aprenda com juízes, promotores e referencias na área",
    },
    {
      id: 2,
      icone: <PsychologyAlt sx={{ fontSize: "50px", color: "#FF9900" }} />,
      title: "Central de Dúvidas",
      paragraph:
        "O BIPE disponibiliza os principais julgados e artigos trazidos pelos professores e ex alunos",
    },
    {
      id: 3,
      icone: <Diversity3 sx={{ fontSize: "50px", color: "#FF9900" }} />,
      title: "Comunidade",
      paragraph: "Mais De 550 mil alunos ! Venha fazer parte dessa famíla",
    },
    {
      id: 4,
      icone: <FolderCopy sx={{ fontSize: "50px", color: "#FF9900" }} />,
      title: "Conteúdo ",
      paragraph:
        "Pensado especialmente para elevar sua carreira para outro nível",
    },
  ];
  return (
    <div>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ backgroundColor: "#1A3861", my: 2 }}
      >
        <Container>
          <Grid py={8} container justifyContent={"center"}>
            <Grid item xs={12} md={12}>
              <H2
                color={"white"}
                sx={{
                  fontSize: { xs: "25px", md: "35px" },
                }}
              >
                Escolha o MC
              </H2>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              textAlign={"center"}
              spacing={2}
              marginTop={2}
            >
              {motives.map((motive) => (
                <Grid item xs={12} md={3} key={motive.id}>
                  <>
                    {motive.icone}
                    <H3 textAlign={"center"} color={"white"}>
                      {motive.title}
                    </H3>
                    <Paragraph textAlign={"center"} color={"white"}>
                      {motive.paragraph}
                    </Paragraph>
                  </>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default TenMotives;
