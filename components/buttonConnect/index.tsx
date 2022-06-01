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
import { useEthers } from "@usedapp/core";
import { walletconnect, walletlink } from "logic/connectors";
import { useCallback } from "react";

export interface ButtonConnectProps extends ButtonProps {}

export const ButtonConnect: React.FC<ButtonConnectProps> = (props) => {
  const { account, activate, activateBrowserWallet, deactivate } = useEthers();
  const { onOpen, isOpen, onClose } = useDisclosure();

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
              onClick={() => {
                activateBrowserWallet();
                onClose();
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
              rightIcon={
                <Img
                  maxWidth="20px"
                  src="/logo-walletconnect.svg"
                  alt="WalletConnect"
                />
              }
              onClick={async () => {
                try {
                  await activate(walletconnect);
                  onClose();
                } catch (err) {}
              }}
            >
              WalletConnect
            </Button>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Img
                  maxWidth="20px"
                  src="/logo-coinbase.jpg"
                  alt="Coinbase Wallet"
                />
              }
              onClick={async () => {
                try {
                  await activate(walletlink);
                  onClose();
                } catch (err) {}
              }}
            >
              Coinbase Wallet
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
