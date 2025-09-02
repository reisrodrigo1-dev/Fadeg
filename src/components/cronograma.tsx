import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { H2, Paragraph } from "components/Typography";
import Link from "next/link";

interface CronogramaProps {
	title?: string;
	color?: string;
	rows?: {
		id: number | string;
		date: string;
		event: string;
		link?: string;
	}[];
}

const Cronograma = (props: CronogramaProps) => {
	return (
		<Box py={5}>
			<H2 py={5} textAlign={"center"}>
				{props.title}
			</H2>
			<TableContainer
				component={Paper}
				sx={{ boxShadow: "0px 0px 7px 3px rgba(0,0,0,0.13)" }}
			>
				<Table sx={{ minWidth: { xs: 220 } }} aria-label="simple table">
					<TableHead sx={{ backgroundColor: "#A6121A" }}>
						<TableRow>
							<TableCell sx={{ color: "white" }} align="center">
								Data
							</TableCell>
							<TableCell sx={{ color: "white" }} align="center">
								Eventos
							</TableCell>

							<TableCell sx={{ color: "white" }} align="center">
								{props.rows.find((item) => item?.link)?.link && "link"}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell
									padding="none"
									align="center"
									component="th"
									scope="row"
									sx={{ padding: "8px" }}
								>
									{row.date}
								</TableCell>
								<TableCell
									sx={{ padding: "8px" }}
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
									{row.link}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export { Cronograma, type CronogramaProps };
