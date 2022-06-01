import { JsonRpcSigner } from "@ethersproject/providers";
import { Contract } from "ethers";
import {
  KarmaPrivateCrowdsale,
  KarmaPrivateCrowdsale__factory,
  KarmaPrivateSaleVestingVault,
  KarmaPrivateSaleVestingVault__factory,
  KarmaToken,
  KarmaToken__factory,
} from "typechain";

import type { AddressesInterface } from "./addresses";

export function createContracts(
  addresses: AddressesInterface,
  signer?: JsonRpcSigner
) {
  const karmaToken = new Contract(
    addresses.KARMA_TOKEN,
    KarmaToken__factory.abi,
    signer
  ) as KarmaToken;

  const karmaPrivateSaleVestingVault = new Contract(
    addresses.KARMA_PRIVATE_SALE_VESTING_VAULT,
    KarmaPrivateSaleVestingVault__factory.abi,
    signer
  ) as KarmaPrivateSaleVestingVault;

  const karmaPrivateCrowdsale = new Contract(
    addresses.KARMA_PRIVATE_SALE_CROWDSALE,
    KarmaPrivateCrowdsale__factory.abi,
    signer
  ) as KarmaPrivateCrowdsale;

  return {
    karmaToken,
    karmaPrivateCrowdsale,
    karmaPrivateSaleVestingVault,
  };
}
