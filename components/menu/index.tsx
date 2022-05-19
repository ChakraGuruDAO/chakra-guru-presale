import { Button, ButtonGroup, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const HeaderMenu: React.FC = () => {
  return (
    <>
      <Flex>
        <ButtonGroup
          variant="ghost"
          flexDirection={{ base: "column", md: "row" }}
          width={{ base: "full", md: "fit-content" }}
        >
          <NextLink href="/" passHref>
            <Button as="a">Pre-Sale</Button>
          </NextLink>

          <Button disabled={true}>Overview</Button>
          <Button disabled={true}>NFT</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};
