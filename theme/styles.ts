import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: ({ colorMode }) => ({
    body: {
      background: colorMode === "light" ? "light" : "dark",
    },
  }),
};

export default styles;
