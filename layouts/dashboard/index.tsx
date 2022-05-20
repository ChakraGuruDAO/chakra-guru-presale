import { Container, Flex, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Footer, Header } from "../../components";

export const Dashboard: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container
      minH="100vh"
      maxW="1200px"
      flexDirection="column"
      margin="0px auto"
    >
      <Flex width="100%" mt="10" mb="10">
        <Header />
      </Flex>
      <Flex flex="1" width="100%">
        {children}
      </Flex>
      <Flex width="100%" pt="10" pb="10">
        <Footer
          siteUrl="https://chakra.guru/"
          githubUrl="https://github.com/ChakraGuruDAO"
          telegramUrl="https://t.me/chakra_guru"
          discordUrl="https://discord.gg/FtvwdzHhkK"
          twitterUrl="https://twitter.com/ChakraGuruDAO"
          mediumUrl="https://chakraguru.medium.com/"
        />
      </Flex>
    </Container>
  );
};
