import { Button, Link } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

export default function OportunityButton({ singleProduct, bgcolor }) {
	const { data: session } = useSession();
	const { enqueueSnackbar } = useSnackbar();

	const studentId = session?.user?.StudentAddress?.map(
		(student) => student.StudentId,
	)[0];

	const handleEmenta = async () => {
		if (session) {
			const object = {
				StudentId: session?.user?.StudentId,
				SKU: singleProduct.SKU,
			};

			try {
				await fetch("https://apiecommerce.meucurso.com.br/LeadCapture", {
					method: "POST",
					headers: { Authorization: `Bearer ${session?.user?.Token}` },
					body: JSON.stringify(object),
				});

				window.open(singleProduct.ProductLeadCapture.LeadBonus);
			} catch (e) {
				console.error(e.data);
			}
		} else {
			enqueueSnackbar("Faça o login para prosseguir!", {
				variant: "warning",
			});
		}
	};

	if (singleProduct.ApiEcommerceFrontEndTypes === 11) {
		return (
			<Link
				sx={{
					bgcolor: "#FE9C08",
					p: 2,
					borderRadius: 2,
					color: "white",
					textDecoration: "none",
					textAlign: "center",
					fontWeight: 700,
				}}
				href="/logofdg.png"
				target="_blank"
			>
				Baixe o edital!
			</Link>
		);
	}
	return (
		<>
			{!singleProduct.ProductLeadCapture && (
				<Link
					style={{
						textDecoration: "underline",
						color: "blue",
						textDecorationColor: "blue",
					}}
					target="_blank"
					href={singleProduct.DescriptionFileUrl}
				>
					Baixe aqui o descritivo!
				</Link>
			)}
			{singleProduct.ProductLeadCapture &&
				!singleProduct.ProductLeadCapture.Active && (
					<Link
						style={{
							textDecoration: "underline",
							color: "blue",
							textDecorationColor: "blue",
						}}
						target="_blank"
						href={singleProduct.DescriptionFileUrl}
					>
						Baixe aqui o descritivo!
					</Link>
				)}

			{singleProduct.ProductLeadCapture?.Active && (
					<Button
						onClick={handleEmenta}
						sx={{
							padding: 2,
							backgroundColor: `${bgcolor}`,
							color: "white",
							transition: "0.3s",
							"&:hover": {
								backgroundColor: `${bgcolor}`,
								filter: "brightness(0.8)",
							},
						}}
					>
						{singleProduct.ProductLeadCapture.ButtonName}
					</Button>
				)}
		</>
	);
}
