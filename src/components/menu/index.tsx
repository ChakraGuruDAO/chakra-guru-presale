import { Button, ButtonGroup, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const HeaderMenu: React.FC = () => {
  return (
    <ButtonGroup
      variant="ghost"
      flexDirection={{ base: "column", lg: "row" }}
      width={{ base: "full", lg: "fit-content" }}
    >
      <Button>
        <NextLink href="/" passHref>
          Pre-Sale
        </NextLink>
      </Button>

      <Button disabled={true}>Rewards</Button>
      <Button disabled={true}>Staking</Button>
      <Button disabled={true}>NFT</Button>
    </ButtonGroup>
  );
};
