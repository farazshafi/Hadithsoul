import React, { useEffect } from 'react'
import GoBackBtn from '../components/GoBackBtn'
import ShortProfileImam from '../components/ShortProfileImam'
import { Box, Text } from '@chakra-ui/react'
import { Col, Row } from 'react-bootstrap'
import BetweenLine from "../components/BetweenLine"
import FlowerBackgroundImg from "../images/flower.png"
import LeafBackgroundImg from "../images/leaf.png"
import FlowerTwoBackgroundImg from "../images/flower2.png"
import FlowerThreeBackgroundImg from "../images/flower3.png"
import { useParams } from 'react-router-dom'

const AboutImamPage = () => {

    const params = useParams()
    const name = params.name

    return (
        <Box
            bg="#1F2125"
        >
            <GoBackBtn name={name} page={"AboutImam"} />
            <ShortProfileImam profilePage={true} name={name} />
            {/* Auther bio */}
            <Box
                pt={{ base: "20px", md: "22px", lg: "25px" }}
                pb={{ base: "20px", md: "22px", lg: "25px" }}
                pl={{ base: "20px", md: "22px", lg: "88px" }}
                pr={{ base: "20px", md: "22px", lg: "88px" }}
                bg={"#272F33"}
                bgImage={FlowerBackgroundImg}
                backgroundSize={"cover"}
                objectFit={"cover"}
            >
                <Text
                    fontFamily={"Istok Web"}
                    fontSize={{ base: "15px", md: "23px", lg: "25px" }}
                    fontWeight={700}
                    textAlign={{ base: "center", md: "start", lg: "start" }}
                    textDecoration={"underline"}
                    color={"white"}
                >
                    Author bio
                </Text>
                <Text
                    fontFamily={"Inter"}
                    fontSize={{ base: "11px", lg: "15px", md: "13px" }}
                    fontWeight={400}
                    bgColor={"blackAlpha.200"}
                    color={"whiteAlpha.700"}
                >
                    Imām al-Bukhārī (rahimahullāh) is known as the Amīr al-Mu'minīn in hadīth. His genealogy is as follows: Abu Abdullāh Muhammad Ibn Ismā`īl Ibn Ibrāhīm Ibn al-Mughīrah Ibn Bardizbah al-Bukhārī. His father Ismā`īl was a well-known and famous muhaddith in his time and had been blessed with the chance of being in the company of Imām Mālik, Hammād Ibn Zaid and also Abdullāh Ibn Mubārak (rahimahullahum).Imām al-Bukhārī (rahimahullah) was born on the day of Jumuah (Friday) the 13th of Shawwāl 194 (A.H.). His father passed away in his childhood. At the age of sixteen after having memorized the compiled books of Imām Wakīy and Abdullāh Ibn Mubārak, he performed Hajj with his elder brother and mother. After the completion of Hajj he remained in Makkah for a further two years and upon reaching the age of eighteen headed for Madīnah, compiling the books "Qadhāyas-Sahābah wa at-Tābi'īn" and "Tārikh al-Kabīr." Imām al-Bukhārī also traveled to other key centers of Arabia in search of knowledge like Syria, Egypt, Kufa, Basra, and Baghdad.Imām al-Bukhārī (rahimahullah) first started listening and learning ahādīth in 205 A.H., and after benefiting from the `ulama of his town he started his travels in 210 A.H. His memory was considered to be one of a kind; after listening to a hadīth he would repeat it from memory. It has been known that in his childhood he had memorized 2,000 ahādīth.There are a number of books compiled by Imām al-Bukhārī (rahimahullah). His Ṣaḥīḥ is regarded as the highest authority of the collection of hadīth. He named this book "Al-Jāmi` al-Musnad as-Ṣaḥīḥ al-Mukhtasar min Umuri Rasulullahi sallallāhu 'alaihi wa sallam wa Sunanihi wa Ayyāmihi." After he finished, he showed the manuscript to his teachers Imām Ahmad ibn Hanbal (rahimahullah) for approval, along with Ibn al-Madini, and lastly Ibn Ma`īn. It has also been recorded that it took Imām al-Bukhārī a period of 16 years to gather the ahādīth and to write the Ṣaḥīḥ, which sets the date back to 217 A.H. as the year in which he started the compilation; Imām al-Bukhārī (rahimahullah) being merely 23 years of age.Before he actually placed a hadith in his compilation he performed ghusl and prayed two raka`ah nafl prayers asking Allah for guidance. He finalized each hadith in the rawdah of Masjid an-Nabawi (between the Prophet's () grave and his minbar) and wrote the hadīth in the masjid. Only after being completely satisfied with a hadīth did he give it a place in his collection.

                </Text>
            </Box>
            <BetweenLine />
            {/* Methods of Classification and Annotation */}
            <Box
                pt={{ base: "20px", md: "22px", lg: "25px" }}
                pb={{ base: "20px", md: "22px", lg: "25px" }}
                pl={{ base: "20px", md: "22px", lg: "88px" }}
                pr={{ base: "20px", md: "22px", lg: "88px" }}
                bg={"#D9D9D9"}
                bgImage={LeafBackgroundImg}
                backgroundSize={"cover"}
                objectFit={"cover"}
            // mt={"40px"}
            >
                <Text
                    fontFamily={"Istok Web"}
                    fontSize={{ lg: "25px", base: "15px", md: "23px" }}
                    fontWeight={700}
                    color={"black"}
                    textDecoration={'underline'}
                    textAlign={{ lg: "end", base: 'start', md: "end" }}
                >
                    Methods of Classification and Annotation
                </Text>
                <Text
                    fontFamily={"Inter"}
                    fontSize={{ base: "11px", lg: "15px", md: "13px" }}
                    fontWeight={400}
                    color={"blackAlpha.700"}
                    textAlign={"start"}
                    bgColor={"blackAlpha.100"}
                >
                    Imām al-Bukhārī (rahimahullah) imposed conditions which all narrators and testifiers in the hadith chain must have met before a hadith was included in his book:1. All narrators in the chain must be just (`adl).2. All narrators in the chain must possess strong memory and all the Muhadditheen who possess great knowledge of ahadith must agree upon the narrators' ability to learn and memorize, along with their reporting techniques.3. The chain must be complete without any missing narrators.4. It must be known that consecutive narrators in the chain met each other (this is Imām al-Bukhārī's extra condition).Imām an-Nawawi (rahimahullah) relates that all scholars in Islām have agreed that Ṣaḥīḥ al-Bukhārī has gained the status of being the most authentic book after the Qur'an. Ṣaḥīḥ al-Bukhārī consists of 7,563 ahādith including those ahādith which have been repeated. Without repetitions however, the total number of hadith is around 2,600.
                </Text>
            </Box>
            <BetweenLine />
            <Box
                // pt={{ base: "", md: "", lg: "80px" }}
                pb={{ base: "20px", md: "", lg: "80px" }}
                pl={{ base: "20px", md: "", lg: "80px" }}
                pr={{ base: "20px", md: "", lg: "80px" }}
                bg={"#1F2125"}
            >
                <Row>
                    {/* His Students */}
                    <Col sm={12} md={6} lg={6}>
                        <Box
                            pt={{ base: "10px", md: "13", lg: "15px" }}
                            pb={{ base: "10px", md: "13", lg: "15px" }}
                            pl={{ base: "15px", md: "13", lg: "20px" }}
                            pr={{ base: "15px", md: "13", lg: "20px" }}
                            bg={"#272F33"}
                            borderRadius={{ base: "10px", lg: "25px", md: "30px" }}
                            bgImage={FlowerTwoBackgroundImg}
                            backgroundSize={"cover"}
                            objectFit={"cover"}
                        >
                            <Text
                                fontFamily={"Istok Web"}
                                fontSize={{ base: "20px", md: "23px", lg: "25px" }}
                                fontWeight={700}
                                textDecoration={"underline"}
                                textAlign={"center"}
                                color={"white"}
                            >
                                His Students:
                            </Text>
                            <Text
                                fontFamily={"Inter"}
                                fontSize={{ base: "10px", lg: "15px", md: "13px" }}
                                color={"whiteAlpha.700"}
                                bgColor={"whiteAlpha.200"}
                            >
                                In the year 864/250, he settled in Nishapur. It was there that he met Muslim ibn Al-Hajjaj, who would be considered his student, and eventually collector and organizer of the hadith collection Ṣaḥīḥ Muslim which is considered second only to that of al-Bukhārī.
                            </Text>
                        </Box>
                    </Col>
                    {/* His Death */}
                    <Col sm={12} md={6} lg={6}>
                        <Box
                            mt={{ base: "20px", md: "0", lg: "0" }}
                            pt={{ base: "10px", md: "13", lg: "15px" }}
                            pb={{ base: "10px", md: "13", lg: "15px" }}
                            pl={{ base: "15px", md: "13", lg: "20px" }}
                            pr={{ base: "15px", md: "13", lg: "20px" }}
                            bg={"#D9D9D9"}
                            borderRadius={{ base: "10px", lg: "25px", md: "30px" }}
                            backgroundSize={"cover"}
                            objectFit={"cover"}
                            bgImage={FlowerThreeBackgroundImg}
                        >
                            <Text
                                fontFamily={"Istok Web"}
                                fontSize={{ base: "20px", md: "23px", lg: "25px" }}
                                fontWeight={700}
                                textDecoration={"underline"}
                                textAlign={"center"}
                                color={"black"}
                            >
                                His Death:
                            </Text>
                            <Text
                                fontFamily={"Inter"}
                                fontSize={{ base: "10px", lg: "15px", md: "13px" }}
                                color={"blackAlpha.700"}
                                bgColor={"blackAlpha.200"}
                            >
                                Political problems led him to move to Khartank, a village near Samarkānd where he died in the year 256 A.H./870 A.D.                            </Text>
                        </Box>
                    </Col>
                </Row>
            </Box>
        </Box>
    )
}

export default AboutImamPage