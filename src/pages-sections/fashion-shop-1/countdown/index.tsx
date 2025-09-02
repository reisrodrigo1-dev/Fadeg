import { FlexBox } from "components/flex-box";
import React, { FC, useCallback, useEffect, useState } from "react";
import CountBox from "./CountBox";

import { Paragraph } from "components/Typography";
import { Timer } from "@mui/icons-material";
import { Box } from "@mui/material";

// component props interface
interface CountDownProps {
  expireDate: number;
}

const initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Countdown: FC<CountDownProps> = ({ expireDate }) => {
  const [timeLeft, setTimeLeft] = useState(initialState);

  const calculateTimeLeft = useCallback(() => {
    const distance = expireDate - new Date().getTime();
    // if date expire
    if (distance < 0) return initialState;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [expireDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <>
      {!timeLeft.days &&
        !timeLeft.hours &&
        !timeLeft.minutes &&
        !timeLeft.seconds && (
          <FlexBox
            sx={{
              display: "flex",
              width: { xs: "100%", md: "560px" },
              justifyContent: "space-around",
              alignItems: "center",
              height: "50px",
              mx: "auto",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Timer sx={{ color: "white", marginRight: "10px" }} />

              <Paragraph color={"white"}>A oferta expirou!</Paragraph>
            </Box>
          </FlexBox>
        )}
      {timeLeft.days &&
        timeLeft.hours &&
        timeLeft.minutes &&
        timeLeft.seconds && (
          <FlexBox
            sx={{
              display: "flex",
              width: { xs: "100%", md: "560px" },
              justifyContent: "space-around",
              alignItems: "center",
              height: "auto",
              mx: "auto",
              p: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Timer sx={{ color: "white", marginRight: "10px" }} />

              <Paragraph color={"white"} sx={{ alignSelf: "center" }}>
                Oferta acaba em
              </Paragraph>
            </Box>

            <CountBox digit={timeLeft.days} title="dias" />
            <CountBox digit={timeLeft.hours} title="hrs" />
            <CountBox digit={timeLeft.minutes} title="min" />
            <CountBox digit={timeLeft.seconds} title="sec" />
          </FlexBox>
        )}
    </>
  );
};

export default Countdown;
