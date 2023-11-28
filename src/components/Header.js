import React from 'react'
import { Box, Link, Text } from "@chakra-ui/react"
// import { HamburgerIcon, SearchIcon, SunIcon } from "@chakra-ui/icons"
// import { Avatar } from '@chakra-ui/react'
import SearchDrawer from './SearchDrawer'
import MoreDrawer from './MoreDrawer'
import {ChakraProvider} from "@chakra-ui/react"
import { useNavigate } from 'react-router'

const Header = () => {

const navigate = useNavigate()

  return (
    <ChakraProvider>
      <header>
        <Box
          bg={'#242424'}
          height={"65px"}
          display={"flex"}
          pl={{ base: "20px", md: "40px", lg: "40px" }}
          pr={{ base: "20px", md: "40px", lg: "40px" }}
          pt={17}
        >
          <MoreDrawer />
          <Text
            fontFamily={"Istok Web"}
            fontWeight={700}
            fontSize={"20px"}
            width={'auto'}
            color={"white"}
            ml={"10px"}
          >
            <Link onClick={()=>{navigate("/")}} _hover={{ textDecoration: "none" }}>
              Hadithsoul
            </Link>
          </Text>
          {/* ToggleColorMode */}
          <Box
            ml={"auto"}
          >
            {/* <SunIcon
              ml={"auto"}
              color={"white"}
              boxSize={8}
            /> */}
          </Box>

          {/* search btn */}
          <Box
            ml={{ base: "17px", md: "23px", lg: "25px" }}
          >
            <SearchDrawer />
          </Box>
        </Box>
      </header>
    </ChakraProvider>
  )
}

export default Header