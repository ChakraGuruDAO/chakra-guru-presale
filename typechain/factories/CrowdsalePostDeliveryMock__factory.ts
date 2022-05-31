/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrowdsalePostDeliveryMock,
  CrowdsalePostDeliveryMockInterface,
} from "../CrowdsalePostDeliveryMock";

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
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getBeneficiaryAmount",
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
        internalType: "address",
        name: "raiseWallet",
        type: "address",
      },
    ],
    name: "setRaiseWallet",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "vestingVault",
        type: "address",
      },
    ],
    name: "setVestingVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600355611089806100256000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639623a56311610097578063bcad371611610066578063bcad3716146101d6578063d722cd54146101e9578063ec3dd116146101fc578063f6a55a291461020d57600080fd5b80639623a5631461018c578063a29f481c1461019f578063a8a3cf85146101b2578063a91468ba146101c357600080fd5b806334fcf437116100d357806334fcf4371461013957806345b3a9031461014c578063679aefce146101715780639054fddb1461017957600080fd5b80630752881a146100fa5780630c7c59471461010f5780632c8567e514610126575b600080fd5b61010d610108366004610e27565b610215565b005b6005545b6040519081526020015b60405180910390f35b610113610134366004610e6a565b610310565b61010d610147366004610e6a565b61032b565b6006546001600160a01b03165b6040516001600160a01b03909116815260200161011d565b600254610113565b610113610187366004610e0d565b610337565b61010d61019a366004610e0d565b610342565b61010d6101ad366004610e0d565b61034b565b6001546001600160a01b0316610159565b61010d6101d1366004610e0d565b610354565b61010d6101e4366004610e0d565b61035d565b6101136101f7366004610e6a565b610366565b6000546001600160a01b0316610159565b610113610376565b6002600354141561026d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600355600061027d82610366565b90503361028b848385610392565b60055461029890846104ad565b6005556102a584836104c0565b836001600160a01b0316816001600160a01b03167f4eebbf6bdaab082237477dc6df1e89a3abed8702f92c56e91fadc87b6efc326384866040516102f3929190918252602082015260400190565b60405180910390a36103058184610549565b505060016003555050565b600061032561031e60025490565b8390610583565b92915050565b6103348161058f565b50565b60006103258261061b565b610334816106c1565b61033481610772565b610334816108a0565b610334816109b9565b6002546000906103259083610ae7565b600061038d61038460025490565b60055490610ae7565b905090565b6001600160a01b03831661040e5760405162461bcd60e51b815260206004820152602a60248201527f43726f776473616c653a2062656e656669636961727920697320746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610264565b8161045b5760405162461bcd60e51b815260206004820152601a60248201527f43726f776473616c653a2073616c65416d6f756e7420697320300000000000006044820152606401610264565b806104a85760405162461bcd60e51b815260206004820152601b60248201527f43726f776473616c653a207261697365416d6f756e74206973203000000000006044820152606401610264565b505050565b60006104b98284610fa4565b9392505050565b6006546040517f96074e700000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015260248201849052909116906396074e7090604401600060405180830381600087803b15801561052757600080fd5b505af115801561053b573d6000803e3d6000fd5b505050505050565b50505050565b60045461057f9083906001600160a01b03168361056e6001546001600160a01b031690565b6001600160a01b0316929190610af3565b5050565b60006104b98284610fbc565b600081116105df5760405162461bcd60e51b815260206004820152600d60248201527f726174652069732077726f6e67000000000000000000000000000000000000006044820152606401610264565b60028190556040518181527f84c1e9b3689efdc1e6c1b125e7ce8e16549975d1ec5a1d4e259f7f72cb4f0066906020015b60405180910390a150565b6006546040517f505a1b310000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152600092839291169063505a1b319060240160006040518083038186803b15801561067d57600080fd5b505afa158015610691573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106b99190810190610e82565b509392505050565b6001600160a01b0381166107175760405162461bcd60e51b815260206004820152601460248201527f726169736557616c6c657420697320656d7074790000000000000000000000006044820152606401610264565b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f701b9088b062c1ab54ac04678f085f03555b4f27814aad524ecc6e5af1397fde90602001610610565b6001600160a01b0381166107c85760405162461bcd60e51b815260206004820152601a60248201527f73616c65546f6b656e206164647265737320697320656d7074790000000000006044820152606401610264565b6001600160a01b0381163b6108455760405162461bcd60e51b815260206004820152602160248201527f73616c65546f6b656e2061646472657373206973206e6f7420636f6e7472616360448201527f74000000000000000000000000000000000000000000000000000000000000006064820152608401610264565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f89150e457d740699f7726003f5298acabea8552dc69036f97b57707807c0096990602001610610565b6001600160a01b0381166108f65760405162461bcd60e51b815260206004820152601060248201527f6164647265737320697320656d707479000000000000000000000000000000006044820152606401610264565b6001600160a01b0381163b61094d5760405162461bcd60e51b815260206004820152601760248201527f61646472657373206973206e6f7420636f6e74726163740000000000000000006044820152606401610264565b600680546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff198316811790935560408051938452911660208301819052917f3ec520624ee6b2221b624eb377f7a1af6900e6ae4dcf14f9f149dfc4421850f6910160405180910390a15050565b6001600160a01b038116610a0f5760405162461bcd60e51b815260206004820152601b60248201527f7261697365546f6b656e206164647265737320697320656d70747900000000006044820152606401610264565b6001600160a01b0381163b610a8c5760405162461bcd60e51b815260206004820152602260248201527f7261697365546f6b656e2061646472657373206973206e6f7420636f6e74726160448201527f63740000000000000000000000000000000000000000000000000000000000006064820152608401610264565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f6e50aeca61a159cdc18268905846de8bb7fcfe6f1f5917e88942f5672f92556690602001610610565b60006104b98284610fdc565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261054392879291600091610bb9918516908490610c49565b8051909150156104a85780806020019051810190610bd79190610e50565b6104a85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610264565b6060610c588484600085610c60565b949350505050565b606082471015610cd85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610264565b6001600160a01b0385163b610d2f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610264565b600080866001600160a01b03168587604051610d4b9190610f55565b60006040518083038185875af1925050503d8060008114610d88576040519150601f19603f3d011682016040523d82523d6000602084013e610d8d565b606091505b5091509150610d9d828286610da8565b979650505050505050565b60608315610db75750816104b9565b825115610dc75782518084602001fd5b8160405162461bcd60e51b81526004016102649190610f71565b80356001600160a01b0381168114610df857600080fd5b919050565b80518015158114610df857600080fd5b600060208284031215610e1e578081fd5b6104b982610de1565b60008060408385031215610e39578081fd5b610e4283610de1565b946020939093013593505050565b600060208284031215610e61578081fd5b6104b982610dfd565b600060208284031215610e7b578081fd5b5035919050565b60008060408385031215610e94578182fd5b8251915060208084015167ffffffffffffffff80821115610eb3578384fd5b818601915086601f830112610ec6578384fd5b815181811115610ed857610ed861103d565b8060051b604051601f19603f83011681018181108582111715610efd57610efd61103d565b604052828152858101935084860182860187018b1015610f1b578788fd5b8795505b83861015610f4457610f3081610dfd565b855260019590950194938601938601610f1f565b508096505050505050509250929050565b60008251610f67818460208701610ffb565b9190910192915050565b6020815260008251806020840152610f90816040850160208701610ffb565b601f01601f19169190910160400192915050565b60008219821115610fb757610fb7611027565b500190565b600082610fd757634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610ff657610ff6611027565b500290565b60005b83811015611016578181015183820152602001610ffe565b838111156105435750506000910152565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f1283156f5b65d8713a2f8cef0322e1eea82506b7ad7710360270ba5d9722a9264736f6c63430008040033";

export class CrowdsalePostDeliveryMock__factory extends ContractFactory {
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
  ): Promise<CrowdsalePostDeliveryMock> {
    return super.deploy(overrides || {}) as Promise<CrowdsalePostDeliveryMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrowdsalePostDeliveryMock {
    return super.attach(address) as CrowdsalePostDeliveryMock;
  }
  connect(signer: Signer): CrowdsalePostDeliveryMock__factory {
    return super.connect(signer) as CrowdsalePostDeliveryMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdsalePostDeliveryMockInterface {
    return new utils.Interface(_abi) as CrowdsalePostDeliveryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdsalePostDeliveryMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrowdsalePostDeliveryMock;
  }
}
