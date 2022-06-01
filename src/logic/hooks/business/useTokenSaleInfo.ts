import { BigNumber } from "ethers";
import { useTokenInfo } from "src/logic";
import { useAllData, useContractGetterParse } from "../service";
import { parseBigNumberDivFloat, parseBigNumberToDate } from "./parsers";

export function useTokenSaleInfo() {
  const { contracts, account } = useAllData();
  const { decimals } = useTokenInfo();

  const karmaPrivateCrowdsaleAddress = contracts?.karmaPrivateCrowdsale.address;

  const openingTime = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getOpeningTime",
    args: [],
    parser: parseBigNumberToDate,
    defaultValue: new Date(),
  });

  const closingTime = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getClosingTime",
    args: [],
    parser: parseBigNumberToDate,
    defaultValue: new Date(),
  });

  const raiseTokenAddress = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getRaiseToken",
    args: [],
  });

  const rate = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getRate",
    args: [],
    defaultValue: BigNumber.from(1),
  });

  const saleCap = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getSaleCap",
    args: [],
    parser: (data) =>
      data && {
        minSaleCap: parseBigNumberDivFloat(decimals)(data.minSaleCap),
        maxSaleCap: parseBigNumberDivFloat(decimals)(data.maxSaleCap),
      },
    defaultValue: {
      minSaleCap: BigNumber.from(1000),
      maxSaleCap: BigNumber.from(2000),
    },
  });

  const saleLimit = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getSaleLimit",
    args: [],
    parser: (data) =>
      data && {
        minSaleLimit: parseBigNumberDivFloat(decimals)(data.minSaleLimit),
        maxSaleLimit: parseBigNumberDivFloat(decimals)(data.maxSaleLimit),
      },
    defaultValue: {
      minSaleLimit: BigNumber.from(1000),
      maxSaleLimit: BigNumber.from(2000),
    },
  });

  const raiseTokenSymbol = useContractGetterParse({
    contract: raiseTokenAddress && contracts?.ERC20(raiseTokenAddress),
    functionName: "symbol",
    args: [],
    defaultValue: "",
  });

  const contribution = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getContribution",
    args: [account],
    parser: parseBigNumberDivFloat(decimals),
    defaultValue: BigNumber.from(0),
  });

  const saleBalance = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getSaleTokenBalance",
    args: [],
    parser: parseBigNumberDivFloat(decimals),
    defaultValue: BigNumber.from(0),
  });

  const saleNetwork = "BSC";

  return {
    openingTime,
    closingTime,
    saleNetwork,
    raiseTokenSymbol,
    rate,
    saleCap,
    saleLimit,
    raiseTokenAddress,
    karmaPrivateCrowdsaleAddress,
    contribution,
    saleBalance,
  };
}
