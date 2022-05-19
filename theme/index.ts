import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

import styles from "./styles";
import colors from "./colors";
import config from "./config";

const theme = extendTheme({
  config,
  fonts: {
    // body: "Inter, sans-serif",
    // heading: "Inter, sans-serif",
  },
  styles,
  colors,
  components: {
    Steps: StepsStyleConfig,
    Button: {
      // baseStyle: {
      //   borderRadius: "6px",
      //   // bg: "pink.100",
      //   p: "10px 24px",
      //   fontSize: "14px",
      //   color: "white",
      //   fontWeight: 500,
      // },
      // variants: {
      //   white: {
      //     color: "pink.100",
      //     bg: "white",
      //   },
      //   "pre-sale": {
      //     color: "white",
      //     bg: "brand.100",
      //     width: "100%",
      //   },
      // },
    },
  },
});

export default theme;
