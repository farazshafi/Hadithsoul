import React from 'react'
import { Text, Box } from "@chakra-ui/react"
import { Row, Col } from 'react-bootstrap'

const RecentRead = () => {
    return (
        <>
            <Box
                pt={"64px"}
                pl={"92px"}
                pr={"92px"}
                bg={"#1F2125"}
            >
                <Text
                    textAlign={{ base: "center", md: "start", lg: "start" }}
                    fontFamily={"Istok Web"}
                    fontSize={"20px"}
                    fontWeight={700}
                    mb={"36px"}
                    color={"white"}
                >
                    RECENT READ
                </Text>
                <Row>
                    <Col sm={6} md={4} lg={3}>
                        <Box
                            pt={"28px"}
                            pb={"28px"}
                            mt={"10px"}
                            bg={"#272F33"}
                            borderRadius={"15px"}
                        >
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"18px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Revelation
                            </Text>
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"13px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Narrated 'Umar bin Al-Khattab:
                            </Text>
                        </Box>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Box
                            pt={"28px"}
                            pb={"28px"}
                            mt={"10px"}
                            bg={"#272F33"}
                            borderRadius={"15px"}
                        >
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"18px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Revelation
                            </Text>
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"13px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Narrated 'Umar bin Al-Khattab:
                            </Text>
                        </Box>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Box
                            pt={"28px"}
                            pb={"28px"}
                            mt={"10px"}
                            bg={"#272F33"}
                            borderRadius={"15px"}
                        >
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"18px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Revelation
                            </Text>
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"13px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Narrated 'Umar bin Al-Khattab:
                            </Text>
                        </Box>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <Box
                            pt={"28px"}
                            pb={"28px"}
                            mt={"10px"}
                            bg={"#272F33"}
                            borderRadius={"15px"}
                        >
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"18px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Revelation
                            </Text>
                            <Text
                                color={"white"}
                                textAlign={"center"}
                                fontFamily={"Istok Web"}
                                fontSize={"13px"}
                                fontWeight={400}
                                mt={"10px"}
                            >
                                Narrated 'Umar bin Al-Khattab:
                            </Text>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </>
    )
}

export default RecentRead