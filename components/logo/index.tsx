import { Box, Img, Text, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Karma } from "components/chakra";
import { Chakra } from "components/karma";

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
          <Text color="brand.300" fontSize="1.65rem" fontWeight={400}>
            Chakra
          </Text>
        </HStack>
      </Link>
    </NextLink>
  );
};
