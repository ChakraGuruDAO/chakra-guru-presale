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

const PresalePage: NextPage = () => {
  return (
    <Flex flex="1" gap="60px" direction="column">
      <Presale />
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
