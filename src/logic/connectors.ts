import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [56, 97],
});

const network = new NetworkConnector({
  defaultChainId: 56,
  urls: {
    56: "https://bsc-dataseed1.binance.org",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
});

const walletConnect = new WalletConnectConnector({
  rpc: {
    56: "https://bsc-dataseed1.binance.org",
    97: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
  qrcode: true,
});

const walletLink = new WalletLinkConnector({
  url: "https://bsc-dataseed1.binance.org",
  appName: "Coinbase",
  supportedChainIds: [56, 97],
});

export const connectors = {
  injected,
  network,
  walletConnect,
  walletLink,
};

export function addToken(
  web3: Web3Provider,
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenImage: string
) {
  return new Promise<void>((resolve, reject) => {
    web3.provider.sendAsync(
      {
        method: "wallet_watchAsset",
        params: <any>{
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      },
      (err, added) => {
        if (err || "error" in added) {
          return reject("There was a problem adding the token.");
        }
        return resolve();
      }
    );
  });
}
