import { Box, Img, Text, HStack } from "@chakra-ui/react";
import { Karma } from "components/chakra";
import { Chakra } from "components/karma";

export const Logo = () => {
  return (
    <HStack gap="12px" userSelect="none">
      <Chakra />
      <Text color="brand.100" fontSize="20px" fontWeight={400}>
        Chakra Guru DAO
      </Text>
    </HStack>
  );
};
