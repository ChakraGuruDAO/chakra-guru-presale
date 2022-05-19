import { Divider, HStack, VStack, Text, Progress } from "@chakra-ui/react";
import { Karma } from "components/chakra";
import { SimpleBlock } from "components/simpleBlock";

export interface TicketBlockProps {
  tokenName: string;
  tokenSymbol: string;
  fromSymbol: string;
  fromPrice: number;
  usdPrice: number;
}

export const TicketBlock: React.FC<TicketBlockProps> = ({
  tokenName,
  tokenSymbol,
  fromPrice,
  fromSymbol,
  usdPrice,
}) => {
  return (
    <SimpleBlock>
      <HStack>
        <Karma />
        <VStack>
          <Text>{tokenName}</Text>
          <Text>{tokenSymbol}</Text>
        </VStack>
        <VStack>
          <Text>Price</Text>
          <Text>${usdPrice}</Text>
          <Text>
            {fromPrice} {fromSymbol}
          </Text>
        </VStack>
      </HStack>
      <Divider />
      <HStack>
        <VStack>
          <Text>Round</Text>
          <Text>Pre-Sale</Text>
        </VStack>
        <VStack>
          <Text>Time left</Text>
          <Text>Sale ended</Text>
        </VStack>
      </HStack>
      <Progress
        borderRadius="30px"
        size="lg"
        value={80}
        hasStripe={true}
        isAnimated={true}
        colorScheme="blue"
      />
      <Divider />
      <HStack>
        <VStack>
          <Text>Token Distribution</Text>
          <Text>18,000,000</Text>
        </VStack>
        <VStack>
          <Text>Total Raised</Text>
          <Text>1,188,000/1,888,000</Text>
        </VStack>
      </HStack>
    </SimpleBlock>
  );
};
