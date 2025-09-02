import { Box, Button, Container } from "@mui/material";
import { H2 } from "./Typography";
import Carousel from "./carousel/Carousel";
import { carouselStyled } from "./carousel/styles";
import Link from "next/link";
import { PlayArrow } from "@mui/icons-material";
import { FC, useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import { useRouter } from "next/router";
import Image from "next/image";

type CarouselItem = {
	id: number;
	img: string;
	link: string;
};
type CarouselData = {
	data: CarouselItem[];
	slides: number;
	totalSlides: number;
	playlistLink?: string;
	embed?: boolean;
};

const YoutubeCarousel: FC<CarouselData> = ({
	data,
	slides,
	totalSlides,
	playlistLink,
	embed,
}) => {
	const width = useWindowSize();
	const [slidesYT, setSlidesYT] = useState(slides);

	useEffect(() => {
		if (width < 426) setSlidesYT(1);
		else if (width < 650) setSlidesYT(2);
		else if (width < 1024) setSlidesYT(slides);
		else if (width < 1200) setSlidesYT(slides);
		else setSlidesYT(slides);
	}, [slides, width]);
	return (
		<Container>
			<H2 textAlign={"center"} mb={3}>
				Por onde começar a preparação...
			</H2>
			<Carousel
				totalSlides={totalSlides}
				visibleSlides={slidesYT}
				sx={carouselStyled}
			>
				{embed &&
					data.map((item) => (
						<Box
							key={item.link}
							sx={{
								width: 500,
                maxHeight: 200,
                									borderRadius: "5px",
		
							}}
						>
							<iframe
								style={{
							border: "none",
									aspectRatio: "16/9",
									width: "100%",
								}}
								title="Vídeo"
								src={item.link}
							/>
						</Box>
					))}
				{!embed &&
					data.map((items) => (
						<Link
							style={{ position: "relative" }}
							target="_blank"
							href={items?.link}
							key={items.id}
						>
							<PlayArrow
								sx={{
									color: "white",
									fontSize: "50px",
									position: "absolute",
									left: "45%",
									bottom: "100px",
									backgroundColor: "red",
									borderRadius: "5px",
									transition: "0.3s",
									"&:hover": {
										filter: "brightness(0.8)",
									},
								}}
							/>
							<Image
								width={500}
								height={200}
								style={{
									width: "100%",
									height: "auto",
								}}
								src={items?.img}
								alt="video"
							/>
						</Link>
					))}
			</Carousel>
			{playlistLink && (
				<Box sx={{ display: "flex", justifyContent: "end" }}>
					<Button target="_blank" href={playlistLink} variant="outlined">
						Ver mais
					</Button>
				</Box>
			)}
		</Container>
	);
};

export default YoutubeCarousel;
