import {
	SearchOutlined as SearchOutlinedIcon,
	WhatsApp,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	Checkbox,
	Container,
	FormControlLabel,
	FormGroup,
	Grid,
	InputAdornment,
	Pagination,
	Stack,
	TextField,
} from "@mui/material";
import Blog from "components/Blog";
import SEO from "components/SEO";
import { H1, H2, H3, H4, Paragraph } from "components/Typography";
import CategoryCard1 from "components/category-cards/CategoryCard1";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductCard21 from "components/product-cards/ProductCard21";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import { Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import api from "utils/__api__/meu-curso";
import RdStationForm from "./RdStationForm";

const sora = Sora({ subsets: ["latin"] });

// For the RDStationForms to work, you need to declare a new class
const AdvDoFuturoPage = () => {
	const { banners } = useBanners(api.getIndexBanners("18"));
	const { products: attProducts } = useProducts(api.getProductsById("258"));
	const { products: posProducts } = useProducts(api.getProductsById("248"));
	const { products: stepsProducts } = useProducts(api.getProductsById("238"));

	const [currentPage, setCurrentPage] = useState(1);
	const [searchParams, setSearchParams] = useState("");

	const falseInitialCheckBoxState = {
		pos: false,
		att: false,
		steps: false,
	};
	const [checkboxStates, setCheckboxStates] = useState({
		pos: true,
		att: false,
		steps: true,
	});

	const [filterCheckboxStates, setFilterCheckboxStates] = useState({
		adm: false,
		amb: false,
		civil: false,
		civilpenal: false,
		consu: false,
		digcom: false,
		diver: false,
		empre: false,
		fam: false,
		penal: false,
		prev: false,
		pub: false,
		trab: false,
		trib: false,
		med: false,
	});

	const imageForm = [
		{
			id: 1,
			image: "/assets/adv-do-futuro/ap.png",
			label: "Atualização e Prática",
			course: "att",
		},
		{
			image: "/assets/adv-do-futuro/pg.png",
			id: 2,
			label: "Pós-Graduação",
			course: "pos",
		},
		{
			image: "/assets/adv-do-futuro/pp.png",
			id: 3,
			label: "Primeiros Passos",
			course: "steps",
		},
	];

	const productsPerPage = 6;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCurrentPage(1);
	}, [checkboxStates, filterCheckboxStates, searchParams]);

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setCheckboxStates((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	const handleFilterCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setFilterCheckboxStates((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	const handleImageFilter = (course: string) => {
		setCheckboxStates({
			...falseInitialCheckBoxState,
			att: course === "att",
			pos: course === "pos",
			steps: course === "steps",
		});
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setCurrentPage(1);
	};

	const filterProducts = (products) => {
		const filters = Object.keys(filterCheckboxStates).filter(
			(key) => filterCheckboxStates[key],
		);

		return products.filter((product) => {
			return (
				filters.length === 0 ||
				product.CategoryProducts.some((category) =>
					filters.includes(category.CategoryName.toLowerCase()),
				)
			);
		});
	};

	const getFilteredProducts = () => {
		const selectedProducts = [
			{ products: posProducts, selected: checkboxStates.pos },
			{ products: attProducts, selected: checkboxStates.att },
			{ products: stepsProducts, selected: checkboxStates.steps },
		];

		const filteredProducts = selectedProducts.flatMap(
			({ products, selected }) => (selected ? filterProducts(products) : []),
		);

		return filteredProducts.filter((product) =>
			product.Name.toLowerCase().includes(searchParams.toLowerCase()),
		);
	};

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = getFilteredProducts().slice(
		indexOfFirstProduct,
		indexOfLastProduct,
	);

	return (
		<ShopLayout1>
			<SEO
				title="Advocacia do Futuro"
				sitename="MeuCurso - Do seu jeito. No seu tempo."
			/>
			<Container
				disableGutters
				maxWidth="xl"
				sx={{ backgroundColor: "#161d24", pb: 5, color: "white" }}
			>
				<Section1 dotColor="orange" carouselData={banners} />

				<Container>
					<Grid container>
						<Grid item xs={12} md={12} mb={10}>
							<H1
								textAlign="center"
								alignItems={"center"}
								justifyContent={"center"}
								color="white"
								display={"flex"}
								flexDirection={"column"}
								fontWeight="bold"
							>
								<Box
									sx={{
										height: { xs: 100, md: 100 },
										width: { xs: 200, md: 300 },
										position: "relative",
									}}
								>
									<Image src={"/fadeg.png"} fill alt="fadeg" />
								</Box>
								Advocacia do Futuro
							</H1>
							<Paragraph
								sx={{
									fontSize: { xs: "20px", md: "23px", xl: "23px" },
								}}
							>
								<TypeAnimation
									preRenderFirstString
									style={{
										whiteSpace: "pre-line",
										display: "block",
										fontWeight: "bolder",
										color: "orange",
										textAlign: "center",
									}}
									sequence={[
										"Tudo o que você precisa está aqui!",
										5000,
										"",
										1000,
									]}
									speed={45}
									repeat={Number.POSITIVE_INFINITY}
									omitDeletionAnimation
								/>
							</Paragraph>
							<Grid
								item
								md={12}
								sx={{
									display: {xs: "none", md:"flex"},
									justifyContent: "space-around",
                  
									marginTop: 10,
								}}
							>
								{imageForm.map((item) => (
									<Button
										sx={{ padding: 0, borderRadius: "18px" }}
										key={item.id}
										onClick={() => handleImageFilter(item.course)}
									>
										<CategoryCard1
											size={{ height: 100, width: 300 }}
											image={item.image}
											imageMobile={item.image}
										/>
									</Button>
								))}
							</Grid>
						</Grid>
						<Grid item xs={12} md={3}>
							<H4 fontWeight="normal">Você tem preferência por:</H4>
							<FormGroup>
								{[
									{
										name: "pos",
										label: `Pós-Graduação (${posProducts.length})`,
									},
									{
										name: "att",
										label: `Atualização e Prática (${attProducts.length})`,
									},
									{
										name: "steps",
										label: `Primeiros Passos (${stepsProducts.length})`,
									},
								].map(({ name, label }) => (
									<FormControlLabel
										key={name}
										control={
											<Checkbox
												sx={{
													color: "orange",
													"&.Mui-checked": {
														color: "orange",
													},
												}}
												checked={checkboxStates[name]}
												onChange={handleCheckboxChange}
												name={name}
											/>
										}
										label={label}
									/>
								))}
							</FormGroup>
							<H4 fontWeight="normal">
								Selecione a área de interesse para filtrar os cursos:
							</H4>
							<form onSubmit={handleSearchSubmit}>
								<TextField
									sx={{ my: 3, input: { color: "white" } }}
									color="warning"
									label="Pesquisar"
									focused
									onChange={(e) => setSearchParams(e.target.value)}
									InputProps={{
										endAdornment: (
											<InputAdornment position="start">
												<SearchOutlinedIcon color="warning" />
											</InputAdornment>
										),
									}}
									variant="standard"
								/>
							</form>
							<FormGroup>
								{[
									{ name: "administrativo", label: "Administrativo" },
									{ name: "ambiental", label: "Ambiental" },
									{ name: "civil", label: "Civil" },
									{ name: "civil e penal", label: "Civil e Penal" },
									{ name: "consumidor", label: "Consumidor" },
									{
										name: "digital e compliance",
										label: "Digital e Compliance",
									},
									{ name: "diversos", label: "Diversos" },
									{ name: "empresarial", label: "Empresarial" },
									{ name: "família", label: "Família" },
									{ name: "penal", label: "Penal" },
									{ name: "previdenciário", label: "Previdenciário" },
									{ name: "público", label: "Público" },
									{ name: "trabalho", label: "Trabalho" },
									{ name: "tributário", label: "Tributário" },
									{ name: "médico", label: "Médico" },
								].map(({ name, label }) => (
									<FormControlLabel
										key={name}
										control={
											<Checkbox
												checked={filterCheckboxStates[name]}
												onChange={handleFilterCheckboxChange}
												name={name}
												sx={{
													color: "orange",
													"&.Mui-checked": {
														color: "orange",
													},
												}}
											/>
										}
										label={label}
									/>
								))}
							</FormGroup>
						</Grid>

						<Grid
							item
							container
							xs={12}
							md={9}
							spacing={1}
							sx={{ justifyContent: { xs: "center", md: "start" } }}
						>
							{currentProducts.map((product, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Grid key={index} item xs={9} md={4}>
									<ProductCard21 product={product} />
								</Grid>
							))}
							{getFilteredProducts().length > productsPerPage && (
								<Grid item md={12} justifyContent={"center"} display={"grid"}>
									<Stack mx="auto" spacing={2}>
										<Pagination
											sx={{
												mx: "auto",
												"& .MuiPaginationItem-root": {
													color: "#a8a0ed",
													borderColor: "#a8a0ed",
												},
												"& .MuiPaginationItem-root.Mui-selected": {
													color: "#FFCD4E",
													borderColor: "#FFCD4E",
												},

												"& .Mui-selected": {
													color: "#FFCD4E",
													transition: "0.2s",
													backgroundColor: "rgba(255, 205, 78, 0.24)",
													border: "1px solid rgba(255, 205, 78, 0.5)",
													":hover": {
														backgroundColor: "rgba(255, 205, 78, 0.24)",
														filter: "brightness(0.8)",
													},
												},
											}}
											count={Math.ceil(
												getFilteredProducts().length / productsPerPage,
											)}
											page={currentPage}
											onChange={(_, page) => setCurrentPage(page)}
										/>
									</Stack>
								</Grid>
							)}
						</Grid>
					</Grid>
					<Grid
						container
						columnGap={10}
						padding={3}
						rowGap={15}
						display={"flex"}
						justifyContent={"center"}
						mt={10}
					>
						<Grid item>
							<H2 textAlign={"center"}>
								PARTICIPE DA NOSSA <br /> COMUNIDADE NO WHATSAPP
							</H2>
							<Card sx={{ backgroundColor: "#161D24" }}>
								<CardContent
									sx={{
										backgroundColor: "#161D24",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										paddingX: "0.5rem",
										marginY: "2rem",
									}}
								>
									<Link
										href={"https://chat.whatsapp.com/HpsfEVswINFDEH84Qecvgf"}
										target="_blank"
										style={{
											display: "flex",
											alignItems: "center",
											gap: 2,
										}}
										className={sora.className}
									>
										<WhatsApp
											color="success"
											style={{ fontSize: "3.125rem" }}
										/>
										<H3
											color={"white"}
											sx={{ fontSize: { xs: ".750rem", md: "1.20rem" } }}
										>
											Clique e participe da
											<br />
											<span style={{ whiteSpace: "nowrap" }}>
												COMUNIDADE EXCLUSIVA WHATSAPP
											</span>
										</H3>
									</Link>
								</CardContent>
							</Card>
						</Grid>
						<Grid item>
							<H2 textAlign={"center"}>
								INSCREVA-SE EM NOSSA <br /> NEWSLETTER
							</H2>
							<Card sx={{ backgroundColor: "#161D24" }}>
								<CardContent sx={{ xs: { maxWidth: "150px" } }}>
									<RdStationForm />
								</CardContent>
							</Card>
						</Grid>
					</Grid>
					<Grid container mt={5}>
						<Grid item xs={12} md={12}>
							<Box my={5} ml={4}>
								<Blog title="Atualizações" />
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Container>
		</ShopLayout1>
	);
};

export default AdvDoFuturoPage;
