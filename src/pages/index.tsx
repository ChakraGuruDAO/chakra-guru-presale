import { NextPage } from "next";
import { Dashboard } from "src/layouts/dashboard";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { RoadmapComponent } from "src/components/steps";
import { PresaleHero } from "src/blocks/presale-hero";
import { PresaleInfo } from "src/blocks/presale-info";
import { Karma } from "src/components/chakra";

import { ButtonConnect } from "src/components/buttonConnect";
import { useTokenInfo, useVestingInfo, useTokenSaleInfo } from "src/logic";
import { useEffect, useMemo, useState } from "react";

const PresalePage: NextPage = () => {
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
    saleBalance,
    rate,
    raiseTokenSymbol,
    contribution,
    isFinished,
    raiseTokenAddress,
    karmaPrivateCrowdsaleAddress,
  } = useTokenSaleInfo();

  const { vestingInfo, zeroDate, vestingMap } = useVestingInfo();

  const [status, setStatus] = useState<"waiting" | "process" | "finished">(
    "waiting"
  );

  useEffect(() => {
    const checkStatus = () => {
      const now = Date.now();
      const _status =
        now < +openingTime ? "waiting" : isFinished ? "finished" : "process";
      setStatus(_status);
    };

    checkStatus();

    const timer = setInterval(() => checkStatus(), 1000);
    return () => clearInterval(timer);
  }, [openingTime, closingTime, isFinished]);

  return (
    <Flex flex="1" gap="60px" direction="column">
      <PresaleHero
        status={status}
        saleBalance={saleBalance}
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
        minSaleLimit={saleLimit?.minSaleLimit}
        maxSaleLimit={saleLimit?.maxSaleLimit}
        raiseTokenAddress={raiseTokenAddress}
        karmaPrivateCrowdsaleAddress={karmaPrivateCrowdsaleAddress}
      />
      <PresaleInfo
        status={status}
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
