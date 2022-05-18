import {
  Container,
  Box,
  Text,
  HStack,
  SimpleGrid,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Description } from "components/description";
import { SimpleBlock } from "components/simpleBlock";
import { Title } from "components/title";
import React from "react";

export const Presale: React.FC = () => {
  return (
    <Flex flex={1} flexDirection="column">
      <Flex mb="10">
        <Box flex="50% 1">
          <Title>Info</Title>
        </Box>

        <Box flex="50% 1">
          <Description>
            Description 123 Description 123 Description 123 Description 123
            Description 123 Description 123 Description 123 Description 123
          </Description>
        </Box>
      </Flex>
      <SimpleGrid
        columns={3}
        gap="40px"
        gridAutoColumns="1fr"
        gridAutoFlow="column"
      >
        <SimpleBlock>Balance</SimpleBlock>
        <SimpleBlock>Unclaimed</SimpleBlock>
        <VStack flex="1" gap="40px">
          <SimpleBlock>KARMA Price</SimpleBlock>
          <SimpleBlock>CAP</SimpleBlock>
        </VStack>
      </SimpleGrid>
    </Flex>
  );
};
