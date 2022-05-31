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

interface CrowdsaleRefundableMockInterface extends ethers.utils.Interface {
  functions: {
    "buyTokens(address,uint256)": FunctionFragment;
    "canRefundable()": FunctionFragment;
    "getRaiseAmountFromSaleAmount(uint256)": FunctionFragment;
    "getRaiseToken()": FunctionFragment;
    "getRaiseTokenBalance()": FunctionFragment;
    "getRate()": FunctionFragment;
    "getSaleAmountFromRaiseAmount(uint256)": FunctionFragment;
    "getSaleToken()": FunctionFragment;
    "getSaleTokenBalance()": FunctionFragment;
    "setFinished(bool)": FunctionFragment;
    "setGoalReached(bool)": FunctionFragment;
    "setRaiseToken(address)": FunctionFragment;
    "setRaiseWallet(address)": FunctionFragment;
    "setRate(uint256)": FunctionFragment;
    "setSaleToken(address)": FunctionFragment;
    "withdrawFunds()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "canRefundable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRaiseAmountFromSaleAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRaiseToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRaiseTokenBalance",
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
    functionFragment: "getSaleTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFinished",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setGoalReached",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setRaiseToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRaiseWallet",
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
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canRefundable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRaiseAmountFromSaleAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRaiseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRaiseTokenBalance",
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
    functionFragment: "getSaleTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFinished",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGoalReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRaiseToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRaiseWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSaleToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;

  events: {
    "CrowdsaleRaiseTokenUpdated(address)": EventFragment;
    "CrowdsaleRaiseWalletUpdated(address)": EventFragment;
    "CrowdsaleRateUpdated(uint256)": EventFragment;
    "CrowdsaleRefund(address,uint256)": EventFragment;
    "CrowdsaleSaleTokenUpdated(address)": EventFragment;
    "CrowdsaleTokensPurchased(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CrowdsaleRaiseTokenUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CrowdsaleRaiseWalletUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CrowdsaleRateUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CrowdsaleRefund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CrowdsaleSaleTokenUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CrowdsaleTokensPurchased"): EventFragment;
}

export type CrowdsaleRaiseTokenUpdatedEvent = TypedEvent<
  [string] & { raiseToken: string }
>;

export type CrowdsaleRaiseWalletUpdatedEvent = TypedEvent<
  [string] & { raiseWallet: string }
>;

export type CrowdsaleRateUpdatedEvent = TypedEvent<
  [BigNumber] & { rate: BigNumber }
>;

export type CrowdsaleRefundEvent = TypedEvent<
  [string, BigNumber] & { purchaser: string; arg1: BigNumber }
>;

export type CrowdsaleSaleTokenUpdatedEvent = TypedEvent<
  [string] & { saleToken: string }
>;

export type CrowdsaleTokensPurchasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    purchaser: string;
    beneficiary: string;
    saleAmount: BigNumber;
    raiseAmount: BigNumber;
  }
>;

export class CrowdsaleRefundableMock extends BaseContract {
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

  interface: CrowdsaleRefundableMockInterface;

  functions: {
    buyTokens(
      beneficiary: string,
      raiseAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canRefundable(overrides?: CallOverrides): Promise<[boolean]>;

    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRaiseToken(overrides?: CallOverrides): Promise<[string]>;

    getRaiseTokenBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSaleToken(overrides?: CallOverrides): Promise<[string]>;

    getSaleTokenBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    setFinished(
      hasFinished: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGoalReached(
      goalReached: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRaiseToken(
      raiseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRaiseWallet(
      raiseWallet: string,
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

    withdrawFunds(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  buyTokens(
    beneficiary: string,
    raiseAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canRefundable(overrides?: CallOverrides): Promise<boolean>;

  getRaiseAmountFromSaleAmount(
    saleAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRaiseToken(overrides?: CallOverrides): Promise<string>;

  getRaiseTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getRate(overrides?: CallOverrides): Promise<BigNumber>;

  getSaleAmountFromRaiseAmount(
    raiseAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSaleToken(overrides?: CallOverrides): Promise<string>;

  getSaleTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

  setFinished(
    hasFinished: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGoalReached(
    goalReached: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRaiseToken(
    raiseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRaiseWallet(
    raiseWallet: string,
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

  withdrawFunds(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyTokens(
      beneficiary: string,
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    canRefundable(overrides?: CallOverrides): Promise<boolean>;

    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaiseToken(overrides?: CallOverrides): Promise<string>;

    getRaiseTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getRate(overrides?: CallOverrides): Promise<BigNumber>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleToken(overrides?: CallOverrides): Promise<string>;

    getSaleTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    setFinished(hasFinished: boolean, overrides?: CallOverrides): Promise<void>;

    setGoalReached(
      goalReached: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setRaiseToken(raiseToken: string, overrides?: CallOverrides): Promise<void>;

    setRaiseWallet(
      raiseWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRate(rate: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setSaleToken(saleToken: string, overrides?: CallOverrides): Promise<void>;

    withdrawFunds(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "CrowdsaleRaiseTokenUpdated(address)"(
      raiseToken?: null
    ): TypedEventFilter<[string], { raiseToken: string }>;

    CrowdsaleRaiseTokenUpdated(
      raiseToken?: null
    ): TypedEventFilter<[string], { raiseToken: string }>;

    "CrowdsaleRaiseWalletUpdated(address)"(
      raiseWallet?: null
    ): TypedEventFilter<[string], { raiseWallet: string }>;

    CrowdsaleRaiseWalletUpdated(
      raiseWallet?: null
    ): TypedEventFilter<[string], { raiseWallet: string }>;

    "CrowdsaleRateUpdated(uint256)"(
      rate?: null
    ): TypedEventFilter<[BigNumber], { rate: BigNumber }>;

    CrowdsaleRateUpdated(
      rate?: null
    ): TypedEventFilter<[BigNumber], { rate: BigNumber }>;

    "CrowdsaleRefund(address,uint256)"(
      purchaser?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { purchaser: string; arg1: BigNumber }
    >;

    CrowdsaleRefund(
      purchaser?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { purchaser: string; arg1: BigNumber }
    >;

    "CrowdsaleSaleTokenUpdated(address)"(
      saleToken?: null
    ): TypedEventFilter<[string], { saleToken: string }>;

    CrowdsaleSaleTokenUpdated(
      saleToken?: null
    ): TypedEventFilter<[string], { saleToken: string }>;

    "CrowdsaleTokensPurchased(address,address,uint256,uint256)"(
      purchaser?: string | null,
      beneficiary?: string | null,
      saleAmount?: null,
      raiseAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        purchaser: string;
        beneficiary: string;
        saleAmount: BigNumber;
        raiseAmount: BigNumber;
      }
    >;

    CrowdsaleTokensPurchased(
      purchaser?: string | null,
      beneficiary?: string | null,
      saleAmount?: null,
      raiseAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        purchaser: string;
        beneficiary: string;
        saleAmount: BigNumber;
        raiseAmount: BigNumber;
      }
    >;
  };

  estimateGas: {
    buyTokens(
      beneficiary: string,
      raiseAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canRefundable(overrides?: CallOverrides): Promise<BigNumber>;

    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRaiseToken(overrides?: CallOverrides): Promise<BigNumber>;

    getRaiseTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getRate(overrides?: CallOverrides): Promise<BigNumber>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSaleToken(overrides?: CallOverrides): Promise<BigNumber>;

    getSaleTokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    setFinished(
      hasFinished: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGoalReached(
      goalReached: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRaiseToken(
      raiseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRaiseWallet(
      raiseWallet: string,
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

    withdrawFunds(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTokens(
      beneficiary: string,
      raiseAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canRefundable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRaiseAmountFromSaleAmount(
      saleAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRaiseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRaiseTokenBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSaleAmountFromRaiseAmount(
      raiseAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSaleToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSaleTokenBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFinished(
      hasFinished: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGoalReached(
      goalReached: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRaiseToken(
      raiseToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRaiseWallet(
      raiseWallet: string,
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

    withdrawFunds(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
