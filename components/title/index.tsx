import { Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface TitleProps {}

export const Title: React.FC<PropsWithChildren<TitleProps>> = ({
  children,
}) => {
  return (
    <Heading as="h1" mb={4} fontSize="xxx-large">
      {children}
    </Heading>
  );
};
