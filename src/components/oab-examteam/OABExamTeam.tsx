import { Box, Container, Grid } from "@mui/material";
import { H3, H4, Span } from "components/Typography";
import { teachers } from "data/teachers";
import Image from "next/image";

const OABExamTeam = () => {
  return (
    <div>
      <Container>
        <Grid container textAlign={"center"}>
          <Grid item md={12}>
            <h1>
              Time Exame de Ordem <Span color="#D01212">MeuCurso</Span>
            </h1>
            <p>
              Temos os melhores professores do mercado! Aqui nós
              valorizamos a didática objetiva, clara e que funciona.
            </p>
            <p>
              O seu tempo é valioso para nós. Aprenda com quem é
              referência:
            </p>
          </Grid>
          <Grid container textAlign={"center"} spacing={2} marginY={3}>
            {teachers.map((teacher) => (
              <Grid marginX={"auto"} item key={teacher.id} md={2}>
                <Box mx={"auto"}>
                  <Image
                    width={120}
                    height={120}
                    src={teacher.image}
                    alt={teacher.instagram}
                  />
                </Box>

                <strong>{teacher.instagram}</strong>
                <H4 sx={{ color: "#D01212" }}>{teacher.area}</H4>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default OABExamTeam;
