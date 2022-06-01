import { BigNumber, BigNumberish } from "ethers";
import { Duration } from "src/logic/time";

export const parseBigNumberToDate = (num: BigNumberish) => {
  return num && Duration.convertTimestampToDate(BigNumber.from(num).toNumber());
};

export const parseBigNumberToNumber = (num: BigNumberish) => {
  return num && BigNumber.from(num).toNumber();
};

export const parseBigNumberDivFloat = (decimals?: BigNumberish) => {
  return (num: BigNumberish) =>
    decimals &&
    num &&
    BigNumber.from(num).div(BigNumber.from(10).pow(decimals));
};

export const parseNumberToBigNumber = (num: number) => {
  return typeof num === "number" ? BigNumber.from(num) : num;
};

export function parseArray<Input, Output>(parser: (item: Input) => Output) {
  return (array: Input[]) => array && array.map(parser);
}
