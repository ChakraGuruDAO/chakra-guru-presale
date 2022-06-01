import { Config, BSC, BSCTestnet, Hardhat, ChainId } from "@usedapp/core";

export const dappConfig: Config = {
  networks: [BSC, BSCTestnet, Hardhat],
  readOnlyUrls: {
    [ChainId.BSC]: "https://bsc-dataseed.binance.org/",
    [ChainId.BSCTestnet]: "https://data-seed-prebsc-1-s1.binance.org:8545",
    [ChainId.Hardhat]: "http://localhost:8545",
  },
};
