import { Container } from "@mui/material";
import { Box, Button } from "@mui/material";
import NewCountdown from "components/NewCountdown";
import { H2 } from "components/Typography";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import ProductCard18 from "components/product-cards/ProductCard18";
import useWindowSize from "hooks/useWindowSize";
import type { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { type FC, Fragment, useEffect, useState } from "react";
import type Product from "../../models/Product.model";

// ======================================================================
type Section6Props = {
	products: Product[];
	category?: string;
	textTemplate?: string | { text: string; color: "white" | "black" };
	ctaImage?: StaticImageData;
	countdownDate?: Date;
	productColor?: string;
	textButton?: string;
	showProducts?: number;
};
// ======================================================================

const Section6: FC<Section6Props> = ({
	products,
	category,
	textTemplate,
	ctaImage,
	countdownDate,
	textButton,
	showProducts = 3,
	productColor,
}) => {
	const width = useWindowSize();
	const router = useRouter();
	const [visibleSlides, setVisibleSlides] = useState(showProducts);
	const [commingSoon, setCommingSoon] = useState<boolean>(!!countdownDate);

	useEffect(() => {
		if (width < 426) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 1024) setVisibleSlides(showProducts);
		else setVisibleSlides(showProducts);

		if (countdownDate <= new Date()) {
			setCommingSoon(false);
		}
	}, [width, countdownDate, showProducts]);

	const handlePush = () => {
		router.push(`/categorias/${category}`);
	};

	const handleCommingSoon = () => {
		setCommingSoon(false);
	};

	return (
		<Fragment>
			{/* FEATURED PRODUCTS AREA */}
			<Container sx={{ mt: 8, pb: 8 }}>
				<H2
					textAlign="center"
					my={3}
					color={typeof textTemplate === "object" && textTemplate.color}
				>
					{typeof textTemplate === "string" && textTemplate}
					{typeof textTemplate === "object" && textTemplate.text}
				</H2>
				{countdownDate && (
					<NewCountdown
						expirationDate={countdownDate}
						expireMessage="Descontos encerrados..."
						callBackToExpire={handleCommingSoon}
					/>
				)}
				<Carousel
					totalSlides={products.length}
					visibleSlides={visibleSlides}
					sx={carouselStyled}
				>
					{products.map((product) => (
						<ProductCard18
							key={product.ProductId}
							product={product}
							cta={ctaImage}
							commingSoon={commingSoon}
							textButton={textButton}
						/>
					))}
				</Carousel>
				{products.length > 4 && (
					<Box
						sx={{ display: "flex", justifyContent: "end", color: productColor }}
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

export default Section6;
