import { Box, Img, Text, HStack } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack gap="12px" userSelect="none">
      <Img src="/chakra.svg" boxSize="60px" />
      <Text
        color="brand.100"
        fontSize="30px"
        fontWeight={400}
        textTransform="uppercase"
      >
        Chakra
      </Text>
    </HStack>
  );
};
