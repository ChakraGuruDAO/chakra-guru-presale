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
} from "@chakra-ui/react";
import {
  useAllData,
  useContractFunction,
  useContractFunctionChain,
  useContracts,
  useTokenSaleInfo,
} from "src/logic";
import React, { useCallback, useMemo, useState } from "react";
import { FaWallet } from "react-icons/fa";
import { BigNumber } from "ethers";

export const Invest: React.FC<{}> = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { contracts, account } = useAllData();
  const { raiseTokenAddress, karmaPrivateCrowdsaleAddress, saleLimit, rate } =
    useTokenSaleInfo();
  const [amount, setAmount] = useState(saleLimit?.minSaleLimit);

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
      await raiseContract.approve(
        karmaPrivateCrowdsaleAddress,
        BigNumber.from(1000).pow(18).sub(1)
      );
    }
  }, [contracts, raiseTokenAddress, karmaPrivateCrowdsaleAddress]);

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

              {allowance.gte(amount) ? (
                <Button
                  width="full"
                  onClick={onBuy}
                  disabled={balance.lt(amount)}
                  colorScheme="blue"
                >
                  {balance.lt(amount) ? "Not enough money" : "Buy tokens"}
                </Button>
              ) : (
                <Button colorScheme="red" width="full" onClick={onApprove}>
                  Approve
                </Button>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
