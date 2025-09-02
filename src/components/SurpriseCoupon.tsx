"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface SurpriseCouponProps {
  maxMin?: number;
  coupomName: string;
  handleCoupom: (coupomName: string) => void;
  setCoupomName: (coupomName: string) => void;
}

const SurpriseCoupon = ({
  coupomName,
  handleCoupom,
  setCoupomName,
  maxMin = 5,
}: SurpriseCouponProps) => {
  const min = maxMin * (60 * 1000);
  const date = new Date(new Date().getTime() + min);

  const { totalSeconds, isRunning, start, pause } = useTimer({
    expiryTimestamp: date,
    autoStart: false,
  });

  const totalTime = min / 1000;

  const percentage = (totalSeconds / totalTime) * 100;

  useEffect(() => {
    if (percentage >= 100) {
      const interval = setInterval(() => {
        start();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [percentage, start]);

  const handleStop = () => {
    pause();
  };

  return (
    <Card
      sx={{
        position: { xs: "static", md: "fixed" },
        bottom: 150,
        transition: "transform 2500ms",
        transform: isRunning ? "translateX(0)" : "translateX(-1000%)",
        border: "1px solid #ff9d00",
        overflow: "visible",
      }}
    >
      <Box sx={{ position: "relative", overflow: "visible" }}>
        <Typography
          position={"absolute"}
          fontSize={26}
          sx={{
            transform: "scaleX(-1) rotate(15deg)",
            right: -5,
            top: -15,
            zIndex: 10,
          }}
        >
          🥳
        </Typography>
        <Typography
          position={"absolute"}
          fontSize={26}
          sx={{
            transform: "rotate(15deg)",
            left: -5,
            bottom: { xs: -255, md: -170 },
            zIndex: 10,
          }}
        >
          🎉
        </Typography>
      </Box>
      <LinearProgress variant="determinate" value={percentage} sx={{borderRadius: '8px 0 '}} />
      <CardContent
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div>
          Cupom Relâmpago: <span style={{ fontWeight: 700 }}>{coupomName}</span>.<br />
          Você ganhou um <span style={{ fontWeight: 700 }}>DESCONTO ESPECIAL</span>{' '}
          para finalizar seu pedido! ⚡ Corre que o tempo tá voando!
          <br /> Você tem apenas 5 minutos para usar o cupom{" "}
          <span style={{ fontWeight: 700 }}>{coupomName}</span> e garantir desconto na
          sua compra.
        </div>
        <Box sx={{ display: "flex", gap: 3, justifyContent: "end" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff9d00",
              color: "white",
              transition: "filter 0.3s",
              ":hover": {
                filter: "brightness(70%)",
                backgroundColor: "#ff9d00",
              },
            }}
            type="button"
            onClick={() => handleStop()}
          >
            Não quero desconto
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#50A850",
              color: "white",
              transition: "filter 0.3s",
              ":hover": {
                filter: "brightness(70%)",
                backgroundColor: "#50A850",
              },
            }}
            type="button"
            onClick={() => {
              handleCoupom(coupomName);
              setCoupomName(coupomName);
            }}
          >
            Aplicar cupom e finalizar a compra!
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SurpriseCoupon;
