import { Box, LinearProgress, Typography } from "@mui/material";
import { useTimer } from "react-timer-hook";

interface TimerProps {
  maxMin: number;
  cupomText: string;
  coupoms: any;
  setCoupoms: (coupomValue: string) => void;
  setCoupomValue: (coupomValue: string) => void;
  setCoupomText: (any: any) => void;
}

const Timer = ({
  maxMin,
  coupoms,
  cupomText,
  setCoupoms,
  setCoupomText,
  setCoupomValue,
}: TimerProps) => {
  const expireAt = new Date(new Date().getTime() + maxMin * 60 * 1000);

  const { minutes, seconds, totalSeconds } = useTimer({
    expiryTimestamp: expireAt,
    autoStart: true,
    onExpire: () => {
      setCoupomValue("");
      setCoupoms({ ...coupoms, DiscountAmount: 0, CouponName: "" });
      setCoupomText("");
    },
  });

  const progress = (totalSeconds / (maxMin * 60)) * 100;
  
  return (
    <Box>
      <LinearProgress variant="determinate" value={progress} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
      >
        <Typography>{cupomText}</Typography>
        {cupomText === "Cupom aplicado!" && (
          <Typography>
            Seu cupom expira em: {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export { Timer };
