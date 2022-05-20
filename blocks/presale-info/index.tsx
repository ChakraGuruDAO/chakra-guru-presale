import LINQ from "@berish/linq";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Checkbox,
  Heading,
  Link,
  SimpleGrid,
  Tab,
  Table,
  TableCaption,
  TableContainer,
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
import { SimpleBlock } from "components/simpleBlock";
import { Title } from "components/title";
import dayjs from "dayjs";
import dayjsRelativeTime from "dayjs/plugin/relativeTime";
import NextLink from "next/link";
import { useMemo } from "react";

dayjs.extend(dayjsRelativeTime);

export interface PresaleInfoTab {
  key: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface PresaleInfoProps {
  saleInfo?: {
    projectSite: string;
    numberOfInvestors: number;
    fromSymbol: string;
    tokenPrice: number;
    softCapToken: number;
    hardCapToken: number;
    saleNetwork: string;
    vestingSchedule: number[];
    saleStartAt: Date;
    saleEndAt: Date;
  };
  timeline?: { milestone: string; date: Date }[];
  tokenInfo?: {
    tokenName: string;
    tokenSymbol: string;
    tokenLogo: React.ReactNode;
    tokenDecimals: number;
    totalSupply: number;
    tokenAddress: string;
  };
  claimInfo?: {
    amountFrom: number;
    amountTo: number;

    vesting: {
      id: number;
      vested: number;
      amount: number;
      unlockAt: Date;
      isClaimed: boolean;
      canClaim: boolean;
    }[];
  };
}

export const PresaleInfo: React.FC<PresaleInfoProps> = ({
  tokenInfo,
  saleInfo,
  timeline,
  claimInfo,
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
        value: tokenInfo?.tokenDecimals,
      },
      {
        key: "Total Supply",
        value: tokenInfo?.totalSupply.toLocaleString("en-US"),
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
      {
        key: "Number of Registrations",
        value: saleInfo?.numberOfInvestors,
      },
      {
        key: "From Symbol",
        value: saleInfo?.fromSymbol,
      },
      {
        key: "Token Price",
        value: saleInfo?.tokenPrice,
      },
      {
        key: "Soft CAP",
        value: saleInfo?.softCapToken.toLocaleString("en-US"),
      },
      {
        key: "Hard CAP",
        value: saleInfo?.hardCapToken.toLocaleString("en-US"),
      },
      {
        key: "Sale Network",
        value: saleInfo?.saleNetwork,
      },
      {
        key: "Vesting Schedule",
        value: getVestingString(saleInfo?.vestingSchedule),
      },
    ],
    [saleInfo]
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
        key: "Tokens Bounht",
        value: `${claimInfo?.amountTo} ${tokenInfo?.tokenName} (${claimInfo?.amountFrom} ${saleInfo?.fromSymbol})`,
      },
      {
        key: "Vesting",
        value: getVestingString(saleInfo?.vestingSchedule),
      },
    ],
    [claimInfo, saleInfo, tokenInfo]
  );

  const vestingData = useMemo(
    () =>
      claimInfo?.vesting
        ? claimInfo.vesting.map(
            ({ id, vested, amount, unlockAt, isClaimed, canClaim }) => ({
              id,
              vested: `${vested * 100}%`,
              amount: `${amount} ${tokenInfo?.tokenSymbol}`,
              unlockAt: dayjs(unlockAt).format("dddd, MMMM D, YYYY h:mm A"),
              isClaimed,
              canClaim: !!canClaim,
              canClaimAt: !canClaim ? dayjs(unlockAt).fromNow() : null,
            })
          )
        : null,
    [claimInfo, tokenInfo]
  );

  return (
    <Tabs>
      <TabList>
        <Tab>Sale Information</Tab>
        <Tab>Token Information</Tab>
        <Tab isDisabled={true}>Claim</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SimpleGrid gap={5} columns={{ base: 1, md: 2 }}>
            <SimpleBlock>
              <Table variant="key-value">
                <Tbody>
                  {saleInfoData.map(({ key, value }) => (
                    <Tr key={key}>
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
            {vestingData ? (
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
                            <Button>Connect Wallet</Button>
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {vestingData.map(
                          ({
                            id,
                            vested,
                            amount,
                            unlockAt,
                            isClaimed,
                            canClaim,
                            canClaimAt,
                          }) => (
                            <Tr key={id}>
                              <Td>{id}</Td>
                              <Td>{vested}</Td>
                              <Td>{amount}</Td>
                              <Td>{unlockAt}</Td>
                              <Td>
                                {isClaimed ? (
                                  "Claimed Participation"
                                ) : canClaim ? (
                                  <Checkbox>Select Portion {id}</Checkbox>
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
              "No data"
            )}
          </SimpleBlock>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

function getVestingString(vesting: number[] = []) {
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
