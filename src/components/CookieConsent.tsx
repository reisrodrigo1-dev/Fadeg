import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Box, useTheme, styled } from "@mui/material";

interface CookieConsentProps {}
const Cookie = styled(Box)({
  zIndex: 9,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  padding: 1,
  backgroundColor: " rgba(17, 25, 40, 0.75)",
  bottom: 0,
  backdropFilter: "blur(5px) saturate(180%)",
  "& button": {
    backgroundColor: "#920D2A",
    color: "white",
    cursor: "pointer",
    padding: "10px",
    height: "auto",
    borderRadius: "3px",
    marginLeft: "15px",
    border: "none",
    transition: "0.3s",
    // ":hover": {
    //   color: "black",
    //   backgroundColor: "red",
    // },
  },
  "@media (max-width: 600px)": {
    bottom: 50,
  },
});

export function CookieConsent({}: CookieConsentProps) {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }
  return (
    <>
      <Cookie>
        <p style={{ color: "white" }}>
          Utilizamos os cookies para melhorar a sua experiência. Para cumprir
          com a nova diretiva de privacidade, nós precisamos pedir seu
          consentimento para definir os cookies.
        </p>
        <button onClick={() => acceptCookie()}>Aceitar cookies</button>
      </Cookie>
    </>
  );
}
