import { Container, Grid, styled } from "@mui/material";
import { H2 } from "components/Typography";
import Image from "next/image";

const Images = styled(Image)({
  borderRadius: "5px",
  filter: "grayscale(1)",
  cursor: "pointer",
  transition: "0.2s",
  ":hover": {
    filter: "none",
  },
});

export default function Section11() {
  return (
    <Container sx={{ py: 8 }}>
      <Grid
        container
        spacing={5}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Grid item md={12} textAlign={"center"}>
          <H2>Aplicativos MeuCurso</H2>
        </Grid>
        <Grid item sm={12} md={6} justifyContent={"center"}>
          <a
            target="_blank"
            href="https://campanhas.meucurso.com.br/nomenalista.html"
          >
            <Images
              width={300}
              height={240}
              style={{ maxWidth: "100dvw", height: "auto" }}
              src="/icone_nomenalista.png"
              alt="icone aplicativo nomenalista"
            />
          </a>
        </Grid>
        <Grid item md={6} justifyContent={"center"}>
          <a target="_blank" href="https://www.meucurso.com.br/verticalizado">
            <Images
              width={300}
              height={240}
              style={{ maxWidth: "100dvw" }}
              src="/icone_verticalizado.png"
              alt="icone aplicativo nomenalista"
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
