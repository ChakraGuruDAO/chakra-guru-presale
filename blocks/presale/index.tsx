import {
  Container,
  Box,
  Text,
  HStack,
  SimpleGrid,
  VStack,
  Flex,
  Divider,
  Progress,
  Button,
} from "@chakra-ui/react";
import { Karma } from "components/chakra";
import { Description } from "components/description";
import { Metamask } from "components/metamask";
import { SimpleBlock } from "components/simpleBlock";
import { Title } from "components/title";
import React, { PropsWithChildren } from "react";

export const Presale: React.FC = () => {
  return (
    <Flex flex={1} flexDirection="column">
      <Flex mb="10">
        <Box flex="1">
          <HStack gap="12px" alignItems="center">
            <Title>Pre-Sale</Title>
            <Karma />
            <Title>KARMA Tokens</Title>
          </HStack>
        </Box>
      </Flex>
      <SimpleGrid
        columns={2}
        gap="40px"
        gridAutoColumns="1fr"
        gridAutoFlow="column"
      >
        <VStack alignItems="flex-start" pt={3}>
          <Description mb={5}>
            Participate in the Pre Sale. You can purchase KARMA tokens as an
            early adopter of our project Chakra Guru DAO. The receipt of the
            tokens will be claimed out according to the unlock map.
          </Description>
          <Box mt={10}>
            <Button colorScheme="blue" alignItems="center">
              <Metamask size="28px" mb="2px" mr={3} /> Add KARMA to MetaMask
            </Button>
          </Box>
        </VStack>
        <SimpleBlock>
          <HStack>
            <Karma />
            <VStack>
              <Text>KARMA Token</Text>
              <Text>KARMA</Text>
            </VStack>
            <VStack>
              <Text>Price</Text>
              <Text>$0.0066</Text>
              <Text>0.00096 AVAX</Text>
            </VStack>
          </HStack>
          <Divider />
          <HStack>
            <VStack>
              <Text>Round</Text>
              <Text>Pre-Sale</Text>
            </VStack>
            <VStack>
              <Text>Time left</Text>
              <Text>Sale ended</Text>
            </VStack>
          </HStack>
          <Progress
            borderRadius="30px"
            size="lg"
            value={80}
            hasStripe={true}
            isAnimated={true}
            colorScheme="blue"
          />
          <Divider />
          <HStack>
            <VStack>
              <Text>Token Distribution</Text>
              <Text>18,000,000</Text>
            </VStack>
            <VStack>
              <Text>Total Raised</Text>
              <Text>1,188,000/1,888,000</Text>
            </VStack>
          </HStack>
        </SimpleBlock>
      </SimpleGrid>
    </Flex>
  );
};

const KeyComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Text>{children}</Text>;
};

const ValueComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Text>{children}</Text>;
};
