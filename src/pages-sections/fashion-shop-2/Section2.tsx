import { FC } from "react";
import { Box, Container, styled } from "@mui/material";
import appIcons from "components/icons";
import { H4, Span } from "components/Typography";
import { FlexRowCenter } from "components/flex-box";
import Service from "../../models/Service.model";
import Image from "next/image";

// custom styled components
const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "grid",
  padding: "2rem 0",
  boxShadow: theme.shadows[2],
  gridTemplateColumns: "repeat(4, 1fr)",
  backgroundColor: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr",
  },
}));

const ServiceItem = styled(FlexRowCenter)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.grey[400]}`,
  ":last-child": { borderRight: 0 },
  [theme.breakpoints.down("md")]: {
    ":nth-of-type(even)": { borderRight: 0 },
  },
  [theme.breakpoints.down("sm")]: {
    borderRight: 0,
    justifyContent: "flex-start",
  },
}));

// ===========================================================

// ===========================================================

const Section2 = () => {
  return (
    <Container sx={{ mt: "4rem" }}>
      <StyledFlexBox>
        <ServiceItem flexGrow={1} gap={2}>
          <Image
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/494949/event-accepted.png"
            alt="event-accepted"
          />
          <Box>
            <H4 lineHeight={1.3}>Eventos Gratuitos</H4>
          </Box>
        </ServiceItem>
        <ServiceItem flexGrow={1} gap={2}>
          <Image
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/494949/card-security.png"
            alt="card-security"
          />
          <Box>
            <H4 lineHeight={1.3}>Compra Segura</H4>
            {/* <Span color="grey.600">Pagamento Seguro</Span> */}
          </Box>
        </ServiceItem>
        <ServiceItem flexGrow={1} gap={2}>
          <Image
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/494949/book--v1.png"
            alt="book--v1"
          />
          <Box>
            <H4 lineHeight={1.3}>Plataforma de Estudos</H4>
            {/* <Span color="grey.600">test</Span> */}
          </Box>
        </ServiceItem>
        <ServiceItem flexGrow={1} gap={2}>
          <Image
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/494949/wise-mind.png"
            alt="wise-mind"
          />
          <Box>
            <H4 lineHeight={1.3}>Gestão das Emoções</H4>
          </Box>
        </ServiceItem>
      </StyledFlexBox>
    </Container>
  );
};

export default Section2;
