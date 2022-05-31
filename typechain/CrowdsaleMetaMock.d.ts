/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CrowdsaleMetaMockInterface extends ethers.utils.Interface {
  functions: {
    "getRaiseAmountFromSaleAmount(uint256)": FunctionFragment;
    "getRaiseToken()": FunctionFragment;
    "getRate()": FunctionFragment;
    "getSaleAmountFromRaiseAmount(uint256)": FunctionFragment;
    "getSaleToken()": FunctionFragment;
    "setRaiseToken(address)": FunctionFragment;
    "setRate(uint256)": FunctionFragment;
    "setSaleToken(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getRaiseAmountFromSaleAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRaiseToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getRate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSaleAmountFromRaiseAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSaleToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRaiseToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSaleToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getRaiseAmountFromSaleAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRaiseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSaleAmountFromRaiseAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSaleToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRaiseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSaleToken",
    data: BytesLike
  ): Result;

  events: {
    "CrowdsaleRaiseTokenUpdated(address)": EventFragment;
    "CrowdsaleRateUpdated(uint256)": EventFragment;
    "CrowdsaleSaleTokenUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CrowdsaleRaiseTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CrowdsaleRateUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CrowdsaleSaleTokenUpdated"): EventFragment;
}

export type CrowdsaleRaiseTokenUpdatedEvent = TypedEvent<
  [string] & { raiseToken: string }
>;

export type CrowdsaleRateUpdatedEvent = TypedEvent<
  [BigNumber] & { rate: BigNumber }
>;

export type CrowdsaleSaleTokenUpdatedEvent = TypedEvent<
  [string] & { saleToken: string }
>;

export class CrowdsaleMetaMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CrowdsaleMetaMockInterface;

  functions: {
    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRaiseToken(overrides?: CallOverrides): Promise<[string]>;

    getRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSaleToken(overrides?: CallOverrides): Promise<[string]>;

    setRaiseToken(
      raiseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRate(
      rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSaleToken(
      saleToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getRaiseAmountFromSaleAmount(
    saleAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRaiseToken(overrides?: CallOverrides): Promise<string>;

  getRate(overrides?: CallOverrides): Promise<BigNumber>;

  getSaleAmountFromRaiseAmount(
    raiseAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSaleToken(overrides?: CallOverrides): Promise<string>;

  setRaiseToken(
    raiseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRate(
    rate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSaleToken(
    saleToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaiseToken(overrides?: CallOverrides): Promise<string>;

    getRate(overrides?: CallOverrides): Promise<BigNumber>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleToken(overrides?: CallOverrides): Promise<string>;

    setRaiseToken(raiseToken: string, overrides?: CallOverrides): Promise<void>;

    setRate(rate: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setSaleToken(saleToken: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CrowdsaleRaiseTokenUpdated(address)"(
      raiseToken?: null
    ): TypedEventFilter<[string], { raiseToken: string }>;

    CrowdsaleRaiseTokenUpdated(
      raiseToken?: null
    ): TypedEventFilter<[string], { raiseToken: string }>;

    "CrowdsaleRateUpdated(uint256)"(
      rate?: null
    ): TypedEventFilter<[BigNumber], { rate: BigNumber }>;

    CrowdsaleRateUpdated(
      rate?: null
    ): TypedEventFilter<[BigNumber], { rate: BigNumber }>;

    "CrowdsaleSaleTokenUpdated(address)"(
      saleToken?: null
    ): TypedEventFilter<[string], { saleToken: string }>;

    CrowdsaleSaleTokenUpdated(
      saleToken?: null
    ): TypedEventFilter<[string], { saleToken: string }>;
  };

  estimateGas: {
    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaiseToken(overrides?: CallOverrides): Promise<BigNumber>;

    getRate(overrides?: CallOverrides): Promise<BigNumber>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleToken(overrides?: CallOverrides): Promise<BigNumber>;

    setRaiseToken(
      raiseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRate(
      rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSaleToken(
      saleToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRaiseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSaleToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRaiseToken(
      raiseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRate(
      rate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSaleToken(
      saleToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
