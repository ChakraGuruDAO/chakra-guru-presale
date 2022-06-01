import { NextPage } from "next";
import { Dashboard } from "src/layouts/dashboard";
import { Flex } from "@chakra-ui/react";
import { Info } from "src/blocks/info";
import { useAllData, useContracts } from "src/logic";
import { useData } from "src/logic/hooks/useData";
import useSWR from "swr";
import { formatEther } from "@ethersproject/units";
import { useContractFunction } from "src/logic/hooks/useData";

const Home: NextPage = () => {
  const { contracts, account, provider } = useAllData();
  // const { data } = useContractFunction(contracts?.karmaToken, "symbol");
  const { data } = useContractFunction(
    contracts?.karmaPrivateCrowdsale,
    "getRate"
  );

  console.log("first", data?.toNumber());
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
