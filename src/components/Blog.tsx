import { Button, Container, Grid, Skeleton } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { H2, H3, H5 } from "./Typography";
import Image from "next/image";
import { blogEnum, type BlogEnum } from "constants/blog.data";

interface BlogProps {
	title?: string;
	tag?: BlogEnum;
}

export default function Blog({ title, tag }: BlogProps) {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const fetchPosts = useCallback(async () => {
		try {
			const response = await axios.get(
				`https://blog.meucurso.com.br/wp-json/wp/v2/posts${tag ? `?tags=${blogEnum[tag]}` : ""}`,
			);
			setPosts(response.data.slice(0, 3));
		} catch (err) {
			console.log(err);
		}
	}, []);

	console.log(posts);

	const fetchImages = useCallback(async (imageLink) => {
		try {
			const response = await axios.get(imageLink);
			return response.data.source_url;
		} catch (err) {
			console.log(err);
			return null;
		}
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			await fetchPosts();
		};

		fetchData();
	}, [fetchPosts]);

	useEffect(() => {
		const loadImages = async () => {
			if (posts.length > 0 && !posts[0].imageUrl) {
				setLoading(true);
				const images = await Promise.all(
					posts.map((post) => {
						const mediaLink = post?._links?.["wp:featuredmedia"]?.[0]?.href;
						return mediaLink
							? fetchImages(mediaLink)
							: Promise.resolve("https://via.placeholder.com/150");
					}),
				);

				setPosts((prevPosts) =>
					prevPosts.map((post, index) => ({
						...post,
						imageUrl: images[index],
					})),
				);
				setLoading(false);
			}
		};

		loadImages();
	}, [posts, fetchImages]);

	return (
		<Container>
			<Grid
				sx={{ boxShadow: "0px 10px 3px rgba(3, 0, 71, 0.09)" }}
				container
				spacing={{ xs: 0, md: 3 }}
				p={2}
				pr={5}
			>
				<Grid item xs={12} md={12} textAlign={"center"}>
					<H2 textAlign={"center"}>{title ?? "Últimas Notícias"}</H2>
				</Grid>
				{posts?.map((post) => (
					<Grid position={"relative"} item md={4} key={post.id} py={2}>
						{loading && (
							<Skeleton variant="rectangular" width={350} height={250} />
						)}
						{!loading && post.imageUrl && (
							<Image
								width={750}
								height={250}
								style={{ maxWidth: "100%" }}
								src={post.imageUrl}
								alt={`Image for post ${post.id}`}
							/>
						)}

						<H3
							fontSize={"16px"}
							fontWeight={"400"}
							py={3}
							textAlign={"center"}
						>
							{post.title.rendered}
						</H3>
						<div
							style={{ paddingBottom: 50 }}
							dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
						/>
						<Button
							variant="outlined"
							sx={{
								backgroundColor: "#e1e1e1e1",
								color: "#000000",
								position: "absolute",
								bottom: 0,
							}}
							href={post.link}
							target="_blank"
						>
							Leia Mais
						</Button>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
