import { Footer1 } from "components/footer";
import api from "../src/utils/__api__/meu-curso";
import { Box, Button, Container, Grid } from "@mui/material";
import ResponsiveBanners from "components/responsive-banners/ResponsiveBanners";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import { H2, H5 } from "components/Typography";
import ResponsiveAppBar from "components/ResponseiveAppBar";
import FullScreenPost from "components/FullScreenPost";
import { useState } from "react";
import SEO from "components/SEO";
import Image from "next/image";
import Script from "next/script";

export const getStaticPaths = async () => {
	// const teachers = await api.getTeachers();
	// const paths = teachers.map((teacher) => {
	//   return {
	//     params: {
	//       URL: teacher.URL,
	//     },
	//   };
	// });
	return { paths: [], fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
	const teacher = await api.getTeachersById(params.URL);
	return {
		props: { teacher },
		revalidate: 5,
	};
};

const Teacher = ({ teacher }) => {
	const [open, setOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState(null);
	const courses = teacher?.Products?.map((product: any) => product);

	const books = teacher?.Products?.filter(
		(product) => product?.ProductTypeId === 2,
	);
	const blogPosts = teacher?.MarketplaceBlogPosts?.map((posts) => posts);

	const newOrder = [1, 3, 4, 2, 5, 6];
	const order = teacher?.MarketplaceLandingPageSections?.sort(
		(a, b) =>
			newOrder.indexOf(a?.MarketplaceLandingPageSectionTypeId) -
			newOrder.indexOf(b?.MarketplaceLandingPageSectionTypeId),
	);

	const navColor = teacher?.MarketplaceLandingPageSections?.filter(
		(nav) => nav?.MarketplaceLandingPageSectionTypeId === 1,
	)[0];

	const navLinks = [
		{
			id: 1,
			Text: courses?.length > 0 ? "Cursos" : null,
			Link: "#cursos",
		},
		{
			id: 2,
			Text: teacher?.Description.length > 0 ? "Sobre" : null,
			Link: "#descricao",
		},
		{
			id: 3,
			Text: books?.length > 1 ? "Livros" : null,
			Link: "#livros",
		},
		{
			id: 4,
			Text: teacher?.MarketplaceBlogPosts.length > 0 ? "Blog" : null,
			Link: "#blog",
		},
		// {
		//   id: 5,
		//   Text: "Meus cursos",
		//   Link: "/teste-cursos",
		// },
	];

	const handleClickPost = (post) => {
		setSelectedPost(post);
		setOpen(true);
	};
	return (
		<>
			<Container disableGutters={true} maxWidth="xl">
				<SEO
					title={teacher?.Name}
					sitename="MeuCurso - Do seu jeito.  No seu tempo."
				/>

				{teacher.URL === "amandasalina" && (
					<>
						<Script id="GTM-5CCX2DW8">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5CCX2DW8');`}</Script>
						<noscript>
							<iframe
								src="https://www.googletagmanager.com/ns.html?id=GTM-5CCX2DW8"
								height="0"
								width="0"
								style={{ display: "none", visibility: "hidden" }}
								title="gtm"
							/>
						</noscript>
					</>
				)}
				<ResponsiveAppBar
					pages={navLinks}
					fontColor={navColor?.FontColor}
					bgColor={navColor?.BackgroundColor}
					image={teacher?.ProfileImageURL ?? ""}
				/>
				<ResponsiveBanners
					bannerData={teacher?.BannerLargeURL ?? ""}
					bannerDataMobile={teacher?.BannerSmallURL ?? ""}
				/>

				{order?.map((section) => (
					<div key={order?.MarketplaceLandingPageSectionId}>
						{courses?.length > 0 &&
							section?.MarketplaceLandingPageSectionTypeId === 3 && (
								<Box
									pt={3}
									sx={{
										backgroundColor: section?.BackgroundColor,
										color: section?.FontColor,
									}}
								>
									<H2 id="cursos" textAlign={"center"}>
										Cursos
									</H2>
									<Section6 products={courses} />
								</Box>
							)}
						{books?.length > 0 &&
							section?.MarketplaceLandingPageSectionTypeId === 4 && (
								<Box pt={3}>
									<H2 id="livros" textAlign={"center"}>
										Livros
									</H2>
									<Section6 products={books} />
								</Box>
							)}
						{teacher?.Description &&
							section?.MarketplaceLandingPageSectionTypeId === 2 && (
								<Box
									py={3}
									sx={{
										backgroundColor: section?.BackgroundColor,
										color: section?.FontColor,
									}}
								>
									<Container sx={{ textAlign: "center" }}>
										<div
											id="descricao"
											dangerouslySetInnerHTML={{
												__html: teacher?.Description,
											}}
										/>
									</Container>
								</Box>
							)}
						{teacher?.MarketplaceBlogPosts?.length > 0 &&
							section?.MarketplaceLandingPageSectionTypeId === 5 && (
								<Box
									sx={{
										py: 2,
										my: 2,
										backgroundColor: section?.BackgroundColor,
										color: section?.FontColor,
									}}
								>
									<Container>
										<H2 py={2} id="blog" textAlign={"center"}>
											Blog
										</H2>
										<Grid container columns={13} justifyContent={"center"}>
											{blogPosts?.map((post) => (
												<>
													<Grid
														sx={{
															backgroundColor: section?.CardColor,
														}}
														position={"relative"}
														item
														xs={13}
														md={4}
														mr={1}
														p={3}
														key={post?.MarketplaceBlogPostId}
													>
														<Image
															width={500}
															height={150}
															style={{ width: "100dvw", height: "150px" }}
															src={post?.ImageArvixe}
															alt={post?.Title}
														/>
														<H5 py={1}>{post?.Title}</H5>
														<p style={{ paddingBottom: 50 }}>
															{post?.Description.slice(0, 100)}[...]
														</p>
														<Button
															onClick={() => handleClickPost(post)}
															variant="outlined"
															sx={{
																backgroundColor: "#e1e1e1e1",
																color: "#000000",
																position: "absolute",
																bottom: 10,
															}}
														>
															Leia Mais
														</Button>
														<FullScreenPost
															open={open}
															setOpen={setOpen}
															iconColor={section?.FontColor}
															bgColor={section?.CardColor}
															color={section?.FontColor}
															postImg={selectedPost?.ImageArvixe}
															postContent={selectedPost?.Post}
															postDate={selectedPost?.DateUpdated}
															postTitle={selectedPost?.Title}
															postDateAtt={selectedPost?.DateInserted}
															teacherName={teacher?.Name}
														/>
													</Grid>
												</>
											))}
										</Grid>
									</Container>
								</Box>
							)}
					</div>
				))}
			</Container>
			<Footer1 />
		</>
	);
};

export default Teacher;
