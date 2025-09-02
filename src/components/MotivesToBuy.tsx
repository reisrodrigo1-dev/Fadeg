import { useEffect, useState } from "react";
import Carousel from "./carousel/Carousel";
import useWindowSize from "hooks/useWindowSize";
import { Box, Container } from "@mui/material";
import { H2 } from "./Typography";
import { StyledArrowNextButton } from "./carousel/styles";
import CarouselMotives from "./carousel-motiver/CarouselMotives";

interface MotivesToBuyProps {}

const motives = [
  {
    id: 1,
    title: "Metodologia Personalizada com ROTA DE ESTUDOS®",
    text: "A FADEG adota uma metodologia exclusiva que respeita a individualidade e o ritmo de aprendizagem do aluno, com a ROTA DE ESTUDOS® — marca registrada da instituição. O estudante é guiado pelos pilares Saber, Praticar, Revisar e Aprofundar, em uma plataforma tecnológica (BIPE) que permite trilhas personalizadas de aprendizado.",
  },
  {
    id: 2,
    title: "Formação Voltada para a Prática Profissional e Cidadã",
    text: "Os cursos são estruturados com forte base prática, por meio de projetos integradores, atividades extensionistas e o programa FADEG SOCIAL, que promove ações com impacto real na comunidade. Isso proporciona ao aluno não só a formação técnica, mas também o desenvolvimento de consciência cidadã e responsabilidade social.",
  },
  {
    id: 3,
    title: "Corpo Docente Qualificado e Atuação Multidisciplinar",
    text: "A equipe docente da FADEG é composta por especialistas, mestres e doutores com sólida experiência prática e acadêmica nas áreas de Direito e Gestão Pública, muitos deles autores de obras e atuantes em órgãos de classe, como a OAB e o Ministério Público. A atuação do Núcleo Docente Estruturante (NDE) garante atualização constante dos conteúdos.",
  },
  {
    id: 4,
    title: "Plataforma BIPE: Ensino Digital com Alta Interatividade",
    text: "A FADEG utiliza a plataforma BIPE, desenvolvida para promover um ambiente virtual de aprendizagem moderno, intuitivo e interativo, que inclui aulas síncronas e assíncronas, fóruns, chats, biblioteca digital e secretaria acadêmica virtual. É um sistema completo, que favorece o engajamento e autonomia do aluno na modalidade EAD.",
  },
  {
    id: 5,
    title: "Inclusão, Diversidade e Sustentabilidade como Princípios Ativos de Transformação Social",
    text: "A FADEG vai além do ensino técnico: seus cursos são integrados a projetos que promovem a equidade, o respeito às diferenças e o desenvolvimento sustentável. Por meio de iniciativas como o FADEG Social, os estudantes vivenciam a aplicação prática do conhecimento em ações voltadas à defesa dos direitos humanos, inclusão de minorias, proteção ambiental e fortalecimento das comunidades locais. É a formação de profissionais éticos, conscientes e preparados para transformar realidades.",
  },
];

export default function MotivesToBuy({}: MotivesToBuyProps) {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 426) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(4);
    else setVisibleSlides(4);
  }, [width]);

  return (
    <Container>
      <H2 textAlign={"center"}>Nossos Diferenciais</H2>
      <CarouselMotives
        autoPlay
        interval={7000}
        sx={{ mt: 5 }}
        visibleSlides={visibleSlides}
        totalSlides={motives.length}
      >
        {motives.map((motive) => (
          <Box
            key={motive.id}
            sx={{
              p: 3.5,
              backgroundColor: "#F8F8F8",
              borderRadius: "36px",
              textAlign: "start",
              width: "300px",
              margin: "0 auto",
              height: "350px",
            }}
          >
            <h2>{motive.title}</h2>
            <p>{motive.text}</p>
          </Box>
        ))}
      </CarouselMotives>
    </Container>
  );
}
