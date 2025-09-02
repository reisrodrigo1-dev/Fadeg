import { styled } from "@mui/material";

const ReclameAqui = () => {
  const IframeStyled = styled("iframe")({
    border: "none",
    height: 50,
    width: 150
  });

  return (
    <IframeStyled
      src="https://campanhas.meucurso.com.br/reclame-aqui"
    />
  );
  
};


export { ReclameAqui};