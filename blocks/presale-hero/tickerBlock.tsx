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
import { SimpleBlock } from "components/simpleBlock";
import dayjs from "dayjs";
import React, { PropsWithChildren } from "react";

export interface TickerBlockProps {
  tokenName: string;
  tokenSymbol: string;
  tokenPrice: number;
  fromSymbol: string;
  saleStartAt: Date;
  saleEndAt: Date;
  softCapToken: number;
  hardCapToken: number;
}

export const TickerBlock: React.FC<TickerBlockProps> = ({
  tokenName,
  tokenSymbol,
  tokenPrice,
  fromSymbol,
  saleStartAt,
  saleEndAt,
  softCapToken,
  hardCapToken,
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
              ${tokenPrice.toLocaleString("en-US")}
            </KeyValueComponent>
            <Text textAlign="right" fontSize={{ base: 12 }} fontWeight={400}>
              {tokenPrice.toLocaleString("en-US")} {fromSymbol}
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
            {softCapToken.toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="$ CAPS" type="center">
            ${(softCapToken * tokenPrice).toLocaleString("en-US")} / $
            {(hardCapToken * tokenPrice).toLocaleString("en-US")}
          </KeyValueComponent>
          <KeyValueComponent title="Hard CAP" type="right">
            {hardCapToken.toLocaleString("en-US")}
          </KeyValueComponent>
        </Flex>
      </VStack>
    </SimpleBlock>
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
