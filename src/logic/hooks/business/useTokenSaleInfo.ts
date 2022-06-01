import { BigNumber } from "ethers";
import { useAllData, useContractGetterParse } from "../service";
import { parseBigNumberDivFloat, parseBigNumberToDate } from "./parsers";

export function useTokenSaleInfo() {
  const { contracts } = useAllData();

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
        minSaleCap: parseBigNumberDivFloat(18)(data.minSaleCap),
        maxSaleCap: parseBigNumberDivFloat(18)(data.maxSaleCap),
      },
  });

  const saleLimit = useContractGetterParse({
    contract: contracts?.karmaPrivateCrowdsale,
    functionName: "getSaleLimit",
    args: [],
    parser: (data) =>
      data && {
        minSaleLimit: parseBigNumberDivFloat(18)(data.minSaleLimit),
        maxSaleLimit: parseBigNumberDivFloat(18)(data.maxSaleLimit),
      },
  });

  // const { data: raiseTokenSymbol } = useContractFunction(
  //   contracts?.ERC20(raiseToken),
  //   "symbol"
  // );

  const saleNetwork = "BSC";
  const raiseToken = "BUSD";
  const minFromPrice = BigNumber.from(100);
  const maxFromPrice = BigNumber.from(10000);
  const softCapToken = BigNumber.from(2000000);
  const hardCapToken = BigNumber.from(4000000);

  return {
    openingTime,
    closingTime,
    saleNetwork,
    raiseToken,
    rate,
    minFromPrice,
    maxFromPrice,
    softCapToken,
    hardCapToken,
    raiseTokenAddress,
    karmaPrivateCrowdsaleAddress,
  };
}
