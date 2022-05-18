import { HStack } from "@chakra-ui/react";
import { ButtonConnect } from "../buttonConnect";
import { Logo } from "../logo";
import { HeaderMenu } from "../menu";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HStack>
      <Logo />
      <HeaderMenu />
      <ButtonConnect />
    </HStack>
  );
};
