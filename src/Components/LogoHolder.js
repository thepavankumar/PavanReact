import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@chakra-ui/react';
import { FaLaugh } from 'react-icons/fa';

import {
    Box,
    Heading,
  } from "@chakra-ui/react";

function LogoHolder() {
  return (
    <Box>
          <Heading
            ml="3"
            fontSize="25px"
            size="md"
            fontWeight="semibold"
            color="blue.500"
          >
             <Icon as={FaLaugh} boxSize={8}  padding="15px 3px 0 0"/>
            <Link to="/">PAVAN</Link>
          </Heading>
        </Box>
  )
}

export default LogoHolder