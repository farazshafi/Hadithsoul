import React, { useEffect, useState } from 'react'
import { Text, Box, Button, useToast } from '@chakra-ui/react'
import Loader from './Loader'
import Offline from "../components/Offline"
import aboutBookhari from "../data/imam details/bookhariDetails"
import aboutMuslim from "../data/imam details/muslimDetails"
import aboutNasai from "../data/imam details/nasaidDetails"
import aboutAbudawud from "../data/imam details/abudawudDetails"
import aboutTirmidhi from "../data/imam details/tirmidhiDetails"
import aboutIbnmajah from "../data/imam details/ibnmajahDetails"
import aboutAhmad from "../data/imam details/ahmadDetails"
import aboutRiyadussalihin from "../data/imam details/riyadussalihinDetails"
import aboutMishkat from "../data/imam details/mishkatDetails"
import aboutAdab from "../data/imam details/adabDetails"
import aboutShamail from "../data/imam details/shamailDetails"
import aboutBulugh from "../data/imam details/bulughDetails"
import aboutHisn from "../data/imam details/hisnDetails"
import aboutVirtues from "../data/imam details/virtuesDetails"
import aboutDarimi from '../data/imam details/darimiDetails'
import aboutNawawi from '../data/imam details/nawawiDetails'
import aboutForty from '../data/imam details/fortyDetails'
import aboutMalik from '../data/imam details/malikDetails'


const ShortProfileImam = ({ profilePage, name }) => {

    const [writerName, setWriterName] = useState("")
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)

    const toast = useToast()

    const aboutImams = {
        bukhari: aboutBookhari.collection[0].title,
        muslim: aboutMuslim.collection[0].title,
        malik: aboutMalik.collection[0].title,
        nasai: aboutNasai.collection[0].title,
        abudawud: aboutAbudawud.collection[0].title,
        tirmidhi: aboutTirmidhi.collection[0].title,
        ibnmajah: aboutIbnmajah.collection[0].title,
        ahmad: aboutAhmad.collection[0].title,
        forty: aboutForty.collection[0].title,
        riyadussalihin: aboutRiyadussalihin.collection[0].title,
        mishkat: aboutMishkat.collection[0].title,
        adab: aboutAdab.collection[0].title,
        shamail: aboutShamail.collection[0].title,
        bulugh: aboutBulugh.collection[0].title,
        hisn: aboutHisn.collection[0].title,
        virtues: aboutVirtues.collection[0].title,
        darimi: aboutDarimi.collection[0].title,
        nawawi40: aboutNawawi.collection[0].title,
    }

    const getCollectionsDetails = async () => {
        try {
            setLoading(true)
            setInternet(true)
            const selectedData = aboutImams[name]
            if (selectedData) {
                setWriterName(selectedData)
            }
            setLoading(false)
        } catch (error) {
            setInternet(false)
            toast({
                title: 'Check You Connection.',
                status: 'error',
                duration: 5000,
                position: "top-left",
                isClosable: true,
            })
            console.log(error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        getCollectionsDetails()
        // eslint-disable-next-line
    }, []);

    return (

        <>
            <Box
                pl={{ base: "30px", md: "92px", lg: "92px" }}
                pr={{ base: "30px", md: "92px", lg: "92px" }}
                bg={"#1F2125"}
            >
                {internet ? (
                    <>
                        <Box
                            display={"flex"}
                        >
                            <Box ml={"auto"} mr={"auto"}>
                                <Button
                                    bg={"#272F33"}
                                    color={"white"}
                                    borderRadius={"0px"}
                                    textAlign={"center"}
                                    _hover={{ bg: "white", color: "black" }}
                                    size={{ lg: "lg", md: "md", base: "sm" }}
                                >{writerName}
                                </Button>
                            </Box>
                        </Box>

                        <Text
                            fontFamily={"Istok Web"}
                            fontSize={{ base: "15px", md: "25px", lg: "30px" }}
                            color={"black"}
                            ml={"auto"}
                            fontWeight={700}
                            textAlign={"center"}
                            mb={0}
                        // textDecoration={"underline"}
                        >
                            {loading && (
                                <Loader />
                            )}
                        </Text>
                    </>
                ) : (
                    <Offline />
                )}

                {/* shortIntro */}
                {/* <Text
                    fontFamily={"Inter"}
                    fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                    color={"white"}
                    fontWeight={400}
                    textAlign={"center"}
                >
                    
                </Text> */}
                {/* {profilePage ?
                    (<></>)
                    :
                    (
                        <>
                            <Box display="flex" justifyContent="flex-end">
                                <Button
                                    onClick={() => { navigate(`/collections/${name}/about`) }}
                                    color={"white"}
                                    size={{ base: "sm", md: "md", lg: "lg" }} bg={"#272F33"}>
                                    Read More
                                </Button>
                            </Box >
                        </>

                    )
                } */}

            </Box >
        </>
    )
}

export default ShortProfileImam