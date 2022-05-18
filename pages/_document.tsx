import { ColorModeScript, Container, Flex } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import theme from "../theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Flex
            background="url(/bg.png) no-repeat 50% fixed"
            backgroundSize="cover"
            height="100vh"
            flexDirection={"column"}
            justifyContent={"flex-start"}
            overflowY="hidden"
          >
            <Main />
          </Flex>

          <NextScript />
        </body>
      </Html>
    );
  }
}
