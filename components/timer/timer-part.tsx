import { VStack, Box, Text } from "@chakra-ui/react";
import { useMemo } from "react";

export interface TimerPartProps {
  title: string;
  value: number;
}

export const TimerPart: React.FC<TimerPartProps> = ({ title, value }) => {
  const formattedValue = useMemo(
    () => (value >= 0 && value <= 9 ? `0${value}` : value),
    [value]
  );

  return (
    <VStack spacing={{ base: "13px" }}>
      <Box
        minW={{ xl: "120px", md: "51px", base: "71px" }}
        minH={{ xl: "130px", md: "72px", base: "90px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="2px"
        borderColor="brand.100"
        borderRadius={{ xl: "20px", md: "12px", base: "12px" }}
        textAlign="center"
      >
        <Text
          fontSize={{ xl: "54px", md: "24px", base: "32px" }}
          fontWeight={500}
          color="brand.100"
        >
          {formattedValue}
        </Text>
      </Box>
      <Text
        fontSize={{ xl: "16px", md: "8px", base: "12px" }}
        textTransform="uppercase"
        fontWeight={500}
        color="brand.100"
      >
        {title}
      </Text>
    </VStack>
  );
};
