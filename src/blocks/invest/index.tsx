import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useDisclosure,
  VStack,
  Text,
  useBoolean,
  Img,
} from "@chakra-ui/react";
import {
  chainGenerateExplorerUrl,
  useAllData,
  useChainId,
  useContractFunction,
  useContractFunctionChain,
  useContracts,
  useTokenSaleInfo,
} from "src/logic";
import React, { useCallback, useMemo, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { BigNumber } from "ethers";
import { FirstIcon, SecondIcon } from "src/components/icons";

export interface InvestProps {
  raiseTokenAddress: string;
  karmaPrivateCrowdsaleAddress: string;
  tokenSymbol: string;
  raiseSymbol: string;
  saleBalance: BigNumber;
  minSaleLimit: BigNumber;
  maxSaleLimit: BigNumber;
}

export const Invest: React.FC<InvestProps> = ({
  raiseTokenAddress,
  karmaPrivateCrowdsaleAddress,
  tokenSymbol,
  raiseSymbol,
  saleBalance,
  minSaleLimit,
  maxSaleLimit,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { contracts, account } = useAllData();
  const chainId = useChainId();

  const { rate } = useTokenSaleInfo();
  const [amountLoading, setAmountLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [amount, setAmount] = useState(minSaleLimit);

  const { data: allowance } = useContractFunctionChain(
    raiseTokenAddress && contracts?.ERC20(raiseTokenAddress),
    "allowance",
    (data) => data?.div(BigNumber.from(10).pow(18)) || BigNumber.from(0),
    account,
    karmaPrivateCrowdsaleAddress
  );

  const { data: balance } = useContractFunctionChain(
    raiseTokenAddress && contracts?.ERC20(raiseTokenAddress),
    "balanceOf",
    (data) => data?.div(BigNumber.from(10).pow(18)) || BigNumber.from(0),
    account
  );

  const saleAmount = useMemo(
    () => BigNumber.from(amount).mul(rate),
    [amount, rate]
  );

  const onApprove = useCallback(async () => {
    const raiseContract =
      raiseTokenAddress && contracts?.ERC20(raiseTokenAddress);
    if (raiseContract && karmaPrivateCrowdsaleAddress) {
      setAmountLoading(true);
      const tx = await raiseContract.functions
        .approve(
          karmaPrivateCrowdsaleAddress,
          BigNumber.from(1000).pow(18).sub(1)
        )
        .finally(() => setAmountLoading(false));

      const url =
        chainGenerateExplorerUrl[chainId] &&
        chainGenerateExplorerUrl[chainId](tx.hash);
      if (url) window.open(chainGenerateExplorerUrl[chainId], "_blank");
    }
  }, [contracts, raiseTokenAddress, karmaPrivateCrowdsaleAddress, chainId]);

  const onBuy = useCallback(async () => {
    if (contracts?.karmaPrivateCrowdsale) {
      await contracts?.karmaPrivateCrowdsale.buyTokens(
        account,
        BigNumber.from(amount).mul(BigNumber.from(10).pow(18)),
        { gasLimit: 1000000 }
      );
    }
  }, [contracts, amount, account]);

  return (
    <>
      <Button
        size="lg"
        leftIcon={<FaWallet size="20px" />}
        onClick={onOpen}
        alignItems="center"
      >
        Buy KARMA Tokens
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy tokens</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={3} mb={4}>
              <VStack width="full" gap={2}>
                <Box width="full">
                  <HStack justifyContent="space-between">
                    <Text fontSize={14}>Your balance</Text>
                    <Text fontSize={14}>
                      {balance.toNumber()} {raiseSymbol}
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text fontSize={14}>Min limit for 1 User</Text>
                    <Text fontSize={14}>
                      {minSaleLimit?.toNumber()} {tokenSymbol}
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text fontSize={14}>Max limit for 1 User</Text>
                    <Text fontSize={14}>
                      {maxSaleLimit?.toNumber()} {tokenSymbol}
                    </Text>
                  </HStack>
                </Box>

                <HStack width="full" justifyContent="space-between" gap={10}>
                  <NumberInput
                    flex={1}
                    value={amount.toNumber()}
                    min={0}
                    max={100000}
                    onChange={(str: string, num: number) =>
                      setAmount(BigNumber.from(num || 0))
                    }
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Text width="80px">BUSD</Text>
                </HStack>

                <HStack width="full" justifyContent="space-between" gap={10}>
                  <NumberInput
                    flex={1}
                    isDisabled={true}
                    value={saleAmount.toNumber()}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Text width="80px">KARMA</Text>
                </HStack>
              </VStack>

              <HStack width="full" justifyContent="space-between" gap={4}>
                <Button
                  colorScheme="red"
                  width="full"
                  onClick={onApprove}
                  disabled={allowance.gte(amount)}
                  leftIcon={<FirstIcon boxSize={6} color="white" />}
                  isLoading={amountLoading}
                >
                  Approve
                </Button>
                <Button
                  width="full"
                  onClick={onBuy}
                  disabled={allowance.lt(amount) || balance.lt(amount)}
                  colorScheme="blue"
                  leftIcon={<SecondIcon ml={1} boxSize={6} color="white" />}
                  isLoading={buyLoading}
                >
                  {balance.lt(amount) ? "Not enough money" : "Buy tokens"}
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
