import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { NextPage } from "next";
import { useMemo } from "react";
import theme from "theme";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

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
      <Web3ReactProvider
        getLibrary={(provider) => new ethers.providers.Web3Provider(provider)}
      >
        <ChakraProvider theme={theme}>{node}</ChakraProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
