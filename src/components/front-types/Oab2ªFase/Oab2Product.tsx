import styled from "@emotion/styled";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BuildIcon from "@mui/icons-material/Build";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
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
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Breadcrumbs,
	Container,
	Grid,
	Link,
	ListItemIcon,
	Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import OportunityButton from "components/OportunityButton";
import ProductDepoiments from "components/ProductDepoiments";
import { Attributes } from "components/attributes/Attributes";
import Image from "next/image";
import { H1, H2, H3, H4, H5, Paragraph } from "../../Typography";

const GridWithEffect = styled(Grid)({
	"& p": {
		transform: "translateY(-50px)",
		visibility: "hidden",
		opacity: 0,
		transition: "0.5s",
		maxheight: 0,
	},
	"&:hover > p": {
		opacity: 1,
		transform: "translateY(0px)",
		visibility: "visible",
		maxheight: "400px",
	},
	"&:hover > .dropIcon": {
		transform: "rotate(180deg)",
	},
});

const Oab2Product = ({ singleProduct }) => {
	const exclusives = [
		{
			id: 1,
			text: "Simulados com correção e diagnóstico individualizado",
		},
		{
			id: 2,
			text: "Método de redação de PEÇAS MESTRAS e resolução de questões",
		},
		{
			id: 3,
			text: "Provas anteriores comentadas",
		},
		{
			id: 4,
			text: "Cronograma de Estudo",
		},
		{
			id: 5,
			text: "Prova Simulada",
		},
		{
			id: 6,
			text: "Aulas com marcação de VADE",
		},
		{
			id: 7,
			text: "Canal no WhatsApp",
		},
		{
			id: 8,
			text: "Central de dúvidas",
		},
		{
			id: 9,
			text: "Assista o conteúdo no SeuTempo",
		},
		{
			id: 10,
			text: "Pacotes extras de simulados",
		},
		{
			id: 11,
			text: "Imersão - semana de revisão",
		},
		{
			id: 12,
			text: "Garantia MeuCurso*",
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
			text2: "Dois e-books especiais com exercícios inéditos",
		},
		{
			id: 5,
			icon: (
				<ScreenSearchDesktopIcon sx={{ fontSize: 40, color: "##3D526F" }} />
			),
			text: "Estudos dirigidos",
			text2: "Treino focado no conteúdo da prova",
		},
		{
			id: 6,
			icon: <StickyNote2Icon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Marcação do Vade",
			text2: "Destaques e orientação em aulas para organização do Vade",
		},
		{
			id: 7,
			icon: <ExtensionIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Peças-mestras",
			text2: "Técnica para utilização de modelos chaves para todas as áreas",
		},
		{
			id: 8,
			icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Treino de questões",
			text2: "Método para resolver as questões da prova",
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
			icon: <PlayCircleIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Correção de provas anteriores",
			text2: "As 15 últimas provas de 2a fase corrigidas e comentadas.",
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
			icon: <BorderColorIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Redação de peças e questões em aula",
			text2: "Uma semana inteira de imersão na 2a fase OAB",
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
			text: "Pacotes de Simulados Extras",
			text2:
				"Você pode treinar mais... Temos mais de 50 Simulados por área para você adquirir!(além dos simulados do curso)",
		},
		{
			id: 19,
			icon: <WhatsAppIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Canal Exclusivo no Whatsapp",
			text2:
				"Grupo especial da área para mensagens diretas dos professores e muita interação.",
		},
		{
			id: 20,
			icon: <LoopIcon sx={{ fontSize: 40, color: "##3D526F" }} />,
			text: "Revisões finais",
			text2:
				"Uma semana inteira de imersão na 2a fase OAB: Imersão 2a fase! Teses, peças, súmulas, e muito mais...",
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
			href="/cursos/cursos-oab-2fase"
		>
			OAB 2ª Fase
		</Link>,
		<Typography key="3" color="white">
			{singleProduct.Name}
		</Typography>,
	];
	const ecommerceAtributes = JSON.parse(
		singleProduct.ProductEcommerceAttributes,
	);

	return (
		<>
			<Container
				data-testid="container"
				disableGutters
				maxWidth={"xl"}
				sx={{
					backgroundColor: "#ad191a",
					backgroundImage: "linear-gradient(90deg, #ad191a 0%, #26103c 100%)",
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
						<Grid item md={6} alignSelf={"center"}>
							<H1
								sx={{
									borderBottom: "10px solid #EBAD24",
									fontSize: { xs: "30px", md: "60px" },
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
								item
								md={6}
								textAlign={"end"}
								display={"flex"}
								alignItems={"end"}
								justifyContent={"end"}
								sx={{ maxHeight: "300px" }}
							>
								<Image
									width={600}
									height={100}
									style={{
										maxWidth: "100%",
										height: "auto",
										transform: "translateY(40px)",
									}}
									src={singleProduct.CourseCoordinatorUrl}
									alt={singleProduct.Name}
								/>
							</Grid>
						)}
					</Grid>
				</Container>
			</Container>
			<Container>
				<Attributes color="#EBAD24" attributes={ecommerceAtributes} />
				<Grid container my={4} spacing={1}>
					<Grid item xs={12} md={8}>
						<div
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{
								__html: singleProduct.ShortDescription,
							}}
						/>
						<OportunityButton
							singleProduct={singleProduct}
							bgcolor={"#AD191A"}
						/>
						<Box display={"flex"} alignItems={"center"} mt={5}>
							<Avatar sx={{ backgroundColor: "#AD191A", mr: 1 }}>
								<EventAvailableIcon />
							</Avatar>
							<H2 fontSize={"20px"}>Período e Turmas</H2>
						</Box>
						<div
							// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
							dangerouslySetInnerHTML={{
								__html: singleProduct.ClassSchedule,
							}}
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
									backgroundColor: "#AD191A",
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
				<Container>
					<Grid container my={4} py={2} spacing={3}>
						<Grid item xs={12} md={12}>
							<H2>TIME QUE TE LEVARÁ À APROVAÇÃO</H2>
						</Grid>
						{singleProduct.Teachers?.map((teacher, id) => (
							<Grid
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={id}
								item
								xs={12}
								md={4}
								display={"flex"}
								alignItems={"center"}
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

								<Box display={"grid"}>
									<H5>{teacher.Name}</H5>
								</Box>
							</Grid>
						))}
						<Grid item md={12}>
							<Paragraph fontWeight={"bolder"}>
								*Dentre outros grandes nomes
							</Paragraph>
						</Grid>
					</Grid>
				</Container>
			</Container>
			{singleProduct.VideoTag && (
				<Container>
					<Grid container my={4} rowGap={4}>
						<Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
							<Box
								position={"relative"}
								sx={{ backgroundColor: "#EBEBEB", borderRadius: 5, p: 5 }}
							>
								<PlayCircleIcon
									sx={{
										fontSize: 55,
										color: "#AD191A",
										position: "absolute",
										top: { xs: -27, md: 55 },

										left: { xs: 150, md: -23 },
									}}
								/>
								<H2
									sx={{
										fontWeight: "bolder",
										textAlign: { xs: "center", md: "left" },
									}}
								>
									CONHEÇA NOSSA METODOLOGIA
								</H2>
								<Paragraph sx={{ width: { md: 408 } }}>
									Venha conhecer a nossa metodologia e navegue pela plataforma
									exclusiva do MeuCurso!
								</Paragraph>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<iframe
								width="560"
								style={{
									maxWidth: "100%",
									border: "none",
									borderRadius: "4px",
								}}
								height="315"
								src={`https://www.youtube.com/embed/${singleProduct.VideoTag}?si=C4lydf2ImtBMofs4`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							/>
						</Grid>
					</Grid>
				</Container>
			)}
			<Container>
				<Grid container my={4}>
					<Grid item md={12}>
						<H2>O QUE FAZ DIFERENÇA NA SUA APROVAÇÃO</H2>
					</Grid>
					{listDiferences.map((item) => (
						<Grid item xs={6} md={3} key={item.id} textAlign={"center"} py={3}>
							{item.icon}
							<H3 fontSize={"17px"} fontWeight={"bolder"} color={"#AD191A"}>
								{item.text}
							</H3>
							<p>{item.text2}</p>
						</Grid>
					))}
					<Grid item md={12}>
						<p>
							⚠️ Para todas as ferramentas, evento ou itens, consulte as regras
							específicas em Informações relevantes ou na Área do Aluno.
						</p>
					</Grid>
				</Grid>
				<Grid container my={4}>
					<Grid item xs={12} md={12}>
						<ProductDepoiments />
					</Grid>
				</Grid>
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
										color: "#AD191A",
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
										color: "#AD191A",
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
								aria-controls="panel3a-content"
								id="panel3a-header"
							>
								<BuildIcon
									sx={{
										fontSize: 50,
										color: "#AD191A",
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Ferramentas exclusivas - 2a fase OAB{" "}
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<ol>
									<li>
										Os Simulados previstos para correção, conforme o cronograma
										de cada curso, terá dias para disponibilização aos alunos
										(data da publicação) e dias de entrega (prazo para a
										postagem). Remetido o simulado, o prazo de correção será de
										até 4 dias.
									</li>
									<li>
										Os simulados identificados com o símbolo do diamante poderão
										ter o prazo reaberto pelo próprio aluno (prorrogação de 3
										dias).
									</li>
									<li>
										Os plantões de dúvida, como regra, são realizados ao vivo e
										não permanecem gravados.
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
								<WorkspacePremiumIcon
									sx={{
										fontSize: 50,
										color: "#AD191A",
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Garantia MeuCurso - 2a fase OAB
								</p>
							</AccordionSummary>
							<AccordionDetails>
								<ol>
									<li>
										Aplicável aos alunos que optam por iniciar o curso de 2a
										fase antes da publicação da lista de aprovados, seja na
										repescagem (antes da lista definitiva do exame anterior) ou
										na primeira fase (no período entre a prova de 1a fase e a
										publicação da lista preliminar de aprovados).
									</li>
									<li>
										Publicada a lista, o aluno terá o prazo de até 3 (três) dias
										para requerer o cancelamento do curso de 2a fase em que
										estiver inscrito e solicitar o crédito da totalidade do
										valor pago, para utilização do valor em outros cursos do
										MeuCurso (sem aplicação cumulativa de descontos).
									</li>
									<li>
										O requerimento será formulado pelo seguinte e-mail:
										garantia@meucurso.com.br e o crédito tera disponibilidade
										para novas inscrições na própria área do aluno ou site
										MeuCurso.
									</li>
									<li>
										Não requerida a garantia no prazo de 3 dias (da lista em que
										estiver o nome do aluno aprovado), eventual cancelamento
										observará as regras comuns previstas a seguir,
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
										color: "#AD191A",
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
										color: "#AD191A",
									}}
								/>
								<p style={{ fontWeight: "bolder", marginLeft: "1rem" }}>
									Regras sobre cancelamento
								</p>
							</AccordionSummary>
							<AccordionDetails>
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
							</AccordionDetails>
						</Accordion>
					</Box>
				</Grid>
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
								Sim! Após o término da gravação da aula (para as turmas com
								previsão de transmissão ao vivo),. a aula permanece disponível
								na área do aluno para que possa ser assistida em qualquer
								horário/dias durante o tempo do curso.
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
								Paulo. Os alunos do presencial também têm acesso ao conteúdo
								gravado na área do aluno (inclusive as transmissões ao vivo).
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
								As turmas de finais de semana possuem o mesmo conteúdo que as
								turmas semanais?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Sim! O conteúdo é idêntico para ambas as turmas. A única
								diferença está no calendário. As turmas dos finais de semana
								possuem o calendário com aulas previstas nos sábados (aulas
								gravadas durante a semana).
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
								Qual a diferença entre os simulados e os estudos dirigidos?
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<ul>
								<li>
									- Prova simulada - novo - são realizadas duas provas (no
									formato da FGV), com tempo e redação em conjunto com os alunos
								</li>
								<li>
									- Simulados com correção individualizada - são realizados pelo
									aluno dentro do prazo e remetidos pela plataforma. A correção
									é realizada pelos professores/tutores e o aluno recebe os
									apontamentos individuais dentro do espelho modelo da FGV. Além
									do espelho individual, também há vídeo de correção e gabarito.
								</li>
								<li>
									- Simulados com auto correção - não são enviados - o aluno
									recebe o espelho, gabarito e a aula de correção.
								</li>
								<li>
									- Estudos dirigidos - integram o ebook de treino e representam
									exercícios, questões e enunciados no formato da prova OAB/FGV
									para que o aluno complemente seu treino para a prova.
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
								Como funciona a remessa dos simulados para correção individual?
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
									programação de cada curso (geralmente às sextas-feiras). O
									prazo para a remessa é de até 3 dias
								</li>
								<li>
									- A postagem é feita pela Plataforma, em formato PDF (existe
									um breve vídeo tutorial)
								</li>
								<li>
									- Sugerimos que o aluno faça o simulado na forma manuscrita,
									na folha modelo OAB/FGV.
								</li>
							</ul>
						</AccordionDetails>
					</Accordion>
				</Box>
			</Container>
		</>
	);
};

export default Oab2Product;
