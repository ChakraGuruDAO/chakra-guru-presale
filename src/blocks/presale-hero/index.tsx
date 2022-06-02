import {
  Box,
  HStack,
  SimpleGrid,
  VStack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { BigNumber } from "ethers";
import React, { useMemo } from "react";
import { Invest } from "src/blocks/invest";
import { Karma } from "src/components/chakra";
import { Description } from "src/components/description";
import { Metamask } from "src/components/metamask";
import { Timer } from "src/components/timer";
import { Title } from "src/components/title";
import { addToken, useAllData, useTokenInfo } from "src/logic";
import { TickerBlock } from "./tickerBlock";

export interface PresaleHeroProps {
  status: "waiting" | "process" | "finished";
  tokenAddress: string;
  tokenName: string;
  tokenSymbol: string;
  decimals: BigNumber;
  saleStartAt: Date;
  saleEndAt: Date;
  rate: BigNumber;
  softCapToken: BigNumber;
  hardCapToken: BigNumber;
  fromSymbol: string;
  saleBalance: BigNumber;
  minSaleLimit: BigNumber;
  maxSaleLimit: BigNumber;
  raiseTokenAddress: string;
  karmaPrivateCrowdsaleAddress: string;
  contribution: BigNumber;
}

export const PresaleHero: React.FC<PresaleHeroProps> = ({
  tokenAddress,
  tokenName,
  tokenSymbol,
  rate,
  decimals,
  softCapToken,
  hardCapToken,
  saleStartAt,
  saleEndAt,
  fromSymbol,
  saleBalance,
  status,
  minSaleLimit,
  maxSaleLimit,
  raiseTokenAddress,
  karmaPrivateCrowdsaleAddress,
  contribution,
}) => {
  const { provider } = useAllData();

  const onClickAddToken = () => {
    addToken(
      provider,
      tokenAddress,
      tokenSymbol,
      decimals.toNumber(),
      "https://app.chakra.guru/karma.svg"
    );
  };

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
              <Timer expireOn={saleStartAt} />
            ) : status === "process" ? (
              <Invest
                tokenSymbol={tokenSymbol}
                raiseSymbol={fromSymbol}
                minSaleLimit={minSaleLimit}
                maxSaleLimit={maxSaleLimit}
                contribution={contribution}
                raiseTokenAddress={raiseTokenAddress}
                karmaPrivateCrowdsaleAddress={karmaPrivateCrowdsaleAddress}
              />
            ) : status === "finished" ? (
              <Button
                size="lg"
                leftIcon={<Metamask size="28px" mb="2px" mr={3} />}
                alignItems="center"
                onClick={onClickAddToken}
              >
                Add KARMA to MetaMask
              </Button>
            ) : null}
          </Box>
        </VStack>
        <TickerBlock
          status={status}
          saleBalance={saleBalance}
          tokenName={tokenName}
          tokenSymbol={tokenSymbol}
          rate={rate}
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
