import { useCallback, useEffect, useRef, useState } from "react";
import { Duration } from "../time";
import { useAllData } from "./useAllData";

export function useVestingInfo() {
  const { contracts } = useAllData();

  const isInited = useRef(false);

  const [vestingZeroDate, setVestingZeroDate] = useState<Date>(new Date());

  const load = useCallback(async () => {
    const {
      vestingPercentPerPortion,
      vestingPercentPrecision,
      vestingPortionsUnlockTime,
    } = await contracts.karmaPrivateSaleVestingVault.getVestingInfo();

    const zeroDate = await contracts.karmaPrivateSaleVestingVault.getZeroDate();
    setVestingZeroDate(Duration.convertTimestampToDate(zeroDate));
  }, [contracts]);

  useEffect(() => {
    if (contracts) {
      load();
    }
  }, [contracts, load]);

  return {
    vestingZeroDate,
  };
}
