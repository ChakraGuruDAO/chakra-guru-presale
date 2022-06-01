import { Duration } from "src/logic/time";
import {
  useAllData,
  useContractFunction,
  useContractFunctionChain,
} from "../service";

export function useTokenSaleInfo() {
  const { contracts } = useAllData();

  const { data: openingTime } = useContractFunctionChain(
    contracts?.karmaPrivateCrowdsale,
    "getOpeningTime",
    (data) => (data ? Duration.convertTimestampToDate(data) : new Date())
  );
  const { data: closingTime } = useContractFunctionChain(
    contracts?.karmaPrivateCrowdsale,
    "getClosingTime",
    (data) => (data ? Duration.convertTimestampToDate(data) : new Date())
  );
  // const { data: raiseToken } = useContractFunction(
  //   contracts?.karmaPrivateCrowdsale,
  //   "getRaiseToken"
  // );
  // const { data: rate } = useContractFunction(
  //   contracts?.karmaPrivateCrowdsale,
  //   "getRate"
  // );
  // const { data: saleCap } = useContractFunction(
  //   contracts?.karmaPrivateCrowdsale,
  //   "getSaleCap"
  // );
  // const { data: saleLimit } = useContractFunction(
  //   contracts?.karmaPrivateCrowdsale,
  //   "getSaleLimit"
  // );
  // const { data: raiseTokenSymbol } = useContractFunction(
  //   contracts?.ERC20(raiseToken),
  //   "symbol"
  // );

  const saleNetwork = "BSC";
  const raiseToken = "BUSD";
  const tokenPrice = 0.05;
  const minFromPrice = 100;
  const maxFromPrice = 10000;
  const softCapToken = 2000000;
  const hardCapToken = 4000000;

  return {
    openingTime,
    closingTime,
    saleNetwork,
    raiseToken,
    tokenPrice,
    minFromPrice,
    maxFromPrice,
    softCapToken,
    hardCapToken,
  };
}
