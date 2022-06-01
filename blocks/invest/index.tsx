import {
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaWallet } from "react-icons/fa";

export const Invest: React.FC<{}> = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
              onClick={async () => {}}
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
              onClick={async () => {}}
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
              onClick={async () => {}}
            >
              Coinbase Wallet (Soon)
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
