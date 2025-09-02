import ShopLayout1 from "components/layouts/ShopLayout1";
import { GetStaticProps, NextPage } from "next";
import { Box, Button, Grid, useTheme } from "@mui/material";
import { Container } from "@mui/system";

import { useCallback, useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";
import api from "utils/__api__/meu-curso";
import SEO from "components/SEO";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import styled from "@emotion/styled";
import { useBanners } from "hooks/useBanners";

import Link from "next/link";
import Image from "next/image";

const ImageEffect = styled(Image)({
	transition: "0.3s",
	"&:hover": {
		transform: "scale(1.025)",
	},
});

const Professor = () => {
	const width = useWindowSize();
	const [visibleSlides, setVisibleSlides] = useState(4);
	const [teacher, setTeacher] = useState([]);

	const { banners } = useBanners(api.getIndexBanners("11"));

	const fetchTeachers = useCallback(async () => {
		const data = await api.getTeachers();
		setTeacher(data);
	}, []);

	useEffect(() => {
		if (width < 426) setVisibleSlides(1);
		else if (width < 650) setVisibleSlides(2);
		else if (width < 1024) setVisibleSlides(3);
		else if (width < 1200) setVisibleSlides(4);
		else setVisibleSlides(5);
	}, [width]);

	useEffect(() => {
		fetchTeachers();
	}, [fetchTeachers]);

	const theme = useTheme();

	const teachers = teacher.sort((a, b) => {
		if (a.Name < b.Name) {
			return -1;
		}
		if (a.Name > b.Name) {
			return 1;
		}
		return 0;
	});

	return (
		<>
			<ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
				<SEO
					title="/Professor"
					sitename="MeuCurso - Do seu jeito.  No seu tempo."
				/>
				<Container maxWidth="xl" disableGutters={true}>
					<Section1 carouselData={banners} />

					<Box py={3}>
						<Container>
							<Grid container spacing={2}>
								<Grid item md={12}>
									{/* <H2 textAlign={"center"}>Test</H2> */}
									<p>
										Descubra uma maneira inovadora de acessar conteúdos
										exclusivos e cursos oferecidos pelos seus professores
										preferidos com apenas um clique! Explore /Professor para ter
										acesso a um universo de conhecimento único, proporcionando
										uma nova e aprimorada experiência ao acompanhar as valiosas
										orientações de seus mestres favoritos.
									</p>
								</Grid>
								{teachers.map((item) => (
                  <Grid
                    item
                    key={item.MarketplaceId}
                    md={3}
                    py={2}
                    sx={{ mx: { xs: "auto", md: "0" } }}
                  >
                    <Link href={item.URL}>
                      <ImageEffect
                        width={200}
                        height={100}
                        style={{
                          maxWidth: "100dvw",
                          width: "100%",
                          height: "auto",
                        }}
                        src={item?.BannerSmallURL ?? ""}
                        alt={item.Name}
                      />
                    </Link>
                  </Grid>
                ))}
							</Grid>
						</Container>
					</Box>
				</Container>
			</ShopLayout1>
		</>
	);
};
export default Professor;
