import styled from "@emotion/styled";
import { Smartphone } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExtensionIcon from "@mui/icons-material/Extension";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LoginIcon from "@mui/icons-material/Login";
import LoopIcon from "@mui/icons-material/Loop";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import RouteIcon from "@mui/icons-material/Route";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
	ListItemIcon,
	Paper,
	Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import OportunityButton from "components/OportunityButton";
import { Attributes } from "components/attributes/Attributes";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import { TeachersCarousel } from "components/teachersCaroussel/TeachersCarousel";
import useWindowSize from "hooks/useWindowSize";
import Image from "next/image";
import { useEffect, useState } from "react";
import { H1, H2, H3, H4, H5, Paragraph } from "../../Typography";

type Oportunity = {
	ProductLeadCaptureId?: number;
	ProductId?: number;
	GenerateOpportunity?: boolean;
	ButtonName: string;
	LeadBonus: string;
	Answer?: string;
	Active: boolean;
	CryptId?: number;
	CompanyId?: number;
	InsertedBy?: number;
	NumberOfRecords?: any;
	RecordNumber?: any;
	DateInserted?: string;
};

const ContestProduct = ({ singleProduct }) => {
	const exclusives = [
		{
			id: 1,
			text: "Aulas + PDFS + questões",
		},
		{
			id: 2,
			text: "Conteúdo essencial",
		},
		{
			id: 3,
			text: "Professores Especializados",
		},
		{
			id: 4,
			text: "Organizador de estudos",
		},
		// {
		//   id: 6,
		//   text: "3 acessos por vídeo",
		// },
		// {
		//   id: 7,
		//   text: "Certificado(consulte as regras de professão)",
		// },
		{
			id: 8,
			text: "Verticalizado",
		},
	];

	const listDiferences = [
		{
			id: 1,
			icon: <PlayCircleIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Aulas",
			text2:
				"Inéditas e práticas para a 2a fase OAB. Ao vivo e/ou gravadas (assista no seu tempo)",
		},
		{
			id: 2,
			icon: <NoteAltIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Simulados",
			text2:
				"com correção individualizada,  diagnóstico e vídeo (formato FGV).",
		},
		{
			id: 3,
			icon: <StickyNote2Icon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Prova Simulada",
			text2: "Vamos fazer a prova inteira juntos? Conteúdo inédito!",
		},
		{
			id: 4,
			icon: <MenuBookIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "E-books de exercícios",
			text2: "E-books especiais",
		},
		{
			id: 5,
			icon: <Smartphone sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "APP #NomeNaLista",
			text2: "Aplicativo para treinar questões",
		},
		{
			id: 7,
			icon: <ExtensionIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Escolha da área de 2a fase",
			text2: "Orientações e sistema de diagnóstico para vocação da 2a fase OAB",
		},
		{
			id: 8,
			icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Assistência e informações",
			text2:
				"Na rota de estudos, nossos alertas e avisos irão te atualizar com tudo que é importante para o Exame",
		},
		{
			id: 9,
			icon: <CalendarMonthIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Cronograma de estudos",
			text2:
				"Planner online e e-book com toda a programação. Estude de forma organizada.",
		},
		{
			id: 10,
			icon: <Diversity3Icon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Mentoria e Gestão das emoções",
			text2:
				"Aulas especiais de orientações de estudo, redação, edital e gestão das emoções.",
		},
		{
			id: 11,
			icon: <ContactSupportIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Central e plantões de dúvidas",
			text2:
				"Além dos plantões ao vivo, no Bipe, você poderá interagir e mandar suas dúvidas!",
		},
		{
			id: 12,
			icon: <MenuBookIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Biblioteca",
			text2:
				"Em cada aula, acesse a legislação, jurisprudência e glossário vinculados",
		},
		{
			id: 13,
			icon: <StickyNote2Icon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Materais especiais",
			text2:
				"Modelos de petições, quadros, mapas de teses, mapas mentais, etc.",
		},
		{
			id: 14,
			icon: <WhatsAppIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Canal Exclusivo no Whatsapp",
			text2:
				"Grupo especial da área para mensagens diretas dos professores e muita interação.",
		},

		{
			id: 15,
			icon: <RouteIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Rota de estudos, planner ou sumário",
			text2:
				"Estude como preferir! Na área do aluno... você escolhe como organizar seu conteúdo!",
		},
		{
			id: 16,
			icon: <SettingsIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Ferramentas incríveis",
			text2:
				"Acelerador de vídeos, recalcular a rota, certificado*, gráfico de performance...",
		},
		{
			id: 17,
			icon: <WorkspacePremiumIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Garantia Meu Curso",
			text2:
				"Na repescagem, se começar antes da lista... geramos o crédito se seu nome vier na lista do exame anterior!(consulte o regulamento)",
		},
		{
			id: 18,
			icon: <AddBoxIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Imersão",
			text2: "Uma semana inteira de imersão na 1a fase OAB",
		},
		{
			id: 19,
			icon: <BorderColorIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Gabaritando Ética",
			text2:
				"Uma overdose de ética profissional para gabaritar as 8 questões com o @profmarcoantonio",
		},
		{
			id: 20,
			icon: <LoopIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Detona OAB",
			text2: "uma Mega Revisão de todas as disciplinas do Exame de Ordem.",
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
			href="/cursos/concursos-publicos"
		>
			Concursos Públicos
		</Link>,
		<Typography key="3" color="white">
			{singleProduct.Name}
		</Typography>,
	];
	const ecommerceAtributes = JSON.parse(
		singleProduct.ProductEcommerceAttributes,
	);
	const [visibleTeachers, setVisibleTeachers] = useState(3);
	const width = useWindowSize();

	useEffect(() => {
		if (width < 426) setVisibleTeachers(1);
		else if (width < 650) setVisibleTeachers(2);
		else if (width < 1024) setVisibleTeachers(4);
		else if (width < 1200) setVisibleTeachers(4);
		else setVisibleTeachers(4);
	}, [width]);

	const ecommerceAttributes = JSON.parse(
		singleProduct.ProductEcommerceAttributes,
	);

	const COLOR = {
		PRIMARY: "#226462",
		SECONDARY: "#03315B",
	};
	const gradientBackground = `linear-gradient(to right, ${COLOR.PRIMARY}, ${COLOR.SECONDARY})`;

	return (
		<>
			<Container
				disableGutters
				maxWidth={"xl"}
				sx={{
					backgroundColor: "#226462",
					backgroundImage: "linear-gradient(90deg, #226462 0%, #03315B 100%)",
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
						<Grid item md={12} mt={2} alignSelf={"center"}>
							<H1
								sx={{
									borderBottom: "10px solid #EBAD24",
									fontSize: { xs: "30px", md: "40px", xl: "60px" },
								}}
								textAlign={"center"}
								color={"white"}
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
						{/* <Grid
              item
              md={6}
              textAlign={"end"}
              display={"flex"}
              alignItems={"end"}
              justifyContent={"end"}
              sx={{ maxHeight: "300px" }}
            >
              <img
                width={600}
                height={100}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  transform: "translateY(40px)",
                }}
                src={singleProduct.ProductImageDetailsUrl}
                alt={singleProduct.Name}
              />
            </Grid> */}
					</Grid>
				</Container>
			</Container>
			<Container>
				<Attributes attributes={ecommerceAtributes} color="#1F6061" />

				<Grid container my={4} spacing={1}>
					<Grid item xs={12} md={8}>
						<div
							dangerouslySetInnerHTML={{
								__html: singleProduct.ShortDescription,
							}}
						/>

						<OportunityButton
							singleProduct={singleProduct}
							bgcolor={"#226462"}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box
							sx={{
								backgroundColor: "#D9D9D9",
								p: 2,
								my: 1,
								borderRadius: "10px",
								position: "relative",
							}}
						>
							<Avatar
								sx={{
									backgroundColor: "#226462",
									mr: 1,
									position: "absolute",
									top: "-20px",
									right: "44%",
								}}
							>
								<StarBorderIcon />
							</Avatar>

							<H2 fontSize={"20px"} mt={1} textAlign={"center"}>
								Exclusivo
							</H2>

							<List
								sx={{
									width: "100%",
									maxWidth: 360,
								}}
							>
								{exclusives.map((items) => (
									<ListItem key={items.id}>
										<ListItemIcon>
											<ArrowCircleRightIcon />
										</ListItemIcon>
										<ListItemText primary={items.text} />
									</ListItem>
								))}
							</List>
							<Typography mt={5}>SKU: {singleProduct.SKU}</Typography>
						</Box>
					</Grid>
				</Grid>
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
				<Box
					flexDirection={"column"}
					display={"flex"}
					sx={{
						background: gradientBackground,
						alignItems: "center",
						gap: 4,
						py: 2,
					}}
				>
					<Box>
						<H2 color={"white"} textAlign={"center"}>
							ESTUDE COM GRANDES NOMES
						</H2>
					</Box>
					<TeachersCarousel teachers={singleProduct.Teachers} />
					<Box>
						<Paragraph fontWeight={"bolder"} color={"whitesmoke"}>
							*Dentre outros grandes nomes
						</Paragraph>
					</Box>
				</Box>
				<Container>
					{/* <Box display={"grid"} textAlign={"center"} py={5}>
            <H2 textAlign={"start"}>TIME QUE TE LEVARÁ À APROVAÇÃO</H2>
            <Carousel
              totalSlides={singleProduct.Teachers.length}
              visibleSlides={visibleTeachers}
              sx={carouselStyled}
            >
              {singleProduct.Teachers?.map((teacher) => (
                <Box key={teacher.id} py={2}>
                  {teacher.TeacherFormalPhotoFileUrl && (
                    <Image
                      width={150}
                      height={150}
                      style={{
                        width: "50%",
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
                        width: "50%",
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
                  <Paragraph fontWeight={"bolder"}>
                    {teacher.Name}
                  </Paragraph>
                </Box>
              ))}
            </Carousel>
          </Box> */}
					<Box py={5}>
						<H2>EXPERIÊNCIA DE ESTUDO</H2>
						<p>
							Nossa missão é oferecer uma experiência de estudos incrível, com
							tecnologia, inovação e uma plataforma que contribua muito para o
							sucesso dos nossos alunos!
						</p>
						<ul style={{ listStyle: "disc" }}>
							<li>
								Plataforma BIPE Personalize seu calendário, recalcule a rota e
								conecte-se aos seus amigos.
							</li>
							<li>
								Biblioteca virtual com legislação, glossário e jurisprudência,
								por tema da aula.
							</li>
							<li>
								Personalize o seu Planner ou cronograma com ferramentas digitais
							</li>
							<li>Diagnóstico MeuCurso – sistema de análise de performance</li>
							<li>APP Vertificalizado</li>
						</ul>
					</Box>
				</Container>
			</Container>
			{/* <Container>
            <Grid container my={4}>
              <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
                <Box
                  mt={6}
                  position={"relative"}
                  sx={{ backgroundColor: "#EBEBEB", borderRadius: 5, p: 5 }}
                >
                  <PlayCircleIcon
                    sx={{
                      fontSize: 55,
                      color: "#AD191A",
                      position: "absolute",
                      top: 75,
                      left: -23,
                    }}
                  />
                  <H2 sx={{ fontWeight: "bolder" }}>CONHEÇA O CURSO</H2>
                  <Paragraph sx={{ width: { md: 408 } }}>
                    Venha conhecer a Rota Degustação e navegue pela plataforma
                    exclusiva do MeuCurso, além de poder assistir à aula
                    inaugural deste curso!
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
                ></iframe>
              </Grid>
            </Grid>
          </Container> */}
			<Container>
				{/* <Grid container my={4}>
          <Grid item md={12}>
            <H2>O QUE FAZ DIFERENÇA NA SUA APROVAÇÃO</H2>
          </Grid>
          {listDiferences.map((item) => (
            <Grid
              item
              xs={6}
              md={3}
              key={item.id}
              textAlign={"center"}
              py={3}
            >
              {item.icon}
              <H3
                fontSize={"17px"}
                fontWeight={"bolder"}
                color={"#226462"}
              >
                {item.text}
              </H3>
              <p>{item.text2}</p>
            </Grid>
          ))}
          <Grid item md={12}>
            <p>
              ⚠️ Para todas as ferramentas, evento ou itens, consulte as
              regras específicas em Informações relevantes ou na Área do
              Aluno.
            </p>
          </Grid>
        </Grid> */}
				<Grid container my={4}>
					<Grid item md={12}>
						<H2>INFORMAÇÕES IMPORTANTES</H2>
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
										color: "#226462",
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
									style={{ maxWidth: "100%", height: "auto" }}
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
										color: "#226462",
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Efetivação da matrícula
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<ol>
									<li>
										Efetivada a matrícula, o aluno terá acesso à Área do Aluno
										aluno.fadeg.com.br.
									</li>
									<li>
										O acesso é pelo prazo do curso/rota. Como regra, cada
										videoaula possui três acessos (o aluno poderá reabrir os
										acessos com o uso de diamantes adquiridos como bonificação
										das atividades acadêmicas ou por meio de requerimento no
										BIPE.)
									</li>
									<li>
										O corpo e o calendário/cronograma poderão sofrer alteração.
										Turmas presenciais poderão ter aulas online/gravadas na
										composição da carga horária.
									</li>
									<li>
										O curso pode conter mais de uma rota (por exemplo, a rota
										auxiliar de correção de provas anteriores).
									</li>
									<li>
										Cada aula poderá ser composta por videoaula (de
										aproximadamente 30 minutos); material de apoio em texto,
										questões, arquivos ou outros elementos pedagógicos.
									</li>
									<li>
										Certificado - o aluno deverá ter progressão na rota de
										estudos superior a 75%. Ao final do curso, o certificado é
										expedido na forma online.
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
										color: "#226462",
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
										Ao efetivar a matrícula, o aluno aceita e adere ao contrato:{" "}
										<Link
											style={{ color: "blue", textDecoration: "underline" }}
											href="https://campanhas.meucurso.com.br/contrato-meu-curso.pdf?_gl=1*1qwty8g*_gcl_aw*R0NMLjE3NDE5NzU3NzAuQ2p3S0NBandwOC0tQmhCUkVpd0FqN29nMXdYU2pBUzh4Ym8xZU02SW9QYzBHTGxpcC1kdU9GN1dLOUVYN2FhR1BYTVB6aVU1c1JZazZSb0NOQ0VRQXZEX0J3RQ..*_gcl_au*MzcwMDA1MzQxLjE3NDc2NjUyMTY"
											target="_blank"
											rel="noreferrer"
										>
											Contrato Curso Livre
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
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel4a-content"
								id="panel4a-header"
							>
								<CancelIcon
									sx={{
										fontSize: 50,
										color: "#226462",
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Regras sobre cancelamento
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<Paragraph>Regras de cancelamento para cursos:</Paragraph>
								<ol>
									<li>
										O cancelamento do curso/rota, poderá ser requerido pelos
										canais disponibilizados (chamado na Área do Aluno);
									</li>
									<li>
										Para os casos de matrículas realizadas fora do
										estabelecimento (exclusivamente online) o aluno poderá
										exercer o direito de arrependimento no prazo legal, caso não
										tenha consumido o curso ou e-book.
									</li>
									<li>
										Em caso de desistência ou cancelamento, será aplicada a
										multa de 20% sobre o valor do curso, com o reembolso, no
										prazo de até 30 dias úteis, do valor devido ao aluno, com a
										dedução da multa e valor relativo ao percentual do curso
										percorrido (tempo de curso), independentemente do conteúdo
										assistido ou consumido.
									</li>
									<li>
										Caso o aluno opte pelo crédito, após liberado em sistema, o
										prazo para utilização é de 180 dias.
									</li>
									<li>
										A multa poderá ser dispensada quando o aluno optar por
										utilizar o valor do reembolso em crédito para aquisição de
										novos cursos.
									</li>
								</ol>
								<Paragraph>Regras de cancelamento para assinaturas</Paragraph>
								<ol>
									<li>
										Até o limite de 7 dias, o assinante poderá requer o
										cancelamento da assinatura, desde que não tenha acessado
										mais que 15% do conteúdo e, havendo ebook, não tenha sido
										feito o download do arquivo.
									</li>
									<li>
										Após o prazo de 7 dias, o cancelamento poderá ser requerido
										a qualquer tempo, com a observância das seguintes regras de
										restituição de valores e multa:
									</li>
									<li>
										Multa por consumo: Se o consumo do conteúdo for maior ou
										igual a 30%, não haverá restituição dos valores,
										independente do prazo do contrato da assinatura:
									</li>
									<li>
										Se o consumo do conteúdo for menor que 30% dentro do prazo
										de 30 dias, haverá multa de 20% sobre o valor restante do
										contrato. Acima de 30 dias não haverá restituição dos
										valores devidos, independente do % do consumo do conteúdo.
									</li>
									<li>
										A devolução dos valores devidos, por se tratar do pagamento
										por meio de cartão de crédito, será realizado estorno
										através da operadora de cartão de crédito, dentro da data de
										fechamento da fatura, o que pode ocorrer a devolução dos
										valores dentro dos procedimentos de cada operadora.
									</li>
									<li>
										A solicitação de cancelamento deverá ser por e-mail no
										contato@fadeg.com.br.
									</li>
								</ol>
							</AccordionDetails>
						</Accordion>
					</Box>
				</Grid>
				{/* <Box my={3} py={5}>
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
                  Sim! Após o término da gravação da aula (para as turmas com
                  previsão de transmissão ao vivo),. a aula permanece
                  disponível na área do aluno para que possa ser assistida em
                  qualquer horário/dias durante o tempo do curso.
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
                  Existe diferença entre as turmas online e presenciais?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  O conteúdo é idêntico para as duas formas de curso. Alunos
                  inscritos nas turmas presenciais podem participar das aulas
                  durante as suas gravações (nos estúdios do MeuCurso em São
                  Paulo. Os alunos do presencial também têm acesso ao
                  conteúdo gravado na área do aluno (inclusive as
                  transmissões ao vivo).
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
                  As turmas de finais de semana possuem o mesmo conteúdo que
                  as turmas semanais?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sim! O conteúdo é idêntico para ambas as turmas. A única
                  diferença está no calendário. As turmas dos finais de
                  semana possuem o calendário com aulas previstas nos sábados
                  (aulas gravadas durante a semana).
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
                  Sim! A Plataforma MeuCurso possui uma ferramenta para a
                  remessa de dúvidas sobre os temas das aulas. Na própria
                  unidade de ensino, clique no BIPE (robozinho no canto
                  direito da tela, e mande a sua pergunta). As dúvidas são
                  respondidas pelo corpo docente e de tutores.
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
                  Qual a diferença entre os simulados e os estudos dirigidos?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    - Prova simulada - novo - são realizadas duas provas (no
                    formato da FGV), com tempo e redação em conjunto com os
                    alunos
                  </li>
                  <li>
                    - Simulados com correção individualizada - são realizados
                    pelo aluno dentro do prazo e remetidos pela plataforma. A
                    correção é realizada pelos professores/tutores e o aluno
                    recebe os apontamentos individuais dentro do espelho
                    modelo da FGV. Além do espelho individual, também há
                    vídeo de correção e gabarito.
                  </li>
                  <li>
                    - Simulados com auto correção - não são enviados - o
                    aluno recebe o espelho, gabarito e a aula de correção.
                  </li>
                  <li>
                    - Estudos dirigidos - integram o ebook de treino e
                    representam exercícios, questões e enunciados no formato
                    da prova OAB/FGV para que o aluno complemente seu treino
                    para a prova.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography sx={{ fontWeight: "bolder" }}>
                  Como funciona a remessa dos simulados para correção
                  individual?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Elabore a peça e questões e remeta para a correção pelos
                  professores. É fácil:
                </Typography>
                <ul>
                  <li>
                    - Os simulados são disponibilizados em conformidade com a
                    programação de cada curso (geralmente às sextas-feiras).
                    O prazo para a remessa é de até 3 dias
                  </li>
                  <li>
                    - A postagem é feita pela Plataforma, em formato PDF
                    (existe um breve vídeo tutorial)
                  </li>
                  <li>
                    - Sugerimos que o aluno faça o simulado na forma
                    manuscrita, na folha modelo OAB/FGV.
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box> */}
			</Container>
		</>
	);
};

export default ContestProduct;
