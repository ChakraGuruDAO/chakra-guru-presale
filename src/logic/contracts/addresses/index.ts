import { ChainId } from "src/logic/chains";
import { bsc } from "./bsc";
import { bscTestnet } from "./bscTestnet";

export interface AddressesInterface {
  KARMA_TOKEN: string;
  KARMA_PRIVATE_SALE_VESTING_VAULT: string;
  KARMA_PRIVATE_SALE_CROWDSALE: string;
}

export const addressesChainList: Record<ChainId, AddressesInterface> = {
  [ChainId.BSC]: bsc,
  [ChainId.BSCTestnet]: bscTestnet,
};
