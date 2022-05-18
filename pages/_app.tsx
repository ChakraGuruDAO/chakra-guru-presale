import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { useMemo } from "react";

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
      <ChakraProvider>{node}</ChakraProvider>
    </>
  );
}

export default App;
