import React from "react";
import { Image, Box } from "@pancakeswap/uikit";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Box width={size} height={size * 1.197} position="relative">
      <Image
        width={size}
        height={size * 1.197}
        src="https://zodiacswap.netlify.app/images/zodiac-swap-art.png"
        alt="zodiac-swap-art"
      />
    </Box>
  );
};

export default Spinner;
