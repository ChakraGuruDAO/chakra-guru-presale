import {
  ButtonGroup,
  Container,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "components/logo";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Container as="footer" flex={1}>
      <Container>
        <Flex justify="space-between" direction="row" align="center">
          <Logo />
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Flex>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
          reserved.
        </Text>
      </Container>
    </Container>
  );
};
