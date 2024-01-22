import { Box, Text, Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import OtherHadith from './OtherHadith'
import BetweenLine from './BetweenLine'
import GoBackBtn from './GoBackBtn'
import Loader from "../components/Loader"
import { ChakraProvider } from "@chakra-ui/react"
import Offline from "../components/Offline"
import imams from '../data/collections'


const Collections = ({ directcall }) => {
    const [collections, setCollections] = useState([])
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)

    const navigate = useNavigate()
    const toast = useToast()

    const getCollectionsName = async () => {
        try {
            setLoading(true)
            setInternet(true)
            const imamsData = imams.data
            setCollections(imamsData)
            setLoading(false)
        } catch (error) {
            setInternet(false)
            toast({
                title: 'Check You Connection.',
                status: 'error',
                duration: 7000,
                position: "top-left",
                isClosable: true,
            })
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getCollectionsName()
        // eslint-disable-next-line
    }, []);

    return (
        <ChakraProvider>
            {directcall && (
                <>
                    <GoBackBtn page={"Collections"} />
                    <OtherHadith directcall={true} />
                    <BetweenLine />
                </>
            )}
            <Box
                id='collection'
                pl={{ base: "35px", md: "50px", lg: "92px" }}
                pr={{ base: "35px", md: "50px", lg: "92px" }}
                bg={"#1F2125"}
                pb={"20px"}
            >
                {internet ? (
                    <>
                        <Text
                            fontFamily={"Inter"}
                            textAlign={{ base: "center", md: "start", lg: "start" }}
                            fontSize={{ base: "16px", md: "15px", lg: "20px" }}
                            fontWeight={700}
                            color={"white"}
                        >
                            MOST AUTHENTIC COLLECTIONS OF AHADITH
                        </Text>
                        <Row>
                            {loading ? (
                                <Loader />
                            ) : (
                                collections && collections.map((imam, index) => (
                                    <Col key={index + 1} data-aos="fade-up"
                                        data-aos-duration="900"
                                        sm={6} md={4}>
                                        <Button
                                            onClick={() => navigate(`/collections/${imam.name}`)}
                                            mt={"15px"}
                                            width={"100%"}
                                            _hover={{ bgColor: "#272F33", color: "white" }}
                                            color={"blackAlpha.800"}
                                            bgColor={"#D9D9D9"}
                                            variant={"solid"}
                                        >
                                            {imam.collection[0].title}
                                        </Button>
                                    </Col>
                                ))
                            )}

                        </Row>
                    </>
                ) : (
                    <Offline />
                )}

            </Box>
            {directcall && (
                <BetweenLine />
            )}
        </ChakraProvider>
    )
}

export default Collections
