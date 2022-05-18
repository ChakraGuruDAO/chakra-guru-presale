import { Flex } from "@chakra-ui/react";
import { ButtonConnect } from "../buttonConnect";
import { Logo } from "components/logo";
import { HeaderMenu } from "../menu";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Flex flex="1" justifyContent="space-between" maxH="60px">
      <Logo />
      <Flex>
        <HeaderMenu />
        <ButtonConnect />
      </Flex>
    </Flex>
  );
};
