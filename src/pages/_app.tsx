import type { AppProps } from "next/app";
import { Box, ChakraProvider, Spinner, useToast, Text } from "@chakra-ui/react";

import { NextPage } from "next";
import { PropsWithChildren, useEffect, useLayoutEffect, useMemo } from "react";
import theme from "src/theme";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import {
  connectors,
  useAllData,
  useTokenInfo,
  useTokenSaleInfo,
  useVestingInfo,
} from "src/logic";

interface AppCustomProps extends AppProps {
  Component: NextPage;
}

function getLibrary(provider: any): Web3Provider {
  return new ethers.providers.Web3Provider(provider);
}

const DefaultProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { activate } = useAllData();
  const { totalSupply, decimals } = useTokenInfo();
  const { raiseTokenAddress, saleBalance, rate } = useTokenSaleInfo();
  const { vestingInfo, vestingMap } = useVestingInfo();
  const toast = useToast();

  useEffect(() => {
    activate(connectors.injected, (err) => {
      activate(connectors.network, (err) => {
        toast({
          title: "Error",
          status: "error",
          description: err.message,
          position: "bottom-right",
        });
      });
    });
  }, [toast, activate]);

  if (
    totalSupply &&
    raiseTokenAddress &&
    saleBalance &&
    decimals &&
    rate &&
    vestingInfo.vestingPortionsUnlockTime &&
    vestingInfo.vestingPercentPerPortion &&
    vestingMap.isPortionWithdraw
  ) {
    return <>{children}</>;
  }
  return <></>;
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
