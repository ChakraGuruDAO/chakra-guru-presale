/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FakeUSDToken, FakeUSDTokenInterface } from "../FakeUSDToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526008815267119052d1481554d160c21b602080830191825283518085019094526004845263119554d160e21b9084015281519192916200005e91600391620001a1565b50805162000074906004906020840190620001a1565b505050620000ae336200008c620000b460201b60201c565b6200009990600a620002ab565b620000a890620f424062000379565b620000b9565b620003ee565b601290565b6001600160a01b038216620001145760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000128919062000247565b90915550506001600160a01b038216600090815260208190526040812080548392906200015790849062000247565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001af906200039b565b90600052602060002090601f016020900481019282620001d357600085556200021e565b82601f10620001ee57805160ff19168380011785556200021e565b828001600101855582156200021e579182015b828111156200021e57825182559160200191906001019062000201565b506200022c92915062000230565b5090565b5b808211156200022c576000815560010162000231565b600082198211156200025d576200025d620003d8565b500190565b600181815b80851115620002a3578160001904821115620002875762000287620003d8565b808516156200029557918102915b93841c939080029062000267565b509250929050565b6000620002bc60ff841683620002c3565b9392505050565b600082620002d45750600162000373565b81620002e35750600062000373565b8160018114620002fc5760028114620003075762000327565b600191505062000373565b60ff8411156200031b576200031b620003d8565b50506001821b62000373565b5060208310610133831016604e8410600b84101617156200034c575081810a62000373565b62000358838362000262565b80600019048211156200036f576200036f620003d8565b0290505b92915050565b6000816000190483118215151615620003965762000396620003d8565b500290565b600181811c90821680620003b057607f821691505b60208210811415620003d257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b61097b80620003fe6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461017f57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e6565b6040516100e39190610893565b60405180910390f35b6100ff6100fa36600461086a565b610278565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f36600461082f565b610290565b604051601281526020016100e3565b6100ff61015136600461086a565b6102b4565b6101136101643660046107dc565b6001600160a01b031660009081526020819052604090205490565b6100d66102f3565b6100ff61019536600461086a565b610302565b6100ff6101a836600461086a565b6103b1565b6101136101bb3660046107fd565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f59061090a565b80601f01602080910402602001604051908101604052809291908181526020018280546102219061090a565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b6000336102868185856103bf565b5060019392505050565b60003361029e858285610517565b6102a98585856105a9565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028690829086906102ee9087906108e6565b6103bf565b6060600480546101f59061090a565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103a45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102a982868684036103bf565b6000336102868185856105a9565b6001600160a01b03831661043a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0382166104b65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105a357818110156105965760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161039b565b6105a384848484036103bf565b50505050565b6001600160a01b0383166106255760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0382166106a15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b038316600090815260208190526040902054818110156107305760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107679084906108e6565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107b391815260200190565b60405180910390a36105a3565b80356001600160a01b03811681146107d757600080fd5b919050565b6000602082840312156107ed578081fd5b6107f6826107c0565b9392505050565b6000806040838503121561080f578081fd5b610818836107c0565b9150610826602084016107c0565b90509250929050565b600080600060608486031215610843578081fd5b61084c846107c0565b925061085a602085016107c0565b9150604084013590509250925092565b6000806040838503121561087c578182fd5b610885836107c0565b946020939093013593505050565b6000602080835283518082850152825b818110156108bf578581018301518582016040015282016108a3565b818111156108d05783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561090557634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061091e57607f821691505b6020821081141561093f57634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122062a0d557cb6a59d6293b2127946a3f489cf2b78d457b9f3bdd276cc42cf85a9b64736f6c63430008040033";

export class FakeUSDToken__factory extends ContractFactory {
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
  ): Promise<FakeUSDToken> {
    return super.deploy(overrides || {}) as Promise<FakeUSDToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FakeUSDToken {
    return super.attach(address) as FakeUSDToken;
  }
  connect(signer: Signer): FakeUSDToken__factory {
    return super.connect(signer) as FakeUSDToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FakeUSDTokenInterface {
    return new utils.Interface(_abi) as FakeUSDTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FakeUSDToken {
    return new Contract(address, _abi, signerOrProvider) as FakeUSDToken;
  }
}
