import { ImageProps, Img } from "@chakra-ui/react";

export interface MetamaskProps extends ImageProps {
  size?: string;
}

export const Metamask: React.FC<MetamaskProps> = ({
  size = "48px",
  ...other
}) => {
  return <Img src="/metamask.png" boxSize={size} {...other} />;
};
