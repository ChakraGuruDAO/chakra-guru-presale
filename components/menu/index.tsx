import { Button, ButtonGroup, Flex, Link } from "@chakra-ui/react";

export const HeaderMenu: React.FC = () => {
  return (
    <>
      <Flex>
        <ButtonGroup variant="ghost">
          <Button as="a" href="/">
            Overview
          </Button>
          <Button as="a" href="/presale">
            Pre-Sale
          </Button>
          <Button disabled={true}>NFT</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};
