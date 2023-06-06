/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Delegation, DelegationInterface } from "../Delegation";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_delegateAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "delegate",
    outputs: [
      {
        internalType: "contract Delegate",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101b63803806101b683398101604081905261002f9161005d565b600180546001600160a01b039092166001600160a01b0319928316179055600080549091163317905561008d565b60006020828403121561006f57600080fd5b81516001600160a01b038116811461008657600080fd5b9392505050565b61011a8061009c6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638da5cb5b146094578063c89e43611460c2575b6001546040516000916001600160a01b0316906050908390369060d4565b600060405180830381855af49150503d80600081146089576040519150601f19603f3d011682016040523d82523d6000602084013e608e565b606091505b50505050005b60005460a6906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b60015460a6906001600160a01b031681565b818382376000910190815291905056fea2646970667358221220ef8f08f1587607fe641d39c437ac02306abfb14069c8a5e6f68a7bf0c3ad4cfe64736f6c63430008090033";

type DelegationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DelegationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Delegation__factory extends ContractFactory {
  constructor(...args: DelegationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Delegation";
  }

  deploy(
    _delegateAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Delegation> {
    return super.deploy(
      _delegateAddress,
      overrides || {}
    ) as Promise<Delegation>;
  }
  getDeployTransaction(
    _delegateAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_delegateAddress, overrides || {});
  }
  attach(address: string): Delegation {
    return super.attach(address) as Delegation;
  }
  connect(signer: Signer): Delegation__factory {
    return super.connect(signer) as Delegation__factory;
  }
  static readonly contractName: "Delegation";
  public readonly contractName: "Delegation";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DelegationInterface {
    return new utils.Interface(_abi) as DelegationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Delegation {
    return new Contract(address, _abi, signerOrProvider) as Delegation;
  }
}