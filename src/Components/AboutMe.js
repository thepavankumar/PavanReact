import React from "react";
import {
  Box,
  Heading,
  Text,
  Avatar,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";

function AboutMe() {
  const textColor = useColorModeValue("black", "white");
  return (
    <Box textAlign="center" py={8}>
      <Avatar
        size="xl"
        name="Pavan Kumar"
        src="/path/to/avatar.jpg"
        mx="auto"
        mb={4}
      />
      <Heading as="h1" size="xl" mb={2}>
        Pavan Kumar
      </Heading>
      <Text fontSize="lg" mb={4} color={textColor}>
        Web Developer | UI/UX Designer
      </Text>
      <Text fontSize="md" maxWidth="600px" mx="auto" color={textColor}>
        Experienced website designer specializing in W3C standards. Crafting
        visually stunning and user-friendly websites that captivate audiences.
        Leveraging HTML, CSS, and JavaScript to deliver seamless browsing
        experiences. Collaborative approach to understand client goals and bring
        visions to life. Let's create a digital masterpiece together.
      </Text>
      <Box borderWidth="1px" borderColor="gray.200" p={4} borderRadius="md"   marginTop="30px">
      <VStack spacing={4} align="stretch">
        <ProgressBar label="Adobe Photoshop" value={80} colorScheme="pink" />
        <ProgressBar label="HTML" value={90} colorScheme="teal" />
        <ProgressBar label="CSS" value={90} colorScheme="blue" />
        <ProgressBar label="JavaScript" value={70} colorScheme="yellow" />
        <ProgressBar label="React JS" value={60} colorScheme="orange" />
        <ProgressBar label="WordPress" value={30} colorScheme="red" />
      </VStack>
    </Box>
    </Box>
  );
}

export default AboutMe;
