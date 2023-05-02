import { Stack, Link, Icon, Tooltip, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Social() {
  const [isSmallScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="gray.300"
      direction="row"
      spacing={isSmallScreen ? "24" : "10"}
      p={3}
    >
      <Tooltip label="Instagram">
        <Link href="https://www.instagram.com/thepavankumar/" isExternal>
          <Icon ml={2} as={FaInstagram}  boxSize={isSmallScreen ? "50" : "25"} />
        </Link>
      </Tooltip>
      <Tooltip label="Github">
        <Link href="https://github.com/pavansuresh" isExternal>
          <Icon ml={2} as={FaGithub} boxSize={isSmallScreen ? "50" : "25"}  />
        </Link>
      </Tooltip>
      <Tooltip label="LinkedinIn">
        <Link href="https://github.com/pavansuresh" isExternal>
          <Icon ml={2} as={FaLinkedinIn} boxSize={isSmallScreen ? "50" : "25"}  />
        </Link>
      </Tooltip>
    </Stack>
  );
}

export default Social;
