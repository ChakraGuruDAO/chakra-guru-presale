/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CrowdsalePostDelivery,
  CrowdsalePostDeliveryInterface,
} from "../CrowdsalePostDelivery";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "raiseToken",
        type: "address",
      },
    ],
    name: "CrowdsaleRaiseTokenUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "raiseWallet",
        type: "address",
      },
    ],
    name: "CrowdsaleRaiseWalletUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "CrowdsaleRateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "saleToken",
        type: "address",
      },
    ],
    name: "CrowdsaleSaleTokenUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "saleAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "raiseAmount",
        type: "uint256",
      },
    ],
    name: "CrowdsaleTokensPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newVestingVault",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "prevVestingVault",
        type: "address",
      },
    ],
    name: "CrowdsaleVestingVaultUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "raiseAmount",
        type: "uint256",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "saleAmount",
        type: "uint256",
      },
    ],
    name: "getRaiseAmountFromSaleAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRaiseToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRaiseTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raiseAmount",
        type: "uint256",
      },
    ],
    name: "getSaleAmountFromRaiseAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSaleToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSaleTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVestingVault",
    outputs: [
      {
        internalType: "contract IVestingVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class CrowdsalePostDelivery__factory {
  static readonly abi = _abi;
  static createInterface(): CrowdsalePostDeliveryInterface {
    return new utils.Interface(_abi) as CrowdsalePostDeliveryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdsalePostDelivery {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrowdsalePostDelivery;
  }
}