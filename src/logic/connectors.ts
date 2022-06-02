import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import {
  chainNetworkUrls,
  chainSupportedNetworks,
  defaultChainId,
} from "./chains";

const injected = new InjectedConnector({
  supportedChainIds: chainSupportedNetworks,
});

const network = new NetworkConnector({
  defaultChainId,
  urls: chainNetworkUrls,
});

const walletConnect = new WalletConnectConnector({
  rpc: chainNetworkUrls,
  qrcode: true,
});

const walletLink = new WalletLinkConnector({
  url: chainNetworkUrls[defaultChainId],
  appName: "Coinbase",
  supportedChainIds: chainSupportedNetworks,
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
