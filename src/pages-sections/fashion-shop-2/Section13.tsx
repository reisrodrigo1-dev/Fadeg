import { Container } from "@mui/material";
import { Box, Button } from "@mui/material";
import { H2 } from "components/Typography";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import ProductCard18 from "components/product-cards/ProductCard18";
import { useProductsWithOrder } from "hooks/useProductsWithOrder";
import useWindowSize from "hooks/useWindowSize";
import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { type FC, Fragment, useEffect, useState } from "react";
import Product from "../../models/Product.model";

import ProductCard23 from "components/product-cards/ProductCard23";
import { useProducts } from "hooks/useProducts";
import api from "utils/__api__/meu-curso";

// ======================================================================
type Section13Props = {
	productCategory: number;
	category?: string;
	textTemplate?: string;
	ctaImage?: StaticImageData;
	textColor?: string;
	visibleItems?: 1 | 2 | 3 | 4 | 5;
};
// ======================================================================

const Section13: FC<Section13Props> = ({
	productCategory,
	category,
	textTemplate,
	ctaImage,
	textColor,
	visibleItems = 3,
}) => {
	const width = useWindowSize();
	const router = useRouter();
	const [visibleSlides, setVisibleSlides] = useState(visibleItems);

	const { products: product }: { products: any[] } = useProductsWithOrder(
		api.getProductsById,
		productCategory,
	);

	useEffect(() => {
		if (width < 510) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 1024) setVisibleSlides(3);
		else setVisibleSlides(visibleItems);
	}, [width, visibleItems]);

	const handlePush = () => {
		router.push(`/categorias/${category}`);
	};

	const sortedProducts = product.sort((a, b) => a.Name.localeCompare(b.Name));

	return (
		<Fragment>
			{/* FEATURED PRODUCTS AREA */}
			<Container sx={{ mt: 8, pb: 8 }}>
				<H2
					textAlign="center"
					my={3}
					sx={{
						color: textColor ?? "",
					}}
				>
					{textTemplate}
				</H2>

				<Carousel
					totalSlides={product.length}
					visibleSlides={visibleSlides}
					sx={carouselStyled}
				>
					{sortedProducts.map((product) => (
						<ProductCard18
							key={product.ProductId}
							product={product}
							cta={ctaImage}
						/>
					))}
				</Carousel>
				{product.length > 5 && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "end",
							color: textColor ?? "",
						}}
					>
						<Button onClick={handlePush} variant="outlined">
							Ver mais
						</Button>
					</Box>
				)}
			</Container>
		</Fragment>
	);
};

export default Section13;
