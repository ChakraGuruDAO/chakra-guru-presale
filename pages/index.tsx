import { NextPage } from "next";
import { Dashboard } from "layouts/dashboard";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { RoadmapComponent } from "components/steps";
import { PresaleHero } from "blocks/presale-hero";
import { PresaleInfo } from "blocks/presale-info";
import { Karma } from "components/chakra";
const date = new Date(2023, 1, 1, 1, 1, 1, 0);

const PresalePage: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Flex flex="1" gap="60px" direction="column">
      <PresaleHero status="waiting" expiresAt={date} />
      <PresaleInfo
        tokenInfo={{
          tokenName: "KARMA Token",
          tokenSymbol: "KARMA",
          tokenLogo: <Karma />,
          tokenDecimals: 20,
          totalSupply: 1000,
          tokenAddress: "0x00000000000000000000",
        }}
        saleInfo={{
          projectSite: "https://chakra.guru/",
          saleStartAt: date,
          saleEndAt: date,
          numberOfInvestors: 0,
          fromSymbol: "BUSD",
          tokenPrice: 0.2,
          softCapToken: 1000000,
          hardCapToken: 2000000,
          saleNetwork: "BSC",
          vestingSchedule: [
            10, 0, 0, 0, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5,
            7.5,
          ],
        }}
        timeline={[
          { milestone: "Pre-Sale Start", date: date },
          { milestone: "Pre-Sale End", date: date },
          { milestone: "Claim Start", date: date },
        ]}
        // claimInfo={{
        //   amountFrom: 100,
        //   amountTo: 1000,

        //   vesting: [
        //     {
        //       id: 0,
        //       vested: 0.1,
        //       amount: 5.01,
        //       unlockAt: date,
        //       isClaimed: true,
        //       canClaim: true,
        //     },
        //     {
        //       id: 1,
        //       vested: 0.1,
        //       amount: 5.01,
        //       unlockAt: date,
        //       isClaimed: true,
        //       canClaim: true,
        //     },
        //     {
        //       id: 2,
        //       vested: 0.1,
        //       amount: 5.01,
        //       unlockAt: date,
        //       isClaimed: false,
        //       canClaim: true,
        //     },
        //     {
        //       id: 3,
        //       vested: 0.1,
        //       amount: 5.01,
        //       unlockAt: date,
        //       isClaimed: false,
        //       canClaim: false,
        //     },
        //   ],
        // }}
      />
      <Flex flex="1" flexDirection="column" alignItems="center">
        <HStack alignItems="center">
          <Heading>How to take part in the</Heading>
          <Heading color="blue">pre-sale</Heading>
        </HStack>
        <Box mt={20}>
          <RoadmapComponent
            items={[
              {
                key: 1,
                title: "1. Connect MetaMask Wallet",
                content: (
                  <VStack>
                    <Text>
                      First you need to install a Metamask Wallet. After that
                      you need to Connect it
                    </Text>
                    <Button>Connect Wallet</Button>
                  </VStack>
                ),
              },
              {
                key: 2,
                title: "2. Buy $BUSD for Pre-Sale",
                content: (
                  <Text>
                    You will need other tokens to participate in the sale. Take
                    care of this in advance, because the sale can be closed
                    quickly
                  </Text>
                ),
              },
              {
                key: 3,
                title: "3. Register for Sale",
                content: (
                  <Text>
                    During the Pre-Sale period, you must confirm your interest
                    in participating. After the Sale closes, you will no longer
                    be able to buy tokens in this sale
                  </Text>
                ),
              },
              {
                key: 4,
                title: "4. Claim your tokens",
                content: (
                  <Text>
                    After the end of the sale, you can claim any tokens you have
                    purchased according to the vesting map.
                  </Text>
                ),
              },
            ]}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

PresalePage.getLayout = ({ children }) => {
  return <Dashboard>{children}</Dashboard>;
};

export default PresalePage;
