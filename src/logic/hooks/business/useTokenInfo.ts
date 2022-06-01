import { BigNumber } from "ethers";
import {
  useAllData,
  useContractFunction,
  useContractGetterParse,
} from "../service";
import {
  parseBigNumberDivFloat,
  parseBigNumberToNumber,
  parseNumberToBigNumber,
} from "./parsers";

export function useTokenInfo() {
  const { contracts } = useAllData();

  const decimals = useContractGetterParse({
    contract: contracts?.karmaToken,
    functionName: "decimals",
    args: [],
    parser: parseNumberToBigNumber,
    defaultValue: BigNumber.from(18),
  });

  const tokenName = useContractGetterParse({
    contract: contracts?.karmaToken,
    functionName: "name",
    args: [],
    defaultValue: "",
  });

  const tokenSymbol = useContractGetterParse({
    contract: contracts?.karmaToken,
    functionName: "symbol",
    args: [],
    defaultValue: "",
  });

  const totalSupply = useContractGetterParse({
    contract: contracts?.karmaToken,
    functionName: "totalSupply",
    args: [],
    parser: parseBigNumberDivFloat(decimals),
    defaultValue: BigNumber.from(10000),
  });

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
