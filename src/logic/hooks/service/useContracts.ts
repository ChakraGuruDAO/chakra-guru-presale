import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { createContracts, addressesChainList } from "src/logic/contracts";
import { useChainId } from "./useChainId";
import { useSigner } from "./useSigner";

export function useContracts() {
  const { library } = useWeb3React<Web3Provider>();
  const chainId = useChainId();

  const signer = useSigner();

  const addresses = useMemo(
    () => chainId && addressesChainList[chainId],
    [chainId]
  );

  const contracts = useMemo(
    () => addresses && createContracts(addresses, signer || library),
    [signer, addresses, library]
  );

  return {
    signer,
    addresses,
    contracts,
  };
}
