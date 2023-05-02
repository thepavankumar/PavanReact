import "./App.css";

import Header from './Components/Header.js'
// import Profile from './Components/Profile.js'
import Social from './Components/Social.js'

import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaAngleDoubleRight
} from "react-icons/fa";
import {
  Flex,
  Heading,
  VStack,
  Icon,
  useColorMode,
  Spacer,
  Link,
  Box
} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="3"  fontSize="30px" size="md" fontWeight="semibold" color="cyan.400" textDecoration="underline">
          <Icon as={FaAngleDoubleRight} boxSize={6} /> Pavan
        </Heading>
        <Spacer></Spacer>
        <Box>
        <Link href="https://www.instagram.com/thepavankumar/" isExternal>
        <Icon ml={2} as={FaInstagram} borderRadius="full"  boxSize={5}/>
        </Link>
        <Link href="https://github.com/pavansuresh" isExternal>
          <Icon ml={2} as={FaGithub} boxSize={5} />
        </Link>
        <Link href="https://github.com/pavansuresh" isExternal>
        <Icon ml={2} as={FaLinkedinIn}  boxSize={5}/>
        </Link>
        </Box>
        <Icon ml={2} as={colorMode  === 'dark' ?  FaMoon : FaSun } onClick={toggleColorMode}  boxSize={8}/>
      </Flex>
      <Header/>
      {/* <Profile/>*/}
      <Social/> 
    </VStack>
  );
}

export default App;
