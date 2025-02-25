import { HStack, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Icon as={colorMode === 'dark' ? FaMoon : FaSun} color={colorMode === 'dark' ? "gray.500" : "yellow.400"} boxSize="24px" />
    </HStack>
  );
};

export default ColorModeSwitch;