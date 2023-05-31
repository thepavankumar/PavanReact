import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Icon,
  Spacer,
  Drawer,
  Link,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaBars,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedinIn,
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";

import HeaderLinks from "./HeaderLinks";
import ContactCard from "./ContactCard";
import LogoHolder from "./LogoHolder";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("black", "black");
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
        <LogoHolder/>
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
          <DrawerContent w="99%">
            <DrawerCloseButton />
            <DrawerBody mt={4}>
              <Box>
                <HeaderLinks onClick={onClose} />
              </Box>
              {/* socila media link */}
              <Flex p={4}>
                <Link
                  bg="gray.200"
                  mx={2}
                  borderRadius="50%"
                  p={1}
                  href="https://www.instagram.com/thepavankumar/"
                  isExternal
                >
                  <Box p={2}>
                    <Icon as={FaInstagram} boxSize={6} />
                  </Box>
                </Link>
                <Link bg="gray.200" 
                  borderRadius="50%"
                  p={1}  mx={2} href="https://github.com/pavansuresh" isExternal>
                  <Box p={2}>
                    <Icon as={FaGithub} boxSize={6} />
                  </Box>
                </Link>
                <Link bg="gray.200"  
                  borderRadius="50%"
                  p={1} mx={2} href="https://www.linkedin.com/in/pavan-kumar-992913101/" isExternal>
                  <Box p={2}>
                    <Icon as={FaLinkedinIn} boxSize={6} />
                  </Box>
                </Link>
              </Flex>
              {/* contact card */}
              <Box bg="gray.200" p={4} borderRadius="md">
      <ContactCard
        icon={<FaPhone />}
        label="Phone"
        value="+918495843258"
        href="tel:+918495843258"
      />
      <ContactCard
        icon={<FaEnvelope />}
        label="Email"
        value="pavan.kumar23@outlook.com"
        href="mailto:pavan.kumar23@outlook.com"
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
