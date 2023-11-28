import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import GoBackBtn from '../components/GoBackBtn'
import BetweenLine from '../components/BetweenLine'
import AboutBgImg from "../images/about.png"
import {ChakraProvider} from "@chakra-ui/react"

const AboutPage = () => {
    return (
        <ChakraProvider>
            <GoBackBtn page={"About"} />
            <Box
                textAlign={'center'}
                bg={"#1F2125"}
                pr={{ base: "10%", md: "10%", lg: "10%" }}
                pl={{ base: "10%", md: "10%", lg: "10%" }}
                pt={{ base: "10px", md: "", lg: "10px" }}
                pb={{ base: "10px", md: "", lg: "10px" }}
            // border={"1px"}
            >
                <Text
                    fontFamily={"Istok Web"}
                    fontSize={{ base: "30px", md: "35px", lg: "40px" }}
                    fontWeight={700}
                    mb={0}
                    color={"white"}
                >
                    ABOUT
                </Text>
                <BetweenLine />
                <Box
                bgImage={AboutBgImg}
                backgroundSize={"cover"}
                objectFit={"cover"}
                >
                    <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                        textAlign={"left"}
                        // bgColor={"whiteAlpha.100"}
                        color={"whiteAlpha.700"}
                    >
                        Welcome to Hadithsoul - a sanctuary of authentic Hadith!

                        At Hadithsoul, we dedicate ourselves to spreading the teachings of the Prophet Muhammad (peace be upon him) through the wisdom encapsulated in Hadith, the sacred traditions and sayings. Our mission is to make the authentic Hadith accessible to all, fostering spiritual growth and understanding among our brothers.

                        We extend our heartfelt gratitude to sunnah.com for graciously sharing their API, enabling us to curate and deliver a wealth of authentic Hadith to our audience.

                        In our humble abode, we proudly present the six most esteemed collections of Ahadith, revered by scholars and believers alike for their authenticity and guidance. These collections serve as beacons of light, illuminating the path of righteousness and spiritual enlightenment.

                        Additionally, we showcase over 40 Hadith, including the sacred Qudsi Hadith, which holds a special place in our hearts. These divine narrations grant deeper insights into the profound conversations between Allah and His Messenger, offering invaluable wisdom and divine teachings.

                        We invite you to explore and immerse yourself in the sacred Hadith, the embodiment of the Sunnah, and may this journey of knowledge and faith enlighten your soul. Together, let us uphold the teachings of Islam and embody the spirit of unity and compassion, striving to be better Muslims in our daily lives.
                    </Text>
                </Box>
            </Box>
            <BetweenLine />
        </ChakraProvider>
    )
}

export default AboutPage