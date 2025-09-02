import { useCallback, useState, FC } from "react";
import { Button, Card, CardProps, Box, styled } from "@mui/material";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { H1, H6 } from "components/Typography";
import BazaarImage from "components/BazaarImage";
import BazaarTextField from "components/BazaarTextField";
import EyeToggleButton from "./EyeToggleButton";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import { useRouter } from "next/router";
import LoadingButton from "@mui/lab/LoadingButton";
import { signIn } from "next-auth/react";
import { useSnackbar } from "notistack";
import { jwtDecode } from "jwt-decode";

const fbStyle = { background: "#3B5998", color: "white" };
const googleStyle = { background: "#4285F4", color: "white" };

type WrapperProps = { passwordVisibility?: boolean };

export const Wrapper = styled<FC<WrapperProps & CardProps>>(
  ({ children, passwordVisibility, ...rest }) => (
    <Card {...rest}>{children}</Card>
  )
)<CardProps>(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: { width: "100%" },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": { marginBottom: 10, ...fbStyle, "&:hover": fbStyle },
  ".googleButton": { ...googleStyle, "&:hover": googleStyle },
  ".agreement": { marginTop: 12, marginBottom: 24 },
}));

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

  const handleFormSubmit = async (values: any) => {
    setLoading(true);
    const result = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (result?.status === 200) {
      setLoading(false);
      return enqueueSnackbar("Login realizado com sucesso!", {
        variant: "success",
      });
    }
    if (result?.status === 401) {
      setLoading(false);
      return enqueueSnackbar("Usuário ou senha inválidos!", {
        variant: "error",
      });
    }
    setLoading(false);
    return alert(result?.error);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <BazaarImage
          src="/assets/images/bipe-icon.png"
          sx={{ m: "auto", width: "50px" }}
        />

        <H1 textAlign="center" mt={1} mb={4} fontSize={16}>
          Bem vindo a Fadeg
        </H1>

        <BazaarTextField
          data-testid="email-input"
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Digite seu e-mail"
          placeholder="exemplo@email.com"
          error={!!touched.email && !!errors.email}
          helperText={(touched.email && errors.email) as string}
        />

        <BazaarTextField
          mb={2}
          fullWidth
          size="small"
          name="password"
          data-testid="pwd-input"
          label="Digite sua senha"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
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
        <LoadingButton
          data-testid="enter-button"
          loading={loading}
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{ height: 44 }}
        >
          Entrar
        </LoadingButton>
      </form>

      {/* <SocialButtons /> */}

      <FlexRowCenter mt="1.25rem">
        <Box>Não possui uma conta?</Box>
        <Link href="/cadastro">
          <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
            Cria uma agora!
          </H6>
        </Link>
      </FlexRowCenter>

      <FlexBox
        justifyContent="center"
        bgcolor="grey.200"
        borderRadius="4px"
        py={2.5}
        mt="1.25rem"
      >
        Esqueceu sua senha?
        <Link
          target="_blank"
          href="http://aluno.fadeg.com.br/Account/NewPassword/"
        >
          <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
            Faça o reset de senha
          </H6>
        </Link>
      </FlexBox>
    </Wrapper>
  );
};

const initialValues = { email: "", password: "" };

const formSchema = yup.object().shape({
  password: yup.string().required("Senha obrigatória!"),
  email: yup.string().email("E-mail inválido").required("Email obrigatório!"),
});

export default Login;
