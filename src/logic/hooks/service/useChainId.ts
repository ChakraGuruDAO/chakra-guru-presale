import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { defaultChainId } from "src/logic/chains";

export function useChainId() {
  const { chainId } = useWeb3React();
  const _chainId = useMemo(() => chainId || defaultChainId, [chainId]);

  return _chainId;
}
