import { NextPage } from "next";
import { Grid } from "@mui/material";
import PaymentForm from "pages-sections/payment/PaymentForm";
import PaymentSummary from "pages-sections/payment/PaymentSummary";
import CheckoutNavLayout from "components/layouts/CheckoutNavLayout";
import Script from "next/script";

const Pagamento: NextPage = () => {
	return (
		<CheckoutNavLayout>
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
			<Grid container flexWrap="wrap-reverse" spacing={3}>
				<Grid item lg={8} md={8} xs={12}>
					<PaymentForm />
				</Grid>

				<Grid item lg={4} md={4} xs={12}>
					<PaymentSummary />
				</Grid>
			</Grid>
		</CheckoutNavLayout>
	);
};

export default Pagamento;
