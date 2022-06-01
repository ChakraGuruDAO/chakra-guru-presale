import {
  Box,
  Button,
  ButtonProps,
  Icon,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { connectors } from "logic/connectors";
import { useEffect } from "react";

export interface ButtonConnectProps extends ButtonProps {}

export const ButtonConnect: React.FC<ButtonConnectProps> = (props) => {
  const { chainId, account, activate, active, library, deactivate } =
    useWeb3React<Web3Provider>();
  const { onOpen, isOpen, onClose } = useDisclosure();

  useEffect(() => {
    activate(connectors.injected);
  }, [activate]);

  return (
    <>
      <Box
        order={[-1, null, null, 2]}
        textAlign={["left", null, null, "right"]}
      >
        {account ? (
          <Button onClick={deactivate}>Disconnect</Button>
        ) : (
          <Button colorScheme="teal" variant="outline" onClick={onOpen}>
            Connect to a wallet
          </Button>
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect to a wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Img maxWidth="20px" src="/logo-metamask.png" alt="MetaMask" />
              }
              onClick={async () => {
                try {
                  await activate(connectors.injected);
                  onClose();
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              MetaMask
            </Button>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              disabled
              rightIcon={
                <Img
                  maxWidth="20px"
                  src="/logo-walletconnect.svg"
                  alt="WalletConnect"
                />
              }
              onClick={async () => {
                try {
                  await activate(connectors.walletConnect);
                  onClose();
                } catch (err) {}
              }}
            >
              WalletConnect (Soon)
            </Button>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              disabled
              rightIcon={
                <Img
                  maxWidth="20px"
                  src="/logo-coinbase.jpg"
                  alt="Coinbase Wallet"
                />
              }
              onClick={async () => {
                try {
                  await activate(connectors.walletLink);
                  onClose();
                } catch (err) {}
              }}
            >
              Coinbase Wallet (Soon)
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
