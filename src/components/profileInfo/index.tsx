import React, { useEffect, useState } from "react";
import blockies from "blockies-ts";
import {
  Box,
  Flex,
  HStack,
  Img,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, utils } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

export const ProfileInfo: React.FC<{}> = () => {
  const { account, deactivate, library } = useWeb3React<Web3Provider>();

  const [balance, setBalance] = useState(BigNumber.from(0));

  useEffect(() => {
    if (library && account) {
      library.getBalance(account).then((data) => setBalance(data));
    }
  }, [library, account]);

  const finalBalance = balance ? utils.formatEther(balance) : "";

  let blockieImageSrc: string;
  if (typeof window !== "undefined") {
    blockieImageSrc = blockies.create({ seed: account }).toDataURL();
  }

  const backgroundColor = useColorModeValue(
    "var(--chakra-colors-teal-50)",
    "var(--chakra-colors-gray-800)"
  );

  const boxBorderColor = useColorModeValue(
    "var(--chakra-colors-teal-100)",
    "var(--chakra-colors-gray-600)"
  );

  return (
    <HStack>
      {account ? (
        <>
          <Flex
            flexDirection={"row"}
            borderRadius={4}
            backgroundColor={backgroundColor}
            border={`1px solid ${boxBorderColor}`}
            gap={2}
            pl={2}
          >
            <Text
              fontSize={14}
              px={2}
              py={2}
              justifyContent="center"
              alignItems="center"
            >
              {finalBalance} BNB
            </Text>
            <Text
              borderLeftRadius={10}
              border={`1px solid ${boxBorderColor}`}
              backgroundColor={boxBorderColor}
              borderRight={"none"}
              px={2}
              py={2}
              fontSize={14}
            >
              {account.substring(0, 6)}...
            </Text>
          </Flex>
          <Img
            boxSize={6}
            borderRadius="full"
            src={blockieImageSrc}
            alt="profile photo"
          />
        </>
      ) : null}
    </HStack>
  );
};
