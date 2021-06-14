import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

import logo from '../../assets/normal-logo.png'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src={logo} size="100%" />
      {/* <Image src={logo} size="100%" rounded="1rem" shadow="2xl" /> */}
      {/* <Text fontSize="lg" fontWeight="bold">
        Uptick
      </Text> */}
    </Box>
  )
}