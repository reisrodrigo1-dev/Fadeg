import { Box, Container, Grid, IconButton, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Image from "components/BazaarImage";
import { ReclameAqui } from "components/ReclameAqui";
import { FlexBox } from "components/flex-box";
import Facebook from "components/icons/Facebook";
import Google from "components/icons/Google";
import Instagram from "components/icons/Instagram";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Link from "next/link";
import type { FC } from "react";

// styled component
const StyledLink = styled(Link)(({ theme }) => ({
	display: "block",
	borderRadius: 4,
	cursor: "pointer",
	padding: "0.3rem 0rem",
	color: theme.palette.grey[500],
	"&:hover": { color: theme.palette.grey[100] },
}));

const Footer1: FC = () => {
	return (
		<footer>
			<Box bgcolor="#222935">
				<Container sx={{ p: "1rem", color: "white" }}>
					<Box
						textAlign={{ xs: "center", lg: "start" }}
						py={10}
						overflow="hidden"
					>
						<Grid container spacing={3}>
							<Grid
								item
								lg={4}
								md={6}
								sm={6}
								xs={12}
								display={"flex"}
								flexDirection={"column"}
								gap={2}
								alignItems={"center"}
							>
								<Link href="/">
									<Image
										mx={{ xs: "auto", lg: "0" }}
										height={60}
										mb={0}
										src="/logofdg.png"
										alt="logo"
									/>
								</Link>

								<Box mb={2.5} color="grey.500">
									MEU CURSO INTELIGÊNCIA E TECNOLOGIA EDUCACIONAL LTDA
									<Box>CNPJ: 30.976.221/0001-60</Box>
								</Box>

								<Box display="flex" flexDirection="column" alignItems="center" gap={2} mb={2}>
									<Image
										height={60}
										src="/mec.png"
										alt="MEC"
									/>
									<Image
										height={200}
										src="/emec.png"
										alt="EMEC"
									/>
								</Box>

								<AppStore />
								<ReclameAqui />
							</Grid>
							<Grid item lg={2} md={6} sm={6} xs={12}>
								<Box
									fontSize="18px"
									fontWeight="600"
									mb={1.5}
									lineHeight="1"
									color="white"
								>
									Institucional
								</Box>

								<div>
									{aboutLinks.map((item, ind) => (
										<StyledLink href={item.url} key={ind}>
											{item.name}
										</StyledLink>
									))}
								</div>
							</Grid>
							<Grid item lg={3} md={6} sm={6} xs={12}>
								<Box
									fontSize="18px"
									fontWeight="600"
									mb={1.5}
									lineHeight="1"
									color="white"
								>
									Contato
								</Box>

								<Box py={0.6} color="grey.500">
									Endereço: Rua Luís Coelho, 340
								</Box>
								<Box py={0.6} color="grey.500">
									Complemento: Loja Terrea CONJ 31 A 42 62
								</Box>
								<Box py={0.6} color="grey.500">
									Municipio: São Paulo - SP
								</Box>
								<Box py={0.6} color="grey.500">
									E-mail: ouvidoria@fadedg.com.br
								</Box>
								<Box py={0.6} color="grey.500">
									CEP: 01.309-000
								</Box>
								<Box py={0.6} color="grey.500">
									Bairro/Distrito: Consolação
								</Box>
								<Box py={0.6} color="grey.500">
									Telefone: (11) 4200-4466
								</Box>

								<Box py={0.6} fontWeight={"bolder"} color="grey.500">
									Atendimento Presencial (SEDE)
								</Box>
								<Box py={0.6} color="grey.500">
									2ª a 6ª: das 08:00 às 20:00
								</Box>
								<Box py={0.6} color="grey.500">
									Sábado das 08:00 às 13:00
								</Box>

								<Box py={0.6} fontWeight={"bolder"} color="grey.500">
									Canais de Atendimento
								</Box>
<Box py={0.6} color="grey.500">
									Telefone: (11) 4200-4460
								</Box>
								<Box py={0.6} color="grey.500">
									2ª a 6ª: das 09:00 às 20:00
								</Box>
<Box py={0.6} fontWeight={"bolder"} color="grey.500">
									Whatsapp: (11) 99188-4370
								</Box>
<Box py={0.6} color="grey.500">
									2ª a 6ª: das 09:00 às 20:00
								</Box>
								<Box py={0.6} color="grey.500">
									Sábado das 08:00 às 14:00
								</Box>

								<Box py={0.6} fontWeight={"bolder"} color="grey.500">
									Ouvidoria
								</Box>

								<Box py={0.6} color="grey.500">
									Email: ouvidoria@fadedg.com.br
								</Box>
							</Grid>

							<Grid item lg={3} md={6} sm={6} xs={12}>
								<Box
									fontSize="18px"
									fontWeight="600"
									mb={1.5}
									lineHeight="1"
									color="white"
								>
									Atendimento
								</Box>

								<div>
									{customerCareLinks.map((item, ind) => (
										<StyledLink href={item.url} key={ind}>
											{item.name}
										</StyledLink>
									))}
									<FlexBox className="flex" mx={-0.625} mt={10}>
										{iconList.map((item, ind) => (
											<a
												href={item.url}
												target="_blank"
												rel="noreferrer noopenner"
												key={ind}
												style={{ margin: "auto" }}
											>
												<IconButton
													sx={{
														margin: 0.5,

														fontSize: 12,
														padding: "10px",
														backgroundColor: "rgba(0,0,0,0.2)",
													}}
												>
													<item.icon
														fontSize="inherit"
														sx={{ color: "white" }}
													/>
												</IconButton>
											</a>
										))}
									</FlexBox>
								</div>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</footer>
	);
};

const aboutLinks = [
	{
		name: "Quem Somos",
		url: "/institucional",
	},
	{
		name: "Edital de Processo Seletivo 2025/2",
		url: "https://campanhas.meucurso.com.br/edital-fadeg.pdf",
	},
	{
		name: "Documentos Institucionais",
		url: "#",
	},
	{
		name: "Termos de uso Graduação",
		url: "#",
	},
	{
		name: "Termos de uso Pós-Graduação",
		url: "#",
	},
	{
		name: "Convênios e Parcerias",
		url: "#",
	},
	{
		name: "Programa de Estágio",
		url: "#",
	},
];

const customerCareLinks = [
	{
		name: "Central de ajuda",
		url: "/central-de-ajuda",
	},
	{
		name: "Perguntas frequentes",
		url: "/central-de-ajuda",
	},
	{
		name: "Requisitos mínimos",
		url: "/central-de-ajuda",
	},
	{
		name: "Política de privacidade",
		url: "/politica-de-privacidade",
	},
	{
		name: "Termos de uso",
		url: "/termos-de-uso",
	},
	{
		name: "Seja Monitor",
		url: "https://docs.google.com/forms/d/e/1FAIpQLScXc_6N-yyZOs21MnDg0FtNifQXBlkJDjuhKh2k00ELvI1gXg/viewform",
	},
];

const iconList = [
	{ icon: Facebook, url: "https://www.facebook.com/meucursooficial" },
	{ icon: Twitter, url: "https://twitter.com/meucursooficial" },
	{
		icon: Youtube,
		url: "https://www.youtube.com/@MeuCursooficial",
	},
	{ icon: Instagram, url: "https://www.instagram.com/fadegoficial" },
];

export default Footer1;
