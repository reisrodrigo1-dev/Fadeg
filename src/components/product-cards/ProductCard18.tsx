import Link from "next/link";
import { FC } from "react";
import { Box, Button, Chip, Skeleton, styled, useTheme } from "@mui/material";

import { currency } from "lib";
import { H3, Paragraph, Span } from "components/Typography";
import Product from "../../models/Product.model";
import Image, { StaticImageData } from "next/image";

const Card = styled(Box)({
	backgroundColor: "white",
	borderRadius: "28px",
	maxWidth: "300px",
	height: "400px",
	margin: "15px auto",
	position: "relative",
	boxShadow: "0px 10px 3px rgba(3, 0, 71, 0.09)",
	":hover": {
		"& .product-actions": { right: 10 },
		"& img": { transform: "scale(1.23)" },
		"& .product-view-action": { opacity: 1 },
	},
});

const StyledChip = styled(Chip)({
	zIndex: 1,
	top: "10px",
	left: "10px",
	paddingLeft: 3,
	paddingRight: 3,
	fontWeight: 600,
	fontSize: "10px",
	position: "absolute",
});

const CardMedia = styled(Box)(({ theme }) => ({
	padding: "20px",
	maxHeight: 300,
	aspectRatio: "3/2",
	objectFit: "cover",
	cursor: "pointer",
	overflow: "hidden",
	position: "relative",
	borderTopLeftRadius: "28px",
	borderTopRightRadius: "28px",
	"& img": { transition: "0.3s" },
}));

const QuickViewButton = styled(Button)({
	left: 0,
	bottom: 0,
	opacity: 0,
	borderRadius: 0,
	position: "absolute",
	textTransform: "none",
	transition: "all 0.3s",
});

// ==============================================================
type ProductCardProps = {
	product: Product;
	cta?: StaticImageData;
	commingSoon?: boolean;
	textButton?: string;
};

const categoryColors: Record<number, string> = {
	1: "#ff9d00",
	2: "#ff9d00",
	3: "#FF9900",
	4: "#3C098E",
	12: "#CC8A48",
};

// ==============================================================

const ProductCard18: FC<ProductCardProps> = ({
	product,
	cta,
	commingSoon = false,
	textButton,
}) => {
	const theme = useTheme();
	const discount = product.Price - product.SpecialPrice;
	const dicountPercent = discount / product.Price;
	const totalPercentDiscount = dicountPercent * 100;

	const currencySpecialPrice = currency(product.SpecialPrice);
	const installmentsPrice = currency(product.SpecialPrice / 12);

	const buttonBackgroundColor = product.CategoryProducts
		? categoryColors[product.CategoryProducts[0]?.ParentCategoryId] ||
			categoryColors[product.CategoryProducts[0]?.CategoryId] ||
			"#ff9d00"
		: "black";

	const practicePrice = product.CategoryProducts
		? product.CategoryProducts.some(
				(category) => category.ParentCategoryId === 12,
			)
		: false;

	const freeProduct = product.Price === 0 && product.SpecialPrice === 0;

	return (
		<Link
			href={
				commingSoon
					? "/matricula"
					: !product.CommingSoon
						? `/produto/${product.URLKey}`
						: "/matricula"
			}
			target={commingSoon || product.CommingSoon ? "_blank" : "_self"}
			style={{ cursor: commingSoon ? "not-allowed" : "pointer" }}
		>
			<Card>
				<CardMedia>
					{product.Price > 0 &&
						product.Price !== product.SpecialPrice &&
						!commingSoon && (
							<StyledChip
								color="primary"
								size="small"
								label={`${totalPercentDiscount.toFixed()}% OFF`}
							/>
						)}

					{product.SmallImageUrl && (
						<>
							{!product.CommingSoon && !commingSoon && (
								<>
									<Image
										quality={30}
										src={product.SmallImageUrl}
										alt={product.Name}
										width={500}
										height={500}
										style={{
											width: "100%",
											height: "auto",
											borderRadius: "28px",
										}}
									/>

									<QuickViewButton
										fullWidth
										size="large"
										color="dark"
										variant="contained"
										className="product-view-action"
									>
										{product.Name}
									</QuickViewButton>
								</>
							)}
							{(product.CommingSoon || commingSoon) && (
								<>
									<Image
										quality={30}
										src={product.SmallImageUrl}
										alt={product.Name}
										width={500}
										height={500}
										style={{
											width: "100%",
											height: "auto",
											filter: "grayscale(1)",
											cursor: "not-allowed",
											borderRadius: "28px",
										}}
									/>

									<QuickViewButton
										fullWidth
										size="large"
										color="dark"
										variant="contained"
										className="product-view-action"
									>
										{commingSoon
											? "Aguarde para receber um desconto incrivel!"
											: "Em Breve"}
									</QuickViewButton>
								</>
							)}
						</>
					)}
				</CardMedia>
				{/* <ProductViewDialog
          openDialog={openDialog}
          handleCloseDialog={() => setOpenDialog(false)}
          product={{
            id: product.ProductId,
            URLKey: product.URLKey,
            title: product.Name,
            price: product.SpecialPrice,
            imgUrl: product.SmallImageUrl,
            shortDescription: product.ShortDescription,
          }}
        /> */}
				<Box p={1} textAlign="center">
					{product.CommingSoon && (
						<Box>
							<strong>Atenção!</strong>
							<br />
							<strong>Oferta desbloqueada em 29/11</strong>
						</Box>
					)}
					{!product.CommingSoon && (
						<>
							<H3 fontSize={"12px"} fontWeight={"400"}>
								<s>{!freeProduct && currency(product.Price)}</s>
							</H3>
							{(product.ProductGroupId === 3 ||
								product.ProductGroupId === 2) && (
								<Paragraph
									sx={{ marginBottom: "-10px" }}
									fontSize={"12px"}
									fontWeight={"400"}
								>
									a partir de
								</Paragraph>
							)}
							<H3
								fontSize="21px"
								fontWeight={700}
								py={0.5}
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								{!freeProduct && (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											mr: 0.5,
										}}
									>
										{!practicePrice && (
											<Span sx={{ fontSize: "12px", fontWeight: 400 }}>
												12x
											</Span>
										)}
										<Span sx={{ fontSize: "14px" }}>R$</Span>
									</Box>
								)}

								<Span sx={{ fontSize: "40px", fontWeight: 700 }}>
									{product.SpecialPrice === 0
										? "Gratuito"
										: practicePrice
											? currencySpecialPrice
											: installmentsPrice}
								</Span>
							</H3>

							{!practicePrice && !freeProduct && (
								<H3 fontSize="12px" fontWeight={700}>
									{currencySpecialPrice} à vista
								</H3>
							)}

							{cta && (
								<Image src={cta} width={200} height={54} alt={product.title} />
							)}
						</>
					)}
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: 7,
							mt: 5,
							mb: 1,
							position: "absolute",
							bottom: 4,
						}}
					>
						<Button
							variant="contained"
							sx={{
								color: "white",
								fontSize: "15px",
								backgroundColor: buttonBackgroundColor,
								transition: "0.3s",
								borderRadius: "20px",
								"&:hover": {
									backgroundColor: buttonBackgroundColor,
									filter: "brightness(0.8)",
								},
								textTransform: "none",
								textWrap: "nowrap"
							}}
						>
							{textButton ?? "Matricule-se"}
						</Button>
						<Button sx={{ fontSize: "15px", borderRadius: "20px" }}>
							Saiba Mais
						</Button>
					</Box>
				</Box>
			</Card>
		</Link>
	);
};

export default ProductCard18;
