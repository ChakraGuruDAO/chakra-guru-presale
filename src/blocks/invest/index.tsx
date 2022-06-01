import {
  Box,
  Button,
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
} from "@chakra-ui/react";
import { useContracts } from "src/logic";
import React, { useCallback, useState } from "react";
import { FaWallet } from "react-icons/fa";

// function useRaiseTokenInfo() {
//   const { contracts } = useContracts();
//   const { raiseToken } = useTokenSaleInfo();

//   const [loading, setLoading] = useState(BigNumber.from(0));
//   const [allowance, setAllowance] = useState(BigNumber.from(0));

//   const load = useCallback(async () => {
//     const raiseTokenERC20 = contracts.ERC20(raiseToken);

//     const allowance = await raiseTokenERC20.allowance(
//       account,
//       contracts.karmaPrivateCrowdsale.address
//     );

//     setAllowance(allowance);
//   }, [account, contracts, raiseToken]);

//   useEffect(() => {
//     if (isReady && raiseToken) {
//       load();
//     }
//   }, [isReady, load, raiseToken]);

//   return { allowance };
// }

export const Invest: React.FC<{}> = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [amount, setAmount] = useState(0);

  const { contracts } = useContracts();
  const loadAllowance = useCallback(async () => {}, []);

  // const { allowance } = useRaiseTokenInfo();
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
              <Box width="full">
                Amount:
                <NumberInput
                  value={amount}
                  min={100}
                  max={10000}
                  onChange={(str: string, num: number) => setAmount(num)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>

              <Button width="full">Buy tokens</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
