import {
  Stack,
  useMediaQuery,
  Circle,
  Flex,
  Box,
  Text,
  Button,
  Icon,
  Image
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";

import pavanImage from "../Assets/pavan.jpg";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isSmallScreen] = useMediaQuery("(min-width: 768px)");
  const handleButtonClick = () => {
    window.location.href = "tel:+91-8495843258";
  };
  return (
    <Stack>
      <Circle
         w="300px" h="300px"
        borderWidth="2px"
        borderColor="blue.200"
        backgroundColor="blue.100"
        position="absolute"
        opacity="0.1"
        alignSelf="flex-end"/>
      <Flex
        direction={isSmallScreen ? "row" : "column"}
        p={isSmallScreen ? "32" : "0"}
        alignSelf="flex-start">
      <Box mt={isSmallScreen ? "0" : "20"} 
      align="flex-start">
        <Text
          fontSize="30px"
          fontWeight="bold"
          color={isDark ? "white" : "black"}
        >
          Hello, I am Pavan!
        </Text>
        <Button mt={8} colorScheme="blue" onClick={handleButtonClick}>
          <Icon mr={2} as={FaMobileAlt} />
          Call Me!
        </Button>
      </Box>
      <Image
        mt={isSmallScreen ? "0" : "12"}
        mb={isSmallScreen ? "0" : "12"}
        borderRadius="full"
        backgroundColor={"transparent"}
        src={pavanImage}
        alt="Pavan - UI"
        alignSelf="center"
        boxShadow="lg"
      />
        </Flex>
    </Stack>
  );
}

export default Header;
