import Link from "next/link";
import {
	Box,
	Button,
	Card,
	Divider,
	Grid,
	Grow,
	Slide,
	Stack,
	TextField,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import CircularProgress from "@mui/material/CircularProgress";

import MenuItem from "@mui/material/MenuItem";
import SEO from "components/SEO";
import { H2, Paragraph, Span } from "components/Typography";
import { FlexBetween } from "components/flex-box";
import ProductCard7 from "components/product-cards/ProductCard7";
import CheckoutNavLayout from "components/layouts/CheckoutNavLayout";

import { currency } from "lib";
import { useSession } from "next-auth/react";
import React, { useEffect, useState, useCallback, useMemo } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import ShopLayout1 from "components/layouts/ShopLayout1";

import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import useCartStore from "store/useCartStore";
import { AdressModal } from "components/AdressModal";
import Image from "next/image";
import { Timer } from "../src/components/Timer";
import SurpriseCoupon from "components/SurpriseCoupon";
import { ArrowBack } from "@mui/icons-material";

export const ContinueShoppingLink = styled(Link)({
	transition: "0.2s",
	justifyItems: "center",
	display: "flex",
	fontWeight: "bold",
	color: "#D23F57",
	"&:hover": {
		color: "red",
	},
});

const Carrinho = () => {
	const { data: session } = useSession();
	const router = useRouter();

	const [address, setAddress] = useState("");
	const [cep, setCep] = useState("");
	const [cepValue, setCepValue] = useState<any>();
	const [coupoms, setCoupoms] = useState<any>({});
	const [coupomValue, setCoupomValue] = useState<any>();
	const [cupomText, setCoupomText] = useState("");
	const [loading, setLoading] = useState(true);
	const [pickupInStore, setPickupInStore] = useState(false);
	const [radioValue, setRadioValue] = useState("");
	const [sedex, setSedex] = useState<any>(false);
	const [shippingPrice, setShippingPrice] = useState(0);
	const [studentAddress, setStudentAddress] = useState<any>([]);
	const [isInitialFetch, setIsInitialFetch] = useState(true);
	const [redirectLink, setRedirect] = useState<string>("http://aluno.fadeg.com.br/StudyRoute/Index/");

	const [open, setOpen] = useState(false);

	const [openModalAddresses, setOpenModalAddresses] = useState(false);

	const { enqueueSnackbar } = useSnackbar();

	const [cartProducts, fetchCartItems, orderId, handleDeleteCartItems] =
		useCartStore((state) => [
			state.cartProducts,
			state.fetchCartItems,
			state.orderId,
			state.handleDeleteCartItems,
		]);

	const handleOpenAddressModal = () => {
		setOpenModalAddresses(true);
	};

	const getSubTotalPrice = () =>
		cartProducts.reduce((accum, item) => accum + item.Price * item.Qty, 0);

	const valuesToCheck = [
		"E-book",
		"e-book",
		"Kit",
		"livro",
		"Vade",
		"vade",
		"mecum",
	];

	const isBook =
		cartProducts.length === 1 &&
		valuesToCheck.some((value) => cartProducts[0].ProductName.includes(value));

	const getTotalPrice = () => {
		const subTotal = getSubTotalPrice();
		const discountAmount = coupoms?.DiscountAmount || 0;

		return subTotal + shippingPrice - discountAmount;
	};

	const handleCoupom = async (coupomName) => {
		const encodedCoupomName = encodeURIComponent(coupomName);

		axios
			.get(
				`https://apiecommerce.meucurso.com.br/Coupons/ValidCoupon?OrderId=${orderId}&CouponName=${encodedCoupomName}`,
				{ headers: { Authorization: `Bearer ${session?.user?.Token}` } },
			)
			.then((response) => {
				setCoupoms(response.data);
				setCoupomText("Cupom aplicado!");

				if (response.data === null) {
					setCoupomText("Cupom Inválido");
				}
			})
			.catch((err) => {
				setCoupomText("Cupom Inválido");
				console.log(err);
			});
	};

	const handleCheckout = () => {
		const apiResponseData = JSON.parse(localStorage.getItem("apiResponseData"));
		if (sedex) {
			apiResponseData.Coupon = coupomValue;
			apiResponseData.OrderShippingPackages = shippingSEDEXInformations;
			apiResponseData.BillingAddressId = address;
			apiResponseData.DigitalAdressId = billingAndShippingId[0];
			apiResponseData.ShippingAddressId = address;
			apiResponseData.Price = getTotalPrice();
			apiResponseData.SubTotalPrice = getSubTotalPrice();
			apiResponseData.Frete = shippingPrice;
			apiResponseData.Cupom = coupoms?.DiscountAmount;

			localStorage.setItem("apiResponseData", JSON.stringify(apiResponseData));
		} else if (pickupInStore) {
			const pickStore = {
				ServiceCode: 0,
				ServiceDescription: "Retirar na loja",
				DeliveryTime: 0,
				ShippingPrice: 0,
			};

			apiResponseData.Coupon = coupomValue;
			apiResponseData.OrderShippingPackages = [pickStore];
			apiResponseData.BillingAddressId = address;
			apiResponseData.DigitalAdressId = billingAndShippingId[0];
			apiResponseData.ShippingAddressId = address;
			apiResponseData.Price = getTotalPrice();
			apiResponseData.SubTotalPrice = getSubTotalPrice();
			apiResponseData.Frete = shippingPrice;
			apiResponseData.Cupom = coupoms?.DiscountAmount;

			localStorage.setItem("apiResponseData", JSON.stringify(apiResponseData));
		} else if (radioValue === "") {
			apiResponseData.Coupon = coupomValue;
			apiResponseData.OrderShippingPackages = [];
			apiResponseData.BillingAddressId = address;
			apiResponseData.DigitalAdressId = billingAndShippingId[0];
			apiResponseData.ShippingAddressId = address;
			apiResponseData.Price = getTotalPrice();
			apiResponseData.SubTotalPrice = getSubTotalPrice();
			apiResponseData.Frete = shippingPrice;
			apiResponseData.Cupom = coupoms?.DiscountAmount;

			localStorage.setItem("apiResponseData", JSON.stringify(apiResponseData));
		}
		if (
			(coupomValue?.length <= 0 && coupoms?.DiscountAmount) ||
			(coupomValue?.length > 0 && !coupoms?.DiscountAmount) ||
			coupomValue !== coupoms?.CouponName
		) {
			enqueueSnackbar("Aplique ou digite seu cupom novamente", {
				variant: "warning",
			});
		} else {
			router.push("/pagamento");
		}
	};

	const handlePaymentFree = () => {
		const requestPayment: any = {};

		if (cartProducts.find((item) => item.ApiEcommerceFrontEndTypes === 11)) {
			setRedirect("http://aluno.fadeg.com.br/StudyRoute/Index/");
		}

		requestPayment.OrderId = orderId;
		requestPayment.OrderShippingPackage = [];
		requestPayment.ShippingAddressId = address;

		axios
			.post(
				"https://apiecommerce.meucurso.com.br/BIPEStore/ProcessPaymentFree",
				requestPayment,
				{ headers: { Authorization: `Bearer ${session?.user?.Token}` } },
			)
			.then((response) => {
				setOpen(true);
			})
			.catch((err) => {
				setOpen(true);
				console.group(err);
			});
	};

	const handleAddressChange = (event) => {
		const selectedAddressId = event.target.value;
		setAddress(selectedAddressId);
		setIsInitialFetch(false);

		const selectedAddress = studentAddress.find(
			(item) => item.StudentAddressId === selectedAddressId,
		);

		if (selectedAddress) {
			setCep(selectedAddress.PostalCode);
		} else {
			setCep("");
		}
	};

	const handleRadioChange = (e) => {
		setRadioValue(e.target.value);
		if (e.target.value === "SEDEX") {
			setPickupInStore(false);
			setSedex(true);
			const selectedCarrier = shippingInfo.find(
				(carrier) => carrier.ServiceDescription === "SEDEX",
			);
			if (selectedCarrier) {
				setShippingPrice(Number(selectedCarrier.ShippingPrice));
			} else {
				setShippingPrice(0);
			}
		} else if (e.target.value === "Retirar na loja") {
			setPickupInStore(true);
			setSedex(false);
			setShippingPrice(0);
		} else {
			setPickupInStore(false);
			setSedex(false);
			setShippingPrice(0);
		}
	};

	const shippingSEDEXInformations = cepValue?.flatMap((value) =>
		value.ShippingInformations.filter(
			(item) => item.ServiceDescription === "SEDEX",
		).map((value) => ({
			...value,
			StorageId: cepValue[0].StorageId,
		})),
	);

	const shippingProduct = cartProducts.some(
		(product) => product.ProductTypeId === 4 || product.ProductTypeId === 2,
	);

	const billingAndShippingId = studentAddress.map(
		(address) => address.StudentAddressId,
	);

	const fetchAddress = useCallback(async () => {
		if (session) {
			try {
				const response = await axios.get(
					`https://apiecommerce.meucurso.com.br/Student/Address?CustomerId=${session?.user?.CustomerId}`,
					{ headers: { Authorization: `Bearer ${session?.user?.Token}` } },
				);
				setStudentAddress(response.data);

				if (isInitialFetch && response.data) {
					handleAddressChange({
						target: { value: response.data[0]?.StudentAddressId },
					});
				}
				setIsInitialFetch(false);

				if (response.data.length === 0 && getTotalPrice() !== 0) {
					enqueueSnackbar(
						"Cadastre um endereço para prosseguir com o pagamento",
						{
							variant: "warning",
							autoHideDuration: 4000,
							preventDuplicate: true,
						},
					);
				}
			} catch (err) {
				enqueueSnackbar(err?.response?.data, {
					variant: "error",
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [enqueueSnackbar, session, isInitialFetch]);

	useEffect(() => {
		const fetchShippingDetails = async (cepValue) => {
			setLoading(true);
			axios
				.get(
					`https://apiecommerce.meucurso.com.br/Shipping/GetShippingDetails?OrderId=${orderId}&Cep=${cepValue}`,
					{ headers: { Authorization: `Bearer ${session?.user?.Token}` } },
				)
				.then((response) => {
					setLoading(false);
					setCepValue(response.data);
				})
				.catch((err) => {
					setLoading(false);
					enqueueSnackbar(err.response.data, {
						variant: "error",
					});
				});
		};

		fetchCartItems(session);
		fetchAddress();
		if (cep) {
			fetchShippingDetails(cep);
		}
	}, [
		fetchCartItems,
		session,
		fetchAddress,
		cep,
		orderId,
		session?.user?.Token,
		enqueueSnackbar,
	]);

	const shippingInfo = cepValue?.flatMap((item) => item.ShippingInformations);
	const promotionItem = cartProducts.find(
		(product) => product.SKU === "SRFOAB41SEM05",
	);

	return (
		<>
			{!cartProducts.length && (
				<ShopLayout1>
					<SEO
						title="Carrinho"
						sitename="MeuCurso - Do seu jeito. No seu tempo."
					/>

					<Grid container textAlign={"center"} justifyContent={"center"}>
						<Grid item m={5} md={12}>
							<H2>Seu carrinho está vazio!</H2>
							<Image
								width={150}
								height={150}
								src="/assets/images/Bipe/_2.png"
								alt="banner"
							/>
						</Grid>
					</Grid>
				</ShopLayout1>
			)}
			{session && cartProducts.length > 0 && (
				<CheckoutNavLayout>
					<SEO
						title="Carrinho"
						sitename="MeuCurso - Do seu jeito. No seu tempo."
					/>

					<Dialog open={open}>
						<Box sx={{ padding: 5 }}>
							<Link
								href="/"
								style={{
									alignItems: "center",
									justifyContent: "start",
									display: "flex",
								}}
							>
								<ArrowBack /> Voltar
							</Link>
							<DialogTitle>
								<CheckCircleIcon
									color="success"
									sx={{
										fontSize: 75,
										textAlign: "center",
										margin: "0 auto",
										display: "flex",
									}}
								/>
								<H2 textAlign={"center"} mt={5}>
									Compra Finalizada com Sucesso!
								</H2>
								<H2 textAlign={"center"} mt={3}>
									Número do pedido: #{orderId}
								</H2>
							</DialogTitle>
							<DialogContent>
								<DialogContentText>
									{/* <p
                      style={{
                        textAlign: "center",
                        fontSize: 15,
                        marginTop: 2,
                      }}
                    >
                      Ou veja mais informações de sua compra clicando{" "}
                      <a
                        target="_blank"
                        style={{
                          color: "green",
                          textDecoration: "underline",
                        }}
                        href="http://aluno.fadeg.com.br/BIPEStore/Orders"
                      >
                        aqui
                      </a>
                    </p> */}
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button
									color="success"
									variant="contained"
									sx={{ marginTop: 5, color: "white" }}
									fullWidth
									href={redirectLink}
								>
									Acesse sua conta clicando aqui!
								</Button>
							</DialogActions>
						</Box>
					</Dialog>
					<Grid container spacing={3}>
						{/* CART PRODUCT LIST */}
						{/* {loading && (
                    <Skeleton variant="rounded" width={500} height={600} />
                  )} */}
						{/* {!loading && ( */}

						<Grid item md={8} xs={12}>
							<Box
								sx={{
									display: { xs: "flex", sm: "none" },
									justifyContent: "center",
									paddingBottom: 2,
								}}
							>
								<ContinueShoppingLink href={"/"}>
									<AddShoppingCart fontSize={"small"} />
									Continuar comprando
								</ContinueShoppingLink>
							</Box>

							{cartProducts.map((item) => (
								<ProductCard7
									onClickFunction={() =>
										handleDeleteCartItems(session, item.SKU, orderId)
									}
									key={item.OrderItemId}
									{...item}
								/>
							))}
							{!cupomText &&
								!coupoms.CouponName &&
								getTotalPrice() !== 0 &&
								!isBook && (
									<Box sx={{ position: "relative", display: "flex" }}>
										<SurpriseCoupon
											maxMin={5}
											handleCoupom={handleCoupom}
											setCoupomName={setCoupomValue}
											coupomName="MC3OFF"
										/>
									</Box>
								)}
						</Grid>
						{/* )} */}

						{/* CHECKOUT FORM */}
						<Grid data-testid="checkout-form" item md={4} xs={12}>
							<Card sx={{ padding: 3 }}>
								<FlexBetween mb={2}>
									<Span color="grey.600">Subtotal:</Span>

									<Span fontSize={18} fontWeight={600} lineHeight="1">
										{currency(getSubTotalPrice())}
									</Span>
								</FlexBetween>
								<FlexBetween mb={2}>
									<Span color="grey.600">Cupom:</Span>
									<Span
										fontSize={18}
										fontWeight={600}
										lineHeight="1"
										color={"green"}
									>
										- {currency(coupoms?.DiscountAmount)}
									</Span>
								</FlexBetween>
								<FlexBetween mb={2}>
									<Span color="grey.600">Frete:</Span>

									<Span
										fontSize={18}
										fontWeight={600}
										lineHeight="1"
										color={"#D23F57"}
									>
										+{currency(shippingPrice)}
									</Span>
								</FlexBetween>
								<FlexBetween>
									<Span color="grey.600">Total:</Span>

									<Span fontSize={18} fontWeight={600} lineHeight="1">
										{shippingPrice === undefined ? (
											<div>
												<p
													style={{
														display: "flex",
														justifyContent: "end",
													}}
												>
													{currency(getSubTotalPrice())}
												</p>
												<div
													style={{
														display: "flex",
														justifyContent: "end",
													}}
												>
													<Paragraph
														fontSize={13}
														fontWeight={600}
														lineHeight="1"
														textAlign={"end"}
														sx={{ width: "150px" }}
													>
														ou em até{" "}
														<span
															style={{
																color: "red",
																fontWeight: "bold",
															}}
														>
															12x{" "}
														</span>{" "}
														de{" "}
														<span
															style={{
																color: "red",
																fontWeight: "bold",
															}}
														>
															{currency(getSubTotalPrice() / 12)}
														</span>{" "}
														no cartão de crédito
													</Paragraph>
												</div>
											</div>
										) : (
											<div>
												<p
													style={{
														display: "flex",
														justifyContent: "end",
													}}
												>
													{currency(getTotalPrice())}
												</p>
												<div
													style={{
														display: "flex",
														justifyContent: "end",
													}}
												>
													<Paragraph
														fontSize={13}
														fontWeight={600}
														lineHeight="1"
														textAlign={"end"}
														sx={{ width: "150px" }}
													>
														ou em até{" "}
														<span
															style={{
																color: "red",
																fontWeight: "bold",
															}}
														>
															12x{" "}
														</span>{" "}
														de{" "}
														<span
															style={{
																color: "red",
																fontWeight: "bold",
															}}
														>
															{currency(getTotalPrice() / 12)}
														</span>{" "}
														no cartão de crédito
													</Paragraph>
												</div>
											</div>
										)}
									</Span>
								</FlexBetween>

								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "end",
										marginTop: "2",
									}}
								>
									<LockIcon fontSize="small" />
									<Span color="grey.600">Compra segura</Span>
								</div>

								<Divider sx={{ mt: 2, mb: 2 }} />
								{getTotalPrice() > 0 && !isBook && (
									<>
										<TextField
											value={coupomValue}
											onChange={(e) => setCoupomValue(e.target.value)}
											fullWidth
											size="small"
											label="Cupom"
											variant="outlined"
											InputLabelProps={{
												shrink: !!coupomValue,
											}}
											placeholder="Cupom"
											helperText={
												coupoms?.DiscountAmount > 0 &&
												coupoms?.CouponName && (
													<Timer
														maxMin={5}
														coupoms={coupoms}
														cupomText={cupomText}
														setCoupoms={setCoupoms}
														setCoupomValue={setCoupomValue}
														setCoupomText={setCoupomText}
													/>
												)
											}
										/>
										<Button
											disabled={coupomValue?.length <= 0}
											onClick={() => handleCoupom(coupomValue)}
											variant="outlined"
											color="primary"
											fullWidth
											sx={{ mt: 2, mb: 4 }}
										>
											Aplicar Cupom
										</Button>
									</>
								)}
								<AdressModal
									open={openModalAddresses}
									setOpen={setOpenModalAddresses}
									fetchData={fetchAddress}
								/>
								{!shippingProduct && (
									<TextField
										data-testid="address-label"
										sx={{ mb: 3, pointerEvents: "auto" }}
										helperText={
											<Box
												onClick={handleOpenAddressModal}
												sx={{ cursor: "pointer" }}
											>
												Se não tiver um endereço registrado ou quiser cadastrar
												um novo,{" "}
												<span
													style={{
														color: "#000000",
														fontWeight: "bolder",
													}}
												>
													clique aqui.
												</span>
											</Box>
										}
										select
										name="address"
										value={address}
										fullWidth
										size="small"
										label="Endereços"
										variant="outlined"
										onChange={handleAddressChange}
									>
										{studentAddress.map((item, index) => (
											<MenuItem value={item.StudentAddressId} key={index}>
												{item.AddressLine1} , {item.Number} - {item.District} ,{" "}
												{item.CityName} - {item.State.ShortName}
											</MenuItem>
										))}
									</TextField>
								)}
								{shippingProduct && (
									<>
										<TextField
											helperText={
												<Box
													onClick={handleOpenAddressModal}
													sx={{ cursor: "pointer" }}
												>
													Se não tiver um endereço registrado ou quiser
													cadastrar um novo,{" "}
													<span
														style={{
															color: "#000000",
															fontWeight: "bolder",
														}}
													>
														clique aqui.
													</span>
												</Box>
											}
											select
											data-testid="shippingAddress-label"
											value={address}
											fullWidth
											size="small"
											label="Endereços"
											variant="outlined"
											onChange={handleAddressChange}
										>
											{studentAddress.map((item, index) => (
												<MenuItem value={item.StudentAddressId} key={index}>
													{item.AddressLine1} , {item.Number} - {item.District}{" "}
													, {item.CityName} - {item.State.ShortName}
												</MenuItem>
											))}
										</TextField>

										<TextField
											disabled
											fullWidth
											size="small"
											label="C.E.P"
											placeholder="3100"
											variant="outlined"
											sx={{
												mt: 2,
												color: "#2b3445",
												"& .MuiInputBase-input.Mui-disabled": {
													WebkitTextFillColor: "#2b3445",
												},
												"& .MuiFormLabel-root.Mui-disabled": {
													color: "#2b3445",
												},
											}}
											value={cep}
											onChange={(e) => setCep(e.target.value)}
										/>
										<Divider sx={{ mb: 2 }} />
										{loading && shippingProduct && address && (
											<CircularProgress color="inherit" size={20} />
										)}
										{!loading && shippingProduct && address && (
											<FormControl sx={{ mb: 2 }}>
												<FormLabel id="demo-radio-buttons-group-label">
													<Span color="grey.600">Tipo de entrega</Span>
												</FormLabel>
												{shippingInfo?.map((carriers, index) => (
													<>
														<RadioGroup
															key={index}
															aria-labelledby="demo-radio-buttons-group-label"
															defaultValue=""
															name="radio-buttons-group"
															onChange={handleRadioChange}
															value={radioValue}
														>
															<FormControlLabel
																value={carriers.ServiceDescription}
																control={<Radio />}
																label={carriers.ServiceDescription}
															/>
														</RadioGroup>
													</>
												))}
											</FormControl>
										)}
									</>
								)}

								<Button
									data-testid="finishBuy-button"
									onClick={
										getTotalPrice() > 0 ? handleCheckout : handlePaymentFree
									}
									disabled={
										(!address && shippingProduct) ||
										(!radioValue && shippingProduct) ||
										(!address && getTotalPrice() > 0)
									}
									fullWidth
									color="primary"
									variant="contained"
									LinkComponent={Link}
								>
									Finalizar Compra
								</Button>
							</Card>
						</Grid>
					</Grid>
				</CheckoutNavLayout>
			)}
		</>
	);
};

export default Carrinho;
