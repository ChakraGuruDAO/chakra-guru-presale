import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useSigner } from "./useSigner";
import { useContracts } from "./useContracts";
import { useIsAuth } from "./useIsAuth";

export function useAllData() {
  const {
    activate,
    active,
    account,
    setError,
    error,
    deactivate,
    library: provider,
  } = useWeb3React<Web3Provider>();
  const { addresses, contracts } = useContracts();
  const isSigned = useIsAuth();
  const signer = useSigner();

  return {
    signer,
    account,
    activate,
    active,
    setError,
    error,
    deactivate,
    provider,
    addresses,
    contracts,
    isSigned,
  };
}
