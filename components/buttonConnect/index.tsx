import { Button, ButtonProps, Icon } from "@chakra-ui/react";

export interface ButtonConnectProps extends ButtonProps {}

export const ButtonConnect: React.FC<ButtonConnectProps> = (props) => {
  return (
    <Button disabled={true} {...props}>
      Connect wallet (soon)
    </Button>
  );
};
