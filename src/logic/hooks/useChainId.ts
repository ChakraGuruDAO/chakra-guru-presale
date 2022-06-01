import { useWeb3React } from "@web3-react/core";
import { useWeb3ReactManager } from "@web3-react/core/dist/manager";
import { useMemo } from "react";

export function useChainId() {
  const defaultChainId = 97;
  const { chainId } = useWeb3React();
  const _chainId = useMemo(() => chainId || defaultChainId, [chainId]);

  return _chainId;
}
