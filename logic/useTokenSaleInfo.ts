import { BigNumber } from "ethers";
import { useCallback, useEffect, useRef, useState } from "react";
import { useContracts } from "./useContracts";
import { Duration, Time } from "./time";
import { useTokenInfo } from "./useTokenInfo";

export function useTokenSaleInfo() {
  const { signer, isReady, contracts } = useContracts();

  const isInited = useRef(false);

  const { tokenDecimals } = useTokenInfo();

  const [openingTime, setOpeningTime] = useState<Date>(new Date());
  const [closingTime, setClosingTime] = useState<Date>(new Date());
  const [raiseSymbol, setRaiseSymbol] = useState<string>("");
  const [tokenPrice, setTokenPrice] = useState<number>(0);

  const [saleCap, setSaleCap] = useState<[string, string]>(["", ""]);
  const [saleLimit, setSaleLimit] = useState<[string, string]>(["", ""]);

  const load = useCallback(async () => {
    const openingTime = await contracts.karmaPrivateCrowdsale.getOpeningTime();
    const closingTime = await contracts.karmaPrivateCrowdsale.getClosingTime();
    const raiseToken = await contracts.karmaPrivateCrowdsale.getRaiseToken();
    const raiseTokenSymbol = await contracts.ERC20(raiseToken).symbol();
    const rate = await contracts.karmaPrivateCrowdsale.getRate();
    const { minSaleCap, maxSaleCap } =
      await contracts.karmaPrivateCrowdsale.getSaleCap();
    const { minSaleLimit, maxSaleLimit } =
      await contracts.karmaPrivateCrowdsale.getSaleLimit();

    setOpeningTime(Duration.convertTimestampToDate(openingTime));
    setClosingTime(Duration.convertTimestampToDate(closingTime));
    setRaiseSymbol(raiseTokenSymbol);
    setTokenPrice(BigNumber.from(1).div(rate).toNumber());

    const data = [minSaleCap, maxSaleCap, minSaleLimit, maxSaleLimit].map((m) =>
      m.div(BigNumber.from(10).pow(18)).toString()
    );
    setSaleCap([data[0], data[1]]);
    setSaleLimit([data[2], data[3]]);

    console.log(tokenDecimals, data);
  }, [tokenDecimals, contracts]);

  useEffect(() => {
    if (isReady && !isInited.current) {
      isInited.current = true;
      load();
    }
  }, [isReady, load]);

  return {
    openingTime,
    closingTime,
    raiseSymbol,
    tokenPrice,
    saleCap,
    saleLimit,
  };
}
