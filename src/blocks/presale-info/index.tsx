import LINQ from "@berish/linq";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Heading,
  Link,
  SimpleGrid,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ButtonConnect } from "src/components/buttonConnect";
import { SimpleBlock } from "src/components/simpleBlock";
import dayjs from "dayjs";
import dayjsRelativeTime from "dayjs/plugin/relativeTime";
import NextLink from "next/link";
import { useMemo } from "react";
import { BigNumber } from "ethers";
import Decimal from "decimal.js";
import { Duration, Time } from "src/logic";

dayjs.extend(dayjsRelativeTime);

export interface PresaleInfoTab {
  key: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface PresaleInfoProps {
  status: "waiting" | "process" | "finished";
  saleInfo?: {
    projectSite: string;
    fromSymbol: string;
    rate: BigNumber;
    softCapToken: BigNumber;
    hardCapToken: BigNumber;
    saleNetwork: string;

    vestingPortionsUnlockTime: number[];
    vestingPercentPerPortion: number[];
    vestingPercentPrecision: number;

    saleStartAt: Date;
    saleEndAt: Date;
    minFromPrice: BigNumber;
    maxFromPrice: BigNumber;
  };
  timeline?: { milestone: string; date: Date }[];
  tokenInfo?: {
    tokenName: string;
    tokenSymbol: string;
    tokenLogo: React.ReactNode;
    tokenDecimals: BigNumber;
    totalSupply: BigNumber;
    tokenAddress: string;
  };
  claimInfo?: {
    saleTokenAmount: BigNumber;
    vestingMap: {
      amount: number;
      isPortionWithdraw: boolean[];
    };
  };
}

export const PresaleInfo: React.FC<PresaleInfoProps> = ({
  tokenInfo,
  saleInfo,
  timeline,
  claimInfo,
  status,
}) => {
  const tokenInfoData = useMemo(
    () => [
      {
        key: "Token Name",
        value: tokenInfo?.tokenName,
      },
      {
        key: "Token Symbol",
        value: tokenInfo?.tokenSymbol,
      },
      {
        key: "Token Logo",
        value: tokenInfo?.tokenLogo,
      },
      {
        key: "Token Decimals",
        value: tokenInfo?.tokenDecimals?.toNumber().toLocaleString("en-US"),
      },
      {
        key: "Total Supply",
        value: tokenInfo?.totalSupply?.toNumber().toLocaleString("en-US"),
      },
      {
        key: "Token Address",
        value: tokenInfo?.tokenAddress,
      },
    ],
    [tokenInfo]
  );
  const saleInfoData = useMemo(
    () => [
      {
        key: "Project Site",
        value: (
          <NextLink href={saleInfo?.projectSite} passHref>
            <Link isExternal={true}>{saleInfo?.projectSite}</Link>
          </NextLink>
        ),
      },
      {
        key: "Sale Start (Date)",
        value: dayjs(saleInfo?.saleStartAt).format("dddd, MMMM D, YYYY h:mm A"),
      },
      {
        key: "Sale End (Date)",
        value: dayjs(saleInfo?.saleEndAt).format("dddd, MMMM D, YYYY h:mm A"),
      },
      // {
      //   key: "Number of Registrations",
      //   value: saleInfo?.numberOfInvestors,
      // },
      {
        key: "Token Price",
        value: `1 ${saleInfo?.fromSymbol} / ${saleInfo?.rate} ${tokenInfo?.tokenSymbol}`,
      },
      {
        key: <Box minW={{ base: 0, lg: 56 }}>One Person limit (min - max)</Box>,
        value: `${saleInfo.minFromPrice.toNumber().toLocaleString("en-US")} ${
          tokenInfo.tokenSymbol
        } - ${saleInfo.maxFromPrice.toNumber().toLocaleString("en-US")} ${
          tokenInfo.tokenSymbol
        }`,
      },
      {
        key: <Box minW={{ base: 0, lg: 56 }}>Soft CAP (Min Raise)</Box>,
        value: saleInfo?.softCapToken.toNumber().toLocaleString("en-US"),
      },
      {
        key: <Box minW={{ base: 0, lg: 56 }}>Hard CAP (Max Raise)</Box>,
        value: saleInfo?.hardCapToken.toNumber().toLocaleString("en-US"),
      },
      {
        key: "Sale Network",
        value: saleInfo?.saleNetwork,
      },
      {
        key: "Vesting Schedule",
        value: getVestingString(
          saleInfo?.vestingPercentPerPortion,
          saleInfo?.vestingPercentPrecision
        ),
      },
    ],
    [tokenInfo, saleInfo]
  );
  const claimInfoData = useMemo(
    () => [
      {
        key: "Sale Start (Date)",
        value: dayjs(saleInfo?.saleStartAt).format("dddd, MMMM D, YYYY h:mm A"),
      },
      {
        key: "Sale End (Date)",
        value: dayjs(saleInfo?.saleEndAt).format("dddd, MMMM D, YYYY h:mm A"),
      },
      {
        key: "Tokens Purchased",
        value: `${claimInfo?.saleTokenAmount
          .toNumber()
          .toLocaleString("en-US")} ${tokenInfo?.tokenSymbol}`,
      },
      {
        key: "Vesting",
        value: getVestingString(
          saleInfo?.vestingPercentPerPortion,
          saleInfo?.vestingPercentPrecision
        ),
      },
    ],
    [claimInfo, saleInfo, tokenInfo]
  );

  const vestingData = useMemo(
    () =>
      claimInfo?.vestingMap?.isPortionWithdraw &&
      saleInfo?.vestingPortionsUnlockTime &&
      saleInfo?.vestingPercentPerPortion
        ? claimInfo?.vestingMap?.isPortionWithdraw.map((isWithdraw, index) => {
            const time = saleInfo.vestingPortionsUnlockTime[index];
            const portion = saleInfo.vestingPercentPerPortion[index] || 0;
            const vested = new Decimal(portion).div(
              saleInfo.vestingPercentPrecision
            );
            const amount = new Decimal(claimInfo.saleTokenAmount.toNumber())
              .mul(portion)
              .div(saleInfo.vestingPercentPrecision)
              .toNumber();

            const unlockAt = Time().seconds(time).toDate();
            const canClaim = Time().seconds(time).toBN().lte(Time().toBN());

            return {
              vested: `${vested.mul(100).toNumber()}%`,
              amount,
              unlockAt: dayjs(unlockAt).format("dddd, MMMM D, YYYY h:mm A"),
              isClaimed: isWithdraw,
              canClaim,
              canClaimAt: !canClaim ? dayjs(unlockAt).fromNow() : null,
            };
          })
        : [],
    [claimInfo, saleInfo]
  );

  return (
    <Tabs>
      <TabList>
        <Tab>Sale Information</Tab>
        <Tab>Token Information</Tab>
        <Tab>Claim</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SimpleGrid gap={5} columns={{ base: 1, md: 2 }}>
            <SimpleBlock>
              <Table variant="key-value">
                <Tbody>
                  {saleInfoData.map(({ key, value }, index) => (
                    <Tr key={index}>
                      <Td>{key}</Td>
                      <Td>{value}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </SimpleBlock>
            <SimpleBlock>
              <Table variant="key-value">
                <Thead>
                  <Tr>
                    <Th>Milestone</Th>
                    <Th>Date (GMT+3)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {(timeline || []).map(({ milestone, date }) => (
                    <Tr key={milestone}>
                      <Td>{milestone}</Td>
                      <Td>{dayjs(date).format("dddd, MMMM D, YYYY h:mm A")}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </SimpleBlock>
          </SimpleGrid>
        </TabPanel>
        <TabPanel>
          <SimpleBlock>
            <Heading as="h1" fontSize="large">
              Token info
            </Heading>
            <Table variant="key-value">
              <Tbody>
                {tokenInfoData.map(({ key, value }) => (
                  <Tr key={key}>
                    <Td>{key}</Td>
                    <Td>{value}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </SimpleBlock>
        </TabPanel>
        <TabPanel>
          <SimpleBlock>
            <Table variant="key-value">
              <Tbody>
                {claimInfoData.map(({ key, value }) => (
                  <Tr key={key}>
                    <Td>{key}</Td>
                    <Td>{value}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {vestingData.length > 0 ? (
              <Accordion allowToggle={true} variant="block">
                <AccordionItem>
                  <AccordionButton>View your claims</AccordionButton>
                  <AccordionPanel pb={4}>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th>Portion ID</Th>
                          <Th>Vested %</Th>
                          <Th>Amount</Th>
                          <Th>Portion Unlock At</Th>
                          <Th>
                            <ButtonConnect />
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {vestingData.map(
                          (
                            {
                              vested,
                              amount,
                              unlockAt,
                              isClaimed,
                              canClaim,
                              canClaimAt,
                            },
                            index
                          ) => (
                            <Tr key={index}>
                              <Td>{index}</Td>
                              <Td>{vested}</Td>
                              <Td>{amount}</Td>
                              <Td>{unlockAt}</Td>
                              <Td>
                                {isClaimed ? (
                                  "Claimed Participation"
                                ) : canClaim ? (
                                  <Checkbox>Select Portion {index}</Checkbox>
                                ) : (
                                  `Unlocks ${canClaimAt}`
                                )}
                              </Td>
                            </Tr>
                          )
                        )}
                      </Tbody>
                    </Table>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ) : (
              <Box
                border="1px solid var(--chakra-colors-teal-200)"
                px={2}
                py={2}
              >
                No data
              </Box>
            )}
          </SimpleBlock>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

function getVestingString(
  vesting: number[] = [],
  vestingPrecision: number = 100
) {
  vesting = vesting.map((item) =>
    new Decimal(item).div(vestingPrecision).mul(100).toNumber()
  );
  const [tge, ...other] = vesting;
  const data: string[] = [];

  if (tge) {
    data.push(`${tge}% at TGE`);
  } else {
    other.unshift(tge);
  }

  const claim = LINQ.from<[number, number]>([]);

  for (const percent of other) {
    const lastClaim = claim.last();
    if (!lastClaim) {
      claim.push([percent, 1]);
    } else {
      if (lastClaim[0] === percent) {
        lastClaim[1]++;
      } else {
        claim.push([percent, 1]);
      }
    }
  }

  data.push(
    ...claim
      .filter((m) => Boolean(m[1]))
      .map(([percent, months]) =>
        percent === 0
          ? `${months} months cliff`
          : `${percent}% linear vesting for ${months} months`
      )
  );
  return data.filter(Boolean).join(", ");
}
