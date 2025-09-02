import styled from "@emotion/styled";
import {
	Cancel,
	ExpandMore,
	Login,
	MonetizationOn,
	ReportProblem,
} from "@mui/icons-material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import Blog from "components/Blog";
import { H2, Paragraph } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import Section14 from "pages-sections/fashion-shop-2/Section14";
import api from "utils/__api__/meu-curso";

const EnamButton = styled(Button)({
	backgroundColor: "#7ed957",
	color: "#4b0183",
	borderRadius: "30px",
	textTransform: "none",
	transition: "0.3s",
	marginRight: 10,
	":hover": {
		backgroundColor: "#7ed957",
		filter: "brightness(0.8)",
	},
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const DefensoriaPublica = () => {
	const { products } = useProducts(api.getProductsById("294"));
	const { banners } = useBanners(api.getIndexBanners("20"));
	return (
		<ShopLayout1>
			<Container
				maxWidth="xl"
				disableGutters
				sx={{ backgroundColor: "#4b0183" }}
			>
				<Container>
					<Section1 carouselData={banners} />
					<Box
						className={poppins.className}
						sx={{
							display: "flex",
							justifyContent: "start	",
							gap: 10,
							marginBottom: 25,
						}}
					>
						<Box
							color={"white"}
							// Aplica estilo a todos os <strong>
						>
							<Paragraph
								sx={{
									strong: { fontWeight: 600 },
									maxWidth: 600,
									textAlign: "justify",
									fontSize: 18,
								}}
							>
								<strong>
									Prepare-se de forma estratégica para o Concurso de Analista de
									Defensoria Pública de SP!{" "}
								</strong>
								Quer dar o próximo passo rumo à sua aprovação no{" "}
								<strong>
									Concurso de Analista de Defensoria Pública de SP?{" "}
								</strong>
								Este é o momento decisivo para assumir o cargo dos sonhos!
							</Paragraph>
							<br />
							<Paragraph
								sx={{
									strong: { fontWeight: 600 },
									maxWidth: 600,
									textAlign: "justify",
									fontSize: 18,
								}}
							>
								Nosso curso é{" "}
								<strong>100% focado no Termo de Referência da DPE-SP </strong>e
								no contrato com a banca
								<strong>FCC </strong>, por isso você terá todo o conteúdo
								alinhado com as exigências do concurso. Além disso,
								desenvolvemos o material a partir do edital para garantir uma
								preparação completa e estratégica.
							</Paragraph>

							{/* <Box >
								<H2 sx={{ mt: 10 }}>
									<strong>Sobre o concurso:</strong>
								</H2>

								<Paragraph color={"white"} sx={{
									strong: { fontWeight: 600 },
									maxWidth: 600,
									textAlign: "justify",
									fontSize: 18,
								}}>
									<br />
									💻 Cargo: Analista da DPE-SP
									<br />
									🎓 Nível: Ensino Superior
									<br />
									📑 Edital:{" "}
									<Link
										style={{ color: "#90EE90", textDecoration: "underline" }}
										href={
											"https://doe.sp.gov.br/executivo/defensoria-publica-do-estado/i-concurso-publico-para-ingresso-na-carreira-de-analista-de-defensoria-publica-2025012311421199837635"
										}
										target="_blank"
									>
										Já disponível
									</Link>
									<br />
									💲Vencimentos: R$9.123,70 (Remuneração Inicial)
									<br />
									📅 Inscrições: De 27/01 a 27/02/2025
									<br />
									📋 Taxa de Inscrição: R$170,00
									<br />
									📝 Prova Objetiva: 13/04/2025
									<br />
									📝 Prova Discursiva: 29/06/2025
									<br />
									📚 Banca Organizadora: Fundação Carlos Chagas (FCC)
								</Paragraph>
							</Box> */}
						</Box>
						<Box sx={{ height: 200, width: 600 }}>
							<iframe
								style={{ aspectRatio: "16/9" }}
								width="100%"
								height="auto"
								src="https://www.youtube.com/embed/xBhxqvqsX6U?si=UWCLMHWPbET-CNyr"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							/>
							<Button
								sx={{
									backgroundColor: "#13AA52",
									padding: 2,
									color: "white",
									fontWeight: 600,
									fontSize: "18px",
									width: "100%",
									":hover": {
										// filter: "brightness(80%)",
										backgroundColor: "#0B6631",
									},
								}}
							>
								<Link
									href={"https://conteudo.meucurso.com.br/concursos-meucurso"}
								>
									BAIXE O CRONOGRAMA!
								</Link>
							</Button>
						</Box>
					</Box>

					<Section6
						category="Concursos-Publicos-Defensoria-Publica"
						products={products}
					/>
					<Box color={"white"}>
						<Blog />
					</Box>
					{/* <Grid container>
						<Grid item md={12} color={"white"} mt={3}>
							<H2>INFORMAÇÕES IMPORTANTES</H2>
						</Grid>
						<Box my={5}>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Quem pode prestar o ENAM?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<ul style={{ listStyle: "inside" }}>
										<li>Bacharéis em Direito com diploma reconhecido;</li>
										<li>
											Candidatos que tenham exercido, por no mínimo 3 anos,
											atividades jurídicas comprovadas, como advocacia, atuação
											no Ministério Público, defensoria pública ou carreiras
											correlatas
										</li>
									</ul>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Quais disciplinas são cobradas no ENAM?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									As principais áreas cobradas são:
									<ul style={{ listStyle: "inside" }}>
										<li>Direito Constitucional</li>
										<li>Direito Administrativo</li>
										<li>Direito Penal</li>
										<li>Direito Civil</li>
										<li>Direito Processual Penal</li>
										<li>Direito Processual Civil</li>
										<li>Direito Tributário</li>
										<li>Direito Empresarial</li>
										<li>Direito Ambiental</li>
										<li>Direitos Humanos</li>
										<li>Filosofia do Direito e Ética</li>
									</ul>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Qual é a periodicidade do ENAM?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									A periodicidade ainda depende de regulamentação, mas a
									expectativa é de que o exame ocorra anualmente ou de acordo
									com a demanda dos tribunais.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Qual a diferença entre o ENAM e os concursos anteriores?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									Os concursos anteriores eram realizados de forma independente
									por cada tribunal. Já o ENAM unifica o processo seletivo,
									permitindo maior padronização, isonomia e transparência na
									escolha dos magistrados.
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										O ENAM substitui os concursos de magistratura estaduais?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									Sim. O objetivo principal do ENAM é unificar o processo de
									ingresso na magistratura, eliminando os concursos isolados de
									tribunais estaduais. Contudo, detalhes como critérios de
									classificação e lotação dependem de regulamentação pelo
									Conselho Nacional de Justiça (CNJ).
								</AccordionDetails>
							</Accordion>
						</Box>
					</Grid> */}
				</Container>
			</Container>
		</ShopLayout1>
	);
};

export default DefensoriaPublica;
