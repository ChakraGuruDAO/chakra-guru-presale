import { BigNumber } from "ethers";
import {
  useAllData,
  useContractFunction,
  useContractFunctionChain,
} from "../service";

export function useTokenInfo() {
  const { contracts } = useAllData();

  const { data: decimals } = useContractFunction(
    contracts?.karmaToken,
    "decimals"
  );
  const { data: tokenName } = useContractFunction(
    contracts?.karmaToken,
    "name"
  );
  const { data: tokenSymbol } = useContractFunction(
    contracts?.karmaToken,
    "symbol"
  );
  const { data: totalSupply } = useContractFunctionChain(
    contracts?.karmaToken,
    "totalSupply",
    (data) => data?.div(BigNumber.from(10).pow(18)).toNumber() || 0
  );

  const projectSite = "https://chakra.guru/";

  const tokenAddress = contracts?.karmaToken.address;

  return {
    projectSite,
    tokenAddress,
    decimals,
    tokenName,
    tokenSymbol,
    totalSupply,
  };
}
