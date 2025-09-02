import { Box, Container, styled } from "@mui/material";
import { H1 } from "components/Typography";
import { CarouselCard1 } from "components/carousel-cards";
import Carousel from "components/carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import bannerImersao from "../../../public/assets/images/banners/stripe-banner.png";
import type MainCarouselItem from "../../models/Market-1.model";

// ======================================================
type Props = {
	carouselData?: MainCarouselItem[];
	dotColor?: string;
	showStripe?: boolean;
	mb?: number;
	bgColor?: string;
};
// ======================================================

const LinkedStyle = styled(Link)();

const stripeBannerURL = "https://conteudo.meucurso.com.br/raio-x-oab";

const Section1 = ({
	carouselData,
	dotColor,
	bgColor,
	showStripe = false,
	mb = 7.5,
}: Props) => {
	return (
		<Box mb={mb} bgcolor={bgColor}>
			{carouselData.length > 1 && (
				<Container>
					<Carousel
						spacing="0px"
						totalSlides={carouselData.length}
						showDots={true}
						autoPlay={true}
						visibleSlides={1}
						showArrow={false}
						interval={9000}
						dotColor={dotColor ? dotColor : "black"}
						dotGroupMarginTop="15px"
					>
						{carouselData
							?.sort((a, b) => (a.Order > b.Order ? 1 : -1))
							.map((item, ind) => (
								<Box key={ind}>
									{item.URL && (
										<Link href={item?.URL}>
											<CarouselCard1
												buttonColor="dark"
												title={item.title}
												imgUrl={item.BannerLargeURL}
												imgUrlMobile={item.BannerSmallURL}
												buttonLik={item.buttonLik}
												buttonText={item.buttonText}
												description={item.description}
												alt={"banner"}
											/>
										</Link>
									)}
								</Box>
							))}
					</Carousel>
					{showStripe && (
						<Link href={stripeBannerURL} target="_blank">
							<Box
								sx={{
									position: "relative",
									width: "100%",
									height: { xs: 40, md: 110 },
								}}
							>
								<Image
									style={{ marginTop: "15px" }}
									alt="banner imersão"
									src={bannerImersao}
									fill
								/>
							</Box>
						</Link>
					)}
				</Container>
			)}
			{carouselData.length <= 1 && (
				<Container disableGutters={true} maxWidth="xl">
					<Carousel
						spacing="0px"
						totalSlides={1}
						showDots={false}
						autoPlay={true}
						visibleSlides={1}
						showArrow={false}
						interval={6000}
						dotColor={dotColor ? dotColor : "black"}
					>
						{carouselData.map((item, ind) => (
							<Box key={ind}>
								{item.BannerSmallURL && item.BannerLargeURL && (
									<Link href={item.URL ? item.URL : ""}>
										<CarouselCard1
											buttonColor="dark"
											title={item.title}
											imgUrl={item.BannerLargeURL}
											imgUrlMobile={item.BannerSmallURL}
											buttonLik={item.buttonLik}
											buttonText={item.buttonText}
											description={item.description}
											alt={item.title}
										/>
									</Link>
								)}
							</Box>
						))}
					</Carousel>
				</Container>
			)}
		</Box>
	);
};

export default Section1;
