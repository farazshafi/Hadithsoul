import React, { useState } from 'react'
import {
    FormControl,
    Box,
    Input,
    Button
} from '@chakra-ui/react'
import HomeBackgroundImg from "../images/bismillah.png"
import { ArrowRightIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'


const HomePageInput = () => {

    const [searchKeyword, setSearchKeyword] = useState()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${searchKeyword}`)
        }
    }

    return (
        <>
            <Box
                bgImage={HomeBackgroundImg}
                backgroundSize={"cover"}
                id="home"
                // backgroundAttachment={"fixed"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}

                pl={{ base: "60px", lg: "274px" }}
                pr={{ base: "60px", lg: "274px" }}
                pt={{ base: "190px", md: "250px", lg: "368px" }}
                pb={{ base: "30px", md: "40px", lg: "50px" }}
                objectFit={"cover"}
            >
                <FormControl
                    display={"flex"}
                    onKeyDown={handleSearch}
                >
                    <Box
                        width={"100%"}
                        display={{ base: "", md: "flex", lg: "flex" }}
                    >
                        <Input
                            width={{ lg: "95%", md: "95%", base: "100%" }}
                            color={"blackAlpha.900"}
                            value={searchKeyword}
                            onChange={(e) => {
                                setSearchKeyword(e.target.value)
                            }}
                            fontFamily={"Inter"}
                            fontWeight={700}
                            fontSize={{ base: "13px", md: "md", lg: "lg" }}
                            bgColor={"#D9D9D9"}
                            placeholder={"What do you want to read ?"}
                            _placeholder={{ color: "#636363" }}
                            type='text'
                        />
                        <Box
                            pl={{ base: "10px" }}
                            display={{ base: "none", md: "flex", lg: "flex" }}
                            m={"auto"}
                            onClick={() => {
                                navigate(`/search/${searchKeyword}`)
                            }}
                        >
                            <ArrowRightIcon
                            />
                        </Box>
                        <Box
                            display={{ base: "", md: "none", lg: "none" }}
                        >
                            <Box
                                mt={"6px"}
                                textAlign={"end"}
                            >
                                <Button
                                    onClick={() => {
                                        navigate(`/search/${searchKeyword}`)
                                    }}
                                    color={"white"}
                                    size={"xs"}
                                    bg={"#272F33"}
                                >Search</Button>
                            </Box>

                        </Box>

                    </Box>

                </FormControl>

            </Box>
        </>
    )
}

export default HomePageInput