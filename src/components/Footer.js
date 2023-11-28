import { LinkIcon } from '@chakra-ui/icons'
import { Box, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { ChakraProvider } from "@chakra-ui/react"
import Loader from "./Loader"
import { useNavigate } from "react-router-dom"

const Footer = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [names, setNames] = useState([])

  useEffect(() => {
    // Check if data is already present in localStorage
    const storedCollection = localStorage.getItem("collections")
    if (storedCollection) {
      setNames(JSON.parse(storedCollection))
    } else {
      getnames()
    }
  }, [])


  const getnames = async () => {
    try {
      setLoading(true)
      // const { data } = await axios.get("/api/sunna/getCollectionsName")
      // setNames(data)
      setLoading(false)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <ChakraProvider>
      <footer className='' style={{ backgroundColor: "black", paddingTop: "26px", paddingBottom: "26", paddingLeft: "60px", paddingRight: "60px" }}>
        <Box
          pl={{ base: "px", md: "50", lg: "60px" }}
          pr={{ base: "px", md: "50", lg: "60px" }}
        >
          <Row>
            {/* About */}
            <Col md={6}>
              <Box>
                <Text
                  fontFamily={"Istok Web"}
                  fontSize={{ base: "30px", md: "40px", lg: '60px' }}
                  fontWeight={700}
                  color={"white"}
                >
                  Hadithsoul
                </Text>
                <Text
                  fontFamily={"Istok Web"}
                  fontSize={{ base: "10px", md: "15px", lg: '20px' }}
                  fontWeight={400}
                  color={"white"}
                >
                  Welcome to Hadithsoul - Your sanctuary of authentic Hadith! Explore the wisdom of Prophet Muhammad (peace be upon him) through sacred traditions. Special thanks to sunnah.com for their API support. Delve into the six esteemed Hadith collections and over 40 narrations, including Qudsi Hadith. Let these divine teachings enlighten your soul as we strive for unity and compassion in our journey of faith.                </Text>
                <Box
                  height={"5px"}
                  width={"100%"}
                  bg={"#D9D9D9"}
                  mb={"10px"}
                ></Box>
              </Box>
            </Col>
            {/* Links */}
            <Col md={6}>
              <Box className='flex-row-reverse'
                display={"flex"}
                mt={"10px"}
                pl={{ base: "0px", md: "0px", lg: "20px" }}
              >
                <Row>
                  {/* NAVIGATION */}
                  <Col xs={6} sm={6} md={4}>
                    <Box>
                      <Text
                        color={"white"}
                        fontFamily={"Istok Web"}
                        fontSize={{ base: "15px", md: "18px", lg: '20px' }}
                        fontWeight={700}
                      >
                        NAVIGATION
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        <Link onClick={()=>{navigate("/")}}>Home</Link>
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        <Link onClick={()=>{navigate("/about")}}>about</Link>
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        <Link onClick={()=>{navigate("/collections")}}>collections</Link>
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        color={"white"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                      >
                        <Link onClick={()=>{navigate("/help")}}>help</Link>
                      </Text>
                    </Box>
                  </Col>

                  {/* NETWORK */}
                  <Col xs={6} sm={6} md={4}>
                    <Box>
                      <Text
                        fontFamily={"Istok Web"}
                        fontSize={{ base: "18px", md: "15px", lg: '20px' }}
                        fontWeight={700}
                        width={"100px"}
                        color={"white"}
                      >
                        NETWORK
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                        color={"white"}
                      >
                        <Link target='_blank' href='https://www.instagram.com/_quranicsoul_/'>Instagram</Link>
                      </Text>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                        color={"white"}
                      >
                        <Link target='_blank' href='https://www.instagram.com/_quranicsoul_/'>Facebook</Link>
                      </Text>
                      {/* <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "13px", md: "15px", lg: "15px" }} fontWeight={400}
                        color={"white"}
                      >
                        <Link target='_blank' href='https://www.instagram.com/_quranicsoul_/'>Whatsapp</Link>
                      </Text> */}
                    </Box>
                  </Col>

                  {/* COLLECTIONS */}
                  <Col xs={12} sm={12} md={4}>
                    <Box>
                      <Text
                        fontFamily={"Inter"}
                        fontSize={{ base: "15px", md: "18px", lg: '20px' }}
                        color={"white"}
                        width={"150px"}
                        fontWeight={700}
                      >
                        COLLECTIONS
                      </Text>
                      {loading ? <Loader /> : (
                        names.map((name, index) => (
                          <Text
                            _hover={{ color: "grey" }}
                            onClick={() => {
                              navigate(`/collections/${name.bookSlug}`)
                            }}
                            key={index + 1}
                            fontFamily={"Inter"}
                            fontSize={{ base: "13px", md: "15", lg: "15px" }}
                            color={"white"} fontWeight={400}
                            width={"130px"}
                          >
                            {name.bookName}
                          </Text>
                        ))
                      )}

                    </Box>
                  </Col>

                </Row>
              </Box>
            </Col>
          </Row>
        </Box>
      </footer>
    </ChakraProvider>
  )
}

export default Footer