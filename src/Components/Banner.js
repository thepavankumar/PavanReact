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
import { FaMobileAlt , FaWhatsapp } from "react-icons/fa";

import pavanImage from "../Assets/pavan.jpg";

function Banner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isSmallScreen] = useMediaQuery("(min-width: 768px)");
  const CallMe = () => {
    window.location.href = "tel:+91-8495843258";
  };
  const SendWhatsAppMessage = () => {
    const phoneNumber = "+918495843258"; 
    const message = "Hello..!How are you Mr.Pavan?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
  return (
    <Stack>
      <Circle
         w="300px" h="300px"
        borderWidth="2px"
        borderColor="blue.200"
        backgroundColor="blue.100"
        position="absolute"
        opacity="0.1"
        alignSelf="flex-end"
        zIndex="-1"/>
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
        <Flex alignItems="left" flexDirection="column">
        <Button mt={4} bg="#1470c7" color="white" width="160px" onClick={CallMe}>
          <Icon mr={2} as={FaMobileAlt} />
          Call Me!
        </Button>
        <Button mt={4} bg="#24CC63" color="white"  width="160px" onClick={SendWhatsAppMessage}>
          <Icon mr={2} as={FaWhatsapp} />
          Send Message!
        </Button>
        </Flex>
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

export default Banner;
