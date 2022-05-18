import { Button, ButtonGroup, Flex } from "@chakra-ui/react";

export const HeaderMenu: React.FC = () => {
  return (
    <>
      <Flex>
        <ButtonGroup variant="ghost">
          <Button>Overview</Button>
          <Button>Pre-Sale</Button>
          <Button disabled={true}>NFT</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};
