import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { StepsStyleConfig } from "chakra-ui-steps";

import components from "./components";
import styles from "./styles";
import colors from "./colors";
import config from "./config";

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
});

export default theme;
