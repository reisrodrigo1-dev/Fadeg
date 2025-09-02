import { Box, Container, Paper } from "@mui/material";
import { H2, Paragraph } from "./Typography";
import Carousel from "./carousel/Carousel";
import { carouselStyled } from "./carousel/styles";
import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import Image from "next/image";

const depoiments = [
  {
    id: 1,
    img: "/assets/images/Bipe/depoiments_1.png",
    text: "Queridos ♥️ Sempre se atualizando para oferecer o melhor do melhor ♥️",
    name: "Vanessa Netto | @van.netto",
  },
  {
    id: 2,
    img: "/assets/images/Bipe/depoiments_2.png",
    text: "Muito bom, conseguir recalcular toda minha rota me fez voltar a rotina de estudos com mais determinação e foco! Amei as novidades!",
    name: "Thamirys Calandro | @thamiscalandro",
  },
  {
    id: 3,
    img: "/assets/images/Bipe/depoiments_3.png",
    text: "O melhor! O ambiente físico super acolhedor, aulas on-line totalmente direcionadas, feedback dos professores, simulados padrões da FGV! Não me arrependo em nada na escolha ????.",
    name: "Mykarla Francyelli | @mykarlafrancyelli",
  },
  {
    id: 4,
    img: "/assets/images/Bipe/depoiments_4.png",
    text: "Fiz Meu Curso na segunda fase No começo parecia que estavam falando em Grego ai com os dias fui entendo cada fez mais e consegui aprovação e o melhor de tudo que fui aprovado de primeira.",
    name: "Alexandre A Brollo | @alexandreabrollo",
  },
  {
    id: 5,
    img: "/assets/images/Bipe/depoiments_5.png",
    text: "Que time lindo e amoroso! Obrigada professores! Obrigada 51 vezes! Obrigada 51 acertos! Se eu não tivesse passado, faria mil vezes o curso com vocês se necessário!! ",
    name: "Érika Teixeira | @erika.txra",
  },
  {
    id: 6,
    img: "/assets/images/Bipe/depoiments_6.png",
    text: "Quando a gente pensa que não tem mais como sermos surpreendidos, vocês vem e PAAAAM  , nos surpreende novamente ❤️ ‘ Parabéns a toda equipe que trabalha pela desenvoltura desse curso brilhante! ",
    name: "Barbie do Direito | @barbiedodireito",
  },
];

const ProductDepoiments = () => {
  const width = useWindowSize();
  const [visibleDepoiments, setVisibleDepoiments] = useState(3);

  useEffect(() => {
    if (width < 426) setVisibleDepoiments(1);
    else if (width < 650) setVisibleDepoiments(1);
    else if (width < 1024) setVisibleDepoiments(3);
    else if (width < 1200) setVisibleDepoiments(3);
    else setVisibleDepoiments(3);
  }, [width]);

  return (
    <Container sx={{ my: 3 }}>
      <H2 textAlign={"start"}>DEPOIMENTOS</H2>
      {/* <Paragraph textAlign={"center"}>
        Quem se prepara pelo MeuCurso.. diz isso:
      </Paragraph> */}
      <Box>
        <Carousel
          totalSlides={6}
          visibleSlides={visibleDepoiments}
          sx={carouselStyled}
        >
          {depoiments.map((item) => (
            <div key={item.id}>
              <Paper
                elevation={3}
                sx={{
                  padding: "50px",
                  height: "420px",
                  position: "relative",
                  textAlign: "center",
                  my: 3,
                }}
              >
                <Image
                  width={120}
                  height={120}
                  src={item.img}
                  alt="depoimentos"
                />
                <Paragraph>{item.text}</Paragraph>
                <Paragraph
                  sx={{
                    position: "absolute",
                    bottom: "8px",
                    right: "0",
                    left: "0",
                    margin: "0 auto",
                  }}
                  fontWeight={"bolder"}
                  mt={5}
                >
                  {item.name}
                </Paragraph>
              </Paper>
            </div>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
};

export default ProductDepoiments;
