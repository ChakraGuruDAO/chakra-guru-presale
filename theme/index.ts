import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

import components from "./components";
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
  components,
});

export default theme;
