import { ChainId } from "@usedapp/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const RPC_URLS: { [chainId: number]: string } = {
  [ChainId.BSC]: "https://bsc-dataseed.binance.org/",
  [ChainId.BSCTestnet]: "https://data-seed-prebsc-1-s1.binance.org:8545",
  [ChainId.Hardhat]: "http://localhost:8545",
};

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[ChainId.BSC],
  appName: "Coinbase",
  supportedChainIds: [ChainId.BSC, ChainId.BSCTestnet, ChainId.Hardhat],
});
