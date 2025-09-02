import {
	AccessTime,
	Book,
	Check,
	CheckCircleOutline,
	ChevronLeft,
	CurrencyExchange,
	DocumentScannerOutlined,
	FastForward,
	MapOutlined,
	PinDropOutlined,
	PlayCircleOutline,
	QuestionMark,
	QuestionMarkRounded,
	SupervisedUserCircleOutlined,
	Warning,
	WarningTwoTone,
	Widgets,
} from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Avatar,
	Box,
	Breadcrumbs,
	Button,
	Container,
	Divider,
	Grid,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Popover,
	Popper,
	Typography,
} from "@mui/material";
import { H1, H2, H5, Paragraph } from "components/Typography";
import type Product from "../../../models/Product.model";

import OportunityButton from "components/OportunityButton";

import { IconBorder } from "components/IconBorder";
import PopoverComponent from "components/PopoverComponent";
import { Sora } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const sora = Sora({ subsets: ["latin"] });

const AtualizacaoProduct = ({ singleProduct }: { singleProduct: Product }) => {
	const ecommerceAtributes = JSON.parse(
		singleProduct.ProductEcommerceAttributes,
	);
	const [open, setOpen] = useState<boolean>(false);

	const principalInfo = [
		{
			id: 1,
			icon: <PlayCircleOutline sx={{ color: "#D7D7D7", fontSize: 30 }} />,
			title: "Modalidade",
			description: "Online",
		},
		{
			id: 2,
			icon: <Warning sx={{ color: "#D7D7D7", fontSize: 30 }} />,
			title: "Tempo de acesso",
			description: "90 dias de acesso da data da compra",
		},
		{
			id: 3,
			icon: <PinDropOutlined sx={{ color: "#D7D7D7", fontSize: 30 }} />,
			title: "Rota de Estudos",
			description: "SABER",
		},
		{
			id: 4,
			icon: <PlayCircleOutline sx={{ color: "#D7D7D7", fontSize: 30 }} />,
			title: "Vídeos",
			description: "temáticos de até 30 minutos",
		},
		{
			id: 5,
			icon: <DocumentScannerOutlined sx={{ color: "#D7D7D7", fontSize: 30 }} />,
			title: "Material de apoio",
			description: "Plano de aula (gera PDF)",
		},
		{
			id: 6,
			icon: <QuestionMark sx={{ color: "#D7D7D7", fontSize: 30 }} />,
			title: "Sistema de duvidas",
			description: "",
		},
		{
			id: 7,
			icon: <Warning sx={{ color: "#D7D7D7", fontSize: 30 }} />,
			title: "Certificação",
			description: "",
		},
	];

	const experienciaDeEstudo = [
		{
			id: 1,
			title: "Plataforma BIPE",
			icon: <MapOutlined sx={{ fontSize: 25 }} />,
			text: "Personalize seu calendário, recalcule a rota, conecte-se aos amigos e receba orientações de um professor virtual.",
		},

		{
			id: 3,
			title: "Biblioteca Virtual",
			icon: <Book sx={{ fontSize: 25 }} />,
			text: "Com legislação, glossário e jurisprudência, por tema da aula.",
		},
		{
			id: 4,
			title: "Acelerador de vídeos",
			icon: <FastForward sx={{ fontSize: 25 }} />,
			text: "(até 2.0).",
		},
	];

	const info = [
		{
			id: 1,
			title: "Certificado",
			description: `O certificado de conclusão será expedido, na forma eletrônica na Plataforma BIPE,
                         quando o aluno preencher os seguintes requisitos, cumulativamente:`,
			link: "",
			items: [
				{
					id: 1,
					topic: "a",
					text: "Progressão superior a 75% da rota de estudos (na ordem cronológica da rota paraprogressão).",
				},
				{
					id: 3,
					topic: "b",
					text: "Após o término do curso (período da rota), não terá como o aluno realizar a progressão.",
				},
				{
					id: 4,
					topic: "c",
					text: "O certificado será emitido com os dados cadastrados pelo próprio aluno no momento da matrícula.",
				},
			],
		},
		{
			id: 2,
			title:
				"Política de Pagamento: Como é realizado o pagamento do curso? É possível parcelar?",
			description: `O pagamento é realizado na forma eletrônica, podendo o aluno optar pelo PagSeguro ou PayPal. 
                            Ambos os serviços estão em ambiente seguro e permitem o pagamento em CARTÃO ou
                            BOLETO.\n
                            O pagamento com cartão permite parcelamento em conformidade à política vigente no momento da compra.O pagamento
                            em boleto é a vista e a liberação de acesso ocorre após a compensação bancária.`,
			link: "",
			items: [],
		},
		{
			id: 3,
			title: "Política de cancelamento",
			description: `O cancelamento de curso/rota poderá ser requerido pelo atendimento disponibilizado na Plataforma BIPE (com
                assunto cancelamento).\n
                Serão observadas as seguintes políticas:`,
			link: "",
			items: [
				{
					id: 1,
					topic: "a",
					text: "Após o término do curso (período da rota), não terá como o aluno realizar a progressão.",
				},
				{
					id: 2,
					topic: "b",
					text: "A multa poderá ser abonada caso o aluno faça a opção pela utilização do crédito em novo curso.",
				},
				{
					id: 3,
					topic: "c",
					text: `Com o cancelamento, o aluno terá a restituição do valor pago, com desconto da multa e do tempo de curso
                        percorrido, independentemente do consumo das aulas (aulas disponibilizadas)`,
				},
			],
		},
		{
			id: 4,
			title:
				"A devolução do crédito ocorrerá em até 30 dias úteis do pedido de cancelamento.",
			description: `Todas as informações e detalhes estão no contrato de prestação de serviço, registrado no 9º Cartório de Títulos e 
                Documentos da Capital de São Paulo. Ao efetuar a matrícula em cursos preparatórios para concursos, OAB ou de atualização 
                e prática (cursos livres), o aluno aceita e adere ao referido contrato. Clique no link ao lado para para baixar o arquivo.`,
			link: "https://campanhas.meucurso.com.br/contrato-meu-curso.pdf",
			items: [],
		},
	];

	const breadcrumbs = [
		<Link underline="hover" key="1" color="white" href="/">
			Início
		</Link>,
		<Link
			underline="hover"
			key="2"
			color="white"
			href="/cursos/atualizacao-e-pratica"
		>
			Atualização e Prática
		</Link>,
		<Typography key="3" color="white">
			{singleProduct.Name}
		</Typography>,
	];

	return (
		<>
			<Container
				disableGutters
				maxWidth={"xl"}
				sx={{
					backgroundColor: "#1d3557",
					backgroundImage: "linear-gradient(90deg, #020014 0%, #D15400 130%)",
					fontSmooth: "antialiased",
				}}
			>
				<Container>
					<Grid container p={5} position={"relative"} minHeight={300}>
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
						<Grid item md={6} alignSelf={"center"}>
							<H1
								sx={{
									borderBottom: "10px solid #EBAD24",
									fontSize: {
										xs: "30px",
										md: singleProduct.Name.length > 25 ? "30px" : "60px",
									},
								}}
								textAlign={"start"}
								color={"white"}
								data-testid="product-name"
							>
								{singleProduct.Name.toUpperCase()}
							</H1>
							{singleProduct.CoordinatorName && (
								<Paragraph
									fontSize={"16px"}
									textAlign={"start"}
									color={"white"}
								>
									Coordenação {singleProduct.CoordinatorName}
								</Paragraph>
							)}
						</Grid>
						{singleProduct.CourseCoordinatorUrl && (
							<Grid
								display={"flex"}
								item
								md={6}
								sx={{
									display: { xs: "none", md: "flex" },
									height: "300px",
									width: "100%",
									bottom: 0,
									right: 0,
								}}
								position={"absolute"}
							>
								<Image
									alt={singleProduct.Name}
									src={singleProduct.CourseCoordinatorUrl}
									sizes="300px"
									fill
									style={{
										objectFit: "contain",
									}}
								/>
							</Grid>
						)}
					</Grid>
				</Container>
			</Container>
			<Container>
				<Grid container my={4} spacing={1}>
					<Grid item xs={12} md={8}>
						<Container>
							<H2 style={{ color: "#D25400" }}>Sobre o curso:</H2>
							<Divider
								sx={{
									borderWidth: 1,
									borderColor: "#7F7F7F",
									borderStyle: "dashed",
								}}
							/>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									gap: "4rem",
									boxSizing: "border-box",
								}}
							>
								<Box>
									<div
										dangerouslySetInnerHTML={{
											__html: singleProduct.ShortDescription,
										}}
									/>
								</Box>
								<Box>
									<OportunityButton
										singleProduct={singleProduct}
										bgcolor={"#D25400"}
									/>
								</Box>
							</Box>
						</Container>

						{/* Módulo */}
						<Container
							sx={{
								pt: "2rem",
								gap: "4rem",
								display: "flex",
								flexDirection: "column",
							}}
						>
							{/* {singleProduct.Modules && (
								<Box>
									<H2 sx={{ color: "#D25400" }}>Módulos</H2>
									<Divider
										sx={{
											borderWidth: 1,
											borderColor: "#7F7F7F",
											borderStyle: "dashed",
										}}
									/>
									<Box display={"flex"} flexDirection={"column"} py={1}>
										<div
											dangerouslySetInnerHTML={{
												__html: singleProduct.Modules,
											}}
										/>
									</Box>
								</Box>
							)} */}
							<Box>
								<H2 sx={{ color: "#D25400" }}>Carga Horária</H2>
								<Divider
									sx={{
										borderWidth: 1,
										borderColor: "#7F7F7F",
										borderStyle: "dashed",
									}}
								/>
								<Box display={"flex"} flexDirection={"column"} gap={4} py={1}>
									<Box>
										<H5 sx={{ color: "#7F7F7F" }}></H5>
										<Paragraph>
											{`${ecommerceAtributes[0].TextAttributeOne} | ${ecommerceAtributes[1].TextAttributeTwo}`}
										</Paragraph>
									</Box>
								</Box>
							</Box>
							<Box>
								<H2 sx={{ color: "#D25400" }}>Acessos</H2>
								<Divider
									sx={{
										borderWidth: 1,
										borderColor: "#7F7F7F",
										borderStyle: "dashed",
									}}
								/>
								<Box display={"flex"} flexDirection={"column"} gap={4} py={1}>
									<Box>
										<H5 sx={{ color: "#7F7F7F" }}>
											Até quando posso assistir?
										</H5>
										<Paragraph fontWeight={"medium"}>
											O aluno poderá acessar o conteúdo do curso por 90
											(noventa) dias da data da compra.
										</Paragraph>
										<Paragraph fontWeight={"medium"}>
											Cada vídeo permite até 5 acessos.
										</Paragraph>
									</Box>
								</Box>
							</Box>
						</Container>
					</Grid>

					{/* Modal de principais informações */}
					<Grid item xs={12} md={4}>
						<Box
							className={sora.className}
							sx={{
								backgroundColor: "#D7D7D7",
								py: 2,
								my: 1,
								borderRadius: "10px",
								position: "relative",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
						>
							<H2
								fontSize={"20px"}
								mt={1}
								textAlign={"center"}
								color={"#D25400"}
							>
								PRINCIPAIS INFORMAÇÕES
							</H2>
							<List
								sx={{
									width: "100%",
									maxWidth: 360,
								}}
							>
								<Container>
									<Container
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											p: 2,
										}}
									>
										<IconBorder>
											<AccessTime sx={{ color: "#D9D9D9", fontSize: 30 }} />
										</IconBorder>
										<H2 fontWeight={"bold"}>
											{`${ecommerceAtributes[0].TextAttributeOne} | ${ecommerceAtributes[1].TextAttributeTwo}`}
										</H2>
									</Container>
									<Divider sx={{ borderWidth: 1, borderColor: "#7F7F7F" }} />
									{principalInfo.slice(0, 2).map((item) => (
										<Container
											sx={{
												display: "flex",
												gap: "1rem",
												py: ".8rem",
												alignItems: "center",
											}}
											key={item.id}
										>
											<Box
												sx={{
													borderRadius: "100%",
													backgroundColor: "#DE9E28",
													display: "flex",
													p: "1rem",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												{item.icon}
											</Box>
											<Container
												sx={{ display: "flex", flexDirection: "column" }}
											>
												<H2 fontSize={"1rem"}>{item.title}</H2>
												<Paragraph>{item?.description}</Paragraph>
											</Container>
										</Container>
									))}
								</Container>
								<Container>
									<H2
										fontSize={"20px"}
										mt={1}
										textAlign={"center"}
										color={"#D25400"}
									>
										Conteúdo e Metodologia MeuCurso
									</H2>
									{principalInfo.slice(2).map((item) => (
										<Container
											sx={{
												display: "flex",
												gap: "1rem",
												py: ".8rem",
												alignItems: "center",
											}}
											key={item.id}
										>
											<IconBorder>{item.icon}</IconBorder>
											<Container
												sx={{ display: "flex", flexDirection: "column" }}
											>
												<H2 fontSize={"1rem"}>{item.title}</H2>
												<Paragraph>{item?.description}</Paragraph>
											</Container>
										</Container>
									))}
								</Container>
							</List>
						</Box>
						<Paragraph sx={{ fontSize: "10px", my: 2 }}>
							Importante: módulos e corpo docente sujeitos a alterações. As
							regras relativas à certificação, prazos e procedimentos estão
							discriminadas no Manual do Aluno. A conclusão e certificação do
							curso dependerá do cumprimento dos requisitos do programa.
						</Paragraph>
						<i>SKU:{singleProduct.SKU}</i>
					</Grid>
				</Grid>

				{/* Começo da segunda parte */}
			</Container>
			<Container
				disableGutters
				maxWidth={"xl"}
				sx={{
					backgroundColor: "white",
					backgroundSize: "100vw 100vh",
					color: "white1  ",
				}}
			>
				<Container>
					<Grid container my={4} py={2} spacing={3}>
						<Grid item xs={12} md={12}>
							<H2 color={"#D25400"}>Corpo docente</H2>
						</Grid>
						{singleProduct.Teachers?.map((teacher, id) => (
							<Grid
								key={id}
								item
								xs={12}
								md={4}
								display={"flex"}
								alignItems={"center"}
								pb={3}
							>
								{teacher.TeacherFormalPhotoFileUrl && (
									<Image
										width={150}
										height={150}
										style={{
											width: "33%",
											height: "auto",
											marginRight: 10,
											aspectRatio: "3/3",
											borderRadius: "50%",
											boxShadow: "1px 1px 5px black",
										}}
										src={teacher.TeacherFormalPhotoFileUrl}
										alt={teacher.Name}
									/>
								)}
								{!teacher.TeacherFormalPhotoFileUrl && (
									<Image
										width={150}
										height={150}
										style={{
											width: "33%",
											height: "auto",
											marginRight: 10,
											borderRadius: "50%",
											boxShadow: "1px 1px 5px black",
											aspectRatio: "3/3",
										}}
										src={"/silhueta.png"}
										alt={teacher.Name}
									/>
								)}
								<Box display={"flex"} alignItems={"center"} gap={"1rem"}>
									{!teacher.ResumeOverview && <H5>{teacher.Name}</H5>}
									{teacher.ResumeOverview && (
										<Link target="_blank" href={teacher.ResumeOverview}>
											<H5>{teacher.Name}</H5>
										</Link>
									)}

									{teacher.About && <PopoverComponent about={teacher.About} />}
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Container>

			<Container>
				<Grid container my={4} spacing={1}>
					<Grid item xs={12} md={8}>
						<Container
							sx={{
								py: "1rem",
								gap: "2rem",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Container
								sx={{ display: "flex", alignItems: "center", gap: "2rem" }}
							>
								<IconBorder borderSize={"2px"}>
									<CheckCircleOutline sx={{ color: "#F6F9FC", fontSize: 40 }} />
								</IconBorder>
								<H2 fontWeight={"bold"} color={"#D25400"} fontSize={18}>
									Experiência de estudo
								</H2>
							</Container>
							<Container>
								<Typography>
									Nossa missão é oferecer uma experiência de estudos incrível,
									com tecnologia, inovação e uma plataforma que contribua muito
									para o sucesso dos nossos alunos!
								</Typography>
							</Container>
						</Container>
					</Grid>
				</Grid>
				<Grid item xs={12} md={4}>
					<Box
						className={sora.className}
						sx={{
							backgroundColor: "#D7D7D7",
							p: 4,
							my: 1,
							borderRadius: "10px",
							position: "relative",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Grid container columnSpacing={2} rowSpacing={{ xs: 6, md: 6 }}>
							{experienciaDeEstudo.map((item) => (
								<Grid
									key={item.id}
									item
									xs={12}
									md={6}
									display={"flex"}
									flexDirection={"column"}
								>
									<Container>
										<Box display={"flex"} alignItems={"center"} gap={2}>
											{item.icon}
											<H2>{item.title}</H2>
										</Box>
										<Box alignItems={"end"}>
											<Typography>{item.text}</Typography>
										</Box>
									</Container>
								</Grid>
							))}
						</Grid>
					</Box>
				</Grid>
				<Grid container my={4} spacing={1}>
					<Grid item xs={12} md={8}>
						<Container
							sx={{
								py: "1rem",
								gap: "2rem",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Container
								sx={{ display: "flex", alignItems: "center", gap: "2rem" }}
							>
								<IconBorder borderSize={"2px"}>
									<CheckCircleOutline sx={{ color: "#F6F9FC", fontSize: 40 }} />
								</IconBorder>
								<H2 fontWeight={"bold"} color={"#D25400"} fontSize={18}>
									Informações relevantes
								</H2>
							</Container>
							<Container
								sx={{ display: "flex", flexDirection: "column", gap: 1 }}
							>
								{info.map((item) => (
									<Accordion
										key={item.id}
										sx={{ display: "flex", flexDirection: "column" }}
									>
										<AccordionSummary>
											<Box
												sx={{
													display: "flex",
													width: "100%",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<H5 sx={{ color: "#7F7F7F", fontWeight: "bold" }}>
													{item.title}
												</H5>
											</Box>
											<ChevronLeft sx={{ rotate: "-90deg" }} />
										</AccordionSummary>
										<AccordionDetails>
											<Typography>
												{item.description}{" "}
												{item.link && (
													<a
														rel="noreferrer noopen"
														target="_blank"
														href={item.link}
														style={{
															color: "blue",
															textDecoration: "underline",
														}}
													>
														Baixar arquivo
													</a>
												)}
											</Typography>
											{item.items.map((topics) => (
												<ListItem key={topics.id}>
													{`${topics.topic}) `} {topics.text}
												</ListItem>
											))}
										</AccordionDetails>
									</Accordion>
								))}
							</Container>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default AtualizacaoProduct;
