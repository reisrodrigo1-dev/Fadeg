import * as yup from "yup";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Select,
  Switch,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Paragraph, Small } from "./Typography";
import { useFormik } from "formik";
import axios from "axios";
import { useSession } from "next-auth/react";
import BazaarTextField from "./BazaarTextField";
import { useSnackbar } from "notistack";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function AdressModal({ open, setOpen, fetchData }) {
  const [cepData, setCepData] = useState<any>([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [address, setAddress] = useState<any>();
  const [neighborhood, setNeighborhood] = useState<any>();
  const [selectedOption, setSelectedOption] = useState<any>();
  const [addressTypeValue, setAddressTypeValue] = useState<any>();
  const [cityValue, setCityValue] = useState<any>();
  const { data: session } = useSession();
  const { enqueueSnackbar } = useSnackbar();

  const addressType = [
    {
      id: 1,
      name: "Cobrança",
    },
    {
      id: 2,
      name: "Entrega",
    },
    {
      id: 3,
      name: "Outros",
    },
  ];

  const studentId = session.user.StudentAddress.map(
    (student) => student.StudentId
  )[0];

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = async (values: any) => {
    await axios
      .post(
        "https://apiecommerce.meucurso.com.br/StudentAddresses",
        {
          CustomerId: session.user.CustomerId,
          StudentId: studentId,
          AddressTypeId: addressTypeValue,
          FirstName: values.firstName,
          LastName: values.lastName,
          AddressLine1: address,
          CityId: selectedOption,
          PostalCode: values.postalCode,
          MainAddress: values.checked,
          Number: values.addressNumber,
          Complement: values.complement,
          District: neighborhood,
          Active: true,
        },
        { headers: { Authorization: `Bearer ${session.user.Token}` } }
      )
      .then(() => {
        setOpen(false);
        enqueueSnackbar("Endereço cadastrado com sucesso!", {
          variant: "success",
        });
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema,
  });

  const fetchCEP = useCallback(
    async (cepNumber) => {
      await axios
        .get(`https://viacep.com.br/ws/${cepNumber}/json`, {
          headers: { Authorization: `Bearer ${session?.user?.Token}` },
        })
        .then((response) => {
          setAddress(response.data.logradouro);
          setNeighborhood(response.data.bairro);
          setCepData(response.data);
          setCityValue(response.data.localidade);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [session?.user?.Token]
  );

  const fetchStates = useCallback(async () => {
    await axios
      .get(
        "https://apiecommerce.meucurso.com.br/StudentAddresses/ListStates",
        { headers: { Authorization: `Bearer ${session?.user?.Token}` } }
      )
      .then((response) => {
        setStates(response.data);
      })
      .catch((err) => console.log(err));
  }, [session?.user?.Token]);

  const fetchCities = useCallback(
    async (stateValue: number) => {
      await axios
        .get(
          `https://apiecommerce.meucurso.com.br/StudentAddresses/ListCities?stateId=${stateValue}`,
          { headers: { Authorization: `Bearer ${session?.user?.Token}` } }
        )
        .then((response) => {
          setCities(response.data);
        })
        .catch((err) => console.log(err));
    },
    [session?.user?.Token]
  );

  useEffect(() => {
    fetchStates();
    if (values.state !== null) {
      fetchCities(values.state);
    }

    if (values.postalCode.length === 8) {
      fetchCEP(values.postalCode);
    }
  }, [
    fetchStates,
    fetchCities,
    fetchCEP,
    values.state,
    values.postalCode,
  ]);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Box padding={5}>
          <DialogTitle>
            <Paragraph
              fontWeight={"bold"}
              fontSize={"15"}
              textAlign={"center"}
            >
              Cadastre seu endereço
            </Paragraph>
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} pt={3}>
                <Grid item md={12} justifyContent={"center"}>
                  <Small
                    display="block"
                    mb={1}
                    textAlign="left"
                    fontWeight="600"
                    color="grey.700"
                  >
                    Tipo de Endereç<output></output>
                  </Small>
                  <Select
                    MenuProps={MenuProps}
                    sx={{ height: 45 }}
                    fullWidth
                    labelId="search-select-label"
                    id="search-select"
                    value={addressTypeValue}
                    label="Test"
                    onChange={(e) => setAddressTypeValue(e.target.value)}
                  >
                    {addressType.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item md={6}>
                  <FormControlLabel
                    sx={{ mt: 3 }}
                    name="checked"
                    onChange={handleChange}
                    control={<Switch checked={values.checked || false} />}
                    label="Endereço Principal"
                  />
                </Grid>
                <Grid item md={6}>
                  <BazaarTextField
                    name="postalCode"
                    value={values.postalCode}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.postalCode && !!errors.postalCode}
                    helperText={
                      (touched.postalCode && errors.postalCode) as string
                    }
                    fullWidth
                    label="CEP"
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6}>
                  <BazaarTextField
                    select
                    name="state"
                    value={values.state}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.state && !!errors.state}
                    helperText={(touched.state && errors.state) as string}
                    fullWidth
                    label="Estado"
                    variant="outlined"
                  >
                    {states.map((state) => (
                      <MenuItem value={state.StateId} key={state.StateId}>
                        {state.Name}
                      </MenuItem>
                    ))}
                  </BazaarTextField>
                </Grid>
                <Grid item md={6}>
                  <Small
                    display="block"
                    mb={1}
                    textAlign="left"
                    fontWeight="600"
                    color="grey.700"
                  >
                    Cidade
                  </Small>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={MenuProps}
                    sx={{ height: 45 }}
                    fullWidth
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedOption}
                    label="Test"
                    onChange={(e) => setSelectedOption(e.target.value)}
                  >
                    {cities.map((item) => (
                      <MenuItem key={item.CityId} value={item.CityId}>
                        {item.Name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item md={6}>
                  <BazaarTextField
                    name="address"
                    value={address}
                    onBlur={handleBlur}
                    onChange={(e) => setAddress(e.target.value)}
                    fullWidth
                    label="Endereço"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <BazaarTextField
                    sx={{ mb: 3 }}
                    name="neighborhood"
                    value={neighborhood}
                    onBlur={handleBlur}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    fullWidth
                    label="Bairro"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <BazaarTextField
                    name="addressNumber"
                    value={values.addressNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    label="Número"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <BazaarTextField
                    name="complement"
                    value={values.complement}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.complement && !!errors.complement}
                    helperText={
                      (touched.complement && errors.complement) as string
                    }
                    fullWidth
                    label="Complemento"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <BazaarTextField
                    name="firstName"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={
                      (touched.firstName && errors.firstName) as string
                    }
                    fullWidth
                    label="Nome"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6}>
                  <BazaarTextField
                    name="lastName"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={
                      (touched.lastName && errors.lastName) as string
                    }
                    fullWidth
                    label="Sobrenome"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <DialogActions sx={{ mt: 3 }}>
                <Button color="success" variant="outlined" type="submit">
                  Salvar
                </Button>
                <Button
                  color="primary"
                  onClick={handleClose}
                  variant="outlined"
                >
                  Fechar
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
}

const initialValues = {
  checked: false,
  postalCode: "",
  state: "1",
  city: "",
  addressNumber: "",
  complement: "",
  firstName: "",
  lastName: "",
};
const formSchema = yup.object().shape({
  checked: yup.boolean(),
  postalCode: yup.number().required("Digite o seu CEP"),
  state: yup.string().required("Digite o seu estado"),
  city: yup.string(),
  addressNumber: yup.string().required("Digite o numero de seu endereço"),
  complement: yup.string(),
  firstName: yup.string().required("Digite o seu nome"),
  lastName: yup.string().required("Digite o seu sobrenome"),
});
