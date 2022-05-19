import { Text, TextProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface DescriptionProps extends TextProps {}

export const Description: React.FC<PropsWithChildren<DescriptionProps>> = ({
  children,
  ...other
}) => {
  return (
    <Text fontSize="lg" {...other}>
      {children}
    </Text>
  );
};
