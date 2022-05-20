import { ComponentStyleConfig } from "@chakra-ui/react";

const Tabs: ComponentStyleConfig = {
  baseStyle: ({ colorMode, theme }) => ({
    tab: {
      border: `1px solid black`,
      borderRadius: "10px",
    },
    tabpanel: {
      px: 0,
      py: 4,
    },
  }),
};

export default Tabs;
