import { useAllData, useContractFunction } from "../service";

export function useVestingInfo() {
  const { contracts } = useAllData();

  const { data: vestingInfo } = useContractFunction(
    contracts?.karmaPrivateSaleVestingVault,
    "getVestingInfo"
  );
  const { data: zeroDate } = useContractFunction(
    contracts?.karmaPrivateSaleVestingVault,
    "getZeroDate"
  );

  const vestingSchedule = [
    10, 0, 0, 0, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5,
  ];

  return {
    vestingInfo,
    zeroDate,
    vestingSchedule,
  };
}
