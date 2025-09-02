import { useProducts } from "hooks/useProducts";
import api from "../src/utils/__api__/meu-curso";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { Box, Container, Grid, useTheme } from "@mui/material";
import SEO from "components/SEO";
import { H1, H2, H3 } from "components/Typography";
import NewCountdown from "components/NewCountdown";
import { Sora } from "next/font/google";
import Image from "next/image";
import banner_mobile from "../public/assets/images/vou-passar/banner_mobile.png";
import img_1 from "../public/assets/images/vou-passar/img_1.png";
import img_2 from "../public/assets/images/vou-passar/img_2.png";
import img_3 from "../public/assets/images/vou-passar/img_3.png";
import discount from "../public/assets/images/vou-passar/banner.jpg";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

const NomeNaLista = () => {
	const theme = useTheme();
	const { products: oab2 } = useProducts(api.getProductsById("161"));
	const expirationDate = new Date("November 29, 2024 00:00:00");

	const imgArr = [
		{
			id: 1,
			img: img_1,
			alt: "50% OFF Nos cursos!",
		},
		{
			id: 2,
			img: img_2,
			alt: "Garantia MEUCURSO, você garante seu crédito 100% caso não passe!",
		},
		{
			id: 3,
			img: img_3,
			alt: "100% CASHBACK NOVA PÓS!",
		},
	];
	return (
		<ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
			<SEO title="Nome na lista" sitename="MeuCurso" />
			<Container
				className={sora.className}
				disableGutters={true}
				maxWidth="xl"
				sx={{
					color: "#6B2A50",
					background: `radial-gradient(circle at 16% 89%, #FFFFFF6E 0%, #D08842 100%),
                    url(https://grainy-gradients.vercel.app/noise.svg);
                    contrast(170%) brightness(20%);`,
				}}
			>
				{/* <NewCountdown expirationDate={expirationDate} /> */}
				<Box
					position={"relative"}
					width={"100%"}
					height={"25rem"}
					display={{ xs: "none", md: "flex" }}
				>
					<Image
						src={discount}
						fill
						alt={"desconto"}
						style={{ objectFit: "fill" }}
					/>
				</Box>
				<Box
					position={"relative"}
					width={"100%"}
					height={"25rem"}
					display={{ xs: "flex", md: "none" }}
				>
					<Image
						src={banner_mobile}
						fill
						alt={"desconto"}
						style={{ objectFit: "fill" }}
					/>
				</Box>
				<Container
					sx={{
						paddingTop: "2rem",
						justifyContent: "center",
						display: "flex",
						flexDirection: "column",
						gap: "2rem",
					}}
				>
					<Grid
						container
						xs={12}
						maxWidth={"53.125rem"}
						alignSelf={"center"}
						alignItems={"start"}
						rowGap={4}
						columnGap={4}
					>
						<Grid item xs={12}>
							<H1 textAlign={"center"}>Nós acreditamos na sua aprovação!</H1>
							<H2 textAlign={"center"}>E você, acredita?</H2>
						</Grid>
						<Box sx={{ display: "flex" }}>
							<H3
								sx={{ textJustify: "inter-word", textAlign: "justify" }}
								fontWeight={500}
							>
								Nós vamos te ajudar! Até o dia
								<span style={{ fontWeight: 800 }}> 30 de novembro</span> você tem
								uma uma condição especial no curso de 2ª Fase! Além de tudo isso
								você terá <span style={{ fontWeight: 800 }}>cashback</span> para
								o curso
								<span style={{ fontWeight: 800 }}>
									{" "}
									Pós-Graduação Atuação Prática na Advocacia
								</span>{" "}
								, que aborda tudo o que você precisa saber para se destacar no
								mercado de trabalho, além de encontros mensais com Mentores que
								te ajudarão no dia a dia da prática da advocacia.
							</H3>
						</Box>
						
					</Grid>

					<Section6
						category="oab-2-fase-todas-as-areas"
						products={oab2}
					/>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: 4,
						}}
					>
						<Box sx={{ textAlign: "center" }}>
							<H2 fontWeight={"700"}>ANTECIPE SUA MATRÍCULA</H2>
							<H3 fontWeight={"500"}>COM PRESENTES INCRÍVEIS!</H3>
							<Box
								sx={{ justifyContent: "center" }}
							>
								<Link
									href={
										"https://campanhas.meucurso.com.br/regulamento-cashback.pdf"
									}
									target="_blank"
								>
									<i style={{ textDecoration: "underline", fontSize: 12 }}>
										*regulamento (clique aqui)
									</i>
								</Link>
							</Box>
						</Box>
						<Container
							sx={{
								display: "flex",
								justifyContent: { xs: "space-between", md: "space-around" },
								paddingX: { xs: 0 },
								position: "relative",
							}}
						>
							{imgArr.map((item) => (
								<Box
									key={item.id}
									position={"relative"}
									width={"100%"}
									maxWidth={{ xs: "6rem", md: "20.875rem" }}
									height={{ xs: "8.9375rem", md: "31.25rem" }}
								>
									<Image
										alt={item.alt}
										src={item.img}
										fill
										style={{ objectFit: "fill", bottom: 0 }}
									/>
								</Box>
							))}

						</Container>
					</Box>
				</Container>
			</Container>
		</ShopLayout1>
	);
};

export default NomeNaLista;
