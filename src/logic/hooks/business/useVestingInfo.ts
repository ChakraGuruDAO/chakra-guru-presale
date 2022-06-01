import { BigNumber } from "ethers";
import { useAllData, useContractGetterParse } from "../service";
import {
  parseArray,
  parseBigNumberDivFloat,
  parseBigNumberToDate,
  parseBigNumberToNumber,
} from "./parsers";
import { useTokenInfo } from "./useTokenInfo";

export function useVestingInfo() {
  const { contracts, account } = useAllData();
  const { decimals } = useTokenInfo();

  const vestingInfo = useContractGetterParse({
    contract: contracts?.karmaPrivateSaleVestingVault,
    functionName: "getVestingInfo",
    args: [],
    parser: (data) =>
      data && {
        vestingPortionsUnlockTime: parseArray(parseBigNumberToNumber)(
          data.vestingPortionsUnlockTime
        ),
        vestingPercentPerPortion: parseArray(parseBigNumberToNumber)(
          data.vestingPercentPerPortion
        ),
        vestingPercentPrecision: parseBigNumberToNumber(
          data.vestingPercentPrecision
        ),
      },
    defaultValue: {
      vestingPortionsUnlockTime: [],
      vestingPercentPerPortion: [],
      vestingPercentPrecision: 100,
    },
  });

  const zeroDate = useContractGetterParse({
    contract: contracts?.karmaPrivateSaleVestingVault,
    functionName: "getZeroDate",
    args: [],
    parser: parseBigNumberToDate,
    defaultValue: new Date(),
  });

  const vestingMap = useContractGetterParse({
    contract: contracts?.karmaPrivateSaleVestingVault,
    functionName: "getBeneficiary",
    args: [account],
    parser: (data) =>
      data && {
        amount: parseBigNumberToNumber(
          parseBigNumberDivFloat(decimals)(data.amount)
        ),
        isPortionWithdraw: data.isPortionWithdraw,
      },
    defaultValue: {
      amount: 0,
      isPortionWithdraw: [],
    },
  });

  return {
    vestingInfo,
    zeroDate,
    vestingMap,
  };
}
