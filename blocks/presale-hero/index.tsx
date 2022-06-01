import {
  Box,
  HStack,
  SimpleGrid,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Invest } from "blocks/invest";
import { Karma } from "components/chakra";
import { Description } from "components/description";
import { Metamask } from "components/metamask";
import { Timer } from "components/timer";
import { Title } from "components/title";
import {} from "const";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { TickerBlock } from "./tickerBlock";

export interface PresaleHeroProps {
  status: "waiting" | "process" | "finished";
  expiresAt: Date;
  tokenName: string;
  tokenSymbol: string;
  saleStartAt: Date;
  saleEndAt: Date;
  tokenPrice: number;
  softCapToken: number;
  hardCapToken: number;
  fromSymbol: string;
}

export const PresaleHero: React.FC<PresaleHeroProps> = ({
  status,
  expiresAt,
  tokenName,
  tokenSymbol,
  tokenPrice,
  softCapToken,
  hardCapToken,
  saleStartAt,
  saleEndAt,
  fromSymbol,
}) => {
  return (
    <Flex flex={1} flexDirection="column">
      <Flex mb="10">
        <Box flex="1">
          <Flex
            gap={{ base: 1, md: 5 }}
            alignItems="center"
            justifyContent="center"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Title>Pre-Sale</Title>
            <HStack spacing={4}>
              <Title>KARMA</Title>
              <Karma />
              <Title>Tokens</Title>
            </HStack>
          </Flex>
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
              <Invest />
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
