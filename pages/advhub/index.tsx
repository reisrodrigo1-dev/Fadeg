import styled from "@emotion/styled";
import {
	Handshake,
	Hardware,
	Language,
	Lightbulb,
	PanToolAlt,
	PrecisionManufacturing,
	RecordVoiceOver,
	Settings,
	ShowChart,
} from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import AdvAppBar from "components/AdvAppBar";
import SEO from "components/SEO";
import { H1, H2, H3, Paragraph } from "components/Typography";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import AnimateLayout from "components/layouts/AnimateLayout";
import useWindowSize from "hooks/useWindowSize";
import { Montserrat } from "next/font/google";
import { Squada_One } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const montserrat = Montserrat({ subsets: ["latin"] });
const squada = Squada_One({ weight: "400", subsets: ["latin"] });

const GridEffect = styled(Grid)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	transition: "0.3s",
	cursor: "pointer",
	"&:hover": {
		transform: "scale(1.1)",
	},
});

export default function AdvHub() {
	const width = useWindowSize();
	const [visibleVideos, setVisibleVideos] = useState(3);

	useEffect(() => {
		if (width < 426) setVisibleVideos(1);
		else if (width < 650) setVisibleVideos(2);
		else if (width < 1024) setVisibleVideos(3);
		else if (width < 1200) setVisibleVideos(3);
		else setVisibleVideos(3);
	}, [width]);
	const videos = [
		{
			id: 1,
			img: "assets/1.png",
		},
		{
			id: 2,
			img: "assets/2.png",
		},
		{
			id: 3,
			img: "assets/3.png",
		},
	];
	const posts = [
		{
			id: 1,
			title: "Novidades na prática",
			slug: "Revisão da vida toda",
			text: "O STF decidiu que a revisão das aposentadorias...",
		},
		{
			id: 2,
			title: "Como se faz...",
			slug: "Ação revisão planos de saúde",
			text: "É possível a propositura de medidas com o objetivo de rever os valores...",
		},
	];
	const boxes = [
		{
			id: 1,
			text: "SISTEMAS",
			icon: <Settings sx={{ color: "#ffff" }} />,
			link: "/advhub/sistemas",
		},
		{
			id: 2,
			text: "COMO SE FAZ",
			icon: <ShowChart sx={{ color: "#ffff" }} />,
			link: "/advhub/como-se-faz",
		},
		{
			id: 3,
			text: "SITES PROFISSIONAIS",
			icon: <Language sx={{ color: "#ffff" }} />,
			link: "/advhub/sites-profissionais",
		},
		{
			id: 4,
			text: "MENTORIAS",
			icon: <RecordVoiceOver sx={{ color: "#ffff" }} />,
			link: "#",
		},
		{
			id: 5,
			text: "INTELIGÊNCIA ARTIFICIAL",
			icon: <PrecisionManufacturing sx={{ color: "#ffff" }} />,
			link: "#",
		},
		{
			id: 6,
			text: "PRECEDENTES",
			icon: <Hardware sx={{ color: "#ffff" }} />,
			link: "#",
		},

		{
			id: 7,
			text: "SERVIÇOS DE APOIO",
			icon: <Handshake sx={{ color: "#ffff" }} />,
			link: "#",
		},
		{
			id: 8,
			text: "BANCO DE OPORTUNIDADES",
			icon: <Lightbulb sx={{ color: "#ffff" }} />,
			link: "#",
		},
		{
			id: 9,
			text: "ADV HUB pro",
			icon: <PanToolAlt sx={{ color: "#ffff" }} />,
			link: "#",
		},
	];

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 5,
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<AnimateLayout>
			<SEO title="Início" sitename="advHUB" />
			<div style={{ position: "relative" }}>
				<img
					width={2000}
					height={2000}
					src="assets/bg-advhub.webp"
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
				<Container
					className={montserrat.className}
					maxWidth="xl"
					sx={{
						position: "relative",
					}}
				>
					<Container maxWidth="md" sx={{ position: "sticky", top: 0 }}>
						<AdvAppBar />
					</Container>
					<Container
						maxWidth="md"
						sx={{
							py: 2,
							textAlign: "center",
						}}
					>
						<Box
							sx={{
								height: "100dvh",
								pt: 20,
								display: "grid",
								justifyContent: "center",
							}}
						>
							<img
								width={550}
								height={3200}
								src="/assets/test.png"
								alt="logo"
								style={{
									maxWidth: "100dvw",
									height: "auto",
									color: "#92939A",
								}}
							/>
							<TypeAnimation
								preRenderFirstString={true}
								style={{
									whiteSpace: "pre-line",
									height: "195px",
									display: "block",
									fontSize: "5vh",
									fontWeight: "bolder",
									color: "white",
								}}
								sequence={[
									"Soluções e tecnologia\npara turbinar\na sua Advocacia",
									2000,
									"",
									1000,
								]}
								speed={50}
								repeat={Number.POSITIVE_INFINITY}
								omitDeletionAnimation
							/>
						</Box>
					</Container>
					<Container
						maxWidth="md"
						sx={{
							py: 2,
							height: "100dvh",
							display: "grid",
							justifyContent: "center",
						}}
					>
						<Grid container gap={2} justifyContent={"space-evenly"}>
							<Grid item xs={12} md={12} textAlign={"center"} color={"white"}>
								<H2 mb={3} fontSize={"2.5rem"}>
									Nossas Soluções
								</H2>
							</Grid>
							{boxes.map((item) => (
								<>
									<GridEffect
										item
										xs={4}
										md={3}
										key={item.id}
										sx={{
											backgroundColor: "rgba(74, 74, 74, 0.62)",

											borderRadius: "12px",
											padding: 2,
											color: "#ffff",
											textAlign: "center",
											fontWeight: 700,
											height: "100px",
										}}
									>
										<Link href={item?.link}>
											<Box>
												{item.icon}
												<Paragraph>{item.text}</Paragraph>
											</Box>
										</Link>
									</GridEffect>
								</>
							))}
						</Grid>
					</Container>
					<Container maxWidth="md">
						<Grid container gap={2} color="white" justifyContent={"center"}>
							<Grid item xs={12} md={12} textAlign={"center"} color="white">
								<H2 fontSize={"2.5rem"}>Blog</H2>
							</Grid>
							{posts.map((post) => (
								<Grid
									sx={{
										backgroundColor: "rgba(74, 74, 74, 0.62)",
										backdropFilter: "blur(0px) saturate(181%)",
										borderRadius: "12px",
										padding: 2,
										cursor: "pointer",
										transition: "0.3s",
										"&:hover": {
											transform: "scale(1.025)",
										},
									}}
									key={post.id}
									item
									xs={6}
									md={5}
								>
									<H3>{post.title}</H3>
									<Paragraph fontWeight={700}>{post.slug}</Paragraph>
									<Paragraph>{post.text}</Paragraph>
								</Grid>
							))}
						</Grid>
					</Container>
					<Container maxWidth="md" sx={{ py: 10 }}>
						<Box>
							<H2 textAlign={"center"} fontSize={"2.5rem"} color={"white"}>
								Como fazer
							</H2>
							<Carousel
								sx={carouselStyled}
								totalSlides={3}
								visibleSlides={visibleVideos}
							>
								{videos.map((item) => (
									<div key={item.id}>
										<img
											style={{
												width: "100dvw",
												height: "auto",
												cursor: "pointer",
											}}
											width={120}
											height={120}
											src={item.img}
											alt="videos"
										/>
									</div>
								))}
							</Carousel>
						</Box>
					</Container>
				</Container>
			</div>
		</AnimateLayout>
	);
}
