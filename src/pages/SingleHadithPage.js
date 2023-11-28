import { Box, Input, Table, Tbody, Td, Text, Th, Thead, Tr, useToast, Button, ChakraProvider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import BetweenLine from '../components/BetweenLine'
import { useNavigate, useParams } from 'react-router-dom'
import ReadMore from '../components/ReadMore'
import { Col, Row } from 'react-bootstrap'
import GoBackBtn from '../components/GoBackBtn'

const SingleHadithPage = () => {
  const params = useParams()
  const chapter = params.chapter
  const name = params.name
  const hadithNum = params.hadithNum
  const book = params.bookname
  const from = params.from
  const to = params.to
  const toast = useToast()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState()
  const [hadithNumber, setHadithNumber] = useState()


  const fetchHadith = async () => {
    try {
      setLoading(true)
      // const { data } = await axios.get(`/api/sunna/getHadithByNumber/${name}/${chapter}/${hadithNum}`)
      // setResult(data)
      // (data)
      setLoading(false)
    } catch (error) {
      console.log(error.data)
      setLoading(false)
    }

  }

  const handleHadithSearch = async () => {
    setHadithNumber("")
    if (hadithNumber > to || hadithNumber < from || hadithNumber == undefined) {
      toast({
        title: `Not Found ${hadithNumber} Hadith`,
        description: `Enter between ${from}- ${to}`,
        status: 'error',
        duration: 5000,
        position: "top-left",
        isClosable: true,
      })
    } else {
      try {
        setLoading(true)
        // const { data } = await axios.get(`/api/sunna/getHadithByNumber/${name}/${chapter}/${hadithNumber}`)
        // setResult(data)
        // (data)
        setLoading(false)
      } catch (error) {
        console.log(error.data)
        setLoading(false)
      }
    }

  }

  useEffect(() => {
    fetchHadith()
  }, []);

  return (
    <ChakraProvider>
      <GoBackBtn chapter={chapter} bookname={book} name={name} page={"SingleHadithPage"} />
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
          <span><i style={{ marginLeft: "10px" }} class="fa-solid fa-book"></i></span>
          <span style={{ marginLeft: "10px" }}>{book}</span>
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
                ) : (<>
                  <Thead>
                    <Tr>
                      <Th color={"white"} textAlign={""}>From</Th>
                      <Th color={"white"} textAlign={""}>TO</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Td color={"white"} textAlign={""}>{from}</Td>
                    <Td color={"white"} textAlign={""}>{to}</Td>
                  </Tbody>
                </>)}

              </Table>
              <Box>
                <Input
                  onChange={(e) => setHadithNumber(e.target.value)}
                  value={hadithNumber}
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
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>
      <BetweenLine />
      <Box
        bg={"#1F2125"}
        pl={{ base: "5%", md: "50px", lg: "108px" }}
        pr={{ base: "5%", md: "50px", lg: "108px" }}
      >
        <Box>
          {/* Chapter */}
          <Box
            bg={"#242424"}
            pl={{ base: "20px", md: "18px", lg: "15px" }}
            pr={{ base: "20px", md: "18px", lg: "15px" }}
            pt={{ base: "8px", md: "12px", lg: "15px" }}
            pb={{ base: "8px", md: "12px", lg: "15px" }}
            mb={"25px"}
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <Text
              color={"white"}
              fontSize={{ lg: "18px", md: "16px", base: "13px" }}
              fontFamily={"Istok Web"}
              fontWeight={700}
            >
              CHAPTER {result ? result.hadithNumber : ""}
            </Text>
            <Text
              color={"white"}
              fontSize={{ lg: "18px", md: "18px", base: "13px" }}
              fontFamily={"Inter"}
            >
              {result ? result.headingEnglish : "No Title"}
            </Text>
          </Box>
          {/* Arabic Hadith */}
          <Box
            data-aos="fade-up"
            data-aos-duration="900"
            bg={"#1F2125"}
            pl={{ base: "4%", md: "15%", lg: "15%" }}
            mb={{ base: "20px", md: "20px", lg: "25px" }}
          >
            <Text
              fontFamily={"Inter"}
              fontSize={{ lg: "25px", md: "22px", base: "15px" }}
              fontWeight={700}
              textAlign={"end"}
              color={"white"}
            >
              <ReadMore text={result ? result.hadithArabic : ""} />
            </Text>
          </Box>
          {/* English Hadith */}
          <Box
            data-aos="fade-up"
            data-aos-duration="900"
            bg={"#FFF"}
            borderRadius={"0px 40px 40px 0px"}
            pl={{ base: "10px", md: "20px", lg: "30px" }}
            pr={{ base: "4%", md: "15%", lg: "15%" }}
            pt={{ base: "10px", md: "14px", lg: "18px" }}
            mb={{ base: "15px", md: "20px", lg: "25px" }}
          >
            <Text
              color={"black"}
              fontSize={{ lg: "20px", md: "18px", base: "15px" }}
              fontFamily={"Istok Web"}
              fontWeight={700}
              mb={{ base: "10px", lg: "15px", md: "8px" }}
            >
              {result ? result.englishNarrator : ""}
            </Text>
            <Text
              color={"black"}
              fontSize={{ base: "13px", md: "14", lg: "15px" }}
              fontFamily={"Inter"}
              fontWeight={400}
            >
              <ReadMore text={result ? result.hadithEnglish : ""} />
            </Text>
          </Box>
          {/* Reference and save to bookmark btn */}
          <Box
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <Row>
              <Col sm={12} md={6}>
                <Box>
                  <Text
                    color={"white"}
                  >
                    <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>Reference :</text>
                    <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" }, fontWeight: "400" }}>{result ? result.bookSlug : ""}-{result ? result.hadithNumber : ""}</text>
                  </Text>
                  <Text
                    color={"white"}
                  >
                    <text style={{ fontFamily: "Istok Web", fontSize: { lg: "18px", md: "", base: "5px" } }}>In-book reference : </text>
                    <text style={{ fontFamily: "Inter", fontSize: { lg: "15px", md: "13px", base: "10px" } }}>book {chapter} , Hadith </text>
                  </Text>
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
                                        <i style={{ marginRight: "10px" }} class="fa-regular fa-bookmark"></i>
                                        SAVE TO BOOKMARK
                                    </Button>
                                </Box>
                            </Col> */}
              <BetweenLine />
            </Row>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  )
}

export default SingleHadithPage