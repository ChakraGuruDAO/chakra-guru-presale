import { useSigner } from "./useSigner";

export function useIsAuth() {
  const signer = useSigner();
  return !!signer;
}
