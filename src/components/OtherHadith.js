import React from 'react'
import { Text, Box, Button } from "@chakra-ui/react"


const OtherHadith = ({directcall}) => {
    return (
        <>
            <Box
                pt={directcall ? "10px" : "50px"}
                pl={{ base: "27px", md: "50px", lg: "92px" }}
                pr={{ base: "27px", md: "50px", lg: "92px" }}
                bg={"#1F2125"}
                pb={directcall ? "30px" : "0"}
            >
                <Text
                    fontFamily={"Inter"}
                    textAlign={{ base: "start", md: "start", lg: "start" }}
                    fontSize={{ base: "16px", md: "15px", lg: "20px" }}
                    color={"white"}
                    pb={{base:"10px",md:"7px",lg:"10px"}}
                >
                    Forty Hadith Qudsi
                </Text>
                <Button
                size={{base:"sm",md:"md",lg:"lg"}}
                    color={"blackAlpha.800"}
                    bgColor={"#D9D9D9"}
                    variant={"solid"}
                >
                    Hadith Qudsi
                </Button>
            </Box>
        </>
    )
}

export default OtherHadith