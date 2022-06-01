import { ButtonGroup, Flex, IconButton, Text } from "@chakra-ui/react";
import { Logo } from "src/components/logo";
import {
  FaGithub,
  FaTwitter,
  FaYinYang,
  FaTelegramPlane,
  FaMedium,
  FaDiscord,
} from "react-icons/fa";

export interface FooterProps {
  siteUrl: string;
  telegramUrl: string;
  twitterUrl: string;
  githubUrl: string;
  discordUrl: string;
  mediumUrl: string;
}

export const Footer: React.FC<FooterProps> = ({
  siteUrl,
  telegramUrl,
  twitterUrl,
  githubUrl,
  discordUrl,
  mediumUrl,
}) => {
  return (
    <Flex
      as="footer"
      flex="1"
      width="100%"
      justifyContent={"space-between"}
      alignItems="center"
      maxH="60px"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex flex="1">
        <Logo />
      </Flex>
      <Flex my={{ base: 3 }}>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            target="_blank"
            href={siteUrl}
            aria-label="ChakraGuru"
            icon={<FaYinYang fontSize="1.5rem" transform="rotate(90)" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href={telegramUrl}
            aria-label="Telegram"
            icon={<FaTelegramPlane fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href={twitterUrl}
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href={githubUrl}
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href={discordUrl}
            aria-label="Discord"
            icon={<FaDiscord fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            target="_blank"
            href={mediumUrl}
            aria-label="Medium"
            icon={<FaMedium fontSize="1.5rem" />}
          />
        </ButtonGroup>
      </Flex>
      <Flex flex="1" justifyContent="flex-end">
        <Text fontSize="sm" color="subtle" align="right">
          &copy; {new Date().getFullYear()} Chakra Guru DAO. All rights
          reserved.
        </Text>
      </Flex>
    </Flex>
  );
};
