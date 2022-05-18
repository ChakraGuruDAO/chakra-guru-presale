import { Box, Img, Text, HStack } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack gap="12px" userSelect="none">
      <Img src="/chakra.svg" boxSize="48px" />
      <Text color="brand.100" fontSize="20px" fontWeight={400}>
        Chakra Guru DAO
      </Text>
    </HStack>
  );
};
