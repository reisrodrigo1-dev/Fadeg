import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { Box, Button, Container, Typography } from "@mui/material";

import api from "utils/__api__/meu-curso";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useProducts } from "hooks/useProducts";
import { Clarity } from "components/metrics/Clarity";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import { useBanners } from "hooks/useBanners";
import { H2, H3 } from "components/Typography";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
	const carouselData = await api.getIndexBanners("15");
	return { props: { carouselData } };
};

export const MpspMCPage = ({ carouselData }) => {
	const { products: mpsp } = useProducts(api.getProductsById("318"));

	return (
		<ShopLayout1>
			<SEO title="MPSP MeuCurso" sitename="MeuCurso" />
			<Container
				disableGutters={true}
				maxWidth="xl"
				sx={{ backgroundColor: "#331062" }}
			>
				<Box>
					<Section1 carouselData={carouselData} />
					<Container
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: '100%'
						}}
					>
						<H2 sx={{ color: "#5DDD46" }}>Ministério Público de São Paulo</H2>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/_ppPp1NW0Sk?si=L99SHKIgToLyE4XP&amp;controls=0"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							style={{ border: "none", borderRadius: "8px" }}
						/>
						<Section6 showProducts={4} products={mpsp} />
					</Container>
				</Box>
				<Clarity />
			</Container>
		</ShopLayout1>
	);
};

export default MpspMCPage;
