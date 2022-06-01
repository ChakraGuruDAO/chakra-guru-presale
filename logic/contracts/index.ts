import { Contract } from "ethers";

import { KarmaToken, KarmaToken__factory } from "typechain";
import { bsc, bscTestnet, hardhat } from "./addresses";
import { AddressesInterface } from "./types";

export function getAddresses(
  type: "bsc" | "bsc_testnet" | "hardhat"
): AddressesInterface {
  if (type === "bsc") return bsc;
  if (type === "bsc_testnet") return bscTestnet;
  if (type === "hardhat") return hardhat;

  return null;
}

export function getContracts(addresses: AddressesInterface) {
  console.log(addresses);
  const KarmaToken = new Contract(
    addresses.KARMA_TOKEN,
    KarmaToken__factory.abi
  ) as KarmaToken;

  return { KarmaToken };
}
