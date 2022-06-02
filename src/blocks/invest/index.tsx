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
import NextLink from "next/link";
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
import Link from "next/link";

export interface InvestProps {
  raiseTokenAddress: string;
  karmaPrivateCrowdsaleAddress: string;
  tokenSymbol: string;
  raiseSymbol: string;
  contribution: BigNumber;
  minSaleLimit: BigNumber;
  maxSaleLimit: BigNumber;
}

export const Invest: React.FC<InvestProps> = ({
  raiseTokenAddress,
  karmaPrivateCrowdsaleAddress,
  tokenSymbol,
  raiseSymbol,
  contribution,
  minSaleLimit,
  maxSaleLimit,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { contracts, account } = useAllData();
  const chainId = useChainId();

  const { rate } = useTokenSaleInfo();
  const [amount, setAmount] = useState(BigNumber.from(0));

  const [amountLoading, setAmountLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [error, setError] = useState("");
  const [txHashUrl, setTxHashUrl] = useState("");

  const minRaiseLimit = useMemo(
    () => minSaleLimit && rate && minSaleLimit.div(rate),
    [rate, minSaleLimit]
  );

  const maxRaiseLimit = useMemo(
    () => maxSaleLimit && rate && maxSaleLimit.div(rate),
    [rate, maxSaleLimit]
  );

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

  const approveEnabled = useMemo(
    () => allowance.lt(amount) && amount.gt(0),
    [allowance, amount]
  );

  const notEnoughMoney = useMemo(() => balance.lt(amount), [balance, amount]);
  const maxLimitExceed = useMemo(
    () => amount.add(contribution).gte(maxSaleLimit),
    [contribution, maxSaleLimit, amount]
  );

  const buyDisabled = useMemo(
    () =>
      amount.lte(0) || allowance.lt(amount) || notEnoughMoney || maxLimitExceed,
    [allowance, amount, notEnoughMoney, maxLimitExceed]
  );

  const onApprove = useCallback(async () => {
    const raiseContract =
      raiseTokenAddress && contracts?.ERC20(raiseTokenAddress);
    if (raiseContract && karmaPrivateCrowdsaleAddress) {
      try {
        setAmountLoading(true);
        setError("");
        setTxHashUrl("");

        const tx = await raiseContract.functions.approve(
          karmaPrivateCrowdsaleAddress,
          BigNumber.from(1000).pow(18).sub(1)
        );

        const url =
          chainGenerateExplorerUrl[chainId] &&
          chainGenerateExplorerUrl[chainId](tx.hash);
        if (url) {
          setTxHashUrl(url);
        }
      } catch (err) {
        setError((err && err["message"]) || err);
      } finally {
        setAmountLoading(false);
      }
    }
  }, [contracts, raiseTokenAddress, karmaPrivateCrowdsaleAddress, chainId]);

  const onBuy = useCallback(async () => {
    if (contracts?.karmaPrivateCrowdsale) {
      try {
        setBuyLoading(true);
        setError("");
        setTxHashUrl("");
        const tx = await contracts?.karmaPrivateCrowdsale.functions.buyTokens(
          account,
          BigNumber.from(amount).mul(BigNumber.from(10).pow(18)),
          { gasLimit: 500000 }
        );

        const url =
          chainGenerateExplorerUrl[chainId] &&
          chainGenerateExplorerUrl[chainId](tx.hash);
        if (url) {
          setTxHashUrl(url);
        }
      } catch (err) {
        setError((err && err["message"]) || err);
      } finally {
        setBuyLoading(false);
      }
    }
  }, [contracts, amount, account, chainId]);

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
                    <Text fontSize={14}>You purchased</Text>
                    <Text fontSize={14}>
                      {contribution?.toNumber()} {tokenSymbol}
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text fontSize={14}>Min limit for 1 User</Text>
                    <Text fontSize={14}>
                      {minRaiseLimit?.toNumber()} {raiseSymbol}
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text fontSize={14}>Max limit for 1 User</Text>
                    <Text fontSize={14}>
                      {maxRaiseLimit?.toNumber()} {raiseSymbol}
                    </Text>
                  </HStack>
                </Box>

                <HStack width="full" justifyContent="space-between" gap={10}>
                  <NumberInput
                    flex={1}
                    value={amount.toNumber()}
                    min={minRaiseLimit?.toNumber()}
                    max={maxRaiseLimit?.toNumber()}
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
                  <Text width="80px">{raiseSymbol}</Text>
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
                  <Text width="80px">{tokenSymbol}</Text>
                </HStack>
              </VStack>

              <HStack width="full" justifyContent="space-between" gap={4}>
                <Button
                  colorScheme="red"
                  width="full"
                  onClick={onApprove}
                  disabled={!approveEnabled}
                  leftIcon={<FirstIcon boxSize={6} color="white" />}
                  isLoading={amountLoading}
                >
                  Approve
                </Button>
                <Button
                  width="full"
                  onClick={onBuy}
                  disabled={buyDisabled}
                  colorScheme="blue"
                  leftIcon={<SecondIcon ml={1} boxSize={6} color="white" />}
                  isLoading={buyLoading}
                >
                  {notEnoughMoney
                    ? "Not enough money"
                    : maxLimitExceed
                    ? "Max Limit exceeded"
                    : "Buy tokens"}
                </Button>
              </HStack>

              {error && <Text colorScheme="red">{error}</Text>}
              {txHashUrl && (
                <HStack width="full">
                  <NextLink href={txHashUrl} passHref>
                    <Button
                      as="a"
                      colorScheme="green"
                      target="_blank"
                      width="full"
                    >
                      View your transaction
                    </Button>
                  </NextLink>
                </HStack>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
