/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface DenialInterface extends utils.Interface {
  contractName: "Denial";
  functions: {
    "contractBalance()": FunctionFragment;
    "owner()": FunctionFragment;
    "partner()": FunctionFragment;
    "setWithdrawPartner(address)": FunctionFragment;
    "timeLastWithdrawn()": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawPartnerBalances(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "contractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "partner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setWithdrawPartner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "timeLastWithdrawn",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawPartnerBalances",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "contractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "partner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWithdrawPartner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timeLastWithdrawn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawPartnerBalances",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Denial extends BaseContract {
  contractName: "Denial";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DenialInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contractBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    partner(overrides?: CallOverrides): Promise<[string]>;

    setWithdrawPartner(
      _partner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timeLastWithdrawn(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawPartnerBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  partner(overrides?: CallOverrides): Promise<string>;

  setWithdrawPartner(
    _partner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timeLastWithdrawn(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawPartnerBalances(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    partner(overrides?: CallOverrides): Promise<string>;

    setWithdrawPartner(
      _partner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    timeLastWithdrawn(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawPartnerBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    contractBalance(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    partner(overrides?: CallOverrides): Promise<BigNumber>;

    setWithdrawPartner(
      _partner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timeLastWithdrawn(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawPartnerBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    contractBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    partner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setWithdrawPartner(
      _partner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timeLastWithdrawn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawPartnerBalances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
