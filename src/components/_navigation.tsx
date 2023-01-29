// import { Link } from "@chakra-ui/react";
import { HStack  } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

const Navigation = () => {
  return (
    <HStack >
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/about">About</Link>
    </HStack >
  );
};

export default Navigation;
