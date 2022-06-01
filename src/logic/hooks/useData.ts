import { Contract } from "ethers";
import { UnwrapPromise } from "next/dist/lib/coalesced-function";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import { useAllData } from ".";

export function useData() {
  const { provider, account } = useAllData();

  const fetcher =
    (provider) =>
    (...args) => {
      const [method, ...params] = args;
      console.log(method, params);
      return provider[method](...params);
    };

  const { data, mutate } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(provider),
  });

  useEffect(() => {
    const listener = () => {
      mutate(void 0, true);
    };
    if (provider) {
      provider.on("block", listener);
    }

    return () => {
      if (provider) provider.off("block", listener);
    };
  }, [provider, mutate]);

  return data;
}

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

  const fetcher = (key: string, functionName, ...args) => {
    return contract[functionName](...args);
  };

  const dataRef = useRef(null);
  const { data, error, mutate } = useSWR(
    [`${contract.address}_${functionName.toString()}`, functionName, ...args],
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
