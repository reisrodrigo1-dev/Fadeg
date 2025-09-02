import { Box, Container, Grid } from "@mui/material";
import Blog from "components/Blog";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import SEO from "components/SEO";
import { H2, Paragraph } from "components/Typography";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import { Poppins } from "next/font/google";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import api from "utils/__api__/meu-curso";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function EventosPos() {
	const { products } = useProducts(api.getProductsById("304"));
	const { banners } = useBanners(api.getIndexBanners("13"));

	return (
		<ShopLayout1>
			<SEO title="Eventos Pós Graduação" />
			<Container
				maxWidth="xl"
				disableGutters
				sx={{
					background:
						"linear-gradient(166deg,rgba(4, 67, 156, 1) 0%, rgba(16, 32, 55, 1) 45%);",
				}}
			>
				<Container>
					<Section1 carouselData={banners} />
					<Box
						className={poppins.className}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							gap: 2,
						}}
					>
						<H2 sx={{ color: "whitesmoke", fontSize: 32 }}>Congresso de IA</H2>
						<iframe
							style={{
								aspectRatio: "16/9",
								maxWidth: 750,
								borderRadius: 8,
								border: 0,
								boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75);",
							}}
							width="100%"
							height="auto"
							src="https://www.youtube.com/embed/oPvMBzN5okA?si=s1IpNMhOw090cAlI"
							title="Aula experimental"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						/>
					</Box>
					<Section6 category="pos-graduacao" products={products} />
					<Box color={"white"}>
						<Blog />
					</Box>
				</Container>
			</Container>
		</ShopLayout1>
	);
}
