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
import { H1, H2, Paragraph } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { useProducts } from "hooks/useProducts";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import Section14 from "pages-sections/fashion-shop-2/Section14";
import api from "utils/__api__/meu-curso";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import { useBanners } from "hooks/useBanners";
import SEO from "components/SEO";

const TJSPButton = styled(Button)({
	backgroundColor: "#7ed957",
	color: "#f7f8f3",
	borderRadius: "30px",
	textTransform: "none",
	transition: "0.3s",
	marginRight: 10,
	":hover": {
		backgroundColor: "#7ed957",
		filter: "brightness(0.8)",
	},
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] });

const TJSP = () => {
	const { products } = useProducts(api.getProductsById("323"));
	const { banners } = useBanners(api.getIndexBanners("1"));
	return (
		<ShopLayout1>
			<SEO
				title="TJ/SP"
				description="O Edital do TJ/SP 2025 saiu! Veja quais os próximos passos, onde
								estão as melhores oportunidades e como organizar seus estudos a
								partir de hoje. Nesta live imperdível, os professores Daniel
								Lamounier e Darlan Barroso farão uma análise completa do edital
								do Concurso."
			/>
			<ResponsiveBanners
				bannerDataMobile="/tjsp-banner-mobile.png"
				bannerData="/tjsp-banner.png"
			/>
			<Container
				maxWidth="xl"
				disableGutters
				sx={{ backgroundColor: "#f7f8f3", color: "black" }}
			>
				<Container>
					<Grid className={poppins.className} container py={10}>
						<Box pb={5}>
							<H1 sx={{ fontSize: 24, fontWeight: 700 }}>TJ/SP 2025</H1>
							<Typography fontSize={18} fontWeight={600} textAlign={"justify"}>
								O Edital do TJ/SP 2025 saiu! Veja quais os próximos passos, onde
								estão as melhores oportunidades e como organizar seus estudos a
								partir de hoje. Nesta live imperdível, os professores Daniel
								Lamounier e Darlan Barroso farão uma análise completa do edital
								do Concurso. Você vai entender:
							</Typography>
							<Box
								display={"flex"}
								justifyContent={"space-between"}
								flexDirection={{ xs: "column", lg: "row" }}
								mt={5}
							>
								<Paragraph fontSize={{ xs: 16, lg: 18 }}>
									✅ Como interpretar os principais pontos do edital
									<br /> ✅ Quais os cargos mais promissores
									<br /> ✅ Planejamento de preparação de alto rendimento
									<br /> ✅ Dicas práticas para você sair na frente da
									concorrência.
								</Paragraph>
								<Paragraph fontSize={{ xs: 16, lg: 18 }}>
									✅ Prova objetiva em 7/12/25 (dia único)
									<br />✅ Inscrições de 13/08 a 22/09/25
									<br />✅ Vagas: Foram criados 720 cargos
									<br />✅ Banca: Vunesp Remuneração: R$ 6.345,94 + Benefícios
								</Paragraph>
							</Box>
						</Box>
						<Box
							display={"flex"}
							width={"100%"}
							justifyContent={"space-between"}
							alignItems={"start"}
							gap={5}
							mt={5}
							flexDirection="column"
						>
							<iframe
								style={{ aspectRatio: "16/9", flex: 1 }}
								width="100%"
								height="auto"
								src="https://www.youtube.com/embed/VDeUl6hJC8c?si=1LRiaxO6XinIUDGA"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							/>
						</Box>
					</Grid>
					<Box display={"flex"} flexDirection={"column"} py={10}>
						<H2 textAlign={"center"}>Inicie seus estudos!</H2>
						<Section6 category="pos-graduacao" products={products} />
					</Box>

					<Box>
						<Blog />
					</Box>
					<Box py={5}>
						<Grid item md={12} mt={3}>
							<H2 textAlign={"center"}>INFORMAÇÕES IMPORTANTES</H2>
						</Grid>
						<Box my={5}>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Quais são os requisitos para o cargo de Escrevente Técnico
										Judiciário?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<ul style={{ listStyle: "inside" }}>
										<li>Ter ensino médio completo</li>
										<li>Idade mínima de 18 anos na data da posse</li>
										<li>Estar em dia com as obrigações eleitorais</li>
										<li>
											Não ter sido condenado por crime contra administração
											pública
										</li>
										<li>Gozar de boa saúde física e mental</li>
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
										Qual é a remuneração e quais são os benefícios?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<p>
										<strong>Remuneração inicial:</strong> R$ 6.345,94
									</p>
									<p>
										<strong>Benefícios:</strong>
									</p>
									<ul style={{ listStyle: "inside" }}>
										<li>
											Auxílio-alimentação: R$ 65 por dia (cerca de R$ 1.430/mês)
										</li>
										<li>Auxílio-transporte</li>
										<li>
											Auxílio-creche: R$ 700 para filhos até 6 anos (até 2
											filhos)
										</li>
										<li>Auxílio-saúde: R$ 520 por mês</li>
										<li>
											Adicional de qualificação: 5% (superior), 7,5%
											(especialização), 10% (mestrado), 12,5% (doutorado)
										</li>
										<li>Quinquênio: 5% a cada 5 anos + 20% após 20 anos</li>
									</ul>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Como são as inscrições e quando é a prova?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<p>
										<strong>Inscrições:</strong> De 13 de agosto a 22 de
										setembro de 2025
									</p>
									<p>
										<strong>Local:</strong> Exclusivamente pela internet no site
										www.vunesp.com.br
									</p>
									<p>
										<strong>Taxa de inscrição:</strong> R$ 81,00 (pagamento até
										23 de setembro)
									</p>
									<p>
										<strong>Data da prova:</strong> 7 de dezembro de 2025
									</p>
									<p>
										<strong>Duração:</strong> 5 horas
									</p>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Como é estruturada a prova?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<p>
										<strong>Prova Objetiva:</strong> 70 questões de múltipla
										escolha
									</p>
									<ul style={{ listStyle: "inside" }}>
										<li>
											<strong>Bloco I:</strong> 16 questões de Língua Portuguesa
										</li>
										<li>
											<strong>Bloco II:</strong> 30 questões de Conhecimentos em
											Direito
										</li>
										<li>
											<strong>Bloco III:</strong> 4 questões de Atualidades, 4
											de Matemática, 9 de Informática e 7 de Raciocínio Lógico
										</li>
									</ul>
									<p>
										<strong>Prova Discursiva:</strong> Redação
										dissertativo-argumentativa
									</p>
									<p>
										<strong>Nota mínima:</strong> 5 pontos na objetiva e 20
										pontos na redação
									</p>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel5a-content"
									id="panel5a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Onde são as vagas e há reserva de cotas?
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<p>
										<strong>Lotação:</strong> Comarca da Capital (São Paulo) e
										cidades da 1ª Região Administrativa Judiciária:
									</p>
									<p>
										São Bernardo do Campo, Santo André, Osasco, Guarulhos, Mogi
										das Cruzes, Itapecerica da Serra e suas respectivas
										circunscrições.
									</p>
									<p>
										<strong>Reserva de vagas:</strong>
									</p>
									<ul style={{ listStyle: "inside" }}>
										<li>20% para candidatos negros</li>
										<li>5% para pessoas com deficiência</li>
										<li>3% para candidatos indígenas</li>
									</ul>
								</AccordionDetails>
							</Accordion>
						</Box>
					</Box>
				</Container>
			</Container>
		</ShopLayout1>
	);
};

export default TJSP;
