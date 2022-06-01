import { JsonRpcSigner, Provider } from "@ethersproject/providers";
import { Contract } from "ethers";
import {
  ERC20,
  ERC20__factory,
  IERC20,
  IERC20__factory,
  KarmaPrivateCrowdsale,
  KarmaPrivateCrowdsale__factory,
  KarmaPrivateSaleVestingVault,
  KarmaPrivateSaleVestingVault__factory,
  KarmaToken,
  KarmaToken__factory,
} from "src/typechain";

import type { AddressesInterface } from "./addresses";

export function createContracts(
  addresses: AddressesInterface,
  signerOrProvider?: JsonRpcSigner | Provider
) {
  const karmaToken = new Contract(
    addresses.KARMA_TOKEN,
    KarmaToken__factory.abi,
    signerOrProvider
  ) as KarmaToken;

  const karmaPrivateSaleVestingVault = new Contract(
    addresses.KARMA_PRIVATE_SALE_VESTING_VAULT,
    KarmaPrivateSaleVestingVault__factory.abi,
    signerOrProvider
  ) as KarmaPrivateSaleVestingVault;

  const karmaPrivateCrowdsale = new Contract(
    addresses.KARMA_PRIVATE_SALE_CROWDSALE,
    KarmaPrivateCrowdsale__factory.abi,
    signerOrProvider
  ) as KarmaPrivateCrowdsale;

  const ERC20 = (address: string) =>
    address &&
    (new Contract(address, ERC20__factory.abi, signerOrProvider) as ERC20);

  return {
    karmaToken,
    karmaPrivateCrowdsale,
    karmaPrivateSaleVestingVault,
    ERC20,
  };
}
