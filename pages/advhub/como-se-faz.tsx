import { Settings } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
} from "@mui/material";
import { H1, H2, Paragraph } from "components/Typography";
import AnimateLayout from "components/layouts/AnimateLayout";
import Link from "next/link";
import SEO from "components/SEO";
import Image from "next/image";

export default function ComoSeFaz() {
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <SEO title="Como Se Faz" sitename="advHUB" />
        <img
          width={3000}
          height={3000}
          src="/assets/bg-advhub.webp"
          alt="background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100dvw",
            height: "100dvh",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <Link href={"/advhub"}>
          <Button
            sx={{
              padding: 1,
              margin: 1,
              backgroundColor: "#FF3B00",
              color: "white",
            }}
          >
            Voltar
          </Button>
        </Link>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
          >
            <H1 pb={10} textAlign={"center"} color="white">
              COMO SE FAZ
            </H1>
          </motion.div>
          <Grid container>
            <Grid
              item
              xs={12}
              md={2}
              sx={{
                border: "1px solid white",
                margin: 3,
                borderRadius: "15px",
              }}
              display={"grid"}
              justifyContent={"center"}
            >
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                }}
              >
                <Box display="flex" alignItems={"center"} color={"white"}>
                  <Settings />
                  <H2 ml={3}>Interesses</H2>
                </Box>
                <FormGroup sx={{ color: "white" }}>
                  <FormControlLabel
                    color="white"
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                        defaultChecked
                      />
                    }
                    label="Civil"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: 3,
                    }}
                  >
                    <FormControlLabel
                      label="Contratos"
                      control={
                        <Checkbox
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "#FF3B00",
                            },
                          }}
                        />
                      }
                    />
                  </Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Penal"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: 3,
                    }}
                  >
                    <FormControlLabel
                      label="Crimes Digitais"
                      control={
                        <Checkbox
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "#FF3B00",
                            },
                          }}
                        />
                      }
                    />
                  </Box>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Previdenciário"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Trabalhista"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Tributário"
                  />
                </FormGroup>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={9}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                }}
              >
                <Box color={"white"}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Peças processuais"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Contratos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Documentos"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: "#FF3B00",
                          },
                        }}
                      />
                    }
                    label="Mapas estratégicos"
                  />
                </Box>
                <Box pt={5}>
                  <H2 color={"white"}>Civil</H2>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      sx={{ backgroundColor: "#FF3B00", color: "white" }}
                      label="Imobiliário"
                    />
                    <Chip
                      sx={{ backgroundColor: "#FF3B00", color: "white" }}
                      label="Locação"
                    />
                  </Stack>
                  <Paragraph pt={5} color={"white"}>
                    Contratos
                  </Paragraph>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
