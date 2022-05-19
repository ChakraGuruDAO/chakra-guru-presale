import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("clock");
  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="toggle dark mode"
      icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
    />
  );
};
