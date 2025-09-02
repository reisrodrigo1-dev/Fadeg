import { Container } from "@mui/material";
import { Box, Button } from "@mui/material";
import { H2 } from "components/Typography";
import CarouselMotives from "components/carousel-motiver/CarouselMotives";
import Carousel from "components/carousel/Carousel";
import { posCarouselStyle } from "components/carousel/styles";
import ProductCard18 from "components/product-cards/ProductCard18";
import ProductCard23 from "components/product-cards/ProductCard23";
import useWindowSize from "hooks/useWindowSize";
import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { type FC, Fragment, useEffect, useState } from "react";
import type Product from "../../models/Product.model";

// ======================================================================
type Section6Props = {
	products: Product[];
	category?: string;
	textTemplate?: string;
	ctaImage?: StaticImageData;
};
// ======================================================================

const Section14: FC<Section6Props> = ({
	products,
	category,
	textTemplate,
	ctaImage,
}) => {
	const width = useWindowSize();
	const router = useRouter();
	const [visibleSlides, setVisibleSlides] = useState(3);

	useEffect(() => {
		if (width < 426) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 1024) setVisibleSlides(3);
		else setVisibleSlides(3);
	}, [width]);

	const handlePush = () => {
		router.push(`/categorias/${category}`);
	};

	const sortedProducts = products.sort((a, b) => {
		const dateA = new Date(a.DateInserted).getTime();
		const dateB = new Date(b.DateInserted).getTime();

		return dateB - dateA;
	});
	return (
		<Fragment>
			{/* FEATURED PRODUCTS AREA */}
			<Container sx={{ mt: 8, pb: 8 }}>
				<H2 textAlign="center" my={3}>
					{textTemplate}
				</H2>
				<CarouselMotives
					totalSlides={products.length}
					visibleSlides={visibleSlides}
					sx={posCarouselStyle}
				>
					{sortedProducts.map((product) => (
						<ProductCard23
							key={product.ProductId}
							product={product}
							cta={ctaImage}
						/>
					))}
				</CarouselMotives>
				{products.length > 5 && (
					<Box sx={{ display: "flex", justifyContent: "end" }}>
						<Button
							sx={{
								mt: 3,
								fontSize: "17px",
								borderColor: "#FF9900",
								transition: "0.3s",
								color: "#FF9900",
								"&:hover": {
									backgroundColor: "#FF9900",
									color: "white",
								},
							}}
							onClick={handlePush}
							variant="outlined"
						>
							Ver mais
						</Button>
					</Box>
				)}
			</Container>
		</Fragment>
	);
};

export default Section14;
