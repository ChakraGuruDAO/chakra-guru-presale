import { NextPage } from "next";
import { Dashboard } from "src/layouts/dashboard";
import { Flex } from "@chakra-ui/react";
import { Info } from "src/blocks/info";

const Home: NextPage = () => {
  return (
    <Flex flex="1" gap="60px" direction="column">
      <Info />
      <Info />
    </Flex>
  );
};

Home.getLayout = ({ children }) => {
  return <Dashboard>{children}</Dashboard>;
};

export default Home;
