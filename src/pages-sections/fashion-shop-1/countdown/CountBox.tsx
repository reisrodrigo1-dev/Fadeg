import { H2, H3, Span } from "components/Typography";
import React, { FC } from "react";

// component props interface
interface CountBoxProps {
  digit: number;
  title: string;
}

const CountBox: FC<CountBoxProps> = ({ digit, title }) => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        marginLeft: "-50px",
      }}
    >
      <H2 color={"white"} fontSize={20}>
        {digit}{" "}
      </H2>
      <H3 color={"white"} fontSize="11px" fontWeight="600">
        {title}
      </H3>
    </div>
  );
};

export default CountBox;

CountBox.defaultProps = {
  digit: 365,
  title: "DAYS",
};
