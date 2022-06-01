import { BigNumber } from "ethers";
import { useCallback, useEffect, useRef, useState } from "react";
import { Duration } from "./time";
import { useContracts } from "./useContracts";

export function useVestingInfo() {
  const { signer, isReady, contracts } = useContracts();

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
    if (isReady && !isInited.current) {
      isInited.current = true;
      load();
    }
  }, [isReady, load]);

  return {
    vestingZeroDate,
  };
}
