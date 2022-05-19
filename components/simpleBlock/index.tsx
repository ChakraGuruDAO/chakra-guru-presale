import { Box, useColorModeValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export interface SimpleBlockProps {}

export const SimpleBlock: React.FC<PropsWithChildren<SimpleBlockProps>> = ({
  children,
}) => {
  const background = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.50", "gray.100");
  const boxShadowColor = useColorModeValue(
    "--chakra-colors-blue-200",
    "--chakra-colors-pink-200"
  );
  return (
    <Box
      py={{ base: 6 }}
      px={{ base: 6 }}
      background={background}
      borderColor={borderColor}
      backdropFilter="blur(100px)"
      borderRadius={{ base: "base", lg: "lg" }}
      transition="all 0.6s ease 0s"
      flex="1 1 0%"
      width="100%"
      boxShadow={`var(${boxShadowColor}) 0 0 var(--chakra-sizes-2)`}
      _hover={{
        boxShadow: `var(${boxShadowColor}) 0 0 var(--chakra-sizes-8)`,
      }}
    >
      {children}
    </Box>
  );
};
