import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "6px",
    bg: "pink.100",
    p: "10px 24px",
    fontSize: "14px",
    color: "white",
    fontWeight: 500,
  },
  variants: {
    white: {
      color: "pink.100",
      bg: "white",
    },
    "pre-sale": {
      color: "white",
      bg: "brand.100",
      width: "100%",
    },
  },
};
