import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";

export function useSigner() {
  const { library } = useWeb3React<Web3Provider>();
  const signer = useMemo(() => library?.getSigner(), [library]);

  return signer;
}
