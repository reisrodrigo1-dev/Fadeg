import ShopLayout1 from "components/layouts/ShopLayout1";

import { Box, Button, Divider, Grid, Paper, useTheme } from "@mui/material";
import { Container, styled, type BoxProps } from "@mui/system";

import AddBoxIcon from "@mui/icons-material/AddBox";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ExtensionIcon from "@mui/icons-material/Extension";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import Blog from "components/Blog";
import CoursesTabs from "components/CoursesTabs";
import Depoiments from "components/Depoiments";
import ResourceMentor from "components/ResourceMentor";
import SEO from "components/SEO";
import { ShippingBook } from "components/ShippingBook";
import { H1, H2, H3, H4, Paragraph } from "components/Typography";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import ExclusiveTools from "components/exclusive-tools/ExclusiveTools";
import OABExamTeam from "components/oab-examteam/OABExamTeam";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { oab2Categories } from "data/categories";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";
import useWindowSize from "hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section3 from "pages-sections/fashion-shop-2/Section3";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useEffect, useState, type FC } from "react";
import api from "utils/__api__/meu-curso";
import { CardRecommended } from "components/cards/card-recommended";
import { StyledBox } from "components/Sticky";
import clsx from "clsx";

const tabs = [
	{
		id: 1,
		name: "Cursos",
		value: "1",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#D23F57",
		categoryId: {
			id: 161,
			UrlKey: "oab-2-fase",
		},
	},
	{
		id: 2,
		name: "Pacote de Simulados",
		value: "2",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#D23F57",
		categoryId: {
			id: 159,
			UrlKey: "oab-2-fase-pacotes-de-simulados",
		},
	},
	{
		id: 3,
		name: "Resolução de Questões",
		value: "3",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#D23F57",
		categoryId: {
			id: 311,
			UrlKey: "",
		},
	},
	{
		id: 4,
		name: "Mentorias",
		value: "4",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#D23F57",
		categoryId: {
			id: 157,
			UrlKey: "",
		},
	},
];

const CursosOAB2Fase = () => {
	const width = useWindowSize();
	const [visibleSlides, setVisibleSlides] = useState(5);
	const [slidesYT, setSlidesYT] = useState(6);
	const { banners } = useBanners(api.getIndexBanners("6"));

	useEffect(() => {
		if (width < 426) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 1024) setVisibleSlides(3);
		else if (width < 1200) setVisibleSlides(visibleSlides);
		else setVisibleSlides(visibleSlides);
	}, [width, visibleSlides]);

	useEffect(() => {
		if (width < 426) setSlidesYT(1);
		else if (width < 650) setSlidesYT(2);
		else if (width < 1024) setSlidesYT(3);
		else if (width < 1200) setSlidesYT(3);
		else setSlidesYT(3);
	}, [width]);
	const theme = useTheme();

	return (
		<>
			<ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
				<SEO
					title="Curso  2ª Fase da OAB | Online e Presencial"
					sitename="MeuCurso"
					description="Prepare-se para a 2ª Fase da OAB com nosso curso. Escolha entre aulas online ou presenciais para o seu aprendizado. Inscreva-se no Meu Curso."
				/>
				<Container sx={{ pb: 3 }}>
					<Section1 carouselData={banners} />
					<Container>
						<Grid container spacing={2} marginTop={5}>
							<Grid item xs={12} md={6}>
								<Box textAlign={{ xs: "center", lg: "start" }}>
									<h1>
										A metodologia que vai te levar à aprovação na 2ª fase OAB
									</h1>

									<p>
										No MeuCurso, acreditamos que a educação de qualidade é a
										chave para o sucesso. Nosso compromisso é oferecer uma
										preparação completa e eficaz, com foco em disciplinas
										essenciais como a meteorologia.
									</p>
									<p>
										Proporcionamos um ambiente de aprendizado interativo e
										dinâmico, onde os estudantes podem acompanhar seu progresso
										e revisar conteúdos conforme necessário. Nossa plataforma é
										projetada para manter os alunos engajados e motivados,
										oferecendo uma experiência de estudo personalizada e
										eficiente.
									</p>
								</Box>
							</Grid>
							<Grid mx={"auto"} item lg={6}>
								<Box>
									<iframe
										style={{ aspectRatio: "16/9" }}
										width="100%"
										height="auto"
										src="https://www.youtube.com/embed/z8q_uF-VvSI?si=FesOQD1IgBJbvFEM"
										title="YouTube video player"
									/>
								</Box>
							</Grid>
						</Grid>
						<ResourceMentor rows={rows} />
					</Container>
					<CoursesTabs visibleItems={4} tabs={tabs} />
					<Container>
						<Box
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								justifyContent: "space-between",
								pb: 10,
								gap: 5,
							}}
						>
							{recommendedCards.map((item) => (
								<CardRecommended
									key={item.id}
									courseName={item.courseName}
									subtitle={item.subtitle}
									title={item.title}
									recommended={item.recommended}
									content={item.content}
								/>
							))}
						</Box>
					</Container>
					<Container>
						<H2 textAlign={"center"} mb={3}>
							Por onde começar a preparação para a 2ª fase...
						</H2>
						<Carousel
							totalSlides={6}
							visibleSlides={slidesYT}
							sx={{ ...carouselStyled }}
						>
							{ytSlides.map((items) => (
								<iframe
									title={`live-${items.id}`}
									key={items.id}
									src={items.link}
									width={350}
									height={200}
									style={{ border: "none", marginLeft: 45 }}
								/>
							))}
							{/* {ytSlides.map((items) => (
								<Link
									style={{ position: "relative" }}
									target="_blank"
									href={items?.link}
									key={items.id}
								>
									<PlayArrowIcon
										sx={{
											color: "white",
											fontSize: "50px",
											position: "absolute",
											left: "45%",
											bottom: "100px",
											backgroundColor: "red",
											borderRadius: "5px",
											transition: "0.3s",
											"&:hover": {
												filter: "brightness(0.8)",
											},
										}}
									/>
									<Image
										width={500}
										height={200}
										style={{
											width: "350px",
											height: "auto",
										}}
										src={items?.img}
										alt="video"
									/>
								</Link>
							))} */}
						</Carousel>
					</Container>

					<Box pb={10}>
						<Blog />
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
					<Section3 categories={oab2Categories} />
					<Depoiments />
				</Container>
			</ShopLayout1>
		</>
	);
};
export default CursosOAB2Fase;

function createData(
	id: number,
	date: string,
	event: string,
	action: string,
	link?: string,
) {
	return { id, date, event, action, link };
}

const rows = [
	createData(1, "17/08", "Realização da 1ª fase (prova objetiva)", "", "#"),
	createData(
		2,
		"17/08",
		"Divulgação do gabarito preliminar da prova objetiva",
		"",
		"#",
	),
	createData(3, "18/08", "19h aula estratégia de estudos da 2ª Fase", "", "#"),
	createData(
		4,
		"18/08 a 20/08",
		"Prazo recursal contra o gabarito preliminar da 1ª fase",
		"",
		"#",
	),
	createData(
		5,
		"19/8",
		"Início das aulas regulares 2ª fase OAB MeuCurso",
		"",
		"#",
	),

	createData(
		6,
		"03/09",
		"Divulgação do gabarito definitivo da 1ª fase e resposta aos recursos",
		"",
		"#",
	),
	createData(7, "03/09", "Resultado preliminar da 1ª fase", "", "#"),
	createData(
		8,
		"04/09 a 05/09",
		"Prazo recursal contra o resultado preliminar da 1ª fase (erro material)",
		"",
		"#",
	),
	createData(
		9,
		"17/09",
		"Divulgação do resultado final da 1ª fase (prova objetiva)",
		"",
		"#",
	),
	createData(
		10,
		"13/10",
		"Divulgação dos locais de realização da prova prático-profissional",
		"",
		"#",
	),
	createData(
		11,
		"19/10",
		"Realização da 2ª fase (prova prático-profissional)",
		"",
		"#",
	),
	createData(
		12,
		"19/10",
		"Divulgação do padrão de resposta preliminar da prova prático-profissional",
		"",
		"#",
	),
];

const listDiferences = [
	{
		id: 1,
		icon: <ExtensionIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Peças-mestras",
		text2: "Técnica para utilização de modelos chaves para todas as áreas",
	},

	{
		id: 2,
		icon: <AddBoxIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Simulado/material",
		text2: "Estude com materiais exclusivos e treine seu conhecimento ",
	},
	{
		id: 3,
		icon: <Diversity3Icon sx={{ fontSize: 40, color: "##3D526F" }} />,
		text: "Mentoria e Gestão das emoções",
		text2:
			"Aulas especiais de orientações de estudo, redação, edital e gestão das emoções.",
	},
];

const recommendedCards = [
	{
		id: 1,
		courseName: "curso 2ª fase",
		title: "regular essencial",
		subtitle: "Indicado para quem já prestou e deseja focar no conteúdo",
		recommended: false,
		content: [
			{ emoji: "✅", text: "Aulas ao vivo e gravadas" },
			{ emoji: "✅", text: "8 simulados (correção por vídeos)" },
			{ emoji: "✅", text: "6 provas simuladas" },
			{ emoji: "✅", text: "15 provas anteriores corrigidas" },
			{ emoji: "✅", text: "3 Ebook exclusivos" },
			{ emoji: "✅", text: "Laboratórios de peças e questões" },
			{ emoji: "✅", text: "Técnicas de provas, marcação de VADE" },
			{ emoji: "✅", text: "Semana de revisão" },
			{ emoji: "✅", text: "Experiência MeuCurso" },
			{
				emoji: "✅",
				text: "Mentorias estratégicas (como estudar na 2ª fase, gestão das emoções)",
			},
		],
	},
	{
		id: 2,
		courseName: "curso 2ª fase",
		title: "regular avançado",
		subtitle: "Indicado para quem deseja uma preparação na medida",
		recommended: true,
		content: [
			{ emoji: "✅", text: "Aulas ao vivo e gravadas" },
			{ emoji: "✅", text: "8 simulados (5 com correção individual)" },
			{ emoji: "✅", text: "6 provas simuladas" },
			{ emoji: "✅", text: "15 provas anteriores corrigidas" },
			{ emoji: "✅", text: "3 Ebook exclusivos" },
			{
				emoji: "✅",
				text: "Laboratórios de peças e questões + plantão de dúvidas",
			},
			{ emoji: "✅", text: "Técnicas de provas, marcação de VADE" },
			{ emoji: "✅", text: "Semana de revisão" },
			{ emoji: "✅", text: "Experiência MeuCurso" },
			{
				emoji: "✅",
				text: "Mentorias estratégicas (como estudar na 2ª fase, gestão das emoções)",
			},
		],
	},
	{
		id: 3,
		courseName: "curso 2ª fase",
		title: "regular imersivo",
		subtitle:
			"Indicado para quem deseja uma preparação intensa com muito treino",
		recommended: false,
		content: [
			{ emoji: "✅", text: "Aulas ao vivo e gravadas" },
			{ emoji: "✅", text: "8 simulados (8 com correção individual)" },
			{ emoji: "✅", text: "6 provas simuladas" },
			{ emoji: "✅", text: "15 provas anteriores corrigidas" },
			{ emoji: "✅", text: "3 Ebook exclusivos" },
			{
				emoji: "✅",
				text: "Laboratórios de peças e questões",
			},
			{ emoji: "✅", text: "Técnicas de provas, marcação de VADE" },
			{ emoji: "✅", text: "Semana de revisão" },
			{ emoji: "✅", text: "Experiência MeuCurso" },
			{
				emoji: "✅",
				text: "Mentorias estratégicas (como estudar na 2ª fase, gestão das emoções)",
			},
			{
				emoji: "✅",
				text: "Curso Treino avançado de provas (+ 10 aulas)",
			},
		],
	},
	{
		id: 4,
		courseName: "Mentoria Personalizada",
		title: "+ CURSO 2ª FASE",
		subtitle:
			"Indicado para quem deseja um acompanhamento individualizado com professor.",
		recommended: false,
		content: [
			{ emoji: "✅", text: "Tudo que tem no IMERSIVO." },
			{
				emoji: "✅",
				text: "Até 6* sessões em grupo com Mentor e mentoreados.",
			},
			{
				emoji: "✅",
				text: "Até 4* sessões INDIVIDUAIS com professor.",
				hightlighted: true,
			},
			{ emoji: "✅", text: "Grupo exclusivo da mentoria no WhatsApp." },
			{ emoji: "✅", text: "Acesso contínuo ao professor pelo WhatsApp." },
			{
				emoji: "✅",
				text: "Auxílio no planejamento estratégico de estudos individualizados.",
			},
			{
				emoji: "✅",
				text: "Feedback diretamente pelo professor de simulados realizados.",
			},
			{
				emoji: "✅",
				text: "Se necessário, auxílio para elaboração de recurso contra resultado preliminar de 2ª fase.",
			},
		],
	},
];

const ytSlides: { id: number; img?: string; link: string }[] = [
	{
		id: 1,
		// img: "/thumb-2fase.jpg",
		link: "https://youtube.com/embed/AQdnOdWXxl0",
		//  "https://www.youtube.com/watch?v=dK-UW3eC0X8&list=PLT4MVOUvZvO13urfDq7djU4ekU3VI0chd&index=3",
	},

	{
		id: 2,
		// img: "/thumb_empre.jpg",
		link: "https://youtube.com/embed/O_U3_IO3GHQ",
		// "https://www.youtube.com/live/Gwjk1aT4DYo",
	},

	{
		id: 3,
		// img: "/thumb_const.jpg",
		link: "https://youtube.com/embed/612xOoQQ7Vo",
		// "https://www.youtube.com/live/C-iBfKdH3aA",
	},

	{
		id: 4,
		// img: "/thumb_civil.jpg",
		link: "https://youtube.com/embed/5b4V4PwO2rc",
		// "https://www.youtube.com/live/rke7Xq1HTII",
	},

	{
		id: 5,
		// img: "/thumb_penal.jpg",
		link: "https://youtube.com/embed/qmD-U_loLrs",
		//  "https://www.youtube.com/live/pXIzTL0ToNE",
	},

	{
		id: 6,
		// img: "/thumb_trabalho.jpg",
		link: "https://youtube.com/embed/RDFDs-uQD08",
		// "https://www.youtube.com/live/xpCwsQBW6No",
	},

	{
		id: 7,
		// img: "/thumb_trabalho.jpg",
		link: "https://youtube.com/embed/TsVTN_QfkJI",
		// "https://www.youtube.com/live/xpCwsQBW6No",
	},
];
