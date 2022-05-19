import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBoolean,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ButtonConnect } from "../buttonConnect";
import { Logo } from "components/logo";
import { HeaderMenu } from "../menu";
import { ModeToggle } from "components/modeToggle";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [isOpen, { toggle, off }] = useBoolean();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <Flex flex="1" justifyContent="space-between" maxH="60px">
      <Logo />
      {isDesktop ? (
        <Flex gap={3}>
          <HeaderMenu />
          <ButtonConnect />
          <ModeToggle />
        </Flex>
      ) : (
        <>
          <IconButton
            variant="ghost"
            onClick={toggle}
            icon={<FaBars fontSize="1.5rem" />}
            aria-label="Open Menu"
            ref={menuButtonRef}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={off}
            finalFocusRef={menuButtonRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <HeaderMenu />
                <HStack gap={1}>
                  <ButtonConnect width="100%" />
                  <ModeToggle />
                </HStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};
