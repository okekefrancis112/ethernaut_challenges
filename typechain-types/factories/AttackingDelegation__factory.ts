/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AttackingDelegation,
  AttackingDelegationInterface,
} from "../AttackingDelegation";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161024a38038061024a83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6101b7806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637ca2474e1461003b578063f6b4dfb414610045575b600080fd5b610043610074565b005b600054610058906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b60408051600481526024810182526020810180516001600160e01b031663dd365b8b60e01b179052600080549251919290916001600160a01b03909116906100bd908490610146565b600060405180830381855af49150503d80600081146100f8576040519150601f19603f3d011682016040523d82523d6000602084013e6100fd565b606091505b50509050806101425760405162461bcd60e51b815260206004820152600d60248201526c105d1d1858dac819985a5b1959609a1b604482015260640160405180910390fd5b5050565b6000825160005b81811015610167576020818601810151858301520161014d565b81811115610176576000828501525b50919091019291505056fea26469706673582212204f81478a499d7c319fcc5988b0a258cbc4d12699c87f08e5a40e906b33dcd6c264736f6c63430008090033";

type AttackingDelegationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AttackingDelegationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AttackingDelegation__factory extends ContractFactory {
  constructor(...args: AttackingDelegationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AttackingDelegation";
  }

  deploy(
    _contractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AttackingDelegation> {
    return super.deploy(
      _contractAddress,
      overrides || {}
    ) as Promise<AttackingDelegation>;
  }
  getDeployTransaction(
    _contractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_contractAddress, overrides || {});
  }
  attach(address: string): AttackingDelegation {
    return super.attach(address) as AttackingDelegation;
  }
  connect(signer: Signer): AttackingDelegation__factory {
    return super.connect(signer) as AttackingDelegation__factory;
  }
  static readonly contractName: "AttackingDelegation";
  public readonly contractName: "AttackingDelegation";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AttackingDelegationInterface {
    return new utils.Interface(_abi) as AttackingDelegationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AttackingDelegation {
    return new Contract(address, _abi, signerOrProvider) as AttackingDelegation;
  }
}
