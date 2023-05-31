import React from 'react'
import { Box, Link, Text } from "@chakra-ui/react";

function ContactCard({ icon, label, value, href }) {
  return (
    <Box p={2} mb={2} bg="white" borderRadius="md">
    <Link href={href} color="teal.500">
      <Box display="flex" alignItems="center">
        <Box boxSize={6} mr={2}>{icon}</Box>
        <Box>
            <Text fontWeight="bold" mb={1}>{label}:</Text>
            <Text style={{ fontSize: "15px" }}>{value}</Text>
          </Box>
      </Box>
    </Link>
  </Box>
  )
}

export default ContactCard