import { Box, Button, Container, Grid, useTheme } from "@mui/material";

import SEO from "components/SEO";
import { H1, H2 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import useWindowSize from "hooks/useWindowSize";
import { GetStaticProps } from "next";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { useEffect, useState } from "react";
import api from "utils/__api__/meu-curso";

import CoursesTabs from "components/CoursesTabs";
import Depoiments from "components/Depoiments";
import Methodology from "components/Methodology";
import YoutubeCarousel from "components/YoutubeCarousel";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import { categoriesContests } from "data/categories-contests";
import { contestPlayListLink, contestVideos } from "data/youtubeVideos";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Section3 from "pages-sections/fashion-shop-2/Section3";
import Blog from "components/Blog";

const tabs = [
	{
		id: 1,
		name: "Tribunais",
		value: "1",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#4A2191",
		categoryId: {
			id: 139,
			UrlKey: "concursos-publicos-tribunais---mp",
		},
	},
	{
		id: 2,
		name: "Procuradorias",
		value: "2",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#4A2191",
		categoryId: {
			id: 140,
			UrlKey: "concursos-publicos-procuradorias",
		},
	},
	{
		id: 3,
		name: "ENAM",
		value: "3",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#4A2191",
		categoryId: {
			id: 193,
			UrlKey: "enam",
		},
	},
	{
		id: 4,
		name: "Planos de Assinatura",
		value: "4",
		textTemplate: "COMECE SEUS ESTUDOS AGORA!",
		buttonColor: "#4A2191",
		categoryId: {
			id: 141,
			UrlKey: "concursos-publicos-planos-de-assinatura",
		},
	},
];

const ConcursosPublicos = () => {
	const width = useWindowSize();
	const [visibleSlides, setVisibleSlides] = useState(4);

	const { banners } = useBanners(api.getIndexBanners("7"));

	useEffect(() => {
		if (width < 426) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 1024) setVisibleSlides(3);
		else if (width < 1200) setVisibleSlides(4);
		else setVisibleSlides(5);
	}, [width]);
	const theme = useTheme();

	return (
		<>
			<ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
				<SEO
					title="Curso Preparatório para Concursos Jurídicos"
					sitename="MeuCurso"
					description="Alcance a sua aprovação em concursos jurídicos com nosso curso especializado. Prepare-se para o sucesso na área do Direito com o Meu Curso."
				/>
				<Container>
					<Section1 carouselData={banners} />
					<Section3 categories={categoriesContests} />
					<ResponsiveBanners
						bannerDataMobile={"/icone_verticalizado.png"}
						bannerData={
							"https://campanhas.meucurso.com.br/banner_verticalizado.png"
						}
					/>

					<Box py={5} my={5}>
						<Container>
							<CoursesTabs tabs={tabs} />
						</Container>
					</Box>
					<Box pb={10}>
						<Blog />
					</Box>
					<YoutubeCarousel
						data={contestVideos}
						playlistLink={contestPlayListLink}
						slides={3}
						totalSlides={4}
					/>
					<Methodology textColor="#53a131" courseType="Concursos" />

					<Depoiments />
				</Container>
			</ShopLayout1>
		</>
	);
};
export default ConcursosPublicos;
