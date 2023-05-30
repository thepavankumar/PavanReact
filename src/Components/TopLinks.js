import React from 'react'

import {
    Icon,
    Link,
    Box,
    useColorMode,
  } from "@chakra-ui/react";

  import {
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
    FaSun,
    FaMoon,
  } from "react-icons/fa";

function TopLinks() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
    <Box>
    <Link href="https://www.instagram.com/thepavankumar/" isExternal>
      <Icon ml={2} as={FaInstagram} borderRadius="full" boxSize={5} />
    </Link>
    <Link href="https://github.com/pavansuresh" isExternal>
      <Icon ml={2} as={FaGithub} boxSize={5} />
    </Link>
    <Link href="https://github.com/pavansuresh" isExternal>
      <Icon ml={2} as={FaLinkedinIn} boxSize={5} />
    </Link>
    <Icon
              ml={2}
              as={colorMode === "dark" ? FaMoon : FaSun}
              onClick={toggleColorMode}
              boxSize={8}
            />
  </Box>
  )
}

export default TopLinks