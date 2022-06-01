import type { AppProps } from "next/app";
import { Button, ChakraProvider } from "@chakra-ui/react";

import { NextPage } from "next";
import { useMemo } from "react";
import theme from "theme";
import { DAppProvider } from "@usedapp/core";
import { dappConfig } from "logic";

interface AppCustomProps extends AppProps {
  Component: NextPage;
}

function App({ Component, pageProps }: AppCustomProps) {
  const node = useMemo(() => {
    const realNode = <Component {...pageProps} />;
    if (typeof Component.getLayout === "function")
      return Component.getLayout({ ...pageProps, children: realNode });
    return realNode;
  }, [Component, pageProps]);

  return (
    <>
      <DAppProvider config={dappConfig}>
        <ChakraProvider theme={theme}>{node}</ChakraProvider>
      </DAppProvider>
    </>
  );
}

export default App;
