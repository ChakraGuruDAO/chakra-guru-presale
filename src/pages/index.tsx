import { NextPage } from "next";
import { BigNumber, ethers, utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { Dashboard } from "src/layouts/dashboard";
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
import { RoadmapComponent } from "src/components/steps";
import { PresaleHero } from "src/blocks/presale-hero";
import { PresaleInfo } from "src/blocks/presale-info";
import { Karma } from "src/components/chakra";

import { ButtonConnect } from "src/components/buttonConnect";
import {
  useContracts,
  useAllData,
  useTokenInfo,
  useVestingInfo,
  useTokenSaleInfo,
  useContractFunction,
} from "src/logic";
const date = new Date(2023, 1, 1, 1, 1, 1, 0);

const PresalePage: NextPage = () => {
  const { contracts } = useAllData();

  const { data } = useContractFunction(
    contracts?.karmaPrivateCrowdsale,
    "getRate"
  );
  const {
    tokenAddress,
    decimals,
    totalSupply,
    tokenName,
    tokenSymbol,
    projectSite,
  } = useTokenInfo();

  const {
    openingTime,
    closingTime,
    saleCap,
    saleLimit,
    saleNetwork,

    rate,
    raiseTokenSymbol,
    contribution,
  } = useTokenSaleInfo();

  const { vestingInfo, zeroDate, vestingMap } = useVestingInfo();
  return (
    <Flex flex="1" gap="60px" direction="column">
      <PresaleHero
        tokenAddress={tokenAddress}
        decimals={decimals}
        tokenName={tokenName}
        tokenSymbol={tokenSymbol}
        fromSymbol={raiseTokenSymbol}
        saleStartAt={openingTime}
        saleEndAt={closingTime}
        rate={rate}
        softCapToken={saleCap?.minSaleCap}
        hardCapToken={saleCap?.maxSaleCap}
      />
      <PresaleInfo
        tokenInfo={{
          tokenName,
          tokenSymbol,
          tokenLogo: (
            <Flex textAlign="right" justifyContent="flex-end">
              <Karma />
            </Flex>
          ),
          tokenDecimals: decimals,
          totalSupply: totalSupply,
          tokenAddress,
        }}
        saleInfo={{
          projectSite,
          saleStartAt: openingTime,
          saleEndAt: closingTime,
          fromSymbol: raiseTokenSymbol,
          rate,
          softCapToken: saleCap?.minSaleCap,
          hardCapToken: saleCap?.maxSaleCap,
          saleNetwork,

          vestingPortionsUnlockTime: vestingInfo?.vestingPortionsUnlockTime,
          vestingPercentPerPortion: vestingInfo?.vestingPercentPerPortion,
          vestingPercentPrecision: vestingInfo?.vestingPercentPrecision,

          minFromPrice: saleLimit?.minSaleLimit,
          maxFromPrice: saleLimit?.maxSaleLimit,
        }}
        timeline={[
          { milestone: "Pre-Sale Start", date: openingTime },
          { milestone: "Pre-Sale End", date: closingTime },
          { milestone: "Claim Start", date: zeroDate },
        ]}
        claimInfo={{
          saleTokenAmount: contribution,
          vestingMap: vestingMap,
        }}
      />
      <Flex flex="1" flexDirection="column" alignItems="center">
        <HStack alignItems="center" mb={{ base: 6, sm: 0 }}>
          <Heading textAlign="center">
            How to take part in the <Text color={"blue.400"}>pre-sale</Text>
          </Heading>
        </HStack>
        <Box mt={{ base: 0, sm: 20 }}>
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
                    <ButtonConnect />
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
