export enum ChainId {
  BSC = 56,
  BSCTestnet = 97,
}

export const defaultChainId = ChainId.BSCTestnet;

export const chainGenerateExplorerUrl: Record<
  ChainId,
  (txHash: string) => string
> = {
  [ChainId.BSC]: (txHash: string) => `https://bscscan.com/tx/${txHash}`,
  [ChainId.BSCTestnet]: (txHash: string) =>
    `https://testnet.bscscan.com/tx/${txHash}`,
};

export const chainNetworkUrls: Record<ChainId, string> = {
  [ChainId.BSC]: "https://bsc-dataseed1.binance.org",
  [ChainId.BSCTestnet]: "https://data-seed-prebsc-1-s1.binance.org:8545",
};

export const chainSupportedNetworks: ChainId[] = [
  ChainId.BSC,
  ChainId.BSCTestnet,
];
