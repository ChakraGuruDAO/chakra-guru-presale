import { useAllData, useContractGetterParse } from "../service";
import {
  parseArray,
  parseBigNumberToDate,
  parseBigNumberToNumber,
} from "./parsers";

export function useVestingInfo() {
  const { contracts } = useAllData();

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
  });

  const zeroDate = useContractGetterParse({
    contract: contracts?.karmaPrivateSaleVestingVault,
    functionName: "getZeroDate",
    args: [],
    parser: parseBigNumberToDate,
    defaultValue: new Date(),
  });

  const vestingSchedule = [
    10, 0, 0, 0, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5,
  ];

  return {
    vestingInfo,
    zeroDate,
    vestingSchedule,
  };
}
