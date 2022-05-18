import { VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Footer, Header } from "../../components";

export const Dashboard: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <VStack>
      <Header />
      {children}
      <Footer />
    </VStack>
  );
};
