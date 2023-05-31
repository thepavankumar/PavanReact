import React from 'react'
import { Box, Progress, Text } from "@chakra-ui/react";

function ProgressBar({ label, value, colorScheme }) {
  return (
    <Box>
      <Text textAlign="left">{label}</Text>
      <Progress value={value} colorScheme={colorScheme} size="sm" />
    </Box>
  )
}

export default ProgressBar