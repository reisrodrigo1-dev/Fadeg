import styled from "@emotion/styled";
import { Box, Container, Grid, Chip } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import livroRetirada from "../../public/assets/livro-retirada.png";
import livroEntrega from "../../public/assets/livro-entrega.png";

interface ShippingBookProps { }

const ShippingImage = styled(Image)({
  width: "100%",
  height: "175px",
  "@media (max-width:968px)": {
    height: "100%",
  },
});

const StyledChip = styled(Chip)({
  zIndex: 1,
  top: "13px",
  right: "0px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "13px",
  position: "absolute",
  cursor: "pointer",
});

export function ShippingBook({ }: ShippingBookProps) {
  return (
    <Container sx={{ py: 3 }}>
      <Grid container spacing={2}>
        <Grid sx={{ position: "relative" }} item md={6}>
          <Link href={"/livraria"}>
            <StyledChip
              color="primary"
              size="medium"
              label={"Clique aqui!"}
            />
            <ShippingImage
              width={500}
              height={300}
              src={livroRetirada}
              alt="retirada de livros"
            />
          </Link>
        </Grid>
        <Grid sx={{ position: "relative" }} item md={6}>
          <Link href={"https://www.editoradodireito.com.br/meu-curso"}>
            <StyledChip
              color="primary"
              size="medium"
              label={"Clique aqui!"}
            />
            <Box sx={{ objectFit: "contain" }}>
              <ShippingImage
                width={500}
                height={300}
                src={livroEntrega}
                alt="entrega de livros"
              ></ShippingImage>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
