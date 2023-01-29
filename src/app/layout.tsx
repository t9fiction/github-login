"use client";
import ChakraWrapper from "../components/_app";
// import { extendTheme } from "@chakra-ui/react";
import theme from "@/components/theme";
import { Header } from "@/components/_header";
import { Box } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };

// const theme = extendTheme({ colors });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraWrapper theme={theme}>
          <Box m={[2]}>
            <Header />
            {children}
          </Box>
        </ChakraWrapper>
      </body>
    </html>
  );
}
