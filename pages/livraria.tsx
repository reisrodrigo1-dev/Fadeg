import ShopLayout1 from "components/layouts/ShopLayout1";
import { GetStaticProps } from "next";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import api from "utils/__api__/meu-curso";
import SEO from "components/SEO";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { H1, H2 } from "components/Typography";

import Section1 from "pages-sections/fashion-shop-2/Section1";
import { useProducts } from "hooks/useProducts";
import { useBanners } from "hooks/useBanners";
import { ShippingBook } from "components/ShippingBook";
import Link from "next/link";
import Image from "next/image";

const Livraria = () => {
	const width = useWindowSize();
	const [visibleSlides, setVisibleSlides] = useState(4);

	const { products } = useProducts(api.getProductsById("13"));
	const { products: livrariaOAB } = useProducts(api.getProductsById("148"));
	const { products: livrariaConcursos } = useProducts(
		api.getProductsById("151"),
	);
	const { products: kit2fase } = useProducts(api.getProductsById("231"));
	const { products: oab2fase } = useProducts(api.getProductsById("149"));
	const { products: livraria } = useProducts(api.getProductsById("13"));
	const { products: ebooks } = useProducts(api.getProductsById("220"));
	const filteredLibrary = livraria.filter(
		(item: { Name: string }) => !item.Name.includes("E-book"),
	);
	const { banners } = useBanners(api.getIndexBanners("12"));

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
					title="Cursos de Direito: Livros Didáticos Educação Jurídica"
					sitename="MeuCurso"
					description="Descubra nossa livraria jurídica, onde você pode adquirir os livros necessários para seus cursos de Direito. Amplie seu conhecimento com a literatura!"
				/>
				<Container maxWidth="xl" disableGutters={true}>
					<Section1 carouselData={banners} />
					<H2 sx={{ textAlign: "center", fontSize: 28 }}>
						<strong style={{ fontWeight: 700, color: "#D23F57" }}>
							AVISO!
						</strong>
						<br />
						Livros somente para retirada em nossa loja.
						<br />
						<Link
							href={"https://maps.app.goo.gl/VWCj3Td61U6KXDCJ7"}
							rel="noopener"
							target="_blank"
							style={{
								fontSize: 24,
								color: "#D23F57",
								textDecoration: "underline",
							}}
						>
							R. Luis Coelho, 340 - Consolação, São Paulo
						</Link>
					</H2>
					<Box
						py={2}
						my={5}
						sx={{
							color: "black",
						}}
					>
						<Container>
							<Box
								display={"flex"}
								sx={{
									flexWrap: "wrap",
									justifyContent: "space-between",
                  gap: 10
								}}
							>
								{mostruario.map((item) => (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "start",
										}}
										key={`${item.name}-${item.type}`}
									>
										<Image
											width={200}
											height={200}
											alt={item.name}
											src={`/books/${item.imageId}`}
										/>
										<Typography
											textAlign={"center"}
											fontWeight={700}
											fontSize={24}
											maxWidth={200}
										>
											{item.name}
										</Typography>
									</Box>
								))}
							</Box>
							{/* <Section6
								category="Livraria"
								products={filteredLibrary}
								textTemplate="Livraria"
								textButton={"comprar"}
							/> */}
							<Section6
								category="Livraria-E-books"
								products={ebooks}
								textTemplate="E-Books"
								textButton={"comprar"}
							/>
							
							{/* <H2 textAlign={"center"}>2ª Fase</H2>
              <Section6 category="Livraria-OAB-2-Fase" products={oab2fase} />
              <H2 textAlign={"center"}>Kits 2ª Fase</H2>
              <Section6
                category="Livraria-OAB-Kits-2-Fase"
                products={kit2fase}
              />
              <H2 textAlign={"center"}>Livraria OAB</H2>
              <Section6
                category="livraria-livraria-oab"
                products={livrariaOAB}
              />
              <H2 textAlign={"center"}>Livraria Concursos</H2>
              <Section6
                category="livraria-concursos"
                products={livrariaConcursos}
              /> */}
						</Container>
					</Box>
				</Container>
			</ShopLayout1>
		</>
	);
};

const mostruario: {
	name: string;
	type: "VADE" | "PRATICA";
	imageId: string;
}[] = [
	{
		name: "Administrativo, Constitucional e Tributário",
		type: "VADE",
		imageId: "vade-administrativo-constitucional-e-tributario.webp",
	},
	{
		name: "Penal",
		type: "VADE",
		imageId: "vade-penal.webp",
	},
	{
		name: "Trabalhista",
		type: "VADE",
		imageId: "vade-trabalhista.webp",
	},
	{
		name: "Civil e Empresarial",
		type: "VADE",
		imageId: "vade-civil-e-empresarial.webp",
	},
	{
		name: "Administrativa",
		type: "PRATICA",
		imageId: "pratica-administrativa.jpeg",
	},
	{
		name: "Trabalhista",
		type: "PRATICA",
		imageId: "pratica-trabalhista.jpeg",
	},
	{
		name: "Empresarial",
		type: "PRATICA",
		imageId: "pratica-empresarial.jpeg",
	},
	{
		name: "Tributária",
		type: "PRATICA",
		imageId: "pratica-tributaria.jpeg",
	},
	{
		name: "Constitucional",
		type: "PRATICA",
		imageId: "pratica-constitucional.jpeg",
	},
];

export default Livraria;
