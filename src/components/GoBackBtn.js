import { Box, Button, ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBackBtn = ({ page, name, bookname, chapter }) => {

    const navigate = useNavigate()

    return (
        <ChakraProvider>
            <Box
                pl={{ base: "30px", md: "91px", lg: "91px" }}
                pt={{ base: "15px", md: "30px", lg: "30px" }}
                pb={"40px"}
                bg={"#1F2125"}
            >
                <Button
                    onClick={() => {
                        {
                            page === "AboutImam" && navigate(`/collections/${name}`)
                            page === "Hadith" && navigate(`/collections/${name}`)
                            page === "Help" && navigate("/")
                            page === "Collections" && navigate("/")
                            page === "About" && navigate("/")
                            page === "Home" && navigate("/")
                            page === "Search" && navigate("/")
                            page === "SingleHadithPage" && navigate(`/collections/${name}/book/${bookname}/${chapter}`)
                        }
                    }}
                    size={{ base: "sm", md: "md", lg: "lg" }}
                    bg={"white"}
                    color={"black"}
                    borderRadius={"0px"}
                    _hover={{ bg: "#272F33", color: "white" }}
                >
                    Go Back
                </Button>
            </Box>
        </ChakraProvider>
    )
}

export default GoBackBtn