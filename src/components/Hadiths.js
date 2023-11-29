import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BetweenLine from '../components/BetweenLine'
import Loader from './Loader'
import ReadMore from "../components/ReadMore"
import {
    Box,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'


const Hadiths = ({ page, data, loading, bookname, chapter, loadingHadith, from, to, name, total }) => {
    // useState goes here
    // const [hadithNum, setHadithNum] = useState()


    // Funtctions goes here
    // const handleHadithSearch = async () => {
    //     if (hadithNum > to || hadithNum < from || hadithNum == undefined) {
    //         toast({
    //             title: `Not Found ${hadithNum} Hadith`,
    //             description: `Enter between ${from}- ${to}`,
    //             status: 'error',
    //             duration: 5000,
    //             position: "top-left",
    //             isClosable: true,
    //         })
    //     } else {
    //         navigate(`/hadithpage/${name}/${chapter}/${hadithNum}/${from}/${to}/${bookname}`)
    //     }

    // }



    return (
        <>
            {/* Book name */}
            <Box
                bg={"#1F2125"}
                textAlign={"center"}
            >
                <Text
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    fontFamily={"Istok Web"}
                    fontWeight={700}
                    color={"white"}
                    textDecorationColor={"white"}
                    mb={0}
                >
                    <span>{chapter}</span>
                    <span><i style={{ marginLeft: "10px" }} className="fa-solid fa-book"></i></span>
                    <span style={{ marginLeft: "10px" }}>: {bookname}</span>
                </Text>
                <Box
                    pl={{ base: "25px", md: "91px", lg: "50%" }}
                    pr={{ base: "25px", md: "91px", lg: "50%" }}
                    pt={{ base: "25px", md: "18px", lg: "20px" }}
                >

                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Box>
                            <Table mb={{ base: "10px", md: "15px", lg: "20px" }} border={"solid"} bgColor={"#242424"} size={{ base: "sm", md: "md", lg: "lg" }}>
                                {loading ? (
                                    <Loader />
                                ) : (
                                    <>
                                        <Thead>
                                            <Tr>
                                                <Th color={"white"} textAlign={""}>
                                                    Total Hadiths
                                                </Th>
                                                {/* <Th color={"white"} textAlign={""}>TO</Th> */}
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td color={"white"} textAlign={"center"}>
                                                    {total}
                                                </Td>
                                                {/* <Td color={"white"} textAlign={""}>{to}</Td> */}
                                            </Tr>
                                        </Tbody>
                                    </>
                                )}
                            </Table>
                        </Box>
                        {/* <Box>
                                <Input
                                    onChange={(e) => setHadithNum(e.target.value)}
                                    value={hadithNum}
                                    type='number'
                                    placeholder='Enter Hadith number'
                                    bgColor={"#D9D9D9"}
                                    color={"black"}
                                    _placeholder={{ color: "black" }}
                                    mb={{ base: "10px", md: "7px", lg: "10px" }}
                                />
                                <Button
                                    width={"100%"}
                                    _hover={{ bgColor: "white", color: "black" }}
                                    bgColor={"#272F33"}
                                    color={"white"}
                                    onClick={handleHadithSearch}
                                >
                                    Search
                                </Button>
                            </Box> */}

                    </Box>
                </Box>

            </Box>
            <BetweenLine />
            {loadingHadith && <Loader />}

            <>
                {data && data.slice(page * 25 - 25, page * 25).map((item, index) => (
                    <Box
                        data-aos="fade-up"
                        data-aos-duration="900"
                        key={index + 1}
                    >
                        {/* Chapter */}
                        <Box
                            bg={"#242424"}
                            pl={{ base: "20px", md: "18px", lg: "15px" }}
                            pr={{ base: "20px", md: "18px", lg: "15px" }}
                            pt={{ base: "8px", md: "12px", lg: "15px" }}
                            pb={{ base: "8px", md: "12px", lg: "15px" }}
                            mb={"25px"}

                        >
                            <Text
                                color={"white"}
                                fontSize={{ lg: "18px", md: "16px", base: "13px" }}
                                fontFamily={"Istok Web"}
                                fontWeight={700}
                            >
                                CHAPTER <b>{item.id}</b>
                            </Text>
                            {item.headingEnglish && (
                                <Text
                                    color={"white"}
                                    fontSize={{ lg: "18px", md: "18px", base: "13px" }}
                                    fontFamily={"Inter"}
                                >
                                    {item.headingEnglish}
                                </Text>
                            )}

                        </Box>
                        {/* Arabic Hadith */}
                        <Box

                            bg={"#1F2125"}
                            pl={{ base: "4%", md: "15%", lg: "15%" }}
                            mb={{ base: "20px", md: "20px", lg: "25px" }}
                        >
                            <Box>
                                <Text
                                    fontFamily={"Inter"}
                                    fontSize={{ lg: "25px", md: "22px", base: "15px" }}
                                    fontWeight={700}
                                    textAlign={"end"}
                                    color={"white"}
                                >
                                    <ReadMore text={item.arabic} />
                                </Text>
                            </Box>
                        </Box>
                        {/* English Hadith */}
                        {item.english.text && (
                            <Box

                                bg={"#FFF"}
                                borderRadius={"0px 40px 40px 0px"}
                                pl={{ base: "10px", md: "20px", lg: "30px" }}
                                pr={{ base: "4%", md: "15%", lg: "15%" }}
                                pt={{ base: "10px", md: "14px", lg: "18px" }}
                                pb={{ base: "5px", md: "14px", lg: "18px" }}
                                mb={{ base: "15px", md: "20px", lg: "25px" }}
                            >
                                <Text
                                    color={"black"}
                                    fontSize={{ lg: "20px", md: "18px", base: "15px" }}
                                    fontFamily={"Istok Web"}
                                    fontWeight={700}
                                    mb={{ base: "10px", lg: "15px", md: "8px" }}
                                >
                                    {item.english.narrator}
                                </Text>
                                <Text
                                    color={"black"}
                                    fontSize={{ base: "13px", md: "14", lg: "15px" }}
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                >
                                    <ReadMore text={item.english.text} />
                                </Text>
                            </Box>
                        )}

                        {/* Reference and save to bookmark btn */}
                        <Box>
                            <Row>
                                <Col sm={12} md={6}>
                                    <Box>
                                        {/* <Text
                                            color={"white"}
                                        >
                                            <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "3px" } }}>Reference :</text>
                                            <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" }, fontWeight: "400" }}>{item.bookSlug}-{item.hadithNumber}</text>
                                        </Text> */}
                                        <Box
                                            display={"flex"}
                                        >
                                            <Text
                                                color={"white"}
                                                fontFamily={"Istok Web"}
                                                fontSize={{ lg: "18px", md: '15px', base: "13px" }}
                                            >
                                                In-book reference :
                                            </Text>
                                            <Text
                                                color={"white"}
                                                fontFamily={"Inter"}
                                                fontSize={{ lg: "15px", md: '13x', base: "11px" }}
                                            >
                                                book <b>{chapter}</b> , Hadith <b>{item.id}</b>
                                            </Text>
                                        </Box>
                                    </Box>
                                </Col>
                                {/* Save to bookmark */}
                                {/* <Col>
                                <Box
                                    display="flex" justifyContent={{ base: "center", lg: "flex-end", md: "flex-end" }}
                                >   
                                    <Button
                                        size={{ base: "sm", md: "md", lg: "lg" }}
                                        bg={"#272F33"}
                                        color={"white"}
                                    >
                                        <i style={{ marginRight: "10px" }} className="fa-regular fa-bookmark"></i>
                                        SAVE TO BOOKMARK
                                    </Button>
                                </Box>
                            </Col> */}
                                <BetweenLine />
                            </Row>
                        </Box>
                    </Box>
                ))}
            </>
        </>
    )
}

export default Hadiths