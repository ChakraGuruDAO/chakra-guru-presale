import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface SimpleBlockProps {}

export const SimpleBlock: React.FC<PropsWithChildren<SimpleBlockProps>> = ({
  children,
}) => {
  return (
    <Box
      padding="24px 40px"
      background="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(100px)"
      borderRadius="10px"
      border="1px solid rgb(255, 255, 255)"
      transition="all 0.3s ease 0s"
      flex="1 1 0%"
      width="100%"
      _hover={{ boxShadow: "rgb(201 155 159 / 28%) 0px 29px 32px" }}
    >
      {children}
    </Box>
  );
};
