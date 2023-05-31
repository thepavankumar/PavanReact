import React from 'react'
import { Link } from 'react-router-dom';

import {
    Box,
    Heading,
  } from "@chakra-ui/react";

function LogoHolder() {
  return (
    <Box>
          <Heading
            ml="3"
            fontSize="30px"
            size="md"
            fontWeight="semibold"
            color="cyan.400"
          >
            <Link to="/">PavanKumar.js</Link>
          </Heading>
        </Box>
  )
}

export default LogoHolder