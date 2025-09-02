import {
	Add,
	AddIcCallOutlined,
	Build,
	Cancel,
	ExpandMore,
	Login,
	MonetizationOn,
	ReportProblem,
	WorkspacePremium,
} from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Breadcrumbs,
	Container,
	Divider,
	Grid,
	Link,
	ListItemIcon,
	Typography,
} from "@mui/material";
import { currency } from "lib";
import { Sora } from "next/font/google";
import localFont from "next/font/local";
import { TypeAnimation } from "react-type-animation";
import { H1, H2, H3, H4, H5, Paragraph } from "../../Typography";

const myFont = localFont({
	src: "the_bold_font.ttf",
	weight: "400",
	style: "normal",
});
const sora = Sora({ subsets: ["latin"] });

const SigantureOABProduct = ({ singleProduct }) => {
	const product6Months = singleProduct.Children.find(
		(product) => product.SKU === "OAB6MASS",
	);
	const product12Months = singleProduct.Children.find(
		(product) => product.SKU === "OAB12MASS",
	);

	const breadcrumbs = [
		<Link underline="hover" key="1" color="white" href="/">
			Início
		</Link>,
		<Link
			underline="hover"
			key="2"
			color="white"
			href="/categorias/oab-1-fase-planos-de-assinatura"
		>
			Assinaturas OAB
		</Link>,
		<Typography key="3" color="white">
			{singleProduct.Name}
		</Typography>,
	];

	return (
		<>
			<Container
				data-testid="container"
				disableGutters
				maxWidth={"xl"}
				sx={{
					backgroundColor: "#161616",
					py: 5,
				}}
			>
				<Container>
					<Grid container p={5}>
						<Grid item md={12}>
							<Breadcrumbs
								separator={
									<NavigateNextIcon sx={{ color: "white" }} fontSize="small" />
								}
								aria-label="breadcrumb"
							>
								{breadcrumbs}
							</Breadcrumbs>
						</Grid>
						<Grid item xs={12} md={12} alignSelf={"center"} py={5}>
							<H1
								textAlign={"center"}
								color={"white"}
								fontWeight={"bold"}
								className={myFont.className}
								sx={{
									fontSize: { xs: "65px", md: "110px", xl: "220px" },
									letterSpacing: { xs: "-5px", md: "-20px" },
								}}
							>
								OAB
							</H1>
							<Paragraph
								className={myFont.className}
								sx={{
									fontSize: { xs: "20px", md: "43px", xl: "65px" },
									letterSpacing: { xs: "10px", md: "30px" },
									ml: { xs: 0, md: 10 },
								}}
							>
								<TypeAnimation
									preRenderFirstString={true}
									style={{
										whiteSpace: "pre-line",
										display: "block",
										fontWeight: "bolder",
										color: "#FF3131",
										textAlign: "center",
									}}
									sequence={[`ASSINATURA`, 5000, "", 1000]}
									speed={45}
									repeat={Number.POSITIVE_INFINITY}
									omitDeletionAnimation
								/>
							</Paragraph>
							{/* <img
                src="/assets/logo-oabassinatura-branco.png"
                alt=""
                style={{ width: "100%", height: "auto", margin: "0 auto" }}
              /> */}
						</Grid>
					</Grid>
					<Grid container my={4} spacing={1} justifyContent={"space-evenly"}>
						<Grid className={myFont.className} item xs={12} md={6}>
							<Box
								sx={{
									backgroundColor: "#737373",
									color: "white",
									margin: "0 auto",
									width: "50%",
									padding: 2,
								}}
							>
								<H2 fontSize={"30px"} textAlign={"center"}>
									6 MESES
								</H2>
							</Box>
							<Box
								sx={{
									backgroundColor: "#737373",
									color: "white",
									margin: "0 auto",
									width: "50%",
									padding: 2,
									my: 2,
								}}
							>
								<H2 fontSize={"30px"} textAlign={"center"}>
									12 x de {currency(product6Months.SpecialPrice / 12)}
								</H2>
							</Box>
							<Paragraph
								color={"white"}
								textAlign={"center"}
								fontWeight={"bold"}
								fontSize={"20px"}
							>
								{currency(product6Months.SpecialPrice)}*
							</Paragraph>
						</Grid>
						<Grid className={myFont.className} item xs={12} md={6}>
							<Box
								sx={{
									backgroundColor: "#FF3131",
									color: "white",
									margin: "0 auto",
									width: "50%",
									padding: 2,
								}}
							>
								<H2 fontSize={"30px"} textAlign={"center"}>
									12 MESES
								</H2>
							</Box>
							<Box
								sx={{
									backgroundColor: "#FF3131",
									color: "white",
									margin: "0 auto",
									width: "50%",
									padding: 2,
									my: 2,
								}}
							>
								<H2 fontSize={"30px"} textAlign={"center"}>
									12 x de {currency(product12Months.SpecialPrice / 12)}
								</H2>
							</Box>
							<Paragraph
								color={"white"}
								textAlign={"center"}
								fontWeight={"bold"}
								fontSize={"20px"}
							>
								{currency(product12Months.SpecialPrice)}*
							</Paragraph>
						</Grid>
					</Grid>
					<Divider />
					<Grid container py={3}>
						<Grid
							className={sora.className}
							color={"white"}
							item
							xs={12}
							md={12}
						>
							<H2 my={5} textAlign={"center"}>
								A assinatura inclui
							</H2>
							<Box
								sx={{
									display: "flex",
									justifyContent: {
										xs: "space-between",
										md: "space-evenly",
									},
									alignItems: "center",
								}}
							>
								<Box display="grid" textAlign="center">
									<H3 fontWeight={"400"}>1ª Fase OAB Full</H3>
									<span style={{ fontSize: "13px" }}>(400 aulas)</span>
								</Box>
								<Add
									sx={{
										color: "#FF3131",
									}}
								/>
								<Box display="grid" textAlign={"center"}>
									<H3 fontWeight={"400"}>2ª fase OAB Full</H3>
									<span style={{ fontSize: "13px" }}>(200 aulas)</span>
								</Box>
							</Box>
							<H3
								fontWeight={"400"}
								textAlign={"center"}
								sx={{
									backgroundColor: "#FF3131",
									width: "150px",
									padding: 2,
									margin: "0 auto",
									marginTop: "50px",
								}}
							>
								Bônus
							</H3>
							<Box
								py={5}
								sx={{
									display: "flex",
									justifyContent: {
										md: "space-around",
									},
									alignItems: "center",
									marginLeft: { xs: 0, md: "70px" },
								}}
							>
								<Box display="grid" textAlign="center">
									<H3 fontWeight={"400"}>intensivo 45</H3>
									<span style={{ fontSize: "13px" }}>
										(420 Aulas + Materiais)
									</span>
								</Box>
								<Add
									sx={{
										color: "#FF3131",
									}}
								/>
								<Box display="grid" textAlign={"center"}>
									<H3 fontWeight={"400"}>Treino de Questões</H3>
									<span style={{ fontSize: "13px" }}>(100 aulas)</span>
								</Box>
								<Add
									sx={{
										color: "#FF3131",
									}}
								/>
								<Box display="grid" textAlign={"center"}>
									<H3 fontWeight={"400"}>Eventos finais de revisão</H3>
								</Box>
							</Box>
						</Grid>
					</Grid>
					<Grid container className={sora.className}>
						<Grid item xs={12} md={12} color="white">
							<H2 my={2} textAlign={"center"}>
								Como funciona a assinatura?
							</H2>
							<Box my={3}>
								<Paragraph>
									O acesso do assinante aos cursos disponíveis se dará durante o
									tempo de vigência da assinatura (6 ou 12 meses).
								</Paragraph>
								<Paragraph>
									Para o conteúdo de 2ª fase, o assinante fará a opção pela área
									desejada.
								</Paragraph>
								{/* <Paragraph>
									O conteúdo bônus (Super Reta Final, Resolução de Questões,
									Imersão, etc) será referente ao Exame em curso durante o
									período de vigência da assinatura.
								</Paragraph> */}
								<Paragraph>
									*No cartão de crédito, parcelado em até 12 vezes ou por PIX à
									vista.
								</Paragraph>
							</Box>
						</Grid>
					</Grid>
					<Grid
						className={sora.className}
						container
						sx={{
							backgroundColor: "#ffff",
							borderRadius: "10px",
							p: 4,
						}}
					>
						<Grid item md={12}>
							<H2>INFORMAÇÕES IMPORTANTES</H2>
						</Grid>
						<Box my={4}>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel1a-content"
									id="panel1a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Modelo de Assinatura e Acesso ao Conteúdo
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										A opção pelo modelo de assinatura permite ao aluno acessar,
										pelo período contratado, o conteúdo disponibilizado pelo
										MeuCurso para a linha específica escolhida.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel2a-content"
									id="panel2a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Conteúdo Disponibilizado
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										O conteúdo contém aulas, materiais em pdfs (e-books),
										questões, e outros materiais pedagógicos, conforme o projeto
										de estudos do concurso ou área selecionada.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel3a-content"
									id="panel3a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Formato das Aulas e Novos Cursos
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										As aulas são disponibilizadas na forma gravada. Havendo a
										publicação de novos cursos (reta final ou eventos finais) na
										área contratada para a assinatura, o aluno receberá também o
										pacote com os novos cursos (que também poderão ter
										transmissão ao vivo), durante o período da assinatura.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Atualizações de Conteúdo
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										As atualizações de conteúdo poderão ocorrer por meio de
										substituição das aulas, disponibilização de novos materiais
										ou realização de lives.
									</Typography>
								</AccordionDetails>
							</Accordion>

							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Assinatura OAB e Acesso à 2ª Fase
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										A assinatura OAB contempla também o acesso ao conteúdo de 2a
										fase. Em relação ao módulo de 2a fase, no momento da
										contratação da assinatura, o aluno recebe um “crédito” para
										fazer a opção por uma das áreas de 2a fase OAB. Durante o
										tempo de vigência da assinatura, o aluno poderá ter acesso a
										uma das sete áreas da prova, com a possibilidade de troca de
										área caso esteja dentro do período da assinatura.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Tempo de Acesso ao Conteúdo
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										O acesso ao conteúdo seguira o tempo da assinatura (6 ou 12
										meses).
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Acesso VIP a Eventos Presenciais
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Conforme a política da assinatura, o assinante poderá ter
										acesso VIP ou com valor especial em eventos presenciais de
										revisão de provas, realizados pelo MeuCurso, mediante
										inscrição, respeitado o limite de 20% da capacidade
										presencial disponível.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Registro do Contrato de Prestação de Serviço
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										O contrato de prestação de serviço está registrado no 9ª
										Cartório de Títulos e Documentos da Capital de São Paulo -
										clique para acessar o contrato.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Aceitação dos Termos de Uso
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Ao efetivar a matrícula, o aluno aceita e adere ao contrato
										e aos termos de uso da Plataforma BIPE .
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Composição da Assinatura e Emissão de Nota Fiscal
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										A assinatura ou rota de estudo poderá ser composta por
										cursos (aulas e conteúdo complementar) e/ou por e-book
										digital, ou mesmo livros impressos (conforme descrição do
										serviço/produto). A emissão da nota fiscal relativa à
										assinatura observará o tempo da prestação do serviço
										(período de acesso) e data da compra para o faturamento do
										livro físico ou digital.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Regras sobre cancelamento
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Até o limite de 7 dias, o assinante poderá requer o
										cancelamento da assinatura, desde que não tenha acessado
										mais que 15% do conteúdo e, havendo ebook, não tenha sido
										feito o download do arquivo.
									</Typography>
									<Typography>
										Após o prazo de 7 dias, o cancelamento poderá ser requerido
										a qualquer tempo, com a observância das seguintes regras de
										restituição de valores e multa:
									</Typography>

									<Typography mt={3} fontWeight={"bold"}>
										Multa por consumo:
									</Typography>
									<Typography>
										Caso o aluno opte pelo crédito, após liberado em sistema, o
										prazo para utilização é de 180 dias.
									</Typography>
									<Typography>
										Se o consumo do conteúdo for maior ou igual a 30%, não
										haverá restituição dos valores, independente do prazo do
										contrato da assinatura; Se o consumo do conteúdo for menor
										que 30% dentro do prazo de 30 dias, haverá multa de 20%
										sobre o valor restante do contrato. Acima de 30 dias não
										haverá restituição dos valores devidos, independente do % do
										consumo do conteúdo. A devolução dos valores devidos, por se
										tratar do pagamento por meio de cartão de crédito, será
										realizado estorno através da operadora de cartão de crédito,
										dentro da data de fechamento da fatura, o que pode ocorrer a
										devolução dos valores dentro dos procedimentos de cada
										operadora. A solicitação de cancelamento deverá ser por
										e-mail no contato@fadeg.com.br.
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls="panel4a-content"
									id="panel4a-header"
								>
									<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
										Inadimplência e Suspensão de Acesso
									</p>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Em caso de inadimplência de parcelas, o acesso à Plataforma
										será suspenso até a regularização das parcelas em atraso,
										sem prejuízo das medidas de cobrança.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</Box>
					</Grid>
				</Container>
			</Container>
		</>
	);
};

export default SigantureOABProduct;
