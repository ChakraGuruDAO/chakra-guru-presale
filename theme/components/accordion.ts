import { ComponentStyleConfig } from "@chakra-ui/react";

const Accordion: ComponentStyleConfig = {
  baseStyle: {
    background: "yellow",
    button: {
      border: "1px solid yellow",
    },
  },
  variants: {
    block: {
      background: "yellow",
    },
  },
};

export default Accordion;
