import { useAllData } from "src/logic/hooks";
import React, { createContext, PropsWithChildren, useContext } from "react";

const Context = createContext<Partial<ReturnType<typeof useAllData>>>({});

export const StoreProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const allData = useAllData();

  return <Context.Provider value={allData}>{children}</Context.Provider>;
};

export function useStore() {
  return useContext(Context);
}
