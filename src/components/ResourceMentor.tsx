import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
	Grid,
	Paper,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";
import { H2, H3, Paragraph } from "./Typography";

export default function ResourceMentor({ rows }) {
	const { data: session } = useSession();
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handlePush = () => {
		if (session) {
			router.push("http://aluno.fadeg.com.br/BIPEStore/Index/");
		} else {
			router.push("/categorias/oab-2-fase-mentoria-de-recurso-%7C-ouvidoria");
		}
	};

	const handleOpenDialog = () => {
		setOpen(true);
	};
	const handleCloseDialog = () => {
		setOpen(false);
	};

	return (
		<>
			<Dialog
				sx={{
					"& .MuiDialog-paper": {
						backgroundColor: "transparent",
					},
				}}
				maxWidth="xl"
				open={open}
				onClose={handleCloseDialog}
			>
				<Box
					sx={{
						padding: 5,

						backgroundColor: "transparent",
						backdropFilter: "blur(3px) saturate(180%)",
					}}
				>
					<DialogTitle textAlign={"center"}>
						<H2 color={"white"}>Recurso individualizado</H2>
						<Paragraph color={"white"}>
							Ao clicar, você terá acesso a área do aluno a uma rota de apoio à
							interposição do recurso.
						</Paragraph>
						<Paragraph color={"white"}>
							Se você já for aluno, use o login existente. Caso ainda não seja
							aluno, é só criar a conta gratuitamente.
						</Paragraph>
					</DialogTitle>

					<DialogContent>
						<DialogContentText
							sx={{
								display: "flex",
								flexDirection: { xs: "column", md: "row" },
								gap: "2px",
							}}
						>
							<Button
								variant="contained"
								color="error"
								target="_blank"
								href="http://aluno.fadeg.com.br/StudyRoute/Degustate/e3d6d139-15a9-4bbc-8d2e-2ea21e5d5110?l=true"
							>
								Administrativo
							</Button>
							<Button
								variant="contained"
								color="error"
								target="_blank"
								href="http://aluno.fadeg.com.br/StudyRoute/Degustate/751c8562-c099-4fa0-8b43-bf5a8facf3e3?l=true"
							>
								Civil
							</Button>
							<Button
								variant="contained"
								color="error"
								target="_blank"
								href="http://aluno.fadeg.com.br/StudyRoute/Degustate/03473915-b91b-415c-b4f6-8bf9e789791c?l=true"
							>
								Constitucional
							</Button>
							<Button
								variant="contained"
								color="error"
								target="_blank"
								href="http://aluno.fadeg.com.br/StudyRoute/Degustate/6a115504-2f64-4daf-b672-6d6039f9de61?l=true"
							>
								Empresarial
							</Button>
							<Button
								variant="contained"
								color="error"
								target="_blank"
								href="http://aluno.fadeg.com.br/StudyRoute/Degustate/ad2b3941-8f7b-4efa-a889-4cfdb69b4de0?l=true"
							>
								Penal
							</Button>
							<Button
								variant="contained"
								color="error"
								target="_blank"
								href="http://aluno.fadeg.com.br/StudyRoute/Degustate/0afce9bb-178e-498a-8956-5c0f45981818?l=true"
							>
								Trabalho
							</Button>
							<Button
								variant="contained"
								color="error"
								target="_blank"
								href="http://aluno.fadeg.com.br/StudyRoute/Degustate/912f0547-03a2-4849-ba00-6ea92bb7aaea?l=true"
							>
								Tributário
							</Button>
						</DialogContentText>
					</DialogContent>
				</Box>
			</Dialog>
			<Grid container columnSpacing={2}>
				{/* <Grid item xs={12} md={6}>
          <Paper
            onClick={handleOpenDialog}
            sx={{
              cursor: "pointer",
              padding: 6.5,
              textAlign: "center",
              my: 3,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.025)" },
            }}
          >
            <H2>Recurso individualizado</H2>
            <Paragraph>Plataforma BIPE</Paragraph>
            <Divider sx={{ marginY: "8px" }} />
            <H3>Gratuito</H3>
            <Paragraph>(vagas limitadas - pré-inscrição)</Paragraph>
            <Divider sx={{ marginY: "8px" }} />
            <Paragraph>
              Insira os dados do seu espelho na plataforma, indique as
              linhas das respostas,faça upload da sua prova! Em até 1 hora
              , receba a minuta do recurso contra reprovação por
              insuficiência de nota
            </Paragraph>
            <Button
              sx={{
                p: 2,
                backgroundColor: "#A6121A",
                color: "whitesmoke",
                marginTop: "1rem",
                "&:hover": { backgroundColor: "#FF4242" },
              }}
            >
              GARANTA JA SEU RECURSO INDIVIDUALIZADO
            </Button>
          </Paper>
        </Grid> */}
				{/* <Grid item xs={12} md={12}>
          <Paper
            onClick={handlePush}
            sx={{
              cursor: "pointer",
              padding: 5,
              textAlign: "center",
              my: 3,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.025)" },
            }}
          >
            <H2>Mentoria de Ouvidoria</H2>
            <Paragraph>Professores MeuCurso</Paragraph>
            <Divider sx={{ marginY: "8px" }} />
            <H3>Contratação pelo site</H3>
            <Paragraph>(Site R$ 499 | aluno MeuCurso R$ 449)</Paragraph>
            <Divider sx={{ marginY: "8px" }} />
            <Button
              sx={{
                p: 2,
                backgroundColor: "#A6121A",
                color: "whitesmoke",
                marginTop: "1rem",
                "&:hover": { backgroundColor: "#FF4242" },
              }}
            >
              CLIQUE PARA ESCOLHER SUA MENTORIA!
            </Button>
          </Paper>
        </Grid> */}
			</Grid>
			<Grid container>
				<Grid item xs={12} md={12}>
					<H2 py={3} textAlign={"center"}>
						Cronograma
					</H2>
					<TableContainer component={Paper}>
						<Table
							sx={{ minWidth: { xs: 220, md: 450 } }}
							aria-label="simple table"
						>
							<TableHead sx={{ backgroundColor: "#A6121A" }}>
								<TableRow>
									<TableCell sx={{ color: "white" }} align="center">
										Data
									</TableCell>
									<TableCell sx={{ color: "white" }} align="center">
										Eventos
									</TableCell>
									<TableCell align="right"> </TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								   {rows.map((row) => {
									   const highlight = row.id === 3 || row.id === 5;
									   return (
										   <TableRow
											   key={row.id}
											   sx={{
												   "&:last-child td, &:last-child th": { border: 0 },
												   ...(highlight && { backgroundColor: "#f5f5f5" })
											   }}
										   >
											   <TableCell
												   padding="none"
												   align="center"
												   component="th"
												   scope="row"
												   sx={{ padding: "8px", ...(highlight && { fontWeight: "bold" }) }}
											   >
												   {row.date}
											   </TableCell>
											   <TableCell
												   sx={{ padding: "8px", ...(highlight && { fontWeight: "bold" }) }}
												   padding="none"
												   align="center"
											   >
												   {row.event}
											   </TableCell>
											   <TableCell
												   sx={{ padding: "8px" }}
												   padding="none"
												   align="center"
											   >
												   {row.link.includes("modal") && (
													   <Paragraph
														   sx={{
															   cursor: "pointer",
															   color: "blue",
															   textDecoration: "underline",
															   textDecorationColor: "blue",
														   }}
														   onClick={handleOpenDialog}
													   >
														   {row.action}
													   </Paragraph>
												   )}
												   {row.link.includes("#") && (
													   <Paragraph sx={{ cursor: "not-allowed" }}>
														   {row.action}
													   </Paragraph>
												   )}
												   {!row.link.includes("#") &&
													   !row.link.includes("modal") && (
														   <Link
															   target="_blank"
															   href={row?.link}
															   style={{
																   color: "blue",
																   textDecoration: "underline",
																   textDecorationColor: "blue",
															   }}
														   >
															   {row.action}
														   </Link>
													   )}
											   </TableCell>
										   </TableRow>
									   );
								   })}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
		</>
	);
}
