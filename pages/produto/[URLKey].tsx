import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Container, Grid, styled, Tab, Tabs } from "@mui/material";
import { H2 } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductIntro from "pages-sections/product-details/ProductIntro";
import ProductDescription from "pages-sections/product-details/ProductDescription";
import Product from "../../src/models/Product.model";
import SEO from "components/SEO";
import api from "../../src/utils/__api__/meu-curso";
import ProductDescriptionPDF from "pages-sections/product-details/ProductDescriptionPDF";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import PosProduct from "components/front-types/PosGraduação/PosProduct";
import PosBuyComponent from "components/front-types/PosGraduação/PosBuyComponent";
import Oab2Product from "components/front-types/Oab2ªFase/Oab2Product";
import Oab2BuyComponent from "components/front-types/Oab2ªFase/Oab2BuyComponent";
import Oab1Product from "components/front-types/Oab1ªFase/Oab1Product";
import Oab1BuyComponent from "components/front-types/Oab1ªFase/Oab1BuyComponent";
import Script from "next/script";
import ContestProduct from "components/front-types/Concursos/ContestProduct";
import ContestBuyComponent from "components/front-types/Concursos/ContestBuyComponent";
import ExclusivePosProduct from "components/front-types/PosExclusiva/ExclusivePosProduct";
import ExclusivePosBuyComponent from "components/front-types/PosExclusiva/ExclusivePosBuyComponent";
import AtualizacaoProduct from "components/front-types/Atualizacao-E-Pratica/AtualizacaoProduct";
import AtualiazacaoBuyComponent from "components/front-types/Atualizacao-E-Pratica/AtualizacaoBuyComponent";
import SigantureOABProduct from "components/front-types/SignatureOAB/SigantureOABProduct";
import SignatureOABBuyComponent from "components/front-types/SignatureOAB/SignatureOABBuyComponent";
import Vestibular from "components/front-types/vestibular/vestibular";
import VestibularBuy from "components/front-types/vestibular/vestibular-buy";

// styled component
const StyledTabs = styled(Tabs)(({ theme }) => ({
	minHeight: 0,
	marginTop: 80,
	marginBottom: 24,
	borderBottom: `1px solid ${theme.palette.text.disabled}`,
	"& .inner-tab": {
		minHeight: 40,
		fontWeight: 600,
		textTransform: "capitalize",
	},
}));

type ProductDetailsProps = {
	singleProduct: Product;
};

const updateChildrenSelected = (item) => {
	const updatedItem = { ...item };

	const updateChildren = (itemToUpdate) => {
		if (itemToUpdate.Children && itemToUpdate?.Children?.length > 0) {
			itemToUpdate.Children.forEach((child) => {
				if (child.ProductGroupId === 1 && itemToUpdate.ProductGroupId === 3) {
					child.Selected = false;
					itemToUpdate.Selected = false;
				} else if (
					child.ProductGroupId === 1 &&
					child.ProductTypeId !== 3 &&
					itemToUpdate.ProductGroupId === 2
				) {
					child.Selected = true;
				} else if (
					child.ProductGroupId === 2 &&
					itemToUpdate.ProductGroupId === 3
				) {
					child.Selected = false;
				} else {
					child.Selected = true;
				}
				updateChildren(child);
			});
		}
	};

	updateChildren(updatedItem);

	return updatedItem;
};

const ProductDetails: FC<ProductDetailsProps> = ({ singleProduct }) => {
	const router = useRouter();
	const [selectedOption, setSelectedOption] = useState("0");

	const handleOptionClick = (
		event: React.SyntheticEvent,
		newOption: string,
	) => {
		setSelectedOption(newOption);
	};

	const [updatedProduct, setUpdatedProduct] = useState(singleProduct);

	useEffect(() => {
		if (singleProduct) {
			const updatedProduct = updateChildrenSelected(singleProduct);
			setUpdatedProduct(updatedProduct);
		}
	}, [singleProduct]);

	if (router.isFallback || !updatedProduct) {
		return <h1>Nada Encontrado</h1>;
	}

	return (
		<ShopLayout1>
			<SEO
				title={
					updatedProduct.MetaTitle
						? updatedProduct.MetaTitle
						: updatedProduct.Name
				}
				description={updatedProduct.MetaDescription}
			/>

			{(singleProduct.ApiEcommerceFrontEndTypes === 0 ||
				!singleProduct.ApiEcommerceFrontEndTypes) && (
				<Container sx={{ my: 4 }}>
					{/* PRODUCT DETAILS INFO AREA */}
					<ProductIntro singleProduct={updatedProduct} />

					<TabContext value={selectedOption}>
						<>
							<Box sx={{ borderBottom: 1, borderColor: "#d3d3d3" }}>
								<TabList onChange={handleOptionClick}>
									<Tab label="Descritivo" value="0" />
									<Tab label="Descrição" value="1" />
								</TabList>
							</Box>

							<TabPanel value="0">
								<ProductDescriptionPDF product={updatedProduct} />
							</TabPanel>
							<TabPanel value="1">
								<ProductDescription product={updatedProduct} />
							</TabPanel>
						</>
					</TabContext>
				</Container>
			)}

			{singleProduct.ApiEcommerceFrontEndTypes === 1 && (
				<>
					<PosProduct singleProduct={updatedProduct} />
					<PosBuyComponent singleProduct={updatedProduct} />
				</>
			)}

			{singleProduct.ApiEcommerceFrontEndTypes === 2 && (
				<>
					<Oab1Product singleProduct={updatedProduct} />
					<Oab1BuyComponent singleProduct={updatedProduct} />
				</>
			)}
			{singleProduct.ApiEcommerceFrontEndTypes === 3 && (
				<>
					<Oab2Product singleProduct={updatedProduct} />
					<Oab2BuyComponent singleProduct={updatedProduct} />
				</>
			)}
			{singleProduct.ApiEcommerceFrontEndTypes === 7 && (
				<>
					<ContestProduct singleProduct={updatedProduct} />
					<ContestBuyComponent singleProduct={updatedProduct} />
				</>
			)}

			{singleProduct.ApiEcommerceFrontEndTypes === 8 && (
				<>
					<ExclusivePosProduct singleProduct={updatedProduct} />
					<ExclusivePosBuyComponent singleProduct={updatedProduct} />
				</>
			)}

			{singleProduct.ApiEcommerceFrontEndTypes === 9 && (
				<>
					<AtualizacaoProduct singleProduct={singleProduct} />
					<AtualiazacaoBuyComponent singleProduct={singleProduct} />
				</>
			)}

			{singleProduct.ApiEcommerceFrontEndTypes === 10 && (
				<>
					<SigantureOABProduct singleProduct={updatedProduct} />
					<SignatureOABBuyComponent singleProduct={updatedProduct} />
				</>
			)}
			{singleProduct.ApiEcommerceFrontEndTypes === 11 && (
				<>
					<Vestibular singleProduct={updatedProduct} />
					<VestibularBuy singleProduct={updatedProduct} />
				</>
			)}
			{updatedProduct.SKU === "BPASADVREC" && (
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
			<Script id="dados-estruturado-produto" type="application/ld+json">
				{`{"@context": "https://schema.org/",
          "@type": "Product",
          "name": "${singleProduct.Name}",
          "image": "${singleProduct.SmallImageUrl}",
          "description": "${singleProduct.MetaDescription}",
          "brand": {
            "@type": "Brand",
            "name": "MeuCurso"
          },
          "sku": "${singleProduct.SKU}",
          "offers": {
            "@type": "Offer",
            "url": "https://www.meucurso.com.br/produto/${singleProduct.URLKey}",
            "priceCurrency": "BRL",
            "price": "${singleProduct.SpecialPrice}",
            "availability": "https://schema.org/InStock"
          }
        }
          `}
			</Script>
		</ShopLayout1>
	);
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const singleProduct = await api.getProductBySlug(params.URLKey);

	const updatedProduct = updateChildrenSelected(singleProduct);

	return {
		props: {
			singleProduct: updatedProduct,
		},
		revalidate: 10,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// const products = await api.getProducts();

	// const paths = products.map((product: any) => ({
	//   params: { URLKey: String(product.URLKey) },
	// }));

	// return {
	//   paths,
	//   fallback: "blocking",
	// };
	return {
		paths: [],
		fallback: "blocking",
	};
};
export default ProductDetails;
