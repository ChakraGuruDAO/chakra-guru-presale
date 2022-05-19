import { Box, HStack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import { TimerPart } from "./timer-part";

export interface TimerProps extends React.ComponentProps<typeof HStack> {
  expireOn: Date;
}

export const Timer: React.FC<TimerProps> = ({ expireOn, ...props }) => {
  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: expireOn,
  });

  return (
    <HStack alignItems="center" justifyContent="center" {...props}>
      <TimerPart title="Day" value={days} />
      <Divider />
      <TimerPart title="Hours" value={hours} />
      <Divider />
      <TimerPart title="Minutes" value={minutes} />
      <Divider />
      <TimerPart title="Seconds" value={seconds} />
    </HStack>
  );
};

const Divider = () => {
  return (
    <Text
      fontSize={{ base: "32px", md: "32px", xl: "64px" }}
      lineHeight="100%"
      fontWeight="medium"
      userSelect="none"
      pb={{ base: "32px", md: "30px", xl: "45px" }}
    >
      :
    </Text>
  );
};
