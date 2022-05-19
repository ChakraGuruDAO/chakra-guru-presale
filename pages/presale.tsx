import { NextPage } from "next";
import { Dashboard } from "layouts/dashboard";
import {
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Presale } from "blocks/presale";
import { StepsVertical } from "components/stepsVertical";
import { PresaleInfo } from "blocks/presale-info";
import { Karma } from "components/chakra";
const date = new Date(2023, 1, 1, 1, 1, 1, 0);

const PresalePage: NextPage = () => {
  return (
    <Flex flex="1" gap="60px" direction="column">
      <Presale />
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
        claimInfo={{
          amountFrom: 100,
          amountTo: 1000,

          vesting: [
            {
              id: 0,
              vested: 0.1,
              amount: 5.01,
              unlockAt: date,
              isClaimed: true,
              canClaim: true,
            },
            {
              id: 1,
              vested: 0.1,
              amount: 5.01,
              unlockAt: date,
              isClaimed: true,
              canClaim: true,
            },
            {
              id: 2,
              vested: 0.1,
              amount: 5.01,
              unlockAt: date,
              isClaimed: false,
              canClaim: true,
            },
            {
              id: 3,
              vested: 0.1,
              amount: 5.01,
              unlockAt: date,
              isClaimed: false,
              canClaim: false,
            },
          ],
        }}
      />
      <Container flex="1">
        <HStack alignItems="center">
          <Heading>How to take part in the</Heading>
          <Heading color="blue">pre-sale</Heading>
        </HStack>
        {/* <StepsVertical /> */}
      </Container>
    </Flex>
  );
};

PresalePage.getLayout = ({ children }) => {
  return <Dashboard>{children}</Dashboard>;
};

export default PresalePage;
