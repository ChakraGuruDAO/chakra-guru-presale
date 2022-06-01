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
import dynamic from "next/dynamic";
import { ProfileInfo } from "components/profileInfo";

export interface HeaderProps {}

const _Header: React.FC<HeaderProps> = ({}) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [isOpen, { toggle, off }] = useBoolean();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <Flex flex="1" justifyContent="space-between" maxH="60px">
      <Logo />
      {isDesktop ? (
        <Flex gap={3} alignItems="center">
          <HeaderMenu />
          <HStack gap={1}>
            <ProfileInfo />
            <ButtonConnect />
          </HStack>
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
                  <ProfileInfo />
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

export const Header = dynamic(async () => _Header, { ssr: false });
