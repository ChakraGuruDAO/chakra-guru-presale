import { NextPage } from "next";
import { Dashboard } from "layouts/dashboard";
import { Flex, VStack } from "@chakra-ui/react";
import { Presale } from "blocks/presale";

const PresalePage: NextPage = () => {
  return (
    <Flex flex="1" gap="60px" direction="column">
      <Presale />
    </Flex>
  );
};

PresalePage.getLayout = ({ children }) => {
  return <Dashboard>{children}</Dashboard>;
};

export default PresalePage;
