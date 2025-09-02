import { FC } from "react";
import { Box, Grid, Button } from "@mui/material";
import { H2, H3, H4 } from "components/Typography";
import { format } from "date-fns";
import Product from "../../models/Product.model";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import Link from "next/link";

// ======================================================
type ProductDescriptionProps = { product: Product | null };
// ======================================================

const ProductDescription: FC<ProductDescriptionProps> = ({ product }) => {
  const {
    Description,
    StartDate,
    EndDate,
    UnitsQuantity,
    Online,
    Categories,
  } = product;

  const category = product.Categories.find((item) => item === 3);

  return (
    <>
      {/* <Grid textAlign={"center"} container spacing={5} mb={5}>
        <Grid item md={3}>
          <AccessTimeIcon sx={{ fontSize: 40 }} color={"primary"} />
          <H4>Carga Horária</H4>
          <p> {(UnitsQuantity * 30) / 60} horas</p>
        </Grid>
        <Grid item md={3}>
          <PlayCircleIcon sx={{ fontSize: 40 }} color={"primary"} />
          <H4>Aulas</H4>
          <p> {UnitsQuantity}</p>
        </Grid>
        <Grid item md={3}>
          <CalendarMonthIcon sx={{ fontSize: 40 }} color={"primary"} />
          <H4>Data de Início</H4>
          <p> {format(new Date(StartDate), "dd/MM/yyyy")}</p>
        </Grid>
        <Grid item md={3}>
          <CalendarMonthIcon sx={{ fontSize: 40 }} color={"primary"} />
          <H4>Data de Término</H4>
          <p> {format(new Date(EndDate), "dd/MM/yyyy")}</p>
        </Grid>
      </Grid> */}

      <div dangerouslySetInnerHTML={{ __html: Description }} />
      {category && (
        <Grid container spacing={1}>
          <Grid item md={12}>
            <H3 pb={3}>Documentos para Consulta</H3>
          </Grid>
          <Grid item md={3} pb={5}>
            <Button variant="outlined" color="primary">
              <Link
                target="_blank"
                href="https://campanhas.meucurso.com.br/manual-do-aluno-fadeg.pdf"
              >
                Manual Pós Graduação
              </Link>
            </Button>
          </Grid>
          <Grid item md={3}>
            <Button variant="outlined" color="primary">
              <Link
                target="_blank"
                href="https://arquivos.meucurso.com.br/Documentos/Contrato_Pos-2023-Registro.pdf"
              >
                Contrato Pós Graduação
              </Link>
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProductDescription;
