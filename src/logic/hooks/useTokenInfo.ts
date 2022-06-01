import { BigNumber } from "ethers";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAllData } from "./useAllData";
import { useContracts } from "./useContracts";

export function useTokenInfo() {
  const { contracts } = useAllData();

  const [tokenDecimals, setTokenDecimals] = useState<number>(0);
  const [tokenName, setTokenName] = useState<string>("");
  const [tokenSymbol, setTokenSymbol] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [tokenAddress, setTokenAddress] = useState<string>("");

  const load = useCallback(async () => {
    const tokenDecimals = await contracts.karmaToken.decimals();
    const tokenName = await contracts.karmaToken.name();
    const tokenSymbol = await contracts.karmaToken.symbol();
    const totalSupply = await contracts.karmaToken.totalSupply();

    setTokenName(tokenName);
    setTokenSymbol(tokenSymbol);
    setTokenDecimals(tokenDecimals);
    setTotalSupply(
      totalSupply.div(BigNumber.from(10).pow(tokenDecimals)).toNumber()
    );
    setTokenAddress(contracts.karmaToken.address);
  }, [contracts]);

  useEffect(() => {
    if (contracts) {
      load();
    }
  }, [contracts, load]);

  return {
    tokenAddress,
    tokenDecimals,
    // tokenName,
    // tokenSymbol,
    totalSupply,
  };
}
