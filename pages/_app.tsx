import type { AppProps } from "next/app";
import { Button, ChakraProvider } from "@chakra-ui/react";

import { NextPage } from "next";
import { useEffect, useMemo } from "react";
import theme from "theme";
// import Web3Provider, { useWeb3Context } from "web3-react";
import { Web3ReactProvider } from "@web3-react/core";
import { connectors } from "logic";
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

  // const context = useWeb3Context();

  // useEffect(() => {
  //   context.setFirstValidConnector(["MetaMask", "Infura"]);
  // }, [context]);

  return (
    <>
      {/* {!context.active && !context.error
        ? "Loading"
        : context.error
        ? JSON.stringify(context.error)
        : "Success"} */}

      <Web3ReactProvider
        getLibrary={(provider) => new ethers.providers.Web3Provider(provider)}
      >
        <ChakraProvider theme={theme}>{node}</ChakraProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
