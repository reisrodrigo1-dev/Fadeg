import { Box, Button, Grid } from "@mui/material";
import SEO from "components/SEO";
import { H1, H2, Paragraph } from "components/Typography";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SitesProfissionais() {
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <SEO title="Sites Profissionais" sitename="advHUB" />
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

        <Grid container gap={2} justifyContent={"center"} color={"white"}>
          <Grid item md={12} xs={12} textAlign={"center"} pb={3}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
              }}
            >
              <H1>CRIAÇÃO E GESTÃO DE SITE PROFISSIONAL</H1>
            </motion.div>
          </Grid>
          <Grid
            item
            textAlign={"center"}
            p={5}
            md={3}
            xs={12}
            sx={{
              backgroundColor: "rgba(74, 74, 74, 0.2)",
              backdropFilter: " blur(2px) saturate(180%)",
              borderRadius: "10px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.025)",
              },
            }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
              }}
            >
              <H2>PageBuilder</H2>
              <Paragraph>Editor fácil de layout</Paragraph>
            </motion.div>
          </Grid>
          <Grid
            item
            textAlign={"center"}
            p={5}
            md={3}
            xs={12}
            sx={{
              backgroundColor: "rgba(74, 74, 74, 0.2)",
              backdropFilter: " blur(2px) saturate(180%)",
              borderRadius: "10px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.025)",
              },
            }}
          >
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
              }}
            >
              <H2>Blog e notícias</H2>
              <Paragraph>
                Crie autoridade em temas jurídicos e se counique com o seu
                público!(SEO)
              </Paragraph>
            </motion.div>
          </Grid>
          <Grid
            p={5}
            textAlign={"center"}
            item
            md={3}
            xs={12}
            sx={{
              backgroundColor: "rgba(74, 74, 74, 0.2)",
              backdropFilter: " blur(2px) saturate(180%)",
              borderRadius: "10px",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.025)",
              },
            }}
          >
            <motion.div
              className="flex justify-between mb-8"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
              }}
            >
              <H2>Agenda de clientes conline</H2>
              <Paragraph>
                Sue cliente agenda a consulta ou reunião, paga pela
                Plataforma e você atende fácil!
              </Paragraph>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
