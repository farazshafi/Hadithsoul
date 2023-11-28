import React from 'react'
import { Text, Box, Button } from "@chakra-ui/react"
import HomePageInput from '../components/HomePageInput'
import RecentRead from "../components/RecentRead"
import BetweenLine from '../components/BetweenLine'
import OtherHadith from '../components/OtherHadith'
import Collections from '../components/Collections'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { ChakraProvider } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <ChakraProvider>
      <HomePageInput />
      {/* <RecentRead />
      <BetweenLine /> */}
      {/* <OtherHadith /> */}
      <BetweenLine />
      <Collections />
      <BetweenLine />
    </ChakraProvider>
  )
}

export default HomePage