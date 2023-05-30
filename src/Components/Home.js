import React from 'react'
import Banner from './Banner'
import Social from './Social'
import {
  VStack
} from "@chakra-ui/react";

function Home() {
  return (
    <div>
      <Banner/>
      <VStack>
         <Social/>
      </VStack>
    </div>
  )
}

export default Home