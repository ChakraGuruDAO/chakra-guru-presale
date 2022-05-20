import {
  Box,
  HStack,
  SimpleGrid,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Karma } from "components/chakra";
import { Description } from "components/description";
import { Metamask } from "components/metamask";
import { Timer } from "components/timer";
import { Title } from "components/title";
import {
  tokenName,
  tokenSymbol,
  tokenPrice,
  saleStartAt,
  saleEndAt,
  fromSymbol,
  softCapToken,
  hardCapToken,
} from "const";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { TickerBlock } from "./tickerBlock";

export interface PresaleHeroProps {
  status: "waiting" | "process" | "finished";
  expiresAt: Date;
}

export const PresaleHero: React.FC<PresaleHeroProps> = ({
  status,
  expiresAt,
}) => {
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
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 28 }}>
        <VStack alignItems="flex-start">
          <Description>
            KARMA is a cross-platform collectible card game based on augmented
            reality (AR) technology. She uses mobile devices with GPS to find,
            catch, upgrade and fight virtual characters. They look like they are
            in the player&apos;s real world.
          </Description>
          <Description pt={2}>
            KARMA Token is game-ecosystem utility token in Chakra Guru DAO.
            Participate in the Pre Sale. You can purchase KARMA tokens as an
            early adopter of our project Chakra Guru DAO. The receipt of the
            tokens will be claimed out according to the unlock map.
          </Description>
          <Box pt={4} width="full">
            {status === "waiting" ? (
              <Timer expireOn={expiresAt} />
            ) : status === "process" ? (
              <Button
                size="lg"
                leftIcon={<FaWallet size="20px" />}
                alignItems="center"
              >
                Buy KARMA Tokens
              </Button>
            ) : status === "finished" ? (
              <Button
                size="lg"
                leftIcon={<Metamask size="28px" mb="2px" mr={3} />}
                alignItems="center"
              >
                Add KARMA to MetaMask
              </Button>
            ) : null}
          </Box>
        </VStack>
        <TickerBlock
          tokenName={tokenName}
          tokenSymbol={tokenSymbol}
          tokenPrice={tokenPrice}
          fromSymbol={fromSymbol}
          saleStartAt={saleStartAt}
          saleEndAt={saleEndAt}
          softCapToken={softCapToken}
          hardCapToken={hardCapToken}
        />
      </SimpleGrid>
    </Flex>
  );
};
