import React from 'react'
import GoBackBtn from '../components/GoBackBtn'
import { Box, Link, Text } from '@chakra-ui/react'
import BetweenLine from '../components/BetweenLine'
import {ChakraProvider} from "@chakra-ui/react"

const HelpPage = () => {
    return (
        <ChakraProvider>
            <GoBackBtn page={"Help"} />
            <Box
                bg={"#1F2125"}
                pl={{ base: "10%", md: "10%", lg: "10%" }}
                pr={{ base: "10%", md: "10%", lg: "10%" }}
                pb={{ base: "10px", md: "10px", lg: "10px" }}
            >
                <Text
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                    fontSize={{ base: "30px", md: "40px", lg: "50px" }}
                    color={"white"}
                    textAlign={"center"}
                >
                    Hadithsoul Help Center
                </Text>
                <BetweenLine />
                <Text
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                    fontSize={{ lg: "30px", base: "20px", md: "25px" }}
                    color={"white"}
                    textDecoration={"underline"}
                    mb={"20px"}
                >
                    Frequently Asked Questions (FAQs)
                </Text>
                {/* Create account */}
                {/* <Box
                    borderBottom={"1px"}
                    mb={"25px"}
                >
                    <Text
                        fontFamily={"Inter"}
                        fontWeight={700}
                        fontSize={"20px"}
                        color={"white"}
                    >
                        1. How do I create an account?
                    </Text>
                    <Text
                        fontFamily={"Istok Web"}
                        // fontWeight={700}
                        fontSize={"20px"}
                        color={"whiteAlpha.700"}
                    >
                        To create an account, click on the "Sign Up" button on the top right corner of the homepage. Fill in the required information and follow the prompts to complete the registration process.
                    </Text>
                </Box> */}
                {/* reset password */}
                {/* <Box
                    borderBottom={"1px"}
                    mb={"25px"}
                >
                    <Text
                        fontFamily={"Istok Web"}
                        fontWeight={700}
                        fontSize={"20px"}
                        color={"white"}
                    >
                        2. How do I reset my password?
                    </Text>
                    <Text
                        fontFamily={"Istok Web"}
                        // fontWeight={700}
                        fontSize={"20px"}
                        color={"whiteAlpha.700"}
                    >
                        If you forget your password, click on "Forgot Password" on the login page. Enter your email address, and we'll send you a link to reset your password.
                    </Text>
                </Box> */}
                {/* Access resources */}
                <Box
                    borderBottom={"1px"}
                    mb={"25px"}
                    borderColor={"white"}
                >
                    <Text
                        fontFamily={"Istok Web"}
                        fontWeight={700}
                        fontSize={{ base: "18px", md: "20px", lg: "20px" }}
                        color={"white"}
                    >
                        1. How can I access Quranic resources?
                    </Text>
                    <Text
                        fontFamily={"Istok Web"}
                        // fontWeight={700}
                        fontSize={{ lg: "20px", base: "15px", md: "18px" }}
                        color={"whiteAlpha.700"}
                    >
                        You dont need to Sign up, you can explore the various resources available by navigating through the menus or using the search feature. You can access Hadith texts, translations, commentaries, and more.
                    </Text>

                </Box>
                {/* Find any problme */}
                <Box
                    borderBottom={"1px"}
                    borderColor={"white"}
                    mb={"25px"}
                >
                    <Text
                        fontFamily={"Istok Web"}
                        fontWeight={700}
                        fontSize={{ base: "18px", md: "20px", lg: "20px" }}
                        color={"white"}
                    >
                        2.The site is not working, how do I tell you?
                    </Text>
                    <Text
                        fontFamily={"Istok Web"}
                        // fontWeight={700}
                        fontSize={{ lg: "20px", base: "15px", md: "18px" }}
                        color={"whiteAlpha.700"}
                    >
                        That's not good! If the site is not working at all or perhaps you see a white screen with text 'Sorry, something went wrong', we appreciate it if you can report it here .                    </Text>
                </Box>

                {/* Contact us */}
                <Box>
                    <Text
                        fontFamily={"Istok Web"}
                        fontWeight={700}
                        fontSize={{ lg: "20px", base: "15px", md: "18px" }}
                        color={"white"}
                    >
                        Contact Us
                    </Text>
                    <Text
                        fontFamily={"Istok Web"}
                        // fontWeight={700}
                        fontSize={{ lg: "15px", base: "10px", md: "13px" }}
                        color={"white"}
                    >
                        If you have any further questions or need assistance, feel free to reach out to our support team at <Link fontWeight={700}>teamHadithsoul@gmail.com</Link>  We are here to help you and ensure you have a fulfilling experience on Hadithsoul.
                    </Text>
                    <Text
                        fontFamily={"Istok Web"}
                        // fontWeight={700}
                        fontSize={"15px"}
                        color={"white"}
                        mb={0}
                    >
                        Thank you for being a part of the Hadithsoul community!
                    </Text>
                </Box>
            </Box>
        </ChakraProvider>
    )
}

export default HelpPage