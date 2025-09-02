import { motion } from "framer-motion";
import {
  BusinessCenter,
  CurrencyExchange,
  SettingsSuggest,
} from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import { H1, H3, Paragraph } from "components/Typography";
import AnimateLayout from "components/layouts/AnimateLayout";
import Link from "next/link";
import SEO from "components/SEO";
import Image from "next/image";

export default function Sistemas() {
  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        <SEO title="Sistemas" sitename="advHUB" />
        <img
          width={2000}
          height={2000}
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
              SISTEMAS
            </H1>
          </motion.div>
          {topics.map((topic) => (
            <Grid
              key={topic.id}
              container
              sx={{ py: 2 }}
              color={"white"}
              justifyContent={"center"}
            >
              <Grid item md={4} xs={6} flexDirection={"column"}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4,
                  }}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {topic.icon}
                    <H3 ml={2}>{topic.title}</H3>
                  </Box>
                  <Paragraph display={"flex"} justifyContent={"center"}>
                    {topic.text}
                  </Paragraph>
                </motion.div>
              </Grid>
              <Grid item md={3} xs={5} flexDirection={"column"}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.6,
                  }}
                >
                  <ul style={{ listStyle: "outside" }}>
                    {topic.topics.map((t, index) => (
                      <Box display={"flex"} key={index}>
                        <li>{t.text}</li>
                      </Box>
                    ))}
                  </ul>
                </motion.div>
              </Grid>
            </Grid>
          ))}
        </Box>
      </div>
    </>
  );
}

const topics = [
  {
    id: 1,
    icon: <SettingsSuggest sx={{ color: "white" }} />,
    title: "Gestão Processual",
    text: "Plataforma de gestão de processos de forma fácil e integrada!",
    topics: [
      {
        text: "Interface de intimações",
      },
      {
        text: "Contagem de prazos",
      },
      {
        text: "Históricos do andamento",
      },
      {
        text: "Drive de documentos",
      },
    ],
  },
  {
    id: 2,
    icon: <CurrencyExchange sx={{ color: "white" }} />,
    title: "Gestão Financeira",
    text: "Um painel contábil para Advogados! Simples e eficaz para organização de honorários",
    topics: [
      {
        text: "Painel de recebíveis",
      },
      {
        text: "Contas a pagar e recorrências",
      },
      {
        text: "Meios de pagamento(cartão, pix, boleto)",
      },
      {
        text: "Agendamento de cobrança",
      },
    ],
  },
  {
    id: 3,
    icon: <BusinessCenter sx={{ color: "white" }} />,
    title: "Gestão de negócios",
    text: "Gerar, gerir e converter oportunidades na advocacia!",
    topics: [
      {
        text: "LP de captação",
      },
      {
        text: "Painel de oportunidades",
      },
      {
        text: "Kambam de conversões",
      },
      {
        text: "Gestão de leads",
      },
    ],
  },
];
