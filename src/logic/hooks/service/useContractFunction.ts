import { Contract } from "ethers";
import { UnwrapPromise } from "next/dist/lib/coalesced-function";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import { useAllData } from "./useAllData";

interface UseContractFunctionReturnType<
  ContractType extends Contract,
  Key extends keyof ContractType,
  Args extends Parameters<ContractType[Key]>
> {
  data: UnwrapPromise<ReturnType<ContractType[Key]>>;
  isLoading: boolean;
  isError: boolean;
}

export function useContractFunction<
  ContractType extends Contract,
  Key extends keyof ContractType,
  Args extends Parameters<ContractType[Key]>
>(
  contract: ContractType,
  functionName: Key,
  ...args: Args
): UseContractFunctionReturnType<ContractType, Key, Args> {
  const { provider } = useAllData();

  const fetcher = async (key: string, functionName, ...args) => {
    return contract && contract[functionName](...args);
  };

  const dataRef = useRef(null);
  const { data, error, mutate } = useSWR(
    [`${contract?.address}_${functionName.toString()}`, functionName, ...args],
    {
      fetcher,
      dedupingInterval: 50000,
    }
  );
  dataRef.current = data;

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

  return { data: dataRef.current, isLoading: !error && !data, isError: error };
}

interface UseContractFunctionChainReturnType<
  ContractType extends Contract,
  Key extends keyof ContractType,
  Args extends Parameters<ContractType[Key]>,
  Output
> {
  data: Output;
  isLoading: boolean;
  isError: boolean;
}

export function useContractFunctionChain<
  ContractType extends Contract,
  Key extends keyof ContractType,
  Args extends Parameters<ContractType[Key]>,
  Output
>(
  contract: ContractType,
  functionName: Key,
  chain: (data: UnwrapPromise<ReturnType<ContractType[Key]>>) => Output,
  ...args: Args
): UseContractFunctionChainReturnType<ContractType, Key, Args, Output> {
  const { provider } = useAllData();

  const fetcher = async (key: string, functionName, ...args) => {
    return contract && contract[functionName](...args);
  };

  const dataRef = useRef(null);
  const { data, error, mutate } = useSWR(
    [`${contract?.address}_${functionName.toString()}`, functionName, ...args],
    {
      fetcher,
      dedupingInterval: 50000,
    }
  );
  dataRef.current = data;

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

  return {
    data: chain(dataRef.current),
    isLoading: !error && !data,
    isError: error,
  };
}
