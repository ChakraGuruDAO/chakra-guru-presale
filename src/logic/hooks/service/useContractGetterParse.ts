import { Contract } from "ethers";
import { UnwrapPromise } from "next/dist/lib/coalesced-function";
import { useEffect, useMemo } from "react";
import useSWR from "swr";
import { useAllData } from "./useAllData";

export interface UseContractGetterParseParams<
  ContractType extends Contract,
  Key extends keyof ContractType,
  Args extends Parameters<ContractType[Key]>,
  Output = UnwrapPromise<ReturnType<ContractType[Key]>>
> {
  contract: ContractType;
  functionName: Key;
  args: Args;
  parser?: (data: UnwrapPromise<ReturnType<ContractType[Key]>>) => Output;
  defaultValue?: Output;
}

export function useContractGetterParse<
  ContractType extends Contract,
  Key extends keyof ContractType,
  Args extends Parameters<ContractType[Key]>,
  Output = UnwrapPromise<ReturnType<ContractType[Key]>>
>({
  contract,
  functionName,
  args,
  parser,
  defaultValue,
}: UseContractGetterParseParams<ContractType, Key, Args, Output>): Output {
  const { provider } = useAllData();

  const fetcher = async (key: string, functionName, ...args) => {
    return contract && contract[functionName](...args);
  };

  const { data, mutate } = useSWR(
    [`${contract?.address}_${functionName.toString()}`, functionName, ...args],
    {
      fetcher,
      dedupingInterval: 50000,
    }
  );

  useEffect(() => {
    const listener = () => {
      mutate();
    };
    if (provider) {
      provider.on("block", listener);
    }

    return () => {
      if (provider) provider.off("block", listener);
    };
  }, [provider, mutate]);

  const parsedData = useMemo(
    () => (typeof parser === "function" ? parser(data) : data),
    [parser, data]
  );

  return typeof parsedData === "undefined" || parsedData === null
    ? defaultValue
    : parsedData;
}
