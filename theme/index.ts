import { extendTheme } from "@chakra-ui/react";

import * as components from "./components";

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
  components,
});
