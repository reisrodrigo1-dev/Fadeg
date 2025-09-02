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
import { useProducts } from "hooks/useProducts";
import { Poppins } from "next/font/google";
import Image from "next/image";
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

const infos = [
	{
		id: 1,
		text1: "312",
		text2: "Aulas",
		text3: "Conteúdo, priorizado com temas essenciais",
	},
	{
		id: 2,
		text1: "500",
		text2: "Questões",
		text3: "Treine para a prova no formato da banca ",
	},
	{
		id: 3,
		text1: "18",
		text2: "Mentores",
		text3:
			"Corpo docente composto por juiz, promotor, desembargador e delegado",
	},
];

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const Enam = () => {
	const { products } = useProducts(api.getProductsById("193"));
	return (
		<ShopLayout1>
			<Container
				maxWidth="xl"
				disableGutters
				sx={{ backgroundColor: "#4b0183" }}
			>
				<Container>
					<ResponsiveBanners bannerData={"/banner_enam.png"} />
					<Grid className={poppins.className} container>
						<Grid item xs={12} md={6} my={"auto"} py={5}>
							<Paragraph color={"white"} fontSize={20}>
								Desenvolvido especialmente para bacharéis em Direito que almejam
								a carreira judicial, nosso curso oferece uma preparação completa
								e eficaz para o Exame Nacional da Magistratura. Com aulas online
								e presencial, simulados realistas e material didático
								atualizado, você terá tudo o que precisa para dominar as
								disciplinas e garantir sua aprovação.
							</Paragraph>
							<Box mt={3}>
								<EnamButton variant="contained">Confira o edital</EnamButton>
								<EnamButton variant="contained">Baixe o descritivo</EnamButton>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<iframe
								style={{ aspectRatio: "16/9" }}
								width="100%"
								height="auto"
								src="https://www.youtube.com/embed/rn5Q82pWTqA?si=SvThW9_55hm_nJdJ"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							/>
						</Grid>
					</Grid>
					<Grid
						container
						sx={{
							border: "2px solid  #7ed957",
							borderRadius: "30px",
							padding: 2,
						}}
					>
						{infos.map((info) => (
							<Grid key={info.id} item xs={12} md={4} color={"white"}>
								<Paragraph
									marginBottom={"-30px"}
									color={"#7ed957"}
									fontWeight={700}
									fontSize={81}
									textAlign={"center"}
								>
									{info.text1}
								</Paragraph>
								<Paragraph
									color={"#7ed957"}
									fontWeight={700}
									fontSize={31}
									textAlign={"center"}
								>
									{info.text2}
								</Paragraph>
								<Paragraph textAlign={"center"}>{info.text3}</Paragraph>
							</Grid>
						))}
					</Grid>
					<Section6 category="pos-graduacao" products={products} />
					<Box color={"white"}>
						<Blog />
					</Box>
					<Grid container>
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
					</Grid>
				</Container>
			</Container>
		</ShopLayout1>
	);
};

export default Enam;
