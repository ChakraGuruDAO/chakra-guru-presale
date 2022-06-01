import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { NextPage } from "next";
import { PropsWithChildren, PropsWithRef, useEffect, useMemo } from "react";
import theme from "src/theme";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { connectors } from "src/logic";

interface AppCustomProps extends AppProps {
  Component: NextPage;
}

function getLibrary(provider: any): Web3Provider {
  console.log(provider);
  return new ethers.providers.Web3Provider(provider);
}

const DefaultProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { activate, library } = useWeb3React<Web3Provider>();
  useEffect(() => {
    activate(connectors.network);
  }, [activate]);

  return <>{children}</>;
};

function App({ Component, pageProps }: AppCustomProps) {
  const node = useMemo(() => {
    const realNode = <Component {...pageProps} />;
    if (typeof Component.getLayout === "function")
      return Component.getLayout({ ...pageProps, children: realNode });
    return realNode;
  }, [Component, pageProps]);

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <DefaultProvider>
          <ChakraProvider theme={theme}>{node}</ChakraProvider>
        </DefaultProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
