import React from "react";
import Image from "next/image";

const BipeIcon = (props: any) => {
  return (
    <Image
      priority
      width={25}
      height={25}
      src={"/assets/bipe_test (1).png"}
      alt="botão área do aluno"
    />
  );
};

export default BipeIcon;
