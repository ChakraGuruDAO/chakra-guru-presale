import {
  VStack,
  Box,
  Text,
  Circle,
  createIcon,
  HStack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { SimpleBlock } from "components/simpleBlock";

export interface RoadmapComponentProps {
  items: RoadmapItem[];
}

type RoadmapItem = {
  key: number;
  title: string;
  content: React.ReactNode;
};

const CheckIcon = createIcon({
  displayName: "CheckIcon",
  viewBox: "0 0 17 12",
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5905 0.970069C17.1593 1.57235 17.1322 2.52171 16.5299 3.09052L7.52994 11.5905C6.93979 12.1479 6.01333 12.1347 5.43934 11.5607L0.93934 7.06066C0.353553 6.47488 0.353553 5.52513 0.93934 4.93934C1.52513 4.35356 2.47487 4.35356 3.06066 4.93934L6.52987 8.40856L14.4701 0.909484C15.0723 0.340667 16.0217 0.367791 16.5905 0.970069Z"
        fill="currentColor"
      />
    </>
  ),
});

export const RoadmapComponent: React.FC<RoadmapComponentProps> = ({
  items,
}) => {
  console.log(items);
  return (
    <VStack
      position="relative"
      gap={{ base: "65px", md: undefined }}
      width="100%"
      alignItems="stretch"
      px={100}
    >
      {items.map((item) => {
        const isLeft = item.key % 2 === 0;
        const content = (
          <SimpleBlock key={item.key}>
            <VStack>
              <Heading size="md">{item.title}</Heading>
              <Box>{item.content}</Box>
            </VStack>
          </SimpleBlock>
        );
        console.log(item, isLeft);
        return (
          <HStack flex={1} key={item.key} justifyContent="stretch">
            <Flex flex={1}>{!isLeft ? content : null}</Flex>
            <Flex px={5}>
              <Box
                borderRadius="100px"
                border="1px solid black"
                px="15px"
                py="10px"
                zIndex={1}
                background="white"
              >
                <CheckIcon />
              </Box>
            </Flex>
            <Flex flex={1}>{isLeft ? content : null}</Flex>
          </HStack>
        );
      })}
      <Box
        background="blue"
        zIndex={0}
        height="100%"
        left="49.8%"
        top="-6px"
        width="6px"
        position="absolute"
      />
    </VStack>
  );
};
