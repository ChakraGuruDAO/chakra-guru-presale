/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrowdsaleMetaMock,
  CrowdsaleMetaMockInterface,
} from "../CrowdsaleMetaMock";

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
    inputs: [
      {
        internalType: "address",
        name: "raiseToken",
        type: "address",
      },
    ],
    name: "setRaiseToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "saleToken",
        type: "address",
      },
    ],
    name: "setSaleToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610554806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a8a3cf851161005b578063a8a3cf85146100e3578063bcad371614610108578063d722cd541461011b578063ec3dd1161461012e57600080fd5b80632c8567e51461008d57806334fcf437146100b3578063679aefce146100c8578063a29f481c146100d0575b600080fd5b6100a061009b3660046104bb565b61013f565b6040519081526020015b60405180910390f35b6100c66100c13660046104bb565b61015a565b005b6002546100a0565b6100c66100de366004610494565b610166565b6001546001600160a01b03165b6040516001600160a01b0390911681526020016100aa565b6100c6610116366004610494565b61016f565b6100a06101293660046104bb565b610178565b6000546001600160a01b03166100f0565b600061015461014d60025490565b8390610188565b92915050565b6101638161019b565b50565b6101638161022c565b6101638161035a565b6002546000906101549083610488565b600061019482846104d3565b9392505050565b600081116101f05760405162461bcd60e51b815260206004820152600d60248201527f726174652069732077726f6e670000000000000000000000000000000000000060448201526064015b60405180910390fd5b60028190556040518181527f84c1e9b3689efdc1e6c1b125e7ce8e16549975d1ec5a1d4e259f7f72cb4f0066906020015b60405180910390a150565b6001600160a01b0381166102825760405162461bcd60e51b815260206004820152601a60248201527f73616c65546f6b656e206164647265737320697320656d70747900000000000060448201526064016101e7565b6001600160a01b0381163b6102ff5760405162461bcd60e51b815260206004820152602160248201527f73616c65546f6b656e2061646472657373206973206e6f7420636f6e7472616360448201527f740000000000000000000000000000000000000000000000000000000000000060648201526084016101e7565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f89150e457d740699f7726003f5298acabea8552dc69036f97b57707807c0096990602001610221565b6001600160a01b0381166103b05760405162461bcd60e51b815260206004820152601b60248201527f7261697365546f6b656e206164647265737320697320656d707479000000000060448201526064016101e7565b6001600160a01b0381163b61042d5760405162461bcd60e51b815260206004820152602260248201527f7261697365546f6b656e2061646472657373206973206e6f7420636f6e74726160448201527f637400000000000000000000000000000000000000000000000000000000000060648201526084016101e7565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f6e50aeca61a159cdc18268905846de8bb7fcfe6f1f5917e88942f5672f92556690602001610221565b600061019482846104f3565b6000602082840312156104a5578081fd5b81356001600160a01b0381168114610194578182fd5b6000602082840312156104cc578081fd5b5035919050565b6000826104ee57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561051957634e487b7160e01b81526011600452602481fd5b50029056fea2646970667358221220657f937378a7e6d5cb0f2557ba8e1e4be59c211c9e3b376993eeaf87ca26739c64736f6c63430008040033";

export class CrowdsaleMetaMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrowdsaleMetaMock> {
    return super.deploy(overrides || {}) as Promise<CrowdsaleMetaMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrowdsaleMetaMock {
    return super.attach(address) as CrowdsaleMetaMock;
  }
  connect(signer: Signer): CrowdsaleMetaMock__factory {
    return super.connect(signer) as CrowdsaleMetaMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdsaleMetaMockInterface {
    return new utils.Interface(_abi) as CrowdsaleMetaMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdsaleMetaMock {
    return new Contract(address, _abi, signerOrProvider) as CrowdsaleMetaMock;
  }
}
