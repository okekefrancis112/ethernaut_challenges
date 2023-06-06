/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AttackingCoinFlip",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttackingCoinFlip__factory>;
    getContractFactory(
      name: "CoinFlip",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoinFlip__factory>;
    getContractFactory(
      name: "AttackingDelegation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttackingDelegation__factory>;
    getContractFactory(
      name: "Delegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Delegate__factory>;
    getContractFactory(
      name: "Delegation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Delegation__factory>;
    getContractFactory(
      name: "AttackingForce",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttackingForce__factory>;
    getContractFactory(
      name: "Vault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>;
    getContractFactory(
      name: "AttackingKing",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttackingKing__factory>;
    getContractFactory(
      name: "King",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.King__factory>;
    getContractFactory(
      name: "AttackingReentrance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttackingReentrance__factory>;
    getContractFactory(
      name: "Reentrance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reentrance__factory>;
    getContractFactory(
      name: "AttackingDenial",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AttackingDenial__factory>;
    getContractFactory(
      name: "Denial",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Denial__factory>;

    getContractAt(
      name: "AttackingCoinFlip",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AttackingCoinFlip>;
    getContractAt(
      name: "CoinFlip",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CoinFlip>;
    getContractAt(
      name: "AttackingDelegation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AttackingDelegation>;
    getContractAt(
      name: "Delegate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Delegate>;
    getContractAt(
      name: "Delegation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Delegation>;
    getContractAt(
      name: "AttackingForce",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AttackingForce>;
    getContractAt(
      name: "Vault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Vault>;
    getContractAt(
      name: "AttackingKing",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AttackingKing>;
    getContractAt(
      name: "King",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.King>;
    getContractAt(
      name: "AttackingReentrance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AttackingReentrance>;
    getContractAt(
      name: "Reentrance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Reentrance>;
    getContractAt(
      name: "AttackingDenial",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AttackingDenial>;
    getContractAt(
      name: "Denial",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Denial>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
