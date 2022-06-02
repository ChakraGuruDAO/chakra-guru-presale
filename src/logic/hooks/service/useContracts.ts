import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useMemo } from "react";
import { createContracts, addressesChainList } from "src/logic/contracts";
import { useChainId } from "./useChainId";
import { useSigner } from "./useSigner";

export function useContracts() {
  const { library, account } = useWeb3React<Web3Provider>();
  const chainId = useChainId();

  const signer = useSigner();

  const addresses = useMemo(
    () => chainId && addressesChainList[chainId],
    [chainId]
  );

  const contracts = useMemo(
    () => addresses && createContracts(addresses, account ? signer : library),
    [signer, addresses, account, library]
  );

  return {
    signer,
    addresses,
    contracts,
  };
}
