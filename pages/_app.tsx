import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { GoogleTagManager } from "@next/third-parties/google";
import RTL from "components/RTL";
import SnackbarProvider from "components/SnackbarProvider";
import { AppProvider } from "contexts/AppContext";
import SettingsProvider from "contexts/SettingContext";
import createEmotionCache from "createEmotionCache";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import Script from "next/script";
import nProgress from "nprogress";
/* eslint-disable @next/next/next-script-for-ga */
import { ReactElement, ReactNode, useEffect } from "react";
import MuiTheme from "theme/MuiTheme";
import OpenGraphTags from "utils/OpenGraphTags";

import "nprogress/nprogress.css";
import "simplebar-react/dist/simplebar.min.css";
import "../src/__server__";
import ExpiredTokenLayout from "components/layouts/ExpiredTokenLayout";

//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());
// small change
nProgress.configure({ showSpinner: false });

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
	session?: any;
	emotionCache?: EmotionCache;
	Component: NextPage & { getLayout?: (page: ReactElement) => ReactNode };
}

const App = (props: MyAppProps) => {
	const {
		session,
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;

	const getLayout = Component.getLayout ?? ((page) => page);
	const router = useRouter();

	const canonicalURL = (
		`https://www.meucurso.com.br` + (router.asPath === "/" ? "" : router.asPath)
	).split("?")[0];

	return (
		<CacheProvider value={emotionCache}>
			<AnimatePresence
				mode="wait"
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Head>
					<meta charSet="utf-8" />
					<meta name="description" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<OpenGraphTags />
					<title>MeuCurso - Do seu jeito. No seu tempo.</title>
					<link rel="canonical" href={canonicalURL} />
				</Head>

				<SessionProvider session={session}>
					<ExpiredTokenLayout>
						<SettingsProvider>
							<AppProvider>
								<MuiTheme>
									<SnackbarProvider>
										<RTL>{getLayout(<Component {...pageProps} />)}</RTL>
									</SnackbarProvider>
								</MuiTheme>
							</AppProvider>
						</SettingsProvider>
					</ExpiredTokenLayout>
				</SessionProvider>
			</AnimatePresence>
			<GoogleTagManager gtmId="GTM-KC3Q8PT" />
			{/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KC3Q8PT')
      `}
      </Script> */}
			<Script id="dados-estruturados" type="application/ld+json">
				{` {"@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "MEU CURSO INTELIGÊNCIA E TECNOLOGIA EDUCACIONAL LTDA",
              "alternateName": "MeuCurso",
              "url": "https://meucurso.com.br/",
              "logo": "/logofdg.png",
              "sameAs": [
                "https://www.facebook.com/meucursooficial",
                "https://www.instagram.com/fadegoficial",
                "https://twitter.com/meucursooficial",
                "https://www.youtube.com/@MeuCursooficial"
  ]}`}
			</Script>
			<Script id="microsoft clarity" strategy="afterInteractive">
				{`
           (function(c,l,a,r,i,t,y){         c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};         t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;         y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);     })(window, document, "clarity", "script", "mqfy74q5k8");
      `}
			</Script>
		</CacheProvider>
	);
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default appWithTranslation(App);
