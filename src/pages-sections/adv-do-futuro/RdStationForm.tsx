import { styled } from "@mui/material";
import React, { memo } from "react";

const RdStationForm = () => {
  const IframeStyled = styled("iframe")({
    border: "none",
  });

  return (
    <IframeStyled
      height={171}
      width={400}
      src="https://campanhas.meucurso.com.br/RdStationForm.html"
      sx={{ maxWidth: { xs: "250px", md: "400px" } }}
    />
  );
};

export default memo(RdStationForm);
