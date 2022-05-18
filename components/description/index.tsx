import { Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface DescriptionProps {}

export const Description: React.FC<PropsWithChildren<DescriptionProps>> = ({
  children,
}) => {
  return (
    <Text color="gray.900" fontWeight="light" fontSize="lg">
      {children}
    </Text>
  );
};
