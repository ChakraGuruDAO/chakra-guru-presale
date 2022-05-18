import {
  ButtonGroup,
  Container,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "components/logo";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaSitemap,
  FaMap,
  FaYinYang,
  FaTelegramPlane,
  FaTelegram,
  FaMediumM,
  FaMedium,
  FaDiscord,
} from "react-icons/fa";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex
      as="footer"
      flex="1"
      width="100%"
      justifyContent={"space-between"}
      alignItems="center"
      maxH="60px"
    >
      <Flex flex="1">
        <Logo />
      </Flex>
      <Flex>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaYinYang fontSize="1.5rem" transform="rotate(90)" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaTelegramPlane fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaTwitter fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaDiscord fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaMedium fontSize="1.5rem" transform="" />}
          />
        </ButtonGroup>
      </Flex>
      <Flex flex="1" justifyContent="flex-end">
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Chakra Guru DAO. All rights
          reserved.
        </Text>
      </Flex>
    </Flex>
  );
};
