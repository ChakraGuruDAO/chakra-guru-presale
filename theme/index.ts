import { extendTheme, theme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

export default extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  colors: {
    brand: {
      100: "#5A86F0",
    },
    dark: {
      100: "#06071F",
    },
    pink: {
      100: "#D53F8C",
    },
  },
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
