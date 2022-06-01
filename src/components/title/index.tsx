import { Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface TitleProps {}

export const Title: React.FC<PropsWithChildren<TitleProps>> = ({
  children,
}) => {
  return <Heading>{children}</Heading>;
};
