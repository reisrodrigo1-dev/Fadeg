import { FC, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stepper from "components/Stepper";
import ShopLayout1 from "./ShopLayout1";
import { ContinueShoppingLink } from "../../../pages/carrinho";

/**
 *  Used:
 *  1. cart page
 *  2. checkout page
 *  3. payment page
 */

// ======================================================
type CheckoutNavLayoutProps = { children: ReactNode };
// ======================================================

const CheckoutNavLayout: FC<CheckoutNavLayoutProps> = ({ children }) => {
  const [selectedStep, setSelectedStep] = useState(0);

  const router = useRouter();
  const { pathname } = router;

  const handleStepChange = (step: number) => {
    switch (step) {
      case 0:
        router.push("/carrinho");
        break;
      case 1:
        router.push("/pagamento");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/carrinho":
        setSelectedStep(1);
        break;
      case "/pagamento":
        setSelectedStep(2);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <ShopLayout1>
      <Container sx={{ my: 4 }}>
        <Box mb={3} display={{ sm: "block", xs: "none" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} display={{ sm: "flex" }} alignItems={'center'} justifyContent={'space-between'}>
              <ContinueShoppingLink
                href={'/'}
              >
                <AddShoppingCartIcon fontSize={'small'} />
                Continuar comprando
              </ContinueShoppingLink>
              <Stepper
                stepperList={stepperList}
                selectedStep={selectedStep}
                onChange={handleStepChange}
              />
            </Grid>
          </Grid>
        </Box>

        {children}
      </Container>
    </ShopLayout1>
  );
};

const stepperList = [
  { title: "Carrinho", disabled: false },
  { title: "Pagamento", disabled: false },
];

export default CheckoutNavLayout;
