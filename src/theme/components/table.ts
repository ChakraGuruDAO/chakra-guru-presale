import { ComponentStyleConfig } from "@chakra-ui/react";
import {
  mode,
  transparentize,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";

const variantKeyValue: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  const lightThBackground = `${c}.100`;
  const darkThBackground = transparentize(`${c}.200`, 0.12)(theme);
  const thBackground = mode(lightThBackground, darkThBackground)(props);

  const lightTrBorder = transparentize(`${c}.200`, 0.88)(theme);
  const darkTrBorder = transparentize(`${c}.200`, 0.12)(theme);
  const trBorder = mode(lightTrBorder, darkTrBorder)(props);

  return {
    th: {
      paddingStart: 0,
      paddingEnd: 0,
      "padding-inline-start": "0px",
      "padding-inline-end": "0px",
      pl: 1,
      pr: 1,
      ":first-child": {
        textAlign: "left",
      },
      ":last-child": {
        textAlign: "right",
      },

      background: thBackground,
    },
    tr: {
      borderBottom: `1px solid ${trBorder}`,

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
  };
};

const variants = {
  "key-value": variantKeyValue,
};

const Table: ComponentStyleConfig = {
  variants,
};

export default Table;
