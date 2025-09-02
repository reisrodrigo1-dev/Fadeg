import api from "../src/utils/__api__/meu-curso";
import { Box, Container, useTheme } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1 } from "components/Typography";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { Fireworks, type FireworksHandlers } from "@fireworks-js/react";
import { useEffect, useRef } from "react";

export default function SemanaPage() {
	const theme = useTheme();
	const ref = useRef<FireworksHandlers>(null);
	const { banners } = useBanners(api.getIndexBanners("15"));
	const { products: pos } = useProducts(api.getProductsById("3"));
	const { products: atualizacao } = useProducts(api.getProductsById("258"));
	const { products: ass } = useProducts(api.getProductsById("322"));

	useEffect(() => {
		let opacity = 0;
		const interval = setInterval(() => {
			opacity = opacity > 0 ? 0 : 0.1;
			ref.current?.updateOptions({
				opacity,
			});
		}, 10);

		return () => clearInterval(interval);
	}, []);

	return (
		<ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
			<SEO
				title={"Atualização e Prática"}
				sitename="MeuCurso - Do seu jeito.  No seu tempo."
			/>
			<Container
				sx={{
					minHeight: 1820,
					background:
						"linear-gradient(225deg,rgba(75, 60, 193, 1) 0%, rgba(83, 5, 55, 1) 100%);",
				}}
				disableGutters={true}
				maxWidth="xl"
			>
				<Container
					sx={{
						position: "relative",
						minHeight: "1820px",
					}}
				>
					<Section1 carouselData={banners} />
					<H1 sx={{ fontSize: 32 }} color={"white"} textAlign="center">
						Semana do Advogado
					</H1>
					<Box sx={{ position: "relative", zIndex: 20 }}>
						<Section6
							textTemplate={{ text: "Pós Graduação", color: "white" }}
							category="pos-graduacao"
							products={pos}
							productColor="#fff"
						/>
						<Section6
							productColor="#fff"
							textTemplate={{ color: "white", text: "Atualização e Prática" }}
							category="atualizacao-e-pratica"
							products={atualizacao}
						/>
						<Section6
							productColor="#fff"
							textTemplate={{ color: "white", text: "Assinaturas" }}
							category="assinaturas"
							products={ass}
						/>
					</Box>
					{atualizacao && (
						<Fireworks
							ref={ref}
							options={{ delay: { max: 450, min: 200 }, autoresize: false }}
							style={{
								zIndex: 10,
								position: "absolute",
								width: "100%",
								height: "100%",
								bottom: 0,
							}}
							autostart
						/>
					)}
				</Container>
			</Container>
		</ShopLayout1>
	);
}
