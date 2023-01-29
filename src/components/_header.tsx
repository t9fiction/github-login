"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { Icon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import theme from "./theme";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import Navigation from "./_navigation";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex>
    <Navigation />
    <Spacer />
    <Box >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Icon aria-label="Toggle Mode" onClick={toggleColorMode}>
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </Icon>
    </Box>
    </Flex>
  );
};
