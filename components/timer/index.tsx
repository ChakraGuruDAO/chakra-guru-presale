import { Box, HStack, Text } from "@chakra-ui/react";
import { useTimer } from "react-timer-hook";
import { TimerPart } from "./timer-part";

export interface TimerProps extends React.ComponentProps<typeof HStack> {
  expireOn: Date;
}

const Divider = (
  <Text
    color="brand.100"
    fontSize={{ xl: "64px", md: "32px", base: "32px" }}
    lineHeight="100%"
    fontWeight={500}
    userSelect="none"
    pb={{ xl: "45px", md: "30px", base: "40px" }}
  >
    :
  </Text>
);

export const Timer: React.FC<TimerProps> = ({ expireOn, ...props }) => {
  const { days, hours, minutes, seconds } = useTimer({
    expiryTimestamp: expireOn,
  });

  return (
    <HStack
      width="100%"
      alignItems="center"
      spacing={{ xl: "5px", md: "10px", base: "auto" }}
      {...props}
    >
      <TimerPart title="Day" value={days} />
      {Divider}
      <TimerPart title="Hours" value={hours} />
      {Divider}
      <TimerPart title="Minutes" value={minutes} />
      {Divider}
      <TimerPart title="Seconds" value={seconds} />
    </HStack>
  );
};
