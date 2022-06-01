import { bsc } from "./bsc";
import { bscTestnet } from "./bscTestnet";

export interface AddressesInterface {
  KARMA_TOKEN: string;
  KARMA_PRIVATE_SALE_VESTING_VAULT: string;
  KARMA_PRIVATE_SALE_CROWDSALE: string;
}

export const addressesChainList: { [chainId: number]: AddressesInterface } = {
  56: bsc,
  97: bscTestnet,
};
