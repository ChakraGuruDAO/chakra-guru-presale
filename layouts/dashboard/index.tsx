import { Flex, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Footer, Header } from "../../components";

export const Dashboard: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Flex direction={"column"}>
      <Flex>
        <Header />
      </Flex>
      <Flex flex="1" width="100%">
        {children}
      </Flex>
      <Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};
