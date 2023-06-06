/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { King, KingInterface } from "../King";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_king",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_prize",
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
    name: "king",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prize",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052600280546001600160a01b031990811633908117909255600080549091169091179055346001556101b18061003a6000396000f3fe60806040526004361061004e5760003560e01c806329cc6d6f146100cf5780635a5953f8146101065780638da5cb5b14610125578063cc181ca814610145578063e3ac5d261461016557600080fd5b366100ca576001543410158061006e57506002546001600160a01b031633145b61007757600080fd5b600080546040516001600160a01b03909116913480156108fc02929091818181858888f193505050501580156100b1573d6000803e3d6000fd5b50600080546001600160a01b0319163317905534600155005b600080fd5b3480156100db57600080fd5b506000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b34801561011257600080fd5b506001545b6040519081526020016100fd565b34801561013157600080fd5b506002546100e9906001600160a01b031681565b34801561015157600080fd5b506000546100e9906001600160a01b031681565b34801561017157600080fd5b506101176001548156fea26469706673582212207f3a66745fa6eacbd9fde120721b36a2a9dbd106b8d8810db9345feafc1835e464736f6c63430008090033";

type KingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class King__factory extends ContractFactory {
  constructor(...args: KingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "King";
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<King> {
    return super.deploy(overrides || {}) as Promise<King>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): King {
    return super.attach(address) as King;
  }
  connect(signer: Signer): King__factory {
    return super.connect(signer) as King__factory;
  }
  static readonly contractName: "King";
  public readonly contractName: "King";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KingInterface {
    return new utils.Interface(_abi) as KingInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): King {
    return new Contract(address, _abi, signerOrProvider) as King;
  }
}