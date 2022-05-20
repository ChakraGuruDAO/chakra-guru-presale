import { ComponentStyleConfig } from "@chakra-ui/react";

const Accordion: ComponentStyleConfig = {
  variants: {
    block: {
      background: "yellow",
      button: {
        border: "1px solid yellow",
        pl: 3,
        pr: 3,
      },
    },
  },
};

export default Accordion;
