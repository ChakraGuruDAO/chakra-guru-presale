import { ColorModeScript, Container } from "@chakra-ui/react";
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
          <Container
            background="url(/bg.png) no-repeat 50% fixed"
            backgroundSize="cover"
            height="100vh"
            pt="40px"
            pb="40px"
          >
            <Main />
          </Container>
          <NextScript />
        </body>
      </Html>
    );
  }
}
