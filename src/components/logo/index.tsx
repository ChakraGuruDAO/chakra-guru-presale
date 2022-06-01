import { Box, Img, Text, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Karma } from "src/components/chakra";
import { Chakra } from "src/components/karma";

export const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Link
        style={{ textDecoration: "none" }}
        _focus={{
          boxShadow: "none",
        }}
      >
        <HStack gap="12px" userSelect="none">
          <Chakra />
          <Text color="blue.400" fontSize="1.5rem" fontWeight={400}>
            Chakra
          </Text>
        </HStack>
      </Link>
    </NextLink>
  );
};
