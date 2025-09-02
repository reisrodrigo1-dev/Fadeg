import { Box, Button, Container, Grid, styled } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { Fireworks } from "fireworks-js";
import SEO from "components/SEO";
import { H1, H2, Paragraph } from "components/Typography";
// import ShopLayout1 from "components/layouts/ShopLayout1";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import SearchInputWithCategory from "components/search-box/SearchInputWithCategory";
import { useBanners } from "hooks/useBanners";
import { Sora } from "next/font/google";
import Image from "next/image";
import api from "utils/__api__/meu-curso";
import useWindowSize from "hooks/useWindowSize";
import Section1 from "pages-sections/fashion-shop-2/Section1";
// import pres_atualizacao from '../public/assets/images/presentes/pres_atualizacao.png'
// import pres_concursos from '../public/assets/images/presentes/pres_concursos.png'
// import pres_oab_1 from '../public/assets/images/presentes/pres_oab_1.png'
// import pres_oab_2 from '../public/assets/images/presentes/pres_oab_2.png'
// import pres_pos from '../public/assets/images/presentes/pres_pos.png'
// import pres_assinaturas from '../public/assets/images/presentes/pres_assinaturas.png'
import bannerAniversario from "../public/banner-aniversario.png";
import bannerAniversarioMobile from "../public/banner-aniversario-mobile.png";
import seisAnosLogo from "../public/6anos_logo.png";
import { useProducts } from "hooks/useProducts";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import desconto from "../public/desconto.png";
import Link from "next/link";
import { CarouselCard1 } from "components/carousel-cards";
import { css, keyframes, jsx } from "@emotion/react";

// Gradienty keyframes e classe para CTA animado
const focusInExpandFwd = keyframes`
  0% { letter-spacing: -0.5em; transform: translateZ(-800px); filter: blur(12px); opacity: 0; }
  100% { transform: translateZ(0); filter: blur(0); opacity: 1; }
`;

const ctaAnimStyle = css`
  animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s 1 normal both;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(90deg, #c62c2d 0%, #574ab9 100%);
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1.3rem;
  margin: 32px auto 24px auto;
  display: block;
  text-align: center;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
  letter-spacing: 0.04em;
`;

const ctaTexts = [
	"Promoção por tempo limitado!",
	"Matricule-se agora",
	"Aproveite esse presente",
];

const Card = styled(Box)({
	":hover": {
		"& .product-actions": { right: 10 },
		"& .product-view-action": { opacity: 1 },
	},
});

const CardMedia = styled(Box)(({ theme }) => ({
	width: "50%",
	cursor: "pointer",
	overflow: "hidden",
	position: "relative",
	transition: " all .15s",
	"& img": { transition: "0.3s" },
	":hover": {
		"& img": {
			filter: "brightness(0.5)",
		},
		transform: "translateY(-10px)",
		boxShadow: "2px 2px 20px 2px black",
	},
}));
const QuickViewButton = styled(Button)({
	left: 0,
	bottom: 0,
	opacity: 0,
	borderRadius: 0,
	position: "absolute",
	transition: "all 0.5s",
});

// Background animado
const AnimatedBackground = styled("div")(() => ({
	position: "fixed",
	width: "100vw",
	height: "100vh",
	top: 0,
	left: 0,
	background: "#272424",
	overflow: "hidden",
	zIndex: 0,
	"& span": {
		width: "20vmin",
		height: "20vmin",
		borderRadius: "20vmin",
		backfaceVisibility: "hidden",
		position: "absolute",
		animationName: "move",
		animationTimingFunction: "linear",
		animationIterationCount: "infinite",
	},
	"& span:nth-of-type(1)": {
		color: "#7dc77d",
		top: "35%",
		left: "57%",
		animationDuration: "37s",
		animationDelay: "-25s",
		transformOrigin: "3vw 4vh",
		boxShadow: "40vmin 0 5.197972437067482vmin currentColor",
	},
	"& span:nth-of-type(2)": {
		color: "#574ab9",
		top: "58%",
		left: "53%",
		animationDuration: "52s",
		animationDelay: "-42s",
		transformOrigin: "-14vw 11vh",
		boxShadow: "-40vmin 0 5.269752833706932vmin currentColor",
	},
	"& span:nth-of-type(3)": {
		color: "#c62c2d",
		top: "31%",
		left: "65%",
		animationDuration: "25s",
		animationDelay: "-5s",
		transformOrigin: "12vw -18vh",
		boxShadow: "40vmin 0 5.62827351657088vmin currentColor",
	},
	"& span:nth-of-type(4)": {
		color: "#7dc77d",
		top: "11%",
		left: "7%",
		animationDuration: "37s",
		animationDelay: "-36s",
		transformOrigin: "-20vw 5vh",
		boxShadow: "-40vmin 0 5.079622817799366vmin currentColor",
	},
	"& span:nth-of-type(5)": {
		color: "#c62c2d",
		top: "6%",
		left: "36%",
		animationDuration: "21s",
		animationDelay: "-21s",
		transformOrigin: "-9vw -22vh",
		boxShadow: "40vmin 0 5.253538383306114vmin currentColor",
	},
	"& span:nth-of-type(6)": {
		color: "#c62c2d",
		top: "93%",
		left: "76%",
		animationDuration: "31s",
		animationDelay: "-42s",
		transformOrigin: "-23vw 23vh",
		boxShadow: "-40vmin 0 5.529085928074406vmin currentColor",
	},
	"& span:nth-of-type(7)": {
		color: "#574ab9",
		top: "18%",
		left: "98%",
		animationDuration: "17s",
		animationDelay: "-45s",
		transformOrigin: "21vw -12vh",
		boxShadow: "-40vmin 0 5.59928324159491vmin currentColor",
	},
	"& span:nth-of-type(8)": {
		color: "#7dc77d",
		top: "18%",
		left: "33%",
		animationDuration: "18s",
		animationDelay: "-5s",
		transformOrigin: "23vw 13vh",
		boxShadow: "-40vmin 0 5.1408542890523155vmin currentColor",
	},
	"& span:nth-of-type(9)": {
		color: "#c62c2d",
		top: "55%",
		left: "7%",
		animationDuration: "41s",
		animationDelay: "-34s",
		transformOrigin: "-9vw -19vh",
		boxShadow: "-40vmin 0 5.067256016915815vmin currentColor",
	},
	"& span:nth-of-type(10)": {
		color: "#574ab9",
		top: "14%",
		left: "66%",
		animationDuration: "48s",
		animationDelay: "-1s",
		transformOrigin: "-1vw -16vh",
		boxShadow: "40vmin 0 5.011111536577627vmin currentColor",
	},
	"& span:nth-of-type(11)": {
		color: "#c62c2d",
		top: "68%",
		left: "60%",
		animationDuration: "47s",
		animationDelay: "-35s",
		transformOrigin: "-7vw 21vh",
		boxShadow: "-40vmin 0 5.109150846871455vmin currentColor",
	},
	"& span:nth-of-type(12)": {
		color: "#7dc77d",
		top: "68%",
		left: "45%",
		animationDuration: "26s",
		animationDelay: "-10s",
		transformOrigin: "-19vw -16vh",
		boxShadow: "40vmin 0 5.834331260679407vmin currentColor",
	},
	"& span:nth-of-type(13)": {
		color: "#7dc77d",
		top: "64%",
		left: "77%",
		animationDuration: "17s",
		animationDelay: "-41s",
		transformOrigin: "10vw -17vh",
		boxShadow: "40vmin 0 5.330513551766863vmin currentColor",
	},
	"& span:nth-of-type(14)": {
		color: "#7dc77d",
		top: "15%",
		left: "34%",
		animationDuration: "36s",
		animationDelay: "-47s",
		transformOrigin: "-1vw -9vh",
		boxShadow: "-40vmin 0 5.016035341392505vmin currentColor",
	},
	"& span:nth-of-type(15)": {
		color: "#574ab9",
		top: "78%",
		left: "60%",
		animationDuration: "51s",
		animationDelay: "-36s",
		transformOrigin: "-15vw -8vh",
		boxShadow: "40vmin 0 5.287591359011299vmin currentColor",
	},
	"& span:nth-of-type(16)": {
		color: "#7dc77d",
		top: "51%",
		left: "11%",
		animationDuration: "26s",
		animationDelay: "-44s",
		transformOrigin: "-24vw 15vh",
		boxShadow: "40vmin 0 5.982731843769746vmin currentColor",
	},
	"& span:nth-of-type(17)": {
		color: "#c62c2d",
		top: "32%",
		left: "14%",
		animationDuration: "38s",
		animationDelay: "-12s",
		transformOrigin: "7vw 5vh",
		boxShadow: "40vmin 0 5.997135635391287vmin currentColor",
	},
	"& span:nth-of-type(18)": {
		color: "#574ab9",
		top: "81%",
		left: "7%",
		animationDuration: "15s",
		animationDelay: "-6s",
		transformOrigin: "22vw -22vh",
		boxShadow: "40vmin 0 5.794946338076634vmin currentColor",
	},
	"& span:nth-of-type(19)": {
		color: "#7dc77d",
		top: "75%",
		left: "8%",
		animationDuration: "54s",
		animationDelay: "-44s",
		transformOrigin: "-14vw 23vh",
		boxShadow: "40vmin 0 5.702391082199376vmin currentColor",
	},
	"& span:nth-of-type(20)": {
		color: "#574ab9",
		top: "39%",
		left: "25%",
		animationDuration: "21s",
		animationDelay: "-27s",
		transformOrigin: "-16vw -24vh",
		boxShadow: "40vmin 0 5.545136283104133vmin currentColor",
	},
	"@keyframes move": {
		"100%": {
			transform: "translate3d(0, 0, 1px) rotate(360deg)",
		},
	},
}));

const sora = Sora({ subsets: ["latin"] });

export default function SeisAnosPage() {
	const [loading, setLoading] = useState(true);
	const [showFireworks, setShowFireworks] = useState(false);
	const [fireworksOpacity, setFireworksOpacity] = useState(1);
	const fireworksRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
			setShowFireworks(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		let fw;
		let pauseTimeout;
		let fadeTimeout;
		let removeTimeout;
		if (showFireworks && fireworksRef.current) {
			setFireworksOpacity(1);
			fw = new Fireworks(fireworksRef.current, {
				rocketsPoint: { min: 0, max: 100 },
				hue: { min: 0, max: 360 },
				delay: { min: 15, max: 30 },
				acceleration: 1.02,
				friction: 0.96,
				gravity: 1.5,
				particles: 90,
				explosion: 7,
				autoresize: true,
				brightness: { min: 50, max: 80 },
				decay: { min: 0.015, max: 0.03 },
				mouse: { click: false, move: false, max: 0 },
			});
			fw.start();
			// Após 5s, inicia fade-out de opacidade
			pauseTimeout = setTimeout(() => {
				setFireworksOpacity(0);
			}, 5000);
			// Após 7s, para a animação e remove o canvas
			removeTimeout = setTimeout(() => {
				fw.stop();
				setShowFireworks(false);
			}, 7000);
		}
		return () => {
			if (fw) fw.stop();
			clearTimeout(pauseTimeout);
			clearTimeout(fadeTimeout);
			clearTimeout(removeTimeout);
		};
	}, [showFireworks]);

	const { products: concursoPublico } = useProducts(api.getProductsById("275"));
	const { products: exameOrdem1 } = useProducts(api.getProductsById("1"));
	const { products: exameOrdem2 } = useProducts(api.getProductsById("161"));
	const { products: posgrad } = useProducts(api.getProductsById("3"));
	const { products: practical } = useProducts(api.getProductsById("12"));

	const productsArr = [
		{
			id: 1,
			product: posgrad,
			name: "Pós Graduação - Desconto de 65%",
			category: "Pos-Graduacao",
		},
		{
			id: 2,
			product: exameOrdem1.slice(1),
			name: "Exame de Ordem - 1ª Fase",
			category: "OAB-1-Fase",
		},
		{
			id: 3,
			product: exameOrdem2,
			name: "Exame de Ordem - 2ª Fase",
			category: "OAB-2-Fase",
		},
		{
			id: 4,
			product: concursoPublico,
			name: "Concursos Públicos",
			category: "Concursos-Publicos-Analista-MPSP",
		},
		{
			id: 5,
			product: practical,
			name: "Atualização e Prática",
			category: "Concursos-Publicos-Analista-MPSP",
		},
	];

	// Spinner 3D customizado
	const Spinner3D = styled("div")(() => ({
		width: "44.8px",
		height: "44.8px",
		animation: "spinner-y0fdc1 2s infinite ease",
		transformStyle: "preserve-3d",
		position: "relative",
		marginBottom: 32,
		"& > div": {
			backgroundColor: "rgba(255,0,0,0.2)",
			height: "100%",
			position: "absolute",
			width: "100%",
			border: "2.2px solid #ff0000",
		},
		"& > div:nth-of-type(1)": {
			transform: "translateZ(-22.4px) rotateY(180deg)",
		},
		"& > div:nth-of-type(2)": {
			transform: "rotateY(-270deg) translateX(50%)",
			transformOrigin: "top right",
		},
		"& > div:nth-of-type(3)": {
			transform: "rotateY(270deg) translateX(-50%)",
			transformOrigin: "center left",
		},
		"& > div:nth-of-type(4)": {
			transform: "rotateX(90deg) translateY(-50%)",
			transformOrigin: "top center",
		},
		"& > div:nth-of-type(5)": {
			transform: "rotateX(-90deg) translateY(50%)",
			transformOrigin: "bottom center",
		},
		"& > div:nth-of-type(6)": {
			transform: "translateZ(22.4px)",
		},
		"@keyframes spinner-y0fdc1": {
			"0%": {
				transform: "rotate(45deg) rotateX(-25deg) rotateY(25deg)",
			},
			"50%": {
				transform: "rotate(45deg) rotateX(-385deg) rotateY(25deg)",
			},
			"100%": {
				transform: "rotate(45deg) rotateX(-385deg) rotateY(385deg)",
			},
		},
	}));

	if (loading) {
		return (
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				minHeight="100vh"
				sx={{
					width: "100%",
					position: "relative",
					zIndex: 1,
				}}
			>
				{/* Animated background applied to loading screen */}
				<AnimatedBackground>
					{Array.from({ length: 20 }).map((_, i) => (
						<span key={i} />
					))}
				</AnimatedBackground>
				<Spinner3D>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</Spinner3D>
				<H2 color="white" sx={{ fontWeight: 700, letterSpacing: 1, zIndex: 2 }}>
					CARREGANDO PROMOÇÕES DE ANIVERSÁRIO
				</H2>
			</Box>
		);
	}

	return (
		<>
			{/* Header e Navbar mantidos, Footer1 removido */}
			<Header searchInput={<SearchInputWithCategory />} />
			<Navbar />
			{/* Background animado */}
			<AnimatedBackground>
				{Array.from({ length: 20 }).map((_, i) => (
					<span key={i} />
				))}
			</AnimatedBackground>
			{/* Efeito de fogos de artifício com fireworks-js */}
			{showFireworks && (
				<Box
					ref={fireworksRef}
					sx={{
						position: "fixed",
						pointerEvents: "none",
						top: 0,
						left: 0,
						width: "100vw",
						height: "100vh",
						zIndex: 1300,
						opacity: fireworksOpacity,
						transition: "opacity 2s",
					}}
				/>
			)}
			<SEO title="7 Anos MeuCurso" sitename="MeuCurso" />
			<Container
				className={sora.className}
				sx={{
					width: "100%",
					minHeight: "100vh",
					background: "transparent",
					position: "relative",
					zIndex: 1,
				}}
				disableGutters={true}
				maxWidth="xl"
			>
				{/* ...existing code... */}
				<Box
					position={"relative"}
					display={{ xs: "none", md: "flex" }}
					sx={{
						height: "400px",
						width: "1232px",
						margin: "0 auto",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 0,
						boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35)",
						overflow: "hidden",
						transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
						"&:hover": {
							transform: "scale(1.025)",
							boxShadow: "0 12px 40px 0 rgba(0,0,0,0.45)",
						},
					}}
				>
					<Image
						src={bannerAniversario}
						alt="Banner 7 anos"
						fill
						style={{ objectFit: "cover" }}
					/>
				</Box>
				<Box
					position={"relative"}
					display={{ xs: "flex", md: "none" }}
					sx={{ justifyContent: "center" }}
				>
					<Image
						src={bannerAniversarioMobile}
						alt="Banner 7 anos"
						width={300}
						height={300}
					/>
				</Box>
				{/* Subtítulo/frase de impacto */}
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						mt: { xs: 2, md: 4 },
						mb: { xs: 2, md: 4 },
					}}
				></Box>
				{jsx("span", { css: ctaAnimStyle, children: ctaTexts[0] })}

				<Container>
					<Grid container py={2}>
						<Grid
							item
							xs={12}
							md={12}
							color={"white"}
							sx={{ paddingRight: { xs: 0, md: 2 } }}
						>
							<Box
								sx={{
									textAlign: "center",
									textJustify: "inter-character",
									backgroundColor: "rgba(0,0,0,.6)",
									padding: { xs: 2, md: 2 },
									borderRadius: 4,
								}}
							>
								<Paragraph
									sx={{
										mt: { xs: 0, md: 2 },
										textAlign: "center",
										fontSize: { xs: 18, md: 22 },
										fontWeight: 700,
										color: "#fff",
										letterSpacing: 0.5,
									}}
								>
									Há sete anos, começamos uma jornada com um sonho: transformar
									vidas através da educação jurídica. O MeuCurso nasceu do
									desejo de ajudar futuros advogados a alcançarem seus
									objetivos.
								</Paragraph>
								<Paragraph
									sx={{
										mt: { xs: 4, md: 2 },
										textAlign: "center",
										fontSize: { xs: 17, md: 20 },
										fontWeight: 500,
										color: "#fff",
									}}
								>
									Hoje, celebramos sete anos de dedicação e conquistas,
									realizamos nosso sonho e no caminho realizamos o de muitos
									outros, vendo nossos alunos superarem desafios e alcançarem
									metas. Ao olharmos para trás, vemos um caminho repleto de
									conquistas. Ao olharmos para o futuro, enxergamos
									possibilidades infinitas.
								</Paragraph>
								<Paragraph
									sx={{
										mt: { xs: 4, md: 2 },
										textAlign: "center",
										fontSize: { xs: 16, md: 18 },
										fontWeight: 400,
										color: "#fff",
									}}
								>
									Estamos sempre inovando, sempre buscando formar uma rede de
									apoio à sua trajetória, porque o nosso futuro está entrelaçado
									com o seu. Obrigado por fazer parte da nossa história. Vamos
									continuar realizando sonhos e moldando futuros, juntos.
								</Paragraph>
							</Box>
						</Grid>
						{/* Vídeo do YouTube removido */}
					</Grid>
				</Container>
				{jsx("span", { css: ctaAnimStyle, children: ctaTexts[1] })}

				<Container>
					<Container maxWidth="xl" disableGutters={true}>
						<Box py={5} mt={5}>
							<Container>
								{productsArr.map((item, index) => (
									<Grid container key={item.id}>
										<Grid item md={12} textAlign={"center"}>
											<H2
												marginBottom={-50}
												sx={{
													width: { xs: "300px", md: "100%" },
													height: { xs: "100px", md: "200px" },
													color: "white",
												}}
												position={"relative"}
											>
												{item.name}
											</H2>
										</Grid>
										<Section6
											showProducts={4}
											productColor="#fff"
											category={item.category}
											products={item.product}
										/>
									</Grid>
								))}
							</Container>
						</Box>
					</Container>
				</Container>
			</Container>
			{jsx("span", { css: ctaAnimStyle, children: ctaTexts[2] })}
			{/* Footer customizado local, Footer1 global removido */}
			<Box
				component="footer"
				sx={{
					width: "100%",
					background: "rgba(0,0,0,0.85)",
					color: "#fff",
					textAlign: "center",
					py: 3,
					mt: 6,
					zIndex: 2,
					position: "relative",
				}}
			>
				<Container maxWidth="md">
					<Paragraph sx={{ fontSize: 15, color: "#fff", mb: 1 }}>
						© {new Date().getFullYear()} MeuCurso. Todos os direitos reservados.
					</Paragraph>
					<Paragraph sx={{ fontSize: 13, color: "#aaa" }}>
						Desenvolvido por MeuCurso Tech Team
					</Paragraph>
				</Container>
			</Box>
		</>
	);
}
