import ShopLayout1 from "components/layouts/ShopLayout1";

import { Button, Grid, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";

import styled from "@emotion/styled";
import Depoiments from "components/Depoiments";
import SEO from "components/SEO";
import { H1, H2, Paragraph, Span } from "components/Typography";
import TenMotives from "components/tenmotives-postgraduate/TenMotives";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import useWindowSize from "hooks/useWindowSize";
import { Poppins, Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section14 from "pages-sections/fashion-shop-2/Section14";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import api from "utils/__api__/meu-curso";

const sora = Sora({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const PosGraduacao = () => {
	const width = useWindowSize();
	const [visibleSlides, setVisibleSlides] = useState(4);

	const { products } = useProducts(api.getProductsById("3"));

	const { banners } = useBanners(api.getIndexBanners("9"));

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
					title="Cursos de Pós-Graduação em Direito confira"
					sitename="MeuCurso"
					description="Aprofunde seus conhecimentos na área jurídica com nossos cursos de pós-graduação em Direito. Prepare-se para se destacar na sua carreira!"
				/>
				<Container
					maxWidth="xl"
					disableGutters
					sx={{ backgroundColor: "#21385A", py: 2 }}
				>
					<Section1 carouselData={banners} />
					{/* <Container>
            <Grid container spacing={2} marginTop={5}>
              <Grid item md={6}>
                <Box textAlign={{ xs: "center", lg: "start" }}>
                  <h1>Qual a importância de um curso de pós-graduação?</h1>
                  <p>
                    Estudar de forma aprofundada a área que você escolheu atuar,
                    aprender com os maiores juristas do país, ter uma visão
                    teórica e prática dentro dos temas da área, desenvolver
                    raciocínio crítico, entre outras vantagens.
                  </p>
                  <p>
                    Conheça nossos cursos de Pós-graduação e os 10 motivos para
                    você se reinventar para o mercado de trabalho!
                  </p>
                </Box>
                <Box
                  textAlign={{
                    lg: "start",
                    xs: "center",
                  }}
                  my={2}
                >
                  <Button href="#cursos" variant="contained">
                    QUERO COMEÇAR MEUS ESTUDOS!
                  </Button>
                </Box>
              </Grid>
              <Grid mx={"auto"} item lg={6}>
                <Box>
                  <iframe
                    style={{ aspectRatio: "16/9" }}
                    title="vimeo-player"
                    src="https://www.youtube.com/embed/8Bt2VvhbRDA?si=ph0dpAVAOcmgdgDN"
                    width="100%"
                    height="auto"
                  ></iframe>
                </Box>
              </Grid>
            </Grid>
          </Container> */}
					<Container sx={{ marginTop: 5 }}>
						<Grid container>
							<Grid item md={12} textAlign={"center"} py={2}>
								<H2 id="cursos" color={"white"}>
									Cursos em Destaques
								</H2>
							</Grid>
						</Grid>
						<Section14 category="Pos-Graduacao" products={products} />
					</Container>
					<Container
						className={sora.className}
						sx={{ height: "100dvh", display: "flex", alignItems: "center" }}
					>
						<Grid container>
							<Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 }, mt: 5 }}>
								<Paragraph
									color={"white"}
									fontSize={"25px"}
									sx={{ textAlign: { xs: "start", md: "start" } }}
								>
									Para você que está começando sua carreira
								</Paragraph>
								<H1
									color={"white"}
									sx={{
										fontSize: {
											xs: "30px",
											md: "50px",
										},
										textAlign: { xs: "start", md: "start" },
									}}
								>
									PÓS EM ATUAÇÃO{" "}
									<TypeAnimation
										preRenderFirstString
										style={{
											whiteSpace: "pre-line",
											display: "block",
											color: "#CB6CE6",
											textAlign: "start",
										}}
										sequence={["PRÁTICA", 5000, "", 1000]}
										speed={45}
										repeat={Number.POSITIVE_INFINITY}
										omitDeletionAnimation
									/>{" "}
									NA ADVOCACIA
								</H1>
								<Box
									sx={{
										display: "flex",
										flexDirection: { xs: "column", md: "row" },
									}}
									gap={2}
									my={5}
								>
									<Link
										href={
											"/produto/pos-graduacao-em-advocacia-na-pratica-primeiros-passos-2024"
										}
									>
										<Button
											className={poppins.className}
											variant="contained"
											sx={{
												p: 0,
												color: "white",
												fontSize: "20px",
												backgroundColor: "#CB6CE6",
												transition: "0.3s",
												borderRadius: "20px",
												width: { xs: "100%", md: "200px" },
												"&:hover": {
													backgroundColor: "#CB6CE6",
													filter: "brightness(0.8)",
												},
											}}
										>
											Matricule-se
										</Button>
									</Link>
									<Link
										href={
											"/produto/pos-graduacao-em-advocacia-na-pratica-primeiros-passos-2024"
										}
									>
										<Paragraph
											sx={{
												textAlign: { xs: "center", md: "start" },
												textDecoration: " underline",
												textDecorationColor: "white",
												textUnderlineOffset: "5px",
												cursor: "pointer",
												fontSize: "20px",
												color: "white",
												transition: "0.5s",
												":hover": {
													textDecorationColor: "#CB6CE6",
												},
											}}
										>
											Saiba mais
										</Paragraph>
									</Link>
								</Box>
							</Grid>
							<Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
								<Image
									width={610}
									height={624}
									alt="banner home da pos graduação"
									src={"/assets/images/banner-homepos.png"}
									style={{ width: "100%", height: "auto" }}
								/>
							</Grid>
						</Grid>
					</Container>
					<TenMotives />
					<Depoiments titleColor="white" />
				</Container>
			</ShopLayout1>
		</>
	);
};
export default PosGraduacao;
