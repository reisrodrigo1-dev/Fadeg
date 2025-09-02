"use client";
import { Close } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	LinearProgress,
	Snackbar,
	Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { type ReactNode, useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface SurpriseCouponProps {
	couponText: ReactNode;
	borderColor: string;
	couponName: string;
}

const SurprisePosCoupon = ({
	couponText,
	borderColor,
	couponName,
}: SurpriseCouponProps) => {
	const { enqueueSnackbar } = useSnackbar();
	const [hide, setHide] = useState(false);

	const handleClipboard = (couponName: string) => {
		enqueueSnackbar("Cupom copiado!", {
			variant: "success",
			autoHideDuration: 3000,
		});
		navigator.clipboard.writeText(couponName);
	};

	const handleClose = () => {
		setHide(!hide);
	};

	return (
		<Card
			sx={{
				position: { xs: "static", md: "fixed" },
				bottom: 150,
				right: 10,
				border: `1px solid ${borderColor}`,
				overflow: "visible",
				zIndex: 99,
				visibility: hide ? "hidden" : "visible",
			}}
		>
			<Button
				sx={{
					position: "absolute",
					mb: 5,
					right: 5,
					top: 5,
					cursor: "pointer",
					zIndex: 999,
				}}
				onClick={handleClose}
			>
				<Close />
			</Button>
			<CardContent
				sx={{
					position: "relative",
					display: "flex",
					flexDirection: "column",
					gap: 4,
				}}
			>
				<div>{couponText}</div>
			</CardContent>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					mb: 2,
				}}
			>
				<Button
					sx={{
						display: "flex",
						alignItems: "end",
						backgroundColor: borderColor,
						color: "white",
						textWeight: 700,
					}}
					onClick={() => handleClipboard(couponName)}
				>
					COPIAR CUPOM
				</Button>
			</Box>
		</Card>
	);
};

export default SurprisePosCoupon;
