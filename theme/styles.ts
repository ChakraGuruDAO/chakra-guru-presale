import { Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: ({ colorMode }) => ({
    body: {
      background: colorMode === "light" ? "brandDark.50" : "brand.900",
    },
  }),
};

export default styles;
