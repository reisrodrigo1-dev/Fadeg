import Link from "next/link";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Radio,
  TextField,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import Card1 from "components/Card1";
import { FlexBox } from "components/flex-box";
import { H2, Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useCallback } from "react";
import { currency } from "lib";
import { useSnackbar } from "notistack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import { LoadingButton } from "@mui/lab";
import Image from "next/image";

const PaymentForm: FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [localProducts, setLocalProducts] = useState<any>([]);
  const [paymentInstallments, setPaymentInstallments] = useState([]);
  const [studentAddress, setStudentAddress] = useState<any>([]);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [paymentSucceeded, setPaymentSucceed] = useState<any>();
  const [paymentSucceededPix, setPaymentSucceedPix] = useState<any>();
  const [open, setOpen] = useState(false);
  const [openPixModal, setOpenPixModal] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const { data: session } = useSession();
  const router = useRouter();

  const width = useWindowSize();

  const fetchLocalItems = useCallback(() => {
    const response = JSON.parse(localStorage.getItem("apiResponseData"));
    setLocalProducts(response);
  }, []);

  const fetchInstallments = useCallback(async () => {
    const cartData = JSON.parse(localStorage.getItem("apiResponseData"));
    const studenteAddress = studentAddress.map(
      (adress) => adress.StudentAddressId[0]
    );
    const encodedCoupomName = encodeURIComponent(cartData.Coupon);

    try {
      const response = await axios.get(
        `https://apiecommerce.meucurso.com.br/BIPEStore/ListInstallments?OrderId=${cartData.OrderId}&Coupon=${encodedCoupomName}&PaymentOperatorId=9&PaymentMethodId=2&StudentAddressId=${cartData.ShippingAddressId}`,
        { headers: { Authorization: `Bearer ${session?.user?.Token}` } }
      );

      setPaymentInstallments(response.data);
    } catch (err) {
      enqueueSnackbar(err.response.data, {
        variant: "error",
      });
    }
  }, [enqueueSnackbar, session?.user?.Token, studentAddress]);

  const handlePushCart = () => {
    router.push("/carrinho");
  };

  const handlePixPayment = async () => {
    setLoadingPayment(true);
    const requestPayment: any = {};

    if (
      localProducts.BillingAddressId &&
      localProducts.BillingAddressId.length > 0
    ) {
      requestPayment.BillingAddressId = localProducts.BillingAddressId;
    } else {
      requestPayment.BillingAddressId = localProducts.DigitalAdressId;
    }

    if (
      localProducts.ShippingAddressId &&
      localProducts.ShippingAddressId.length > 0
    ) {
      requestPayment.ShippingAddressId = localProducts.BillingAddressId;
    } else {
      requestPayment.ShippingAddressId = localProducts.DigitalAdressId;
    }

    requestPayment.OrderId = localProducts.OrderId;
    requestPayment.OrderShippingPackage = localProducts.OrderShippingPackages;
    requestPayment.Coupon = localProducts.Coupon;

    await axios
      .post(
        "https://apiecommerce.meucurso.com.br/BIPEStore/ProcessPaymentPix",

        requestPayment,
        { headers: { Authorization: `Bearer ${session?.user?.Token}` } }
      )
      .then((response) => {
        setLoadingPayment(false),
          setPaymentSucceedPix(response.data),
          localStorage.removeItem("apiResponseData"),
          setOpenPixModal(true);
      })
      .catch((err) => {
        setLoadingPayment(false),
          enqueueSnackbar(err.response.data, {
            variant: "error",
          });
      });
  };

  const handleFormSubmit = async (values: any) => {
    setLoadingPayment(true);
    const Card = {
      Number: values.card_no,
      HolderName: values.name,
      CPF: values.cpf,
      CVV: values.cvc,
      ExpMonth: values.month_exp_date,
      ExpYear: values.year_exp_date,
      qtyInstallment: values.installment,
      StudendId: localProducts.StudentId,
      PaymentMethodId: 2,
    };

    const requestPayment: any = {};

    if (
      localProducts.BillingAddressId &&
      localProducts.BillingAddressId.length > 0
    ) {
      requestPayment.BillingAddressId = localProducts.BillingAddressId;
    } else {
      requestPayment.BillingAddressId = localProducts.DigitalAdressId;
    }

    if (
      localProducts.ShippingAddressId &&
      localProducts.ShippingAddressId.length > 0
    ) {
      requestPayment.ShippingAddressId = localProducts.ShippingAddressId;
    } else {
      requestPayment.ShippingAddressId = localProducts.DigitalAdressId;
    }

    requestPayment.Card = Card;
    requestPayment.OrderId = localProducts.OrderId;
    requestPayment.OrderShippingPackage = localProducts.OrderShippingPackages;
    requestPayment.Coupon = localProducts.Coupon;

    await axios
      .post(
        "https://apiecommerce.meucurso.com.br/BIPEStore/ProcessPaymentBrainTree",
        requestPayment,
        {
          headers: {
            Authorization: `Bearer ${session?.user?.Token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoadingPayment(false),
          setPaymentSucceed(response.data),
          localStorage.removeItem("apiResponseData"),
          setOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setLoadingPayment(false),
          enqueueSnackbar(err.message, {
            variant: "error",
          });
      });
  };

  const handlePaymentMethodChange = ({ target: { name } }: any) => {
    setPaymentMethod(name);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      onSubmit: handleFormSubmit,
      initialValues,
      validationSchema: checkoutSchema,
    });

  useEffect(() => {
    fetchLocalItems();
    if (session) {
      fetchInstallments();
    }
  }, [fetchInstallments, fetchLocalItems, session]);

  const formatCardNumber = (inputValue) => {
    const formattedValue = inputValue.replace(/\D/g, "").slice(0, 16);

    const formattedWithSpaces = formattedValue
      .replace(/(\d{4})/g, "$1 ")
      .trim();

    handleChange({
      target: { name: "card_no", value: formattedWithSpaces },
    });
  };

  const formatMonthExpiration = (inputValue) => {
    const formattedValue = inputValue.replace(/\D/g, "").slice(0, 2);
    handleChange({
      target: { name: "month_exp_date", value: formattedValue },
    });
  };

  const formatYearExpiration = (inputValue) => {
    const formattedValue = inputValue.replace(/\D/g, "").slice(0, 4);
    handleChange({
      target: { name: "year_exp_date", value: formattedValue },
    });
  };

  const formatCVC = (inputValue) => {
    if (values.card_no.startsWith("3")) {
      const formattedValue = inputValue.replace(/\D/g, "").slice(0, 4);
      handleChange({ target: { name: "cvc", value: formattedValue } });
    } else {
      const formattedValue = inputValue.replace(/\D/g, "").slice(0, 3);
      handleChange({ target: { name: "cvc", value: formattedValue } });
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 80,
    p: 10,
  };

  return (
    <Fragment>
      <Dialog id="pagamento-cartão" open={open}>
        <Box sx={{ padding: 5 }}>
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
              Número do pedido: #{paymentSucceeded?.OrderId}
            </H2>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p style={{ fontSize: 20, textAlign: "center", marginTop: 2 }}>
                Acesse sua rota clicando{" "}
                <a
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  href="http://aluno.fadeg.com.br/StudyRoute/Index/"
                >
                  aqui
                </a>
              </p>
              <p style={{ textAlign: "center", fontSize: 15, marginTop: 2 }}>
                Ou veja mais informações de sua compra clicando{" "}
                <a
                  target="_blank"
                  style={{ color: "green", textDecoration: "underline" }}
                  href="http://aluno.fadeg.com.br/BIPEStore/Orders"
                >
                  aqui
                </a>
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="success"
              variant="contained"
              sx={{ marginTop: 5, color: "white" }}
              fullWidth
              href="/"
            >
              Voltar para a Tela Inicial
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Dialog id="pagamento-pix" open={openPixModal}>
        <Box sx={{ padding: 5 }}>
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
            <H2
              data-testid="payment-sucesss"
              textAlign={"center"}
              sx={{ mt: 5 }}
            >
              Compra Finalizada com Sucesso!
            </H2>
            <H2 textAlign={"center"} sx={{ mt: 3 }}>
              Número do pedido:#{paymentSucceededPix?.OrderId}
            </H2>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "3px",
                }}
              >
                QRCODE
              </p>

              <Image
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
                src={paymentSucceededPix?.QrCodeImage}
                alt="QR Code Pagamento"
              />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginTop: "3px",
                }}
              >
                Link para pagamento
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  marginTop: "3px",
                }}
              >
                <a
                  style={{ color: "blue", textDecoration: "underline" }}
                  target="_blank"
                  href={paymentSucceededPix?.PaymentLink}
                >
                  {paymentSucceededPix?.PaymentLink}
                </a>
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginTop: "3px",
                }}
              >
                Informações adicionais:
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  marginTop: "3px",
                }}
              >
                - Você possui o prazo de 1 hora para o pagamento. Ao passar
                deste prazo, o código é expirado.
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  marginTop: "3px",
                }}
              >
                - Caso perca o código ou QRCODE, clique{" "}
                <a
                  target="_blank"
                  style={{ color: "green" }}
                  href="http://aluno.fadeg.com.br/BIPEStore/Orders"
                >
                  aqui
                </a>{" "}
                e veja suas compras recentes
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              data-testid="home-button"
              color="success"
              variant="contained"
              sx={{ marginTop: 5, color: "white" }}
              fullWidth
              href="/"
            >
              Voltar para a Tela Inicial
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Card1 sx={{ mb: 4 }}>
        <FormControlLabel
          sx={{ mb: 3 }}
          name="credit-card"
          onChange={handlePaymentMethodChange}
          label={
            <Paragraph fontWeight={600}>
              Pagamento com cartão de crédito
            </Paragraph>
          }
          control={
            <Radio
              checked={paymentMethod === "credit-card"}
              color="primary"
              size="small"
            />
          }
        />

        <Divider sx={{ mb: 3, mx: -4 }} />

        {paymentMethod === "credit-card" && (
          <form onSubmit={handleSubmit}>
            <Box mb={3}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="card_no"
                    label="Número do cartão"
                    onBlur={handleBlur}
                    value={values.card_no}
                    onChange={(e) => formatCardNumber(e.target.value)}
                    error={!!touched.card_no && !!errors.card_no}
                    helperText={(touched.card_no && errors.card_no) as string}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="month_exp_date"
                    label="Mês de expiração"
                    placeholder="MM"
                    onBlur={handleBlur}
                    onChange={(e) => formatMonthExpiration(e.target.value)}
                    value={values.month_exp_date}
                    error={!!touched.month_exp_date && !!errors.month_exp_date}
                    helperText={
                      (touched.month_exp_date &&
                        errors.month_exp_date) as string
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="year_exp_date"
                    label="Ano de expiração"
                    placeholder="AAAA"
                    onBlur={handleBlur}
                    onChange={(e) => formatYearExpiration(e.target.value)}
                    value={values.year_exp_date}
                    error={!!touched.year_exp_date && !!errors.year_exp_date}
                    helperText={
                      (touched.year_exp_date && errors.year_exp_date) as string
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="name"
                    onBlur={handleBlur}
                    value={values.name}
                    label="Nome no cartão"
                    onChange={handleChange}
                    error={!!touched.name && !!errors.name}
                    helperText={(touched.name && errors.name) as string}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    inputProps={{ maxLength: 11 }}
                    name="cpf"
                    onBlur={handleBlur}
                    value={values.cpf}
                    label="CPF"
                    onChange={handleChange}
                    error={!!touched.cpf && !!errors.cpf}
                    helperText={(touched.cpf && errors.cpf) as string}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    name="cvc"
                    onBlur={handleBlur}
                    value={values.cvc}
                    label="CVC"
                    onChange={(e) => formatCVC(e.target.value)}
                    error={!!touched.cvc && !!errors.cvc}
                    helperText={(touched.cvc && errors.cvc) as string}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    disabled
                    sx={{
                      color: "#2b3445",
                      "& .MuiInputBase-input.Mui-disabled": {
                        WebkitTextFillColor: "#2b3445",
                      },
                      "& .MuiFormLabel-root.Mui-disabled": {
                        color: "#2b3445",
                      },
                    }}
                    fullWidth
                    name="brand"
                    onBlur={handleBlur}
                    value={
                      values.card_no.startsWith("4")
                        ? "VISA"
                        : values.card_no.startsWith("5")
                        ? "MasterCard"
                        : values.card_no.startsWith("3")
                        ? "American Express"
                        : "Outro"
                    }
                    label="Bandeira"
                    onChange={handleChange}
                    helperText={(touched.brand && errors.brand) as string}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    select
                    fullWidth
                    name="installment"
                    onBlur={handleBlur}
                    value={values.installment}
                    label="Parcelas"
                    onChange={handleChange}
                    error={!!touched.installment && !!errors.installment}
                    helperText={
                      (touched.installment && errors.installment) as string
                    }
                  >
                    {paymentInstallments.map((intellments, index) => (
                      <MenuItem value={intellments.Number} key={index}>
                        {intellments.Number} x de{" "}
                        {currency(localProducts.Price / intellments.Number)} sem
                        juros
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Box>

            <LoadingButton
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              loading={loadingPayment}
            >
              Finalizar Compra
            </LoadingButton>

            <Divider sx={{ mb: 3, mx: -4 }} />
          </form>
        )}

        <FormControlLabel
          name="pix"
          sx={{ mb: 3 }}
          onChange={handlePaymentMethodChange}
          label={<Paragraph fontWeight={600}>Pagamento via PIX</Paragraph>}
          control={
            <Radio
              checked={paymentMethod === "pix"}
              color="primary"
              size="small"
            />
          }
        />
        <Divider sx={{ mb: 3, mx: -4 }} />
        {paymentMethod === "pix" && (
          <Fragment>
            <LoadingButton
              data-testid="purchasepix-button"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              loading={loadingPayment}
              onClick={handlePixPayment}
            >
              Finalizar Compra
            </LoadingButton>
          </Fragment>
        )}
      </Card1>

      <Button
        startIcon={<TurnLeftIcon />}
        variant="contained"
        color="primary"
        sx={{ p: 1 }}
        onClick={handlePushCart}
      >
        Voltar para o carrinho
      </Button>
    </Fragment>
  );
};

const initialValues = {
  card_no: "",
  name: "",
  month_exp_date: "",
  year_exp_date: "",
  cvc: "",
  cpf: "",
  brand: "",
  installment: "",
};

const checkoutSchema = yup.object().shape({
  card_no: yup.string().required("Digite o número do seu cartão"),
  name: yup.string().required("Coloque o nome que está escrito no cartão"),
  month_exp_date: yup
    .string()
    .required("Digite o mês de expiração")
    .matches(/^(0[1-9]|1[0-2])$/, "Mês de expiração inválido (01-12)"),
  year_exp_date: yup
    .string()
    .required("Digite o ano de expiração")
    .matches(/^\d{4}$/, "Ano de expiração inválido (4 dígitos)"),
  cvc: yup
    .string()
    .required("Digite o CVC do cartão")
    .min(3, "Digite o CVC do cartão"),
  cpf: yup.string().required("Digite seu CPF"),
  brand: yup.string(),
  installment: yup.number().required("Escolha suas parcelas"),
});

export default PaymentForm;
