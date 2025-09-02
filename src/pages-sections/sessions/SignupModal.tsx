import { FC, useCallback, useRef, useState } from "react";
import {
	Button,
	Checkbox,
	Box,
	FormControlLabel,
	Stepper,
	Step,
	StepLabel,
	StepConnector,
	stepConnectorClasses,
	Chip,
} from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { H1, H6 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import BazaarTextField from "components/BazaarTextField";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { Wrapper } from "./Login";
import SocialButtons from "./SocialButtons";
import EyeToggleButton from "./EyeToggleButton";
import { signIn } from "next-auth/react";
import { useSnackbar } from "notistack";
import api from "../../utils/__api__/meu-curso";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import { ArrowLeft } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";

const SignupModal = ({
	handleModal,
}: {
	handleModal: {
		modalLogin(): void;
		modalSignUp(): void;
	};
}) => {
	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [isStepOneValid, setIsStepOneValid] = useState(false);

	const [loading, setLoading] = useState(false);
	const [activeStep, setActiveStep] = useState(0);
	const { enqueueSnackbar } = useSnackbar();

	const router = useRouter();

	const togglePasswordVisibility = useCallback(() => {
		setPasswordVisibility((visible) => !visible);
	}, []);

	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [isVerified, setIsVerified] = useState({
		ok: false,
		token: "",
	});

	const formatCPF = (value: number | any) => {
		const format = value
			.replace(/\D/g, "")
			.slice(0, 11)
			.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

		handleChange({
			target: { name: "cpf", value: format },
		});
	};
	const formatCel = (value: number | any) => {
		const format = value
			.replace(/\D/g, "")
			.slice(0, 11)
			.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

		handleChange({
			target: { name: "cel", value: format },
		});
	};

	const blacklist = ["script", ".js", "<", "select", "delete", ">", ")", '"'];

	const handleFormSubmit = async (values: any) => {
		const isScript = blacklist.some((str) => values.name.includes(str));

		if (!isVerified.ok) return;

		if (isScript)
			return window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0");

		setLoading(true);

		const signup = {
			FullName: values.name,
			DateOfBirth: values.date,
			Email: values.email,
			CPF: values.cpf.replace(/\D/g, ""),
			MainPhone: values.cel.replace(/\D/g, ""),
			Password: values.password,
			RePassword: values.re_password,
			Token: isVerified.token,
		};

		try {
			await api.getStudentNewAccount(signup);

			enqueueSnackbar("Cadastro realizado com sucesso!", {
				variant: "success",
			});
			const result = await signIn("credentials", {
				email: values.email,
				password: values.password,
				redirect: false,
				callbackUrl: "/",
			});

			if (result?.status === 200) {
				setLoading(true);
			}
		} catch (err) {
			setLoading(false);
			console.log(err);
		}
	};

	async function handleCaptchaSubmission(token: string | null) {
		try {
			if (token) {
				setIsVerified({ ok: true, token });
			}
		} catch (e) {
			setIsVerified({ ok: false, token: "" });
		}
	}

	const handleChangeCaptcha = (token: string | null) => {
		handleCaptchaSubmission(token);
	};

	function handleExpired() {
		setIsVerified({ ok: false, token: "" });
	}

	const {
		values,
		errors,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		validateForm,
	} = useFormik({
		initialValues,
		onSubmit: handleFormSubmit,
		validationSchema: formSchema,
	});

	const steps = [
		{ id: 1, label: "Dados pessoais" },
		{ id: 2, label: "Dados de acesso" },
	];

	const validateStepOne = async () => {
		const err = await validateForm(); // Valida todos os campos com base no esquema `yup`

		const stepOneErrors = {
			name: err.name,
			cpf: err.cpf,
			cel: err.cel,
			date: err.date,
		};

		// Verifica se algum dos campos do step 1 tem erros
		const isValid = Object.values(stepOneErrors).every((err) => !err);

		setIsStepOneValid(isValid);
		return isValid;
	};

	const handleNext = async () => {
		const isValid = await validateStepOne();

		if (isValid) {
			return setActiveStep((prev) => prev + 1);
		}

		return enqueueSnackbar(
			"Por favor, preencha todos os campos antes de prosseguir",
			{
				variant: "error",
			},
		);
	};

	const handleBack = () => {
		setActiveStep((prev) => prev - 1);
	};

	return (
		<Wrapper
			elevation={3}
			passwordVisibility={passwordVisibility}
			sx={{ minHeight: "625.533px", display: "flex", flexDirection: "column" }}
		>
			<Button
				onClick={() => {
					handleModal.modalLogin();
					handleModal.modalSignUp();
				}}
				sx={{
					textTransform: "none",
					paddingLeft: 0,
					marginBottom: "2rem",
					width: "max-content",
				}}
				variant="text"
			>
				<ArrowLeft />
				Voltar para o login
			</Button>
			<form onSubmit={handleSubmit} style={{ flex: 1 }}>
				<Stepper activeStep={activeStep}>
					{steps.map((step, index) => (
						<Step key={step.id}>
							<Chip
								label={step.label}
								sx={{
									backgroundColor: index <= activeStep && "#ff9d00",
									color: index <= activeStep && "white",
								}}
							/>
						</Step>
					))}
				</Stepper>
				<Box sx={{ marginY: "2rem" }}>
					{activeStep === 0 && (
						<>
							<BazaarTextField
								mb={1.5}
								fullWidth
								name="name"
								size="small"
								label="Nome Completo"
								variant="outlined"
								onBlur={handleBlur}
								value={values.name}
								onChange={handleChange}
								placeholder="João Paulo"
								error={!!errors.name}
								helperText={errors.name as string}
							/>
							<BazaarTextField
								mb={1.5}
								fullWidth
								name="cpf"
								size="small"
								variant="outlined"
								onBlur={handleBlur}
								value={values.cpf}
								onChange={(e) => formatCPF(e.target.value)}
								label="CPF"
								placeholder="12345678911"
								error={!!errors.cpf}
								helperText={errors.cpf as string}
							/>
							<BazaarTextField
								mb={1.5}
								fullWidth
								name="cel"
								size="small"
								variant="outlined"
								onBlur={handleBlur}
								value={values.cel}
								onChange={(e) => formatCel(e.target.value)}
								label="Telefone"
								placeholder="11901234567"
								error={!!errors.cel}
								helperText={errors.cel as string}
							/>
							<BazaarTextField
								mb={1.5}
								fullWidth
								name="date"
								size="small"
								type="date"
								variant="outlined"
								onBlur={handleBlur}
								value={values.date}
								onChange={handleChange}
								label="Data de nascimento"
								error={!!errors.date}
								helperText={errors.date as string}
							/>
						</>
					)}
					{activeStep === 1 && (
						<>
							<BazaarTextField
								mb={1.5}
								fullWidth
								name="email"
								size="small"
								type="email"
								variant="outlined"
								onBlur={handleBlur}
								value={values.email}
								onChange={handleChange}
								label="Email"
								placeholder="exemplo@email.com.br"
								error={!!touched.email && !!errors.email}
								helperText={(touched.email && errors.email) as string}
							/>
							<BazaarTextField
								mb={1.5}
								fullWidth
								size="small"
								name="password"
								label="Senha"
								variant="outlined"
								autoComplete="on"
								placeholder="*********"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.password}
								type={passwordVisibility ? "text" : "password"}
								error={!!touched.password && !!errors.password}
								helperText={(touched.password && errors.password) as string}
								InputProps={{
									endAdornment: (
										<EyeToggleButton
											show={passwordVisibility}
											click={togglePasswordVisibility}
										/>
									),
								}}
							/>

							<BazaarTextField
								fullWidth
								size="small"
								autoComplete="on"
								name="re_password"
								variant="outlined"
								label="Confirme sua senha"
								placeholder="*********"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.re_password}
								type={passwordVisibility ? "text" : "password"}
								error={!!touched.re_password && !!errors.re_password}
								helperText={
									(touched.re_password && errors.re_password) as string
								}
								InputProps={{
									endAdornment: (
										<EyeToggleButton
											show={passwordVisibility}
											click={togglePasswordVisibility}
										/>
									),
								}}
							/>
							<FormControlLabel
								name="agreement"
								className="agreement"
								onChange={handleChange}
								control={
									<Checkbox
										size="small"
										color="secondary"
										checked={values.agreement || false}
									/>
								}
								label={
									<FlexBox
										flexWrap="wrap"
										alignItems="center"
										justifyContent="flex-start"
									>
										Para registro, aceite os
										<a href="/" target="_blank" rel="noreferrer noopener">
											<H6
												ml={1}
												borderBottom="1px solid"
												borderColor="grey.900"
											>
												Termos & Condições
											</H6>
										</a>
									</FlexBox>
								}
							/>
							<ReCAPTCHA
								sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
								ref={recaptchaRef}
								onChange={handleChangeCaptcha}
								onExpired={handleExpired}
							/>

							<LoadingButton
								variant="contained"
								color="primary"
								type="submit"
								fullWidth
								sx={{ height: 44 }}
								loading={loading}
								disabled={!isVerified}
							>
								Finalizar cadastro
							</LoadingButton>
						</>
					)}
				</Box>
			</form>
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				position={"relative"}
				sx={{ width: "100%" }}
				height={37}
			>
				{activeStep === 1 && (
					<Button onClick={handleBack} sx={{ position: "absolute", left: 0 }}>
						Voltar
					</Button>
				)}
				{activeStep === 0 && (
					<Button onClick={handleNext} sx={{ position: "absolute", right: 0 }}>
						Próximo
					</Button>
				)}
			</Box>
		</Wrapper>
	);
};

const initialValues = {
	name: "",
	email: "",
	password: "",
	re_password: "",
	cpf: "",
	cel: "",
	date: "",
	agreement: false,
};

const formSchema = yup.object().shape({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().email("invalid email").required("Email obrigatório"),
	cpf: yup
		.string()
		.min(11, "CPF precisa ter no mínimo 11 digitos")
		.required("CPF obrigatório"),
	cel: yup
		.string()
		.min(11, "Telefone precisa ter no mínimo 11 dígitos")
		.required("Telefone obrigatório"),
	date: yup.string().required("Data de nascimento obrigatória"),
	password: yup
		.string()
		.required("Senha obrigatória")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Sua senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial",
		),
	re_password: yup
		.string()
		.oneOf([yup.ref("password"), null], "As senhas não são iguais")
		.required("Por favor, digite novamente sua senha"),
	agreement: yup
		.bool()
		.test(
			"agreement",
			"Você precisa aceitar os Termos a& Condições!",
			(value) => value === true,
		)
		.required("Você precisa aceitar os Termos a& Condições!"),
});

export default SignupModal;
