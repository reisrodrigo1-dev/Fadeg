"use client";
import { Box, Container } from "@mui/material";
import CoursesTabs from "components/CoursesTabs";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { useBanners } from "hooks/useBanners";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Confetti from "react-confetti-boom";
import api from "utils/__api__/meu-curso";

// import useCountdown from "hooks/useCountdown";

const Carnaval = () => {
	const tabs = [
		{
			id: 1,
			name: "Oab 1ª Fase",
			value: "1",
			textTemplate: "OAB 1ª FASE",
			buttonColor: "#D23F57",
			categoryId: {
				id: 203,
				UrlKey: "oab-1-fase-destaques",
			},
		},
		{
			id: 2,
			name: "Oab 2ª Fase",
			value: "2",
			textTemplate: "OAB 2ª FASE",
			buttonColor: "#D23F57",
			categoryId: {
				id: 161,
				UrlKey: "oab-2-fase-todas-as-areas",
			},
		},
		{
			id: 3,
			name: "Pós-Graduação",
			value: "3",
			textTemplate: "Pós-Graduação FADEG",
			buttonColor: "#25395B",
			categoryId: {
				id: 3,
				UrlKey: "pos-graduacao",
			},
		},
		{
			id: 4,
			name: "Concursos",
			value: "4",
			textTemplate: "Concursos Públicos",
			buttonColor: "#3C098E",
			categoryId: {
				id: 275,
				UrlKey: "concursos-publicos-home-procuradorias",
			},
		},
		{
			id: 5,
			name: "Prática na Advocacia",
			value: "5",
			textTemplate: "Atualizações e Práticas",
			buttonColor: "#CC8A48",
			categoryId: {
				id: 12,
				UrlKey: "atualizacao-e-pratica",
			},
		},
	];

	const { banners } = useBanners(api.getIndexBanners("13"));

	return (
		<ShopLayout1>
			<SEO title="Carnaval MeuCurso" sitename="MeuCurso" />
			<Container
				sx={{
					background:
						"linear-gradient(45deg, rgba(209,42,116,1) 0%, rgba(88,7,171,1) 50%, rgba(129,0,221,1) 100%)",
				}}
				disableGutters={true}
				maxWidth="xl"
			>
				<Container>
					<Section1 carouselData={banners} />

					<Box
						sx={{
							position: "absolute",
							width: { xs: 414, md: 1232 },
							height: 800,
							marginTop: -7,
							overflow: "hidden",
						}}
					>
						<Confetti
							mode="fall"
							particleCount={50}
							fadeOutHeight={50}
							shapeSize={5}
							colors={["#FFFFFF", "#FF0000", "#00FF00"]}
						/>
					</Box>
					<Container sx={{ position: "relative", textAlign: "center", py: 2 }}>
						<Box sx={{ position: "relative", zIndex: 10 }}>
							<CoursesTabs textColor="white" tabs={tabs} />
						</Box>
					</Container>
				</Container>
			</Container>
		</ShopLayout1>
	);
};

export default Carnaval;
