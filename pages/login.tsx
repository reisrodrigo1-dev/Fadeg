import { NextPage } from "next";
import SEO from "components/SEO";
import Login from "pages-sections/sessions/Login";
import { FlexRowCenter } from "components/flex-box";

import NewsletterLogin from "components/NewsletterLogin";

const LoginPage: NextPage = () => {
  return (
    <FlexRowCenter flexDirection="column" minHeight="100vh">
      <SEO
        title="Login"
        sitename="MeuCurso - Do seu jeito.  No seu tempo."
      />
      <Login />
      <NewsletterLogin />
    </FlexRowCenter>
  );
};

export default LoginPage;
