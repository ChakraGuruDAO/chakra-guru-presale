import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { Contract } from "ethers";
import { KarmaToken, KarmaToken__factory } from "typechain";
import { createContracts, addressesChainList } from "./contracts";

export function useContracts() {
  const { chainId, library } = useWeb3React<Web3Provider>();
  const signer = library?.getSigner();
  const isReady = chainId && !!library;

  const addresses = isReady && addressesChainList[chainId];
  const contracts = isReady && createContracts(addresses, signer);

  return {
    signer,
    isReady,
    addresses,
    contracts,
  };
}
