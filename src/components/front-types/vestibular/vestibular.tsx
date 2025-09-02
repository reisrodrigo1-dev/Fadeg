import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import ConstructionIcon from "@mui/icons-material/Construction";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoginIcon from "@mui/icons-material/Login";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import RouteIcon from "@mui/icons-material/Route";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Breadcrumbs,
	Button,
	Container,
	Grid,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { H1, H2, H3, H5, Paragraph } from "../../Typography";

import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import OportunityButton from "components/OportunityButton";
import ProductDepoiments from "components/ProductDepoiments";
import SurprisePosCoupon from "components/SurprisePosCoupon";
import { Attributes } from "components/attributes/Attributes";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import { Modules } from "components/modules/Modules";
import { TeachersCarousel } from "components/teachersCaroussel/TeachersCarousel";
import { TeachersFrame } from "components/teachersFrame/TeachersFrame";
import useWindowSize from "hooks/useWindowSize";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EmentaButton = styled(LoadingButton)({
	backgroundColor: "#8739AA",
	color: "white",
	transition: "0.3s",
	"&:hover": {
		backgroundColor: "#8739AA",
		filter: "brightness(0.8)",
	},
});

const Vestibular = ({ singleProduct }) => {
	const { data: session } = useSession();

	const exclusives = [
		{
			id: 1,
			text: "Vestibular: O vestibular da Faculdade Fadeg é feito de forma digital. Você realiza sua inscrição e faz o vestibular no conforto de sua casa. O resultado é divulgado imediatamente após a prova.",
		},
		{
			id: 2,
			text: "ENEM: Sua pontuação no ENEM garante isenção da realização do vestibular.\nA nota mínima exigida é de 250 pontos\nSerão aceitos resultados a partir de 2020",
		},
		// {
		// 	id: 3,
		// 	text: "Clica no botão “Aplicar ao Vestibular”.",
		// },
		// {
		// 	id: 4,
		// 	text: "O aluno é redirecionado para o site aluno.fadeg.com.br",
		// },
		// {
		// 	id: 5,
		// 	text: "A conta do aluno é criada automaticamente (ou ele faz login, se já tiver cadastro).",
		// },
		// {
		// 	id: 6,
		// 	text: "A rota do vestibular é adicionada automaticamente à conta, vinculada ao curso escolhido.",
		// },

		// {
		// 	id: 8,
		// 	text: "O aluno escolhe a modalidade de ingresso: Vestibular online OU Nota do ENEM",
		// },
		// {
		// 	id: 9,
		// 	text: "Após realizar o vestibular (ou inserir a nota do ENEM), o aluno é direcionado para a pré-matrícula.",
		// },
	];

	const breadcrumbs = [
		<Link underline="hover" key="1" color="white" href="/">
			Início
		</Link>,
		<Link underline="hover" key="2" color="white" href="/cursos/pos-graduacao">
			FADEG
		</Link>,
		<Typography key="3" color="white">
			{singleProduct.Name}
		</Typography>,
	];

	const ecommerceAtributes = JSON.parse(
		singleProduct.ProductEcommerceAttributes,
	);

	const COLOR = {
		PRIMARY: "#FE9C08",
		SECONDARY: "#1A2C41",
	};

	const gradientBackground = `linear-gradient(to right, ${COLOR.PRIMARY}, ${COLOR.SECONDARY})`;
	const coordinatorOverview = singleProduct?.Teachers?.find(
		(item) => item.Name === singleProduct?.CoordinatorName,
	)?.ResumeOverview;

	return (
		<>
			<Container
				disableGutters
				maxWidth={"xl"}
				sx={{
					backgroundColor: COLOR.PRIMARY,
					backgroundImage: `linear-gradient(90deg, ${COLOR.PRIMARY} 0%, ${COLOR.SECONDARY} 100%)`,
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
						<Grid item md={12}>
							<Box
								display={"flex"}
								justifyContent={"space-between"}
								alignItems={"center"}
							>
								<H1 color={"white"}>{singleProduct.Name}</H1>
								<Box sx={{ display: { xs: "none", md: "block" } }}>
									<Image
										width={200}
										height={110}
										src={
											"https://campanhas.meucurso.com.br/logo/pos/fadeg_pos.png"
										}
										alt="Fadeg"
										style={{ maxWidth: "100dvw" }}
									/>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Container>
			<Container>
				<Attributes attributes={ecommerceAtributes} color={COLOR.SECONDARY} />
			</Container>
			<Container sx={{ mt: 5 }}>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box>
						<H2 fontSize={28} color={COLOR.SECONDARY} pt={4}>
							SOBRE O CURSO
						</H2>
						<Box
							flexDirection={{ xs: "column", md: "row" }}
							display={"flex"}
							alignItems={{ xs: "center", md: "start" }}
						>
							<Box
								sx={{
									mb: {
										xs: "10rem",
										md: ".25rem",
										display: "flex",
										flexDirection: "column",
										gap: 5,
									},
								}}
							>
								<Box
									dangerouslySetInnerHTML={{
										__html: singleProduct.ShortDescription,
									}}
									sx={{ maxWidth: 600 }}
								/>

								<OportunityButton
									singleProduct={singleProduct}
									bgcolor={COLOR.SECONDARY}
								/>
							</Box>
						</Box>
					</Box>
					<Box width={"max-width"}>
						<Box display={"flex"} alignItems={"center"}>
							<Avatar sx={{ backgroundColor: COLOR.SECONDARY, mr: 1 }}>
								<StarBorderIcon />
							</Avatar>
							<H2 fontSize={"20px"}>Como ingressar?</H2>
						</Box>
						<Box
							sx={{
								backgroundColor: "#E8E5E5",
								p: 2,
								my: 1,
								width: "100%",
								maxWidth: 360,
							}}
						>
							<List
								sx={{
									width: "100%",
									maxWidth: 360,
								}}
							>
								{exclusives.map((items) => (
									<ListItem key={items.id} sx={{ alignItems: "start" }}>
										<ListItemIcon sx={{ color: COLOR.PRIMARY }}>
											<ArrowCircleRightIcon />
										</ListItemIcon>
										<ListItemText
											sx={{
												whiteSpace: "pre-wrap",
												"& .css-1dswxpy-MuiTypography-root": {
													fontSize: "16px",
												},
											}}
											primary={items.text}
										/>
									</ListItem>
								))}
							</List>
							<Box display={"flex"} alignItems={"center"}>
								<WorkspacePremiumIcon
									sx={{ fontSize: 50, color: COLOR.SECONDARY }}
								/>
								<H5 textAlign={"center"} sx={{ fontWeight: "bolder " }}>
									FADEG - Faculdade de Direito, Educação e Gestão{" "}
								</H5>
							</Box>
							<Paragraph fontSize={"13px"} textAlign={"center"} my={1}>
								Credenciada por intermédio da Portaria n.º 1.382 de 14/07/2023,
								publicada no DOU em 17/07/2023.
							</Paragraph>
						</Box>

						<i>SKU:{singleProduct.SKU}</i>
					</Box>
				</Box>
			</Container>

			<Container>
				{/* <Grid container my={4}>
					<Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
						<Box
							mt={6}
							position={"relative"}
							sx={{ backgroundColor: "#EBEBEB", borderRadius: 5, p: 5 }}
						>
							<PlayCircleIcon
								sx={{
									fontSize: 55,
									color: COLOR.SECONDARY,
									position: "absolute",
									top: 75,
									left: -23,
								}}
							/>
							<H2 sx={{ fontWeight: "bolder" }}>CONHEÇA O CURSO</H2>
							<Paragraph sx={{ width: { md: 408 } }}>
								Venha conhecer a Rota Degustação e navegue pela plataforma
								exclusiva do MeuCurso, além de poder assistir à aula inaugural
								deste curso!
							</Paragraph>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<iframe
							width="560"
							style={{ maxWidth: "100%" }}
							height="315"
							src={`https://www.youtube.com/embed/${singleProduct.VideoTag}?si=C4lydf2ImtBMofs4`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						/>
					</Grid>
				</Grid> */}
				<Grid container my={4}>
					<Grid item xs={12} md={12}>
						<ProductDepoiments />
					</Grid>
				</Grid>
			</Container>
			<Grid container my={4} sx={{ background: gradientBackground }}>
				<Container>
					<Grid item md={12}>
						<H2 textAlign={"center"} paddingTop={4} color={"white"}>
							PRINCIPAIS DÚVIDAS SOBRE O CURSO
						</H2>
					</Grid>
					<Box py={5}>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<LoginIcon
									sx={{
										fontSize: 50,
										color: COLOR.SECONDARY,
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Plataforma BIPE - Área do Aluno
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Efetivada a pré-matrícula, o aluno terá acesso à Área do
									Aluno:{" "}
									<span style={{ fontWeight: "bolder" }}>
										aluno.fadeg.com.br
									</span>
								</Typography>
								<Image
									src="/bipe-aluno.png"
									alt="bipe aluno"
									width={1200}
									height={150}
									style={{ maxWidth: "100dvw", height: "auto" }}
								/>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<ReportProblemIcon
									sx={{
										fontSize: 50,
										color: COLOR.SECONDARY,
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Efetivação da matrícula
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<ol>
									<li>
										Efetivada a pré-matrícula no site, o aluno terá acesso à
										Área do Aluno{" "}
										<a
											style={{
												textDecoration: "underline",
												color: "blue",
											}}
											target="_blank"
											href="http://aluno.fadeg.com.br"
											rel="noreferrer"
										>
											aluno.fadeg.com.br
										</a>
									</li>
									<li>O acesso é pelo prazo do curso/rota.</li>
									<li>
										A matrícula ficará condicionada ao pagamento da primeira
										parcela e a entrega dos documentos.
									</li>
									<li>
										A entrega dos documentos será realizada na forma digital,
										por meio do link específico na área do aluno, no prazo de 15
										dias.
									</li>
									<li>
										Sobre a efetivação da matrícula, consulte mais informações
										no{" "}
										<a
											style={{
												textDecoration: "underline",
												color: "blue",
											}}
											target="_blank"
											href="https://campanhas.meucurso.com.br/manual-do-aluno-fadeg.pdf"
											rel="noreferrer"
										>
											Manual do Aluno.
										</a>
									</li>
									<li>
										<a
											style={{
												textDecoration: "underline",
												color: "blue",
											}}
											target="_blank"
											href="https://arquivos.meucurso.com.br/Documentos/Contrato_Pos-2023-Registro.pdf"
											rel="noreferrer"
										>
											Contrato Pós Graduação
										</a>
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel3a-content"
								id="panel3a-header"
							>
								<BuildIcon
									sx={{
										fontSize: 50,
										color: COLOR.SECONDARY,
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Conteúdo, aulas, atividades e conclusão do curso
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<ol>
									<li>
										O curso poderá ser realizado no período de 6 a 12 meses.
									</li>
									<li>
										O curso de Pós-graduação (EAD) é composto por videoaulas,
										e-books, discussão de casos práticos, materiais
										complementares de leitura, fóruns, plantões especiais ou
										outros objetos pedagógicos que venham a fazer parte do
										programa, especialmente para a composição da carga horária
										integral do curso.
									</li>
									<li>
										O programa também poderá dispor de atividades (facultativas
										ou obrigatórias) e avaliação final ou por módulo.
									</li>
									<li>
										O aluno poderá optar pela realização do trabalho de
										conclusão de curso (artigo científico), na forma do
										regimento da instituição. Em caso de aprovação, o título do
										trabalho constará na certificação.
									</li>
									<li>
										O corpo docente e o calendário/cronograma poderão sofrer
										alteração.
									</li>
									<li>Pós de 6 meses: 2 aulas na semana</li>
									<li>Pós de 12 meses: 1 aulas na semana</li>
								</ol>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel4a-content"
								id="panel4a-header"
							>
								<WorkspacePremiumIcon
									sx={{
										fontSize: 50,
										color: COLOR.SECONDARY,
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Certificação
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<ol>
									<li>
										O curso de eEspecialização faz parte do programa de
										Pós-graduação da FADEG - Faculdade de Direito, Educação e
										Gestão, credenciada por intermédio da Portaria n.º 1.382 de
										14/07/2023, publicada no DOU em 17/07/2023.
									</li>
									<li>
										Ao final do curso, atendidos todos os requisitos do programa
										acadêmico, o aluno receberá o certificado de especialista na
										área tema do curso de pós-graduação (lato sensu).
									</li>
									<li>
										Concluídas as atividades acadêmicas e apurada a aptidão
										final do aluno (aprovação), o certificado será emitido, na
										modalidade digital, dentro do prazo de 60 dias.
									</li>
									<li>
										O aluno se responsabiliza pela atualização e cadastro
										completo dos dados necessários para a certificação
									</li>
									<li>
										A primeira via do certificado será expedida de forma
										gratuita e digital. Havendo requerimento para novas
										expedições ou a forma física, poderá haver a cobrança de
										taxa específica, conforme as políticas institucionais para a
										expedição de documentos.
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel4a-content"
								id="panel4a-header"
							>
								<MonetizationOnIcon
									sx={{
										fontSize: 50,
										color: COLOR.SECONDARY,
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Política de pagamento e contratação
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<ol>
									<li>
										O contrato de prestação de serviço está registrado no 5º
										Oficial de Registro de Títulos e Documentos Civil de Pessoa
										Jurídica da Comarca de São Paulo.
									</li>
									<li>
										Ao efetivar a matrícula, o aluno aceita e adere ao contrato,
										aos termos de uso da Plataforma BIPE e políticas acadêmicas
										previstas no Manual do Aluno e Descritivo do Curso.
									</li>
									<li>
										A rota de estudo poderá ser composta pelo curso (aulas e
										serviços de apoio ao aluno) e/ou por e-book ou livro
										digital, ou mesmo livros impressos (conforme descrição do
										serviço/produto) de cada contratação.
									</li>
									<li>
										A emissão da nota fiscal relativa ao curso poderá observar o
										tempo de prestação de serviço (período de acesso/tempo de
										curso).
									</li>
									<li>
										Havendo a aquisição de livros (físicos ou digitais), o
										faturamento (emissão da nota) será realizado em uma única
										vez.
									</li>
									<li>
										As regras relativas às políticas de cancelamento,
										trancamento, desistência ou migração de turmas estão
										disponíveis no contrato de prestação de serviços, o Manual
										do Aluno
									</li>
									<li>
										Ao efetivar a matrícula, o aluno aceita e adere ao contrato:{" "}
										<Link
											style={{ color: "blue", textDecoration: "underline" }}
											href="https://arquivos.meucurso.com.br/Documentos/Contrato_Pos-2023-Registro.pdf?_gl=1*1qwty8g*_gcl_aw*R0NMLjE3NDE5NzU3NzAuQ2p3S0NBandwOC0tQmhCUkVpd0FqN29nMXdYU2pBUzh4Ym8xZU02SW9QYzBHTGxpcC1kdU9GN1dLOUVYN2FhR1BYTVB6aVU1c1JZazZSb0NOQ0VRQXZEX0J3RQ..*_gcl_au*MzcwMDA1MzQxLjE3NDc2NjUyMTY"
											target="_blank"
											rel="noreferrer"
										>
											Contrato Pós
										</Link>
										, aos termos de uso da Plataforma BIPE e políticas
										acadêmicas previstas no{" "}
										<Link
											style={{ color: "blue", textDecoration: "underline" }}
											target="_blank"
											href="https://campanhas.meucurso.com.br/manual-do-aluno-fadeg.pdf?_gl=1*1qwty8g*_gcl_aw*R0NMLjE3NDE5NzU3NzAuQ2p3S0NBandwOC0tQmhCUkVpd0FqN29nMXdYU2pBUzh4Ym8xZU02SW9QYzBHTGxpcC1kdU9GN1dLOUVYN2FhR1BYTVB6aVU1c1JZazZSb0NOQ0VRQXZEX0J3RQ..*_gcl_au*MzcwMDA1MzQxLjE3NDc2NjUyMTY."
										>
											Manual do Aluno
										</Link>{" "}
										e{" "}
										<Link
											style={{ color: "blue", textDecoration: "underline" }}
											target="_blank"
											href="https://arquivos.meucurso.com.br/Products/DescriptionFile/PGIAA-descriptionfile.pdf?133870538577105196"
										>
											Descritivo do Curso
										</Link>
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Container>
			</Grid>
			<Container>
				<Box my={3} py={5}>
					<H2>PRINCIPAIS DÚVIDAS</H2>
					<Accordion sx={{ mt: 3 }}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography sx={{ fontWeight: "bolder" }}>
								Posso assistir às aulas em qualquer horário?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Sim! A aula permanece disponível na área do aluno para que possa
								ser assistida em qualquer horário/dia durante o tempo do curso.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel2a-content"
							id="panel2a-header"
						>
							<Typography sx={{ fontWeight: "bolder" }}>
								Qual o tempo que eu tenho para concluir o curso de
								Pós-graduação?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								O aluno poderá realizar o curso no período de 6 a 12 meses. Para
								concluir o curso em 6 meses, o aluno terá que assistir a, no
								mínimo, dois encontros semanais, além de realizar as atividades.
								Se o aluno optar por assistir a um encontro semanal, o tempo de
								conclusão do curso poderá ser de até 12 meses.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel3a-content"
							id="panel3a-header"
						>
							<Typography sx={{ fontWeight: "bolder" }}>
								O curso de Pós-graduação é considerado como atividade jurídica
								em concurso público?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								A contagem do curso de Pós-Graduação Lato Sensu como atividade
								jurídica dependerá da normatização de cada carreira
								profissional. Na Resolução 75/2009 o Conselho Nacional de
								Justiça considera que o Curso de Pós-Graduação Lato Sensu será
								considerado como título no processo seletivo, desde que possua
								carga mínima de 360 (trezentos e sessenta) horas e que tenha
								considerado monografia de final de curso, computando 0,5 pontos
								(art. 67, VI, c). Já para o Conselho Nacional do Ministério
								Público, nos termos da Resolução 40/2009, o curso de
								Pós-Graduação Lato Sensu será considerado atividade jurídica,
								valendo um ano no cômputo total, desde que tenha, no mínimo, um
								ano de duração e 360 (trezentos e sessenta) horas de carga
								horária.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel4a-content"
							id="panel4a-header"
						>
							<Typography sx={{ fontWeight: "bolder" }}>
								É possível tirar dúvidas?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Sim! A Plataforma MeuCurso possui uma ferramenta para a remessa
								de dúvidas sobre os temas das aulas. Na própria unidade de
								ensino, clique no BIPE (robozinho no canto direito da tela, e
								mande a sua pergunta). As dúvidas são respondidas pelo corpo
								docente e de tutores.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel4a-content"
							id="panel4a-header"
						>
							<Typography sx={{ fontWeight: "bolder" }}>
								Quem pode fazer a Pós?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Por se tratar de um curso de Pós-graduação, apenas bacharéis
								poderão ingressar no curso. São admitidos certificados de
								graduação de qualquer área de formação. Havendo a pendência da
								expedição do diploma, a matrícula poderá ser realizada com a
								certificação da colação de grau.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel4a-content"
							id="panel4a-header"
						>
							<Typography sx={{ fontWeight: "bolder" }}>
								Quais os documentos necessários para a matrícula?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Após a realização da matrícula pelo site, pela área do aluno,
								deverá ser realizada a remessa (por meio digital), dos seguintes
								documentos: a) cópia autenticada ou validada digitalmente do
								diploma de graduação ou da Declaração de conclusão de curso
								superior, desde que haja a indicação da data da colação de grau,
								devendo, neste caso, entregar a cópia do diploma no prazo de até
								3 (três) meses, a contar do primeiro dia do semestre letivo; b)
								cópia autenticada ou validada digitalmente do histórico escolar;
								c) cópia autenticada ou validada digitalmente da certidão de
								nascimento ou casamento; d) cópia autenticada ou validada
								digitalmente do documento de identidade com foto; e) comprovante
								de inscrição do CPF; f) cópia de comprovante de residência
								(conta de consumo ou cartão de crédito); g) cópia do
								requerimento de matrícula
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Container>
		</>
	);
};

export default Vestibular;
