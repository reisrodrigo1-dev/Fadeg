import {
  AddBox,
  AppShortcut,
  BorderColor,
  CalendarMonth,
  ContactSupport,
  Diversity3,
  Extension,
  FitnessCenter,
  Loop,
  MenuBook,
  NoteAlt,
  PlayCircle,
  Route,
  ScreenSearchDesktop,
  Settings,
  StickyNote2,
  WhatsApp,
  WorkspacePremium,
} from "@mui/icons-material";
import { H2, H4, Paragraph } from "./Typography";
import { AppBar, Box, Container, Grid } from "@mui/material";


type CourseType = "2Fase" | "Concursos"

export default function Methodology({ textColor, courseType }: { textColor: string, courseType: CourseType }) {


  const list = () => {
    switch(courseType) {
      case '2Fase':
        return OAB2Fase
      case 'Concursos':
        return contest
    }
  }

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container>
        <Grid container my={4}>
          <Grid item md={12} my={2}>
            <H2 textAlign={"center"}>Metodologia MeuCurso</H2>
            <Paragraph textAlign={"center"}>
              Ferramentas incríveis que te levaram a Aprovação
            </Paragraph>
          </Grid>
          {list().map((item) => (
            <Grid
              item
              xs={6}
              md={3}
              key={item.id}
              textAlign={"center"}
              py={3}
            >
              {item.icon}
              <H4 fontWeight={"bolder"} color={textColor}>
                {item.text}
              </H4>
              <p>{item.text2}</p>
            </Grid>
          ))}
          <Grid item md={12}>
            <p>
              ⚠️ Para todas as ferramentas, evento ou itens, consulte as
              regras específicas em Informações relevantes ou na Área do
              Aluno.
            </p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


const contest = [
  {
    id: 1,
    icon: <PlayCircle sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Aulas",
    text2:
      "Vídeos inéditos de até 30 minutos.",
  },
  {
    id: 2,
    icon: <NoteAlt sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Simulados",
    text2:
      "Faça o simulado no formato da sua Banca, e receba um diagnóstico completo da sua performance.",
  },
  {
    id: 4,
    icon: <MenuBook sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "E-books de exercícios",
    text2: "E-books especiais.",
  },
  {
    id: 5,
    icon: <ScreenSearchDesktop sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Treino de questões",
    text2: "Método para resolver as questões da prova",
  },
  {
    id: 6,
    icon: <StickyNote2 sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Cronograma de estudos",
    text2: "Planer online e e-book com toda a programação. Estude de forma organizada.",
  },
  {
    id: 7,
    icon: <ContactSupport sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Central e plantões de dúvidas",
    text2: "No Bipe, você poderá interagir e mandar suas dúvidas!",
  },
  {
    id: 8,
    icon: <Route sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Rota de estudos, planner ou sumário",
    text2: "Estude como preferir! Na área do aluno... você escolhe como organizar seu conteúdo!",
  },
  {
    id: 9,
    icon: <AppShortcut sx={{ fontSize: 40, color: "#3D526F" }}/>,
    text: "APP Verticalizado",
    text2:
      "A cada Edital, nossa equipe de professores organiza todas as informações e comenta as atualizações.",
  },
  {
    id: 10,
    icon: <Extension sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Ferramentas incríveis",
    text2:
      "Acelerador de vídeos, recalcular a rota, certificado*, gráfico de performance...",
  },
  {
    id: 11,
    icon: <WhatsApp sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Canal Exclusivo no Whatsapp",
    text2:
      "Grupo especial da área para mensagens diretas dos professores e muita interação.",
  },
];


const OAB2Fase = [
  {
    id: 1,
    icon: <PlayCircle sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Aulas",
    text2:
      "Inéditas e práticas para a 2a fase OAB. Ao vivo e/ou gravadas (assista no seu tempo)",
  },
  {
    id: 2,
    icon: <NoteAlt sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Simulados",
    text2:
      "com correção individualizada,  diagnóstico e vídeo (formato FGV).",
  },
  {
    id: 3,
    icon: <StickyNote2 sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Prova Simulada",
    text2: "Vamos fazer a prova inteira juntos? Conteúdo inédito!",
  },
  {
    id: 4,
    icon: <MenuBook sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "E-books de exercícios",
    text2: "E-books especiais com exercícios inéditos",
  },
  {
    id: 5,
    icon: <ScreenSearchDesktop sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Estudos dirigidos",
    text2: "Treino focado no conteúdo da prova",
  },
  {
    id: 6,
    icon: <StickyNote2 sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Marcação do Vade",
    text2: "Destaques e orientação em aulas para organização do Vade",
  },
  {
    id: 7,
    icon: <Extension sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Peças-mestras",
    text2: "Técnica para utilização de modelos chaves para todas as áreas",
  },
  {
    id: 8,
    icon: <FitnessCenter sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Treino de questões",
    text2: "Método para resolver as questões da prova",
  },
  {
    id: 9,
    icon: <CalendarMonth sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Cronograma de estudos",
    text2:
      "Planner online e e-book com toda a programação. Estude de forma organizada.",
  },
  {
    id: 10,
    icon: <Diversity3 sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Mentoria e Gestão das emoções",
    text2:
      "Aulas especiais de orientações de estudo, redação, edital e gestão das emoções.",
  },
  {
    id: 11,
    icon: <ContactSupport sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Central e plantões de dúvidas",
    text2:
      "Além dos plantões ao vivo, no Bipe, você poderá interagir e mandar suas dúvidas!",
  },
  {
    id: 12,
    icon: <PlayCircle sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Correção de provas anteriores",
    text2: "As 15 últimas provas de 2a fase corrigidas e comentadas.",
  },
  {
    id: 13,
    icon: <StickyNote2 sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Materais especiais",
    text2:
      "Modelos de petições, quadros, mapas de teses, mapas mentais, etc.",
  },
  {
    id: 14,
    icon: <BorderColor sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Redação de peças e questões em aula",
    text2: "Uma semana inteira de imersão na 2a fase OAB",
  },
  {
    id: 15,
    icon: <Route sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Rota de estudos, planner ou sumário",
    text2:
      "Estude como preferir! Na área do aluno... você escolhe como organizar seu conteúdo!",
  },
  {
    id: 16,
    icon: <Settings sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Ferramentas incríveis",
    text2:
      "Acelerador de vídeos, recalcular a rota, certificado*, gráfico de performance...",
  },
  {
    id: 17,
    icon: <WorkspacePremium sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Garantia Meu Curso",
    text2:
      "Na repescagem, se começar antes da lista... geramos o crédito se seu nome vier na lista do exame anterior!(consulte o regulamento)",
  },
  {
    id: 18,
    icon: <AddBox sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Pacotes de Simulados Extras",
    text2:
      "Você pode treinar mais... Temos mais de 50 Simulados por área para você adquirir!(além dos simulados do curso)",
  },
  {
    id: 19,
    icon: <WhatsApp sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Canal Exclusivo no Whatsapp",
    text2:
      "Grupo especial da área para mensagens diretas dos professores e muita interação.",
  },
  {
    id: 20,
    icon: <Loop sx={{ fontSize: 40, color: "#3D526F" }} />,
    text: "Revisões finais",
    text2:
      "Uma semana inteira de imersão na 2a fase OAB: Imersão 2a fase! Teses, peças, súmulas, e muito mais...",
  },
];
