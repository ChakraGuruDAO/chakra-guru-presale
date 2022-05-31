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

interface CrowdsalePostDeliveryVestingVaultMockInterface
  extends ethers.utils.Interface {
  functions: {
    "BENEFICIARY_MANAGE_ROLE()": FunctionFragment;
    "CONFIG_ROLE()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "addBeneficiary(address,uint256)": FunctionFragment;
    "changeStatus(uint8)": FunctionFragment;
    "claim(uint256[])": FunctionFragment;
    "getAllBalance()": FunctionFragment;
    "getAllBeneficiaries()": FunctionFragment;
    "getBeneficiary(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "getStatus()": FunctionFragment;
    "getToken()": FunctionFragment;
    "getVestingInfo()": FunctionFragment;
    "getZeroDate()": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "removeBeneficiary(address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setInfo(address,uint256,uint256[],uint256[],uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BENEFICIARY_MANAGE_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CONFIG_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addBeneficiary",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllBeneficiaries",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBeneficiary",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getStatus", values?: undefined): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVestingInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getZeroDate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBeneficiary",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setInfo",
    values: [string, BigNumberish, BigNumberish[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "BENEFICIARY_MANAGE_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CONFIG_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllBeneficiaries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVestingInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getZeroDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "VaultBeneficiaryUpdated(address,uint256)": EventFragment;
    "VaultStatusUpdated(uint8,uint8)": EventFragment;
    "VaultTokenChanged(address)": EventFragment;
    "VaultVestingInfoChanged(uint256[],uint256[],uint256)": EventFragment;
    "VaultWithdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultBeneficiaryUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultStatusUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultTokenChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultVestingInfoChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultWithdraw"): EventFragment;
}

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type VaultBeneficiaryUpdatedEvent = TypedEvent<
  [string, BigNumber] & { beneficiary: string; amount: BigNumber }
>;

export type VaultStatusUpdatedEvent = TypedEvent<
  [number, number] & { newStatus: number; prevStatus: number }
>;

export type VaultTokenChangedEvent = TypedEvent<[string] & { token: string }>;

export type VaultVestingInfoChangedEvent = TypedEvent<
  [BigNumber[], BigNumber[], BigNumber] & {
    unlockingTimes: BigNumber[];
    percents: BigNumber[];
    precision: BigNumber;
  }
>;

export type VaultWithdrawEvent = TypedEvent<
  [string, BigNumber] & { beneficiary: string; amount: BigNumber }
>;

export class CrowdsalePostDeliveryVestingVaultMock extends BaseContract {
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

  interface: CrowdsalePostDeliveryVestingVaultMockInterface;

  functions: {
    BENEFICIARY_MANAGE_ROLE(overrides?: CallOverrides): Promise<[string]>;

    CONFIG_ROLE(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    addBeneficiary(
      beneficiary: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeStatus(
      newStatus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      portionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAllBeneficiaries(overrides?: CallOverrides): Promise<[string[]]>;

    getBeneficiary(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean[]] & {
        amount: BigNumber;
        isPortionWithdraw: boolean[];
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStatus(overrides?: CallOverrides): Promise<[number]>;

    getToken(overrides?: CallOverrides): Promise<[string]>;

    getVestingInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber] & {
        vestingPortionsUnlockTime: BigNumber[];
        vestingPercentPerPortion: BigNumber[];
        vestingPercentPrecision: BigNumber;
      }
    >;

    getZeroDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeBeneficiary(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInfo(
      token: string,
      zeroDate: BigNumberish,
      vestingPortionsUnlockTime: BigNumberish[],
      vestingPercentPerPortion: BigNumberish[],
      vestingPercentPrecision: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  BENEFICIARY_MANAGE_ROLE(overrides?: CallOverrides): Promise<string>;

  CONFIG_ROLE(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  addBeneficiary(
    beneficiary: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeStatus(
    newStatus: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    portionIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllBalance(overrides?: CallOverrides): Promise<BigNumber>;

  getAllBeneficiaries(overrides?: CallOverrides): Promise<string[]>;

  getBeneficiary(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean[]] & { amount: BigNumber; isPortionWithdraw: boolean[] }
  >;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStatus(overrides?: CallOverrides): Promise<number>;

  getToken(overrides?: CallOverrides): Promise<string>;

  getVestingInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber] & {
      vestingPortionsUnlockTime: BigNumber[];
      vestingPercentPerPortion: BigNumber[];
      vestingPercentPrecision: BigNumber;
    }
  >;

  getZeroDate(overrides?: CallOverrides): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeBeneficiary(
    beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInfo(
    token: string,
    zeroDate: BigNumberish,
    vestingPortionsUnlockTime: BigNumberish[],
    vestingPercentPerPortion: BigNumberish[],
    vestingPercentPrecision: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    BENEFICIARY_MANAGE_ROLE(overrides?: CallOverrides): Promise<string>;

    CONFIG_ROLE(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    addBeneficiary(
      beneficiary: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    changeStatus(
      newStatus: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(portionIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;

    getAllBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getAllBeneficiaries(overrides?: CallOverrides): Promise<string[]>;

    getBeneficiary(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean[]] & {
        amount: BigNumber;
        isPortionWithdraw: boolean[];
      }
    >;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatus(overrides?: CallOverrides): Promise<number>;

    getToken(overrides?: CallOverrides): Promise<string>;

    getVestingInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber] & {
        vestingPortionsUnlockTime: BigNumber[];
        vestingPercentPerPortion: BigNumber[];
        vestingPercentPrecision: BigNumber;
      }
    >;

    getZeroDate(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeBeneficiary(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setInfo(
      token: string,
      zeroDate: BigNumberish,
      vestingPortionsUnlockTime: BigNumberish[],
      vestingPercentPerPortion: BigNumberish[],
      vestingPercentPrecision: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "VaultBeneficiaryUpdated(address,uint256)"(
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { beneficiary: string; amount: BigNumber }
    >;

    VaultBeneficiaryUpdated(
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { beneficiary: string; amount: BigNumber }
    >;

    "VaultStatusUpdated(uint8,uint8)"(
      newStatus?: null,
      prevStatus?: null
    ): TypedEventFilter<
      [number, number],
      { newStatus: number; prevStatus: number }
    >;

    VaultStatusUpdated(
      newStatus?: null,
      prevStatus?: null
    ): TypedEventFilter<
      [number, number],
      { newStatus: number; prevStatus: number }
    >;

    "VaultTokenChanged(address)"(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    VaultTokenChanged(
      token?: null
    ): TypedEventFilter<[string], { token: string }>;

    "VaultVestingInfoChanged(uint256[],uint256[],uint256)"(
      unlockingTimes?: null,
      percents?: null,
      precision?: null
    ): TypedEventFilter<
      [BigNumber[], BigNumber[], BigNumber],
      {
        unlockingTimes: BigNumber[];
        percents: BigNumber[];
        precision: BigNumber;
      }
    >;

    VaultVestingInfoChanged(
      unlockingTimes?: null,
      percents?: null,
      precision?: null
    ): TypedEventFilter<
      [BigNumber[], BigNumber[], BigNumber],
      {
        unlockingTimes: BigNumber[];
        percents: BigNumber[];
        precision: BigNumber;
      }
    >;

    "VaultWithdraw(address,uint256)"(
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { beneficiary: string; amount: BigNumber }
    >;

    VaultWithdraw(
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { beneficiary: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    BENEFICIARY_MANAGE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    CONFIG_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    addBeneficiary(
      beneficiary: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeStatus(
      newStatus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      portionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllBalance(overrides?: CallOverrides): Promise<BigNumber>;

    getAllBeneficiaries(overrides?: CallOverrides): Promise<BigNumber>;

    getBeneficiary(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStatus(overrides?: CallOverrides): Promise<BigNumber>;

    getToken(overrides?: CallOverrides): Promise<BigNumber>;

    getVestingInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getZeroDate(overrides?: CallOverrides): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeBeneficiary(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInfo(
      token: string,
      zeroDate: BigNumberish,
      vestingPortionsUnlockTime: BigNumberish[],
      vestingPercentPerPortion: BigNumberish[],
      vestingPercentPrecision: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BENEFICIARY_MANAGE_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CONFIG_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addBeneficiary(
      beneficiary: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeStatus(
      newStatus: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      portionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllBeneficiaries(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBeneficiary(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVestingInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getZeroDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeBeneficiary(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInfo(
      token: string,
      zeroDate: BigNumberish,
      vestingPortionsUnlockTime: BigNumberish[],
      vestingPercentPerPortion: BigNumberish[],
      vestingPercentPrecision: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
