import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  Heading,
  Icon,
  Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useColorMode,
  useColorModeValue 
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaBars,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import HeaderLinks from './HeaderLinks'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('black', 'black');
  const isDark = colorMode === "dark";

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Box p={4}>
      <Flex align="center">
        <Box>
          <Heading
            ml="3"
            fontSize="30px"
            size="md"
            fontWeight="semibold"
            color="cyan.400"
            textDecoration="underline"
          >
            <Link to="/">
             `Pavan`
            </Link>
          </Heading>
        </Box>
        <Spacer></Spacer>
        <Flex display={["none", "none", "flex"]}>
          <HeaderLinks />
           {/* Social Media Links */}
          <IconButton
            bg="gray.300"
            borderRadius="full"
            size="md"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.2s ease-in-out",
            }}
            as={Link}
            isExternal
            mx={2}
            href="https://www.instagram.com/thepavankumar/"
            aria-label="Twitter"
            color={iconColor} 
            icon={<FaInstagram />}
          />
          <IconButton
            bg="gray.300"
            borderRadius="full"
            size="md"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.2s ease-in-out",
            }}
            as={Link}
            isExternal
            mx={2}
            href="https://github.com/pavansuresh"
            aria-label="Instagram"
            color={iconColor} 
            icon={<FaGithub />}
          />
          <IconButton
            bg="gray.300"
            borderRadius="full"
            size="md"
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.2s ease-in-out",
            }}
            as={Link}
            isExternal
            mx={2}
            href="https://www.linkedin.com/in/pavan-kumar-992913101/"
            color={iconColor} 
            icon={<FaLinkedinIn />}
          />
        </Flex>
        <Flex>
          <IconButton
            aria-label="Menu"
            icon={<FaBars />}
            onClick={toggleDrawer}
            display={["flex", "flex", "none"]}
            mr={4}
          />
          <Icon
            as={colorMode === "dark" ? FaMoon : FaSun}
            onClick={toggleColorMode}
            boxSize={8}
            className="toggle-mode"
          />
        </Flex>
      </Flex>
      {/* Mobile Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={toggleDrawer}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={4}>
              <Box>
                <HeaderLinks onClick={onClose} />
              </Box>
              <Box mt={4}>
                {/* Social Media Links */}
                  <IconButton
                    as={Link}
                    display="inline-block"
                    href="https://www.instagram.com/thepavankumar/"
                    aria-label="Twitter"
                    isExternal
                    icon={<FaInstagram />}
                    backgroundColor="transparent"
                  />
                  <IconButton
                    as={Link}
                    display="inline-block"
                    href="https://github.com/pavansuresh"
                    aria-label="Instagram"
                    icon={<FaGithub />}
                    isExternal
                    backgroundColor="transparent"
                  />
                  <IconButton
                    as={Link}
                    display="inline-block"
                    href="https://www.linkedin.com/in/pavan-kumar-992913101/"
                    isExternal
                    aria-label="Facebook"
                    icon={<FaLinkedinIn />}
                    backgroundColor="transparent"
                  />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default Navigation;
