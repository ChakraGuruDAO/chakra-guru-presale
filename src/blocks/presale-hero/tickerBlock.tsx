import {
  HStack,
  VStack,
  Text,
  Img,
  Button,
  StackDivider,
  Progress,
  Box,
  Flex,
} from "@chakra-ui/react";
import { BigNumber } from "ethers";

import { SimpleBlock } from "src/components/simpleBlock";
import dayjs from "dayjs";
import React, { PropsWithChildren, useMemo } from "react";
import Decimal from "decimal.js";

export interface TickerBlockProps {
  status: "waiting" | "process" | "finished";
  tokenName: string;
  tokenSymbol: string;
  rate: BigNumber;
  fromSymbol: string;
  saleStartAt: Date;
  saleEndAt: Date;
  softCapToken: BigNumber;
  hardCapToken: BigNumber;
  saleBalance: BigNumber;
}

export const TickerBlock: React.FC<TickerBlockProps> = (props) => {
  const { status } = props;
  return status === "waiting" ? (
    <BlockWaiting {...props} />
  ) : status === "finished" ? (
    <BlockFinished {...props} />
  ) : (
    <BlockProcess {...props} />
  );
};

const KeyValueComponent: React.FC<
  PropsWithChildren<{
    title: React.ReactNode;
    type: "left" | "right" | "center";
  }>
> = ({ title, type, children }) => (
  <VStack
    alignItems={
      type === "left" ? "flex-start" : type === "center" ? "center" : "flex-end"
    }
    textAlign={
      type === "left" ? "left" : type === "center" ? "center" : "right"
    }
    spacing={0}
  >
    <Text fontSize={{ base: 16 }} fontWeight={200}>
      {title}
    </Text>
    <Text
      textTransform="uppercase"
      fontWeight={600}
      lineHeight="150%"
      fontSize={{ base: 18 }}
    >
      {children}
    </Text>
  </VStack>
);

const BlockWaiting: React.FC<TickerBlockProps> = ({
  tokenName,
  tokenSymbol,
  rate,
  fromSymbol,
  saleStartAt,
  saleEndAt,
  softCapToken,
  hardCapToken,
  saleBalance,
}) => {
  return (
    <SimpleBlock>
      <VStack
        alignItems="flex-end"
        justifyContent="flex-end"
        gap={4}
        divider={<StackDivider />}
      >
        <HStack justifyContent="space-between" width="100%">
          <HStack>
            <Img src="/karma.svg" boxSize={{ base: 16 }} />
            <KeyValueComponent title={tokenName} type="left">
              {tokenSymbol}
            </KeyValueComponent>
          </HStack>
          <VStack textAlign="right" alignItems="flex-end" spacing={0}>
            <KeyValueComponent title="Price" type="right">
              $
              {new Decimal(1)
                .div(rate?.toNumber() || 1)
                .toNumber()
                .toLocaleString("en-US")}
            </KeyValueComponent>
            <Text textAlign="right" fontSize={{ base: 12 }} fontWeight={400}>
              {new Decimal(1)
                .div(rate?.toNumber() || 1)
                .toNumber()
                .toLocaleString("en-US")}{" "}
              {fromSymbol}
            </Text>
          </VStack>
        </HStack>

        <Flex flexDirection="column" width="100%" gap={{ base: 4 }}>
          <HStack justifyContent="space-between" width="100%">
            <KeyValueComponent title="Start At" type="left">
              {dayjs(saleStartAt).format("MMMM D YYYY h:mm A")}
            </KeyValueComponent>
            <KeyValueComponent title="End At" type="right">
              {dayjs(saleEndAt).format("MMMM D YYYY h:mm A")}
            </KeyValueComponent>
          </HStack>
          <Progress
            size="lg"
            borderRadius={10}
            isIndeterminate
            colorScheme="blue"
            isAnimated
          />
        </Flex>

        <Flex flexDirection="row" justifyContent="space-between" width="100%">
          <KeyValueComponent title="Soft CAP" type="left">
            {softCapToken.toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="$ CAPS" type="center">
            ${softCapToken.div(rate).toNumber().toLocaleString("en-US")} / $
            {hardCapToken.div(rate).toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="Hard CAP" type="right">
            {hardCapToken.toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
        </Flex>
      </VStack>
    </SimpleBlock>
  );
};
const BlockProcess: React.FC<TickerBlockProps> = ({
  tokenName,
  tokenSymbol,
  rate,
  fromSymbol,
  saleStartAt,
  saleEndAt,
  softCapToken,
  hardCapToken,
  saleBalance,
}) => {
  const nextTarget = useMemo<[string, BigNumber]>(
    () =>
      saleBalance.lt(softCapToken)
        ? ["Next target: Soft CAP", softCapToken]
        : saleBalance.gte(softCapToken) && saleBalance.lt(hardCapToken)
        ? ["Next target: Hard CAP", hardCapToken]
        : ["Finished!", hardCapToken],
    [softCapToken, hardCapToken, saleBalance]
  );

  return (
    <SimpleBlock>
      <VStack
        alignItems="flex-end"
        justifyContent="flex-end"
        gap={4}
        divider={<StackDivider />}
      >
        <HStack justifyContent="space-between" width="100%">
          <HStack>
            <Img src="/karma.svg" boxSize={{ base: 16 }} />
            <KeyValueComponent title={tokenName} type="left">
              {tokenSymbol}
            </KeyValueComponent>
          </HStack>
          <VStack textAlign="right" alignItems="flex-end" spacing={0}>
            <KeyValueComponent title="Price" type="right">
              $
              {new Decimal(1)
                .div(rate?.toNumber() || 1)
                .toNumber()
                .toLocaleString("en-US")}
            </KeyValueComponent>
            <Text textAlign="right" fontSize={{ base: 12 }} fontWeight={400}>
              {new Decimal(1)
                .div(rate?.toNumber() || 1)
                .toNumber()
                .toLocaleString("en-US")}{" "}
              {fromSymbol}
            </Text>
          </VStack>
        </HStack>

        <Flex flexDirection="column" width="100%" gap={{ base: 4 }}>
          <HStack justifyContent="space-between" width="100%">
            <KeyValueComponent title="Raised, %" type="left">
              {new Decimal(saleBalance.toNumber())
                .div(nextTarget[1].toNumber())
                .mul(100)
                .toNumber()
                .toLocaleString("en-US")}
              % - {saleBalance.toNumber().toLocaleString("en-US")} {tokenSymbol}
            </KeyValueComponent>
            <KeyValueComponent title={nextTarget[0]} type="right">
              {nextTarget[1].toNumber().toLocaleString("en-US")}
            </KeyValueComponent>
          </HStack>
          <Progress
            size="lg"
            borderRadius={10}
            colorScheme="blue"
            isAnimated
            value={saleBalance.toNumber()}
            max={nextTarget[1].toNumber()}
          />
        </Flex>

        <Flex flexDirection="row" justifyContent="space-between" width="100%">
          <KeyValueComponent title="Soft CAP" type="left">
            {softCapToken.toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="Hard CAP" type="center">
            {hardCapToken.toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="End At" type="right">
            {dayjs(saleEndAt).format("MMMM D YYYY h:mm A")}
          </KeyValueComponent>
        </Flex>
      </VStack>
    </SimpleBlock>
  );
};
const BlockFinished: React.FC<TickerBlockProps> = ({
  tokenName,
  tokenSymbol,
  rate,
  fromSymbol,
  saleStartAt,
  saleEndAt,
  softCapToken,
  hardCapToken,
  saleBalance,
}) => {
  return (
    <SimpleBlock>
      <VStack
        alignItems="flex-end"
        justifyContent="flex-end"
        gap={4}
        divider={<StackDivider />}
      >
        <HStack justifyContent="space-between" width="100%">
          <HStack>
            <Img src="/karma.svg" boxSize={{ base: 16 }} />
            <KeyValueComponent title={tokenName} type="left">
              {tokenSymbol}
            </KeyValueComponent>
          </HStack>
          <VStack textAlign="right" alignItems="flex-end" spacing={0}>
            <KeyValueComponent title="Price" type="right">
              $
              {new Decimal(1)
                .div(rate?.toNumber() || 1)
                .toNumber()
                .toLocaleString("en-US")}
            </KeyValueComponent>
            <Text textAlign="right" fontSize={{ base: 12 }} fontWeight={400}>
              {new Decimal(1)
                .div(rate?.toNumber() || 1)
                .toNumber()
                .toLocaleString("en-US")}{" "}
              {fromSymbol}
            </Text>
          </VStack>
        </HStack>

        <Flex flexDirection="column" width="100%" gap={{ base: 4 }}>
          <HStack justifyContent="space-between" width="100%">
            <KeyValueComponent title="Raised, %" type="left">
              {new Decimal(saleBalance.toNumber())
                .div(hardCapToken.toNumber())
                .mul(100)
                .toNumber()
                .toLocaleString("en-US")}
              % - {saleBalance.toNumber().toLocaleString("en-US")} {tokenSymbol}
            </KeyValueComponent>
            <KeyValueComponent title="Status" type="right">
              FINISHED
            </KeyValueComponent>
          </HStack>
          <Progress
            size="lg"
            borderRadius={10}
            colorScheme="blue"
            isAnimated
            value={saleBalance.toNumber()}
            max={hardCapToken.toNumber()}
          />
        </Flex>

        <Flex flexDirection="row" justifyContent="space-between" width="100%">
          <KeyValueComponent title="Soft CAP" type="left">
            {softCapToken.toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="$ CAPS" type="center">
            ${softCapToken.div(rate).toNumber().toLocaleString("en-US")} / $
            {hardCapToken.div(rate).toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="Hard CAP" type="right">
            {hardCapToken.toNumber().toLocaleString("en-US")}
          </KeyValueComponent>
        </Flex>
      </VStack>
    </SimpleBlock>
  );
};
