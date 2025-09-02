import styled from "@emotion/styled";
import {
	AttachMoneyRounded,
	PermPhoneMsgOutlined,
	PlayCircleOutline,
	SouthAmerica,
	TrendingUp,
	UploadOutlined,
	CheckCircle,
} from "@mui/icons-material";
import {
	Box,
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	Alert,
	Snackbar,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, H2, H3, Paragraph } from "components/Typography";
import { useState, type ReactNode } from "react";

interface Steps {
	step: number;
	title: string;
	content: { icon: ReactNode; text: string }[];
}

const HeroSection = styled(Box)(({ theme }) => ({
	background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
	color: "white",
	padding: "4rem 0",
	position: "relative",
	overflow: "hidden",
	"&::before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: "url('/pattern.svg') repeat",
		opacity: 0.1,
	},
}));

const StepCard = styled(Card)(({ theme }) => ({
	height: "100%",
	transition: "transform 0.3s ease, box-shadow 0.3s ease",
	"&:hover": {
		transform: "translateY(-8px)",
		boxShadow: (theme as any).shadows?.[10] || "0 10px 30px rgba(0,0,0,0.1)",
	},
	border: "1px solid",
	borderColor: (theme as any).palette?.divider || "#e0e0e0",
}));

const FormSection = styled(Box)(({ theme }) => ({
	background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
	padding: "4rem 0",
	marginTop: "4rem",
}));

export default function SejaParceiroPage() {
	const [showAlert, setShowAlert] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<ShopLayout1>
			<SEO title="Seja Parceiro" />

			{/* Hero Section */}
			<HeroSection>
				<Container maxWidth="lg">
					<Box textAlign="center" sx={{ position: "relative", zIndex: 1 }}>
						<H1 sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 700, mb: 2 }}>
							Seja um Parceiro MeuCurso
						</H1>
						<Typography sx={{ fontSize: "1.25rem", opacity: 0.9, maxWidth: "600px", mx: "auto" }}>
							Junte-se a nossa rede de influenciadores e monetize seu conteúdo educacional
						</Typography>
					</Box>
				</Container>
			</HeroSection>

			{/* Steps Section */}
			<Container maxWidth="lg" sx={{ py: 6 }}>
				<Box textAlign="center" mb={6}>
					<H2 sx={{ fontSize: "2rem", fontWeight: 600, color: "#1a202c", mb: 2 }}>
						Como funciona
					</H2>
					<Typography sx={{ fontSize: "1.1rem", color: "#4a5568", maxWidth: "600px", mx: "auto" }}>
						Siga esses passos simples para começar a ganhar comissões como nosso parceiro
					</Typography>
				</Box>

				<Grid container spacing={4}>
					{steps.map((step, index) => (
						<Grid item xs={12} md={4} key={step.step}>
							<StepCard elevation={2}>
								<CardContent sx={{ p: 3, height: "100%" }}>
									<Box display="flex" flexDirection="column" height="100%">
										<Box
											sx={{
												width: 60,
												height: 60,
												borderRadius: "50%",
												background: `linear-gradient(135deg, ${getStepColor(index)} 0%, ${getStepColorDark(index)} 100%)`,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												mb: 3,
												mx: "auto",
											}}
										>
											<Typography sx={{ color: "white", fontWeight: 700, fontSize: "1.5rem" }}>
												{step.step}
											</Typography>
										</Box>

										<H3 sx={{ fontSize: "1.25rem", fontWeight: 600, mb: 3, textAlign: "center", color: "#2d3748" }}>
											{step.title}
										</H3>

										<Box sx={{ flexGrow: 1 }}>
											{step.content.map((content, contentIndex) => (
												<Box key={contentIndex} display="flex" alignItems="flex-start" mb={2}>
													<Box sx={{ mr: 2, mt: 0.5 }}>
														{content.icon}
													</Box>
													<Paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#4a5568" }}>
														{content.text}
													</Paragraph>
												</Box>
											))}
										</Box>
									</Box>
								</CardContent>
							</StepCard>
						</Grid>
					))}
				</Grid>
			</Container>

			{/* Formulário de Cadastro */}
			<FormSection>
				<Container maxWidth="sm">
					<Box textAlign="center" mb={4}>
						<H2 sx={{ fontSize: "1.8rem", fontWeight: 600, color: "#333", mb: 1 }}>
							Cadastro
						</H2>
						<Typography sx={{ fontSize: "1rem", color: "#666", mb: 1 }}>
							Após realizar login na Plataforma e gerar usuário e senha
						</Typography>
						<Typography sx={{ fontSize: "1.1rem", color: "#e53e3e", fontWeight: 600 }}>
							Seja um Influenciador MeuCurso
						</Typography>
					</Box>

					<Card 
						elevation={3} 
						sx={{ 
							borderRadius: "8px", 
							overflow: "hidden",
							backgroundColor: "#f7f7f7",
							border: "1px solid #e0e0e0"
						}}
					>
						<CardContent sx={{ p: 0 }}>
							<iframe
								width="100%"
								height="600"
								src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__l93gF5UQk5INlBET1lDN0ZVWTQ1TkJISUNaVkM3Ti4u"
								frameBorder="0"
								marginWidth={0}
								marginHeight={0}
								style={{ 
									border: 'none',
									maxWidth: '100%',
									maxHeight: '100vh'
								}}
								allowFullScreen
								title="Cadastro de Parceiro"
							/>
						</CardContent>
					</Card>
				</Container>
			</FormSection>

			{/* Success Alert */}
			<Snackbar
				open={showAlert}
				autoHideDuration={6000}
				onClose={() => setShowAlert(false)}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
			>
				<Alert
					onClose={() => setShowAlert(false)}
					severity="success"
					sx={{ width: "100%" }}
					icon={<CheckCircle />}
				>
					Cadastro realizado com sucesso! Nossa equipe entrará em contato em breve.
				</Alert>
			</Snackbar>
		</ShopLayout1>
	);
}

// Funções auxiliares para cores dos steps
const getStepColor = (index: number) => {
	const colors = ["#3b82f6", "#10b981", "#f59e0b"];
	return colors[index] || "#6b7280";
};

const getStepColorDark = (index: number) => {
	const colors = ["#1d4ed8", "#059669", "#d97706"];
	return colors[index] || "#374151";
};

const steps: Steps[] = [
	{
		step: 1,
		title: "Cadastro Online do Influenciador",
		content: [
			{
				icon: <UploadOutlined sx={{ color: "#3b82f6" }} />,
				text: `Acesse meucurso.com.br/influenciador. Preencha o cadastro e aceite online dos termos da Plataforma`,
			},
			{
				icon: <PermPhoneMsgOutlined sx={{ color: "#10b981" }} />,
				text: `Se precisar de alguma ajuda ou desejar tirar dúvidas, nossa equipe Comercial estará à disposição`,
			},
		],
	},
	{
		step: 2,
		title: `Ativação do cadastro e liberação do cupom e painel de acompanhamento das vendas no BIPE`,
		content: [
			{
				icon: <PlayCircleOutline sx={{ color: "#f59e0b" }} />,
				text: `Recebido o cadastro, nossa equipe ativará seu cupom e o acesso ao Painel de vendas.`,
			},
			{
				icon: <SouthAmerica sx={{ color: "#f59e0b" }} />,
				text: `Ingresso na comunidade de Influenciadores do MeuCurso para recebimento do material de divulgação, notícias, lançamentos e orientações.`,
			},
		],
	},
	{
		step: 3,
		title: `Início das vendas e acompanhamento de Comissões`,
		content: [
			{
				icon: <TrendingUp sx={{ color: "#10b981" }} />,
				text: `Compartilhe seu cupom e link personalizado. Acompanhe suas vendas e comissões em tempo real.`,
			},
			{
				icon: <AttachMoneyRounded sx={{ color: "#10b981" }} />,
				text: `Receba suas comissões mensalmente via PIX ou transferência bancária.`,
			},
		],
	},
];
