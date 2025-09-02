import { Box, CircularProgress, useTheme } from "@mui/material";
import SEO from "components/SEO";
import ShopLayout1 from "components/layouts/ShopLayout1";
import type { GetServerSideProps, NextPage } from "next";
import Section1 from "pages-sections/fashion-shop-2/Section1";

import api from "utils/__api__/meu-curso";
import type Brand from "../src/models/Brand.model";
import type Category from "../src/models/Category.model";
import type Product from "../src/models/Product.model";
import type Service from "../src/models/Service.model";

import { CookieConsent } from "components/CookieConsent";

import { H1 } from "components/Typography";
import { categories } from "data/categories";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";

import Blog from "components/Blog";
import CoursesTabs from "components/CoursesTabs";
import MotivesToBuy from "components/MotivesToBuy";
import dynamic from "next/dynamic";
import Image from "next/image";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import Section12 from "pages-sections/fashion-shop-2/Section12";
import Section13 from "pages-sections/fashion-shop-2/Section13";
import { useEffect, useState } from "react";
import type MainCarouselItem from "../src/models/Market-1.model";

// =======================================================
type IndexPageProps = {
	simulados: Product[];
	oab: Product[];
	banners: any;
	oab2: any[];
	concursos: any[];
	pos: any[];
	brands: Brand[];
	products: Product[];
	categories: Category[];
	serviceList: Service[];
	saleProducts: Product[];
	latestProducts: Product[];
	featureProducts: Product[];
	popularProducts: Product[];
	bestWeekProducts: Product[];
	indexBannersData: any;
};
// =======================================================
const tabs = [
	{
		id: 1,
		name: "Graduação",
		value: "1",
		textTemplate: "Graduação",
		buttonColor: "#ff9d00",
		categoryId: {
			id: 308,
			UrlKey: "Fadeg",
		},
	},
	{
		id: 2,
		name: "Pós-Graduação",
		value: "4",
		textTemplate: "Pós-Graduação FADEG",
		buttonColor: "#25395B",
		categoryId: {
			id: 3,
			UrlKey: "pos-graduacao",
		},
	},

	{
		id: 3,
		name: "Extensão Universitária",
		value: "3",
		textTemplate: "Extensão Universitária",
		buttonColor: "#CC8A48",
		categoryId: {
			id: 12,
			UrlKey: "atualizacao-e-pratica",
		},
	},
];
// =======================================================

export const getServerSideProps: GetServerSideProps = async () => {
	const carouselData = await api.getIndexBanners("21");
	return { props: { carouselData } };
};

const IndexPage: NextPage = ({
	carouselData,
}: {
	carouselData: MainCarouselItem[];
}) => {
	const theme = useTheme();

	return (
		<ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
			<SEO
				description="Cursos para o Exame da OAB, Carreiras Jurídicas, Carreiras Públicas, Pós Graduação Jurídica certificada pelo MEC, Cursos de Extensão Profissional. Cursos Online e Presenciais em São Paulo"
				sitename="Fadeg"
				title="Início"
			/>
			<Box bgcolor="white">
				<Section1 showStripe={false} carouselData={carouselData} />

				<CoursesTabs tabs={tabs} />
				<MotivesToBuy />
				<Box sx={{ mt: 8, mb: 4 }} />
				<Blog />
			</Box>
			<CookieConsent />
		</ShopLayout1>
	);
};

export default IndexPage;
