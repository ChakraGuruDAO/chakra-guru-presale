import type { NextComponentType } from "next";
import { PropsWithChildren } from "react";

export interface NextPageCustom<Props> {
  getLayout?(props: PropsWithChildren<Props>): React.ReactNode;
}

declare module "next" {
  export declare type NextPage<P = {}, IP = {}> = NextComponentType<
    NextPageContext,
    IP,
    P
  > &
    NextPageCustom<P>;
}
