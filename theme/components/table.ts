import { ComponentStyleConfig } from "@chakra-ui/react";

const Table: ComponentStyleConfig = {
  baseStyle: ({ colorMode, theme }) => ({
    td: {},
  }),
  variants: {
    "key-value": ({ colorMode }) => ({
      th: {
        paddingStart: 0,
        paddingEnd: 0,
        "padding-inline-start": "0px",
        "padding-inline-end": "0px",
        pl: 1,
        pr: 1,
        background:
          colorMode === "dark"
            ? "var(--chakra-colors-whiteAlpha-200)"
            : "var(--chakra-colors-gray-100)",
        ":first-child": {
          textAlign: "left",
        },
        ":last-child": {
          textAlign: "right",
        },
      },
      tr: {
        borderBottom:
          colorMode === "dark"
            ? "1px solid var(--chakra-colors-brand)"
            : "1px solid var(--chakra-colors-brand2)",

        ":last-child": {
          border: 0,
        },
      },
      td: {
        paddingStart: 0,
        paddingEnd: 0,
        "padding-inline-start": "0px",
        "padding-inline-end": "0px",
        pl: 0,
        pr: 0,

        ":first-child": {
          textAlign: "left",
        },
        ":last-child": {
          textAlign: "right",
        },
      },
    }),
  },
};

export default Table;
