import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" py={4} bg="gray.200">
      <Flex justifyContent="center">
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} PavanKumar
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
