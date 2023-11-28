import React from 'react'
import { Box } from "@chakra-ui/react"
import { Container } from 'react-bootstrap'

const BetweenLine = () => {
    return (
        <>
            <Box
                pt={{base:"20px",md:"40px",lg:"50px"}}
                pb={{base:"20px",md:"40px",lg:"50px"}}
                pl={{ base: "27px", md: "50px", lg: "92px" }}
                pr={{ base: "27px", md: "50px", lg: "92px" }}
                bg={"#1F2125"}
            >
                <Box
                    borderRadius={"5px"}
                    bg={"#D9D9D9"}
                    width={"100%"}
                    height={"1px"}
                ></Box>
            </Box>
        </>
    )
}

export default BetweenLine