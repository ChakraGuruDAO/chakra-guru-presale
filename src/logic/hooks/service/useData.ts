import { useEffect } from "react";
import useSWR from "swr";
import { useAllData } from "./useAllData";

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
