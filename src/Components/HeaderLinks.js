import React from "react";
import { Link } from 'react-router-dom';
import { Box, Stack} from "@chakra-ui/react";

function HeaderLinks({ onClick }) {
  return (
    <Box>
      <Stack
        direction={['column', 'row']}
        py={2}
      >
      <Link to="/about-me" mx={2} marginStart={[0, '2']} onClick={onClick}
      >
         About Me
      </Link>
      <Link to="/portfolio" mx={2} marginStart={[0, '2']} onClick={onClick}
      >
        Portfolio
      </Link>
      <Link to="/contact-me" mx={2} marginStart={[0, '2']} onClick={onClick}
      >
          Contact
      </Link>
      </Stack>
    </Box>
  );
}

export default HeaderLinks;
