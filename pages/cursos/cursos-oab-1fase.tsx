import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Button, Container, Grid, Paper, useTheme } from "@mui/material";

import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ExtensionIcon from "@mui/icons-material/Extension";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LoopIcon from "@mui/icons-material/Loop";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import RouteIcon from "@mui/icons-material/Route";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import SettingsIcon from "@mui/icons-material/Settings";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Blog from "components/Blog";
import CoursesTabs from "components/CoursesTabs";
import Depoiments from "components/Depoiments";
import Methodology from "components/Methodology";
import SEO from "components/SEO";
import { H1, H2, H4, Paragraph } from "components/Typography";
import YoutubeCarousel from "components/YoutubeCarousel";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import ExclusiveTools from "components/exclusive-tools/ExclusiveTools";
import OABExamTeam from "components/oab-examteam/OABExamTeam";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { oab1Videos } from "data/youtubeVideos";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";
import useWindowSize from "hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useEffect, useState } from "react";
import api from "utils/__api__/meu-curso";
import ResourceMentor from "components/ResourceMentor";
import { Cronograma } from "components/cronograma";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { randomBytes } from "crypto";

const listDiferences = [
	{
		id: 3,
		icon: <StickyNote2Icon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Prova Simulada",
		text2: "Vamos fazer a prova inteira juntos? Conteúdo inédito!",
	},
	{
		id: 4,
		icon: <MenuBookIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "E-books de exercícios",
		text2: "Dois e-books especiais com exercícios inéditos",
	},

	{
		id: 8,
		icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Treino de questões",
		text2: "Método para resolver as questões da prova",
	},
	{
		id: 9,
		icon: <CalendarMonthIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Cronograma de estudos",
		text2:
			"Planner online e e-book com toda a programação. Estude de forma organizada.",
	},
	{
		id: 10,
		icon: <Diversity3Icon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Mentoria e Gestão das emoções",
		text2:
			"Aulas especiais de orientações de estudo, redação, edital e gestão das emoções.",
	},

	{
		id: 15,
		icon: <RouteIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Rota de estudos, planner ou sumário",
		text2:
			"Estude como preferir! Na área do aluno... você escolhe como organizar seu conteúdo!",
	},

	{
		id: 17,
		icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Garantia Meu Curso",
		text2:
			"Na repescagem, se começar antes da lista... geramos o crédito se seu nome vier na lista do exame anterior!(consulte o regulamento)",
	},

	{
		id: 19,
		icon: <WhatsAppIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Canal Exclusivo no Whatsapp",
		text2:
			"Grupo especial da área para mensagens diretas dos professores e muita interação.",
	},
];

const tabs = [
	{
		id: 1,
		name: "Exame - 45",
		value: "1",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#D23F57",
		categoryId: {
			id: 317,
			UrlKey: "OAB-1-fase-Destaques-45",
		},
	},
	{
		id: 2,
		name: "Planos de Assinatura",
		value: "2",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#D23F57",
		categoryId: {
			id: 133,
			UrlKey: "oab-1-fase-planos-de-assinatura",
		},
	},
];

const CursosOAB1Fase = () => {
	const width = useWindowSize();
	const [visibleSlides, setVisibleSlides] = useState(4);

	const { banners } = useBanners(api.getIndexBanners("5"));

	useEffect(() => {
		if (width < 426) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 1024) setVisibleSlides(3);
		else if (width < 1200) setVisibleSlides(4);
		else setVisibleSlides(5);
	}, [width]);

	const theme = useTheme();
	return (
		<>
			<ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
				<SEO
					title="Preparação Completa para a Prova da OAB 1ª Fase"
					sitename="MeuCurso"
					description="Prepare-se de forma intensiva e eficaz para a 1ª Fase da Prova da OAB com o Meu Curso. Sucesso garantido na sua jornada jurídica. Inscreva-se!"
				/>
				<Container sx={{ pb: 3 }}>
					<Section1 carouselData={banners} />
					<Container>
						<Grid container spacing={2} marginTop={5}>
							<Grid item md={6}>
								<Box textAlign={{ xs: "center", lg: "start" }}>
									<H1>Prova OAB: 1ª fase é no MeuCurso!</H1>
									<p>
										A preparação para a 1ª fase OAB é muito eficiente quando
										baseada em uma metodologia que reúna conteúdo + treino +
										revisão, tudo isso em uma Plataforma que organize os
										estudos, priorize as disciplinas e temas mais relevantes da
										prova... rumo à Aprovação! O MeuCurso Educacional oferece
										turmas online ou presenciais (São Paulo) para o Exame de
										Ordem, com professores altamente reconhecidos e com
										excelentes índices de aprovação.
										<br />
										<strong>· Online OAB </strong>– com aulas ao vivo e/ou
										gravadas
										<br />
										<strong>· Preencial OAB São Paulo </strong>– sede MeuCurso
										(também com acesso ao conteúdo online).
									</p>
								</Box>
								<Box
									textAlign={{
										lg: "start",
										xs: "center",
									}}
									my={2}
								>
									<Button
										variant="contained"
										color="error"
										href="https://meucurso.com.br/categorias/oab-1-fase-44-exame"
									>
										QUERO COMEÇAR MEUS ESTUDOS!
									</Button>
								</Box>
							</Grid>
							<Grid mx={"auto"} item lg={6}>
								<Box>
									<iframe
										style={{ aspectRatio: "16/9" }}
										title="vimeo-player"
										src="https://www.youtube.com/embed/0YnUTzNMovg"
										width="100%"
										height="auto"
									/>
								</Box>
							</Grid>
						</Grid>

						<Cronograma title="Cronograma MeuCurso - 45º Exame de Ordem (Cursos)" rows={meuCursoTable} />
						<Cronograma
							title="Calendário Exame de Ordem - 45º"
							rows={exameOrdemTable}
						/>
					</Container>
					<Container>
						<CoursesTabs visibleItems={4} tabs={tabs} />
					</Container>
					<Box pb={10}>
						<Blog tag="oab-1-fase" />
					</Box>

					{/* <YoutubeCarousel embed data={oab1Videos} slides={3} totalSlides={4} /> */}

					<Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
						{oab1Videos.map((item, i) => (
							<iframe
								key={item.link}
								title={`Aula-${i}`}
								style={{ border: "none", maxWidth: "max-content" }}
								src={item.link}
							/>
						))}
					</Box>
					<Container>
						<Grid container my={4} justifyContent={"center"}>
							<Grid item md={12} my={2}>
								<H2 textAlign={"center"}>
									O QUE FAZ DIFERENÇA NA SUA APROVAÇÃO
								</H2>
							</Grid>
							{listDiferences.map((item) => (
								<Grid
									item
									xs={6}
									md={3}
									key={item.id}
									textAlign={"center"}
									py={3}
									spacing={3}
									justifyContent={"center"}
								>
									{item.icon}
									<H4 fontWeight={"bolder"} color={"#AD191A"}>
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
					<Container>
						<Link
							target="_blank"
							href={"https://campanhas.meucurso.com.br/nomenalista.html"}
						>
							<ResponsiveBanners
								bannerDataMobile={"/icone_nomenalista.png"}
								bannerData={
									"https://campanhas.meucurso.com.br/banner_nomenalista.png"
								}
							/>
						</Link>
					</Container>
					<Depoiments />
				</Container>
			</ShopLayout1>
		</>
	);
};

function createData(date: string, event: string, link?: string) {
	return { id: randomBytes(5).toString(), date, event, link };
}

const meuCursoTable = [
	createData("23/08", "Regular Final de Semana - Presencial ou Online"),
	createData("18/08", "Intensivo Semanal - Presencial ou Online"),
	createData("Início Imediato", "Extensivo OAB Online"),
];

const exameOrdemTable = [
	createData("01/10", "Edital de Abertura"),
	createData("06 a 13/10", "Período de inscrições"),
	createData("10/11", "Exame 44º - Edital Complementar da Repescagem"),
	createData(
		"17 a 24/11",
		"Inscrições na Repescagem - Reprovados no Exame 44º",
	),
	createData("21/12", "Prova Objetiva - 1ª fase"),
	createData("22/02", "Prova - 2ªfase"),
];

export default CursosOAB1Fase;
