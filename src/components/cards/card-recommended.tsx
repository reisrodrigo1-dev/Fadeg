import { Box, Typography } from "@mui/material";
import { H2, H3 } from "components/Typography";
import { Roboto_Condensed, Poppins } from "next/font/google";

interface CardRecommendedProps {
	title: string;
	courseName: string;
	subtitle: string;
	content: {
		emoji: string;
		text: string;
		hightlighted?: boolean;
	}[];
	recommended?: boolean;
}

const roboto = Roboto_Condensed({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const poppins = Poppins({
	weight: ["400", "500", "700", "800"],
	subsets: ["latin"],
});

const CardRecommended = ({
	title,
	subtitle,
	content,
	courseName,
	recommended,
}: CardRecommendedProps) => {
	return (
		<Box
			sx={{
				bgcolor: "white",
				border: "1px solid rgba(0, 0, 0, 0.2)",
				pt: 1,
				pb: 2,
				display: "flex",
				flexDirection: "column",
				position: "relative",
				borderRadius: 2,
				width: "max-content",
			}}
			className={poppins.className}
		>
			{recommended && (
				<Box
					sx={{
						border: "1px solid black",
						borderRadius: 2,
						textAlign: "center",
						width: "max-content",
						px: 1,
						position: "absolute",
						top: -10,
						right: -10,
						background: "linear-gradient(to right, #F58B50, #834DE0)",
					}}
				>
					<Typography
						sx={{
							fontWeight: 900,
							fontSize: 16,
							color: "white",
						}}
						className={poppins.className}
					>
						RECOMENDADO
					</Typography>
				</Box>
			)}
			<Box
				sx={{
					bgcolor: "#F1EFEB",
					border: "1px solid",
					p: 2,
					display: "flex",
					flexDirection: "column",
					borderRadius: 1,
					mx: 1,
					textAlign: "center",
					maxHeight: "140px",
					height: "100%",
				}}
			>
				<H3 sx={{ textTransform: "uppercase" }}>{courseName}</H3>
				<H2 sx={{ textTransform: "uppercase", fontWeight: 500 }}>{title}</H2>
			</Box>
			<Box
				sx={{
					display: "flex",
					bgcolor: recommended ? "#FADC80" : "#F1EFEB",
					px: 2,
					py: 1,
					my: 3
				}}
			>
				<Typography
					sx={{
						maxWidth: 250,
						textAlign: "center",
						fontWeight: 500,
						fontSize: 14,
					}}
					className={poppins.className}
				>
					{subtitle}
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{content.map((item) => (
					<span
						key={item.text}
						style={{
							display: "flex",
							maxWidth: 300,
							width: "100%",
							gap: 10,
							alignItems: "start",
							paddingLeft: 16,
							paddingRight: 16,
							backgroundColor: item.hightlighted && "#FADC80",
						}}
					>
						<Typography>{item.emoji}</Typography>
						<Typography className={poppins.className} sx={{ fontSize: 14 }}>
							{item.text}
						</Typography>
					</span>
				))}
			</Box>
		</Box>
	);
};

export { CardRecommended, type CardRecommendedProps };
