import React from 'react'
import { Box, Heading, Text, Avatar } from '@chakra-ui/react';


function AboutMe() {
    return (
        <Box textAlign="center" py={8}>
          <Avatar size="xl" name="Pavan Kumar" src="/path/to/avatar.jpg" mx="auto" mb={4} />
          <Heading as="h1" size="xl" mb={2}>
          Pavan Kumar
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={4}>
            Web Developer | UI/UX Designer
          </Text>
          <Text fontSize="md" color="gray.700" maxWidth="600px" mx="auto">
          Experienced website designer specializing in W3C standards. Crafting visually stunning and user-friendly websites that captivate audiences. Leveraging HTML, CSS, and JavaScript to deliver seamless browsing experiences. Collaborative approach to understand client goals and bring visions to life. Let's create a digital masterpiece together.
          </Text>
        </Box>
      );
}

export default AboutMe