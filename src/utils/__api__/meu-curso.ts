import axios from "axios";
import type Banner from "../../models/Banners";

const getToken = async () => {
	const response = await axios.post(
		"https://apiecommerce.meucurso.com.br/api/login",
		{
			Email: "lucas.martins@meucurso.com.br",
			Password: "M3ucUrc0@5yEAp1",
		},
	);
	return response.data.Token;
};
const getToken2 = async () => {
	const response = await fetch(
		"https://apiecommerce.meucurso.com.br/api/login",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				Email: "lucas.martins@meucurso.com.br",
				Password: "M3ucUrc0@5yEAp1",
			}),
		},
	);

	const data = await response.json();

	if (!response.ok) {
		throw new Error(`Erro ao obter token: ${data.error}`);
	}

	return data.Token;
};

const getStudentNewAccount = async (credentials) => {
	const token = await getToken();

	const response = await axios.post(
		"https://apiecommerce.meucurso.com.br/Student/Create",
		credentials,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data.Token;
};

const getProducts = async () => {
	const token = await getToken();
	const response = await axios.get(
		"https://apiecommerce.meucurso.com.br/Products/List",
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);
	return response.data;
};

const getProductBySlug = async (URLKey: any) => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Products/Id?URLKey=${URLKey}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data;
};
const getProductsById = async (categoryId: any) => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Products/List?CategoryId=${categoryId}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data;
};

const getProductsByName = async (name: any) => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Products/List?Name=${name}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	// Filtrar apenas produtos das categorias específicas: 308, 3, 12
	const allowedCategoryIds = [308, 3, 12];
	const filteredProducts = response.data.filter(product => {
		if (product.CategoryProducts && product.CategoryProducts.length > 0) {
			return product.CategoryProducts.some(category =>
				allowedCategoryIds.includes(category.CategoryId) ||
				allowedCategoryIds.includes(category.ParentCategoryId)
			);
		}
		return false;
	});

	return filteredProducts;
};

const getCouponByPUrlKey = async (urlkey, coupon) => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Coupons/CheckCoupon?UrlKey=${urlkey}&couponName=${coupon}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data;
};
const getFreteByCEP = async (productId, cep) => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/DeliveryCharge?productId=${productId}&cep=${cep}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data;
};

const getProductsCategories = async () => {
	const token = await getToken();
	const response = await axios.get(
		"https://apiecommerce.meucurso.com.br/ProductCategories/List",
		{ headers: { Authorization: `Bearer ${token}` } },
	);
	return response.data;
};
const getProductsCategoriesByUrlKey = async (UrlKey: any) => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/ProductCategories/List?UrlKey=${UrlKey}`,
		{ headers: { Authorization: `Bearer ${token}` } },
	);
	return response.data;
};
const getProductsCampain = async () => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Products/ListByCampain`,
		{ headers: { Authorization: `Bearer ${token}` } },
	);
	return response.data;
};

const getIndexBanners = async (id: string): Promise<Banner[]> => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Banners/List?bannerCategoryId=${id}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data;
};
const getTeachers = async () => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Marketplaces/List`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data;
};
const getTeachersById = async (id: string) => {
	const token = await getToken();
	const response = await axios.get(
		`https://apiecommerce.meucurso.com.br/Marketplaces/Teacher?URL=${id}`,
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	);

	return response.data;
};

const getRedirects = async () => {
	const token = await getToken2();
	try {
		const response = await fetch(
			"https://apiecommerce.meucurso.com.br/RedirectionUrl/ListRedirections",
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error.message);
		throw error;
	}
};

export default {
	getProducts,
	getIndexBanners,
	getProductBySlug,
	getProductsById,
	getProductsByName,
	getProductsCategories,
	getProductsCategoriesByUrlKey,
	getCouponByPUrlKey,
	getRedirects,
	getToken2,
	getStudentNewAccount,
	getFreteByCEP,
	getTeachers,
	getTeachersById,
	getProductsCampain,
};
