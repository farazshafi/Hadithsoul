import React, { useEffect, useState } from 'react'
import GoBackBtn from '../components/GoBackBtn'
import { Box, useToast } from '@chakra-ui/react'
import Hadiths from '../components/Hadiths'
import Offline from '../components/Offline'
import { useParams } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import { Box as MuiBox, Pagination } from "@mui/material"
const HadithPage = () => {

    const params = useParams()
    const name = params.name
    const chapter = Number(params.chapter)
    const toast = useToast()
    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    const [loadingHadith, setLoadingHadith] = useState(false)
    const [loading, setLoading] = useState(false)
    const [hadith, setHadith] = useState([])
    const [bookName, setBookName] = useState([])
    const [offline, setOffline] = useState(false)
    const [lastpage, setLastPage] = useState(1)
    const [page, setPage] = useState(1)
    const perPage = 25
    // const [totalItems, setTotalItems] = useState(Number);
    // const [from, setFrom] = useState(Number);
    // const [to, setTo] = useState(Number);
    const [totalHadiths, setTotalHadiths] = useState(Number);

    const fetchHadith = async () => {
        try {
            setLoadingHadith(true)

            if (name === "muslim" || name === "ibnmajah") {
                if (chapter === 0) {
                    const chapterJson = require(`../data/byChapter/theBooks/${name}/1.json`);
                    setHadith(chapterJson.hadiths)
                    setBookName(chapterJson.metadata.english.introduction)
                    setTotalHadiths(chapterJson.metadata.length)
                    let totalhadiths = chapterJson.metadata.length;
                    setLastPage(Math.ceil(totalhadiths / perPage));
                } else {
                    const chapterJson = require(`../data/byChapter/theBooks/${name}/${Number(chapter + 1)}.json`);
                    setHadith(chapterJson.hadiths)
                    setBookName(chapterJson.metadata.english.introduction)
                    setTotalHadiths(chapterJson.metadata.length)
                    let totalhadiths = chapterJson.metadata.length;
                    setLastPage(Math.ceil(totalhadiths / perPage));

                }
            } else if (name === "darimi") {
                if (chapter === 0) {
                    const chapterJson = require(`../data/byChapter/theBooks/darimi/1.json`);
                    setHadith(chapterJson.hadiths)
                    setBookName([])
                    setTotalHadiths(chapterJson.metadata.length)
                    let totalhadiths = chapterJson.metadata.length;
                    setLastPage(Math.ceil(totalhadiths / perPage));
                } else {
                    const chapterJson = require(`../data/byChapter/theBooks/${name}/${Number(chapter + 1)}.json`);
                    setHadith(chapterJson.hadiths)
                    setBookName(chapterJson.metadata.english.introduction)
                    setTotalHadiths(chapterJson.metadata.length)
                    let totalhadiths = chapterJson.metadata.length;
                    setLastPage(Math.ceil(totalhadiths / perPage));

                }
            }
            // else if (name === "forty") {
            //     if (chapter === 1) {
            //         const chapterJson = require(`../data/byChapter/forties/nawawi40/1.json`);
            //         setHadith(chapterJson.hadiths)
            //         setBookName(chapterJson.metadata.english.introduction)
            //         setTotalHadiths(chapterJson.metadata.length)
            //     }
            //     if (chapter === 2) {
            //         ("chapter 2")
            //         const chapterJson = require(`../data/byChapter/forties/qudsi40/1.json`);
            //         setHadith(chapterJson.hadiths)
            //         setBookName(chapterJson.metadata.english.introduction)
            //         setTotalHadiths(chapterJson.metadata.length)
            //     }
            //     if (chapter === 3) {
            //         ("chapter 3")
            //         const chapterJson = require(`../data/byChapter/forties/shahwaliullah40/1.json`);
            //         setHadith(chapterJson.hadiths)
            //         setBookName(chapterJson.metadata.english.introduction)
            //         setTotalHadiths(chapterJson.metadata.length)
            //     }
            // }
            // else if (name === "nawawi40") {
            //     ("name === nawawi40")
            //     const chapterJson = require(`../data/byChapter/forties/nawawi40/1.json`);
            //     setHadith(chapterJson.hadiths)
            //     setBookName(chapterJson.metadata.english.introduction)
            //     setTotalHadiths(chapterJson.metadata.length)
            // }
            else {
                const chapterJson = require(`../data/byChapter/theBooks/${name}/${chapter}.json`);
                setHadith(chapterJson.hadiths)
                setBookName(chapterJson.metadata.english.introduction)
                setTotalHadiths(chapterJson.metadata.length)
                let totalhadiths = chapterJson.metadata.length;
                setLastPage(Math.ceil(totalhadiths / perPage));
            }
            // setTotalItems(bukhariHadith.totalItems)
            // setFrom(bukhariHadith.from)
            // setLastPage(bukhariHadith.lastPage)
            // setTo(bukhariHadith.to)
            setOffline(false)
            setLoadingHadith(false)
        } catch (error) {
            toast({
                title: 'Check You Connection.',
                description: "Try Again.",
                status: 'error',
                duration: 5000,
                position: "top-left",
                isClosable: true,
            })
            setOffline(true)
            console.log(error)
            setLoading(false)
        }
    }

    const handleChange = (event, selectedPage) => {
        setPage(prevPage => (selectedPage >= 1 && selectedPage <= lastpage && selectedPage !== prevPage) ? selectedPage : prevPage);
    };

    useEffect(() => {
        fetchHadith()
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        scrollTop()
        fetchHadith();
        // eslint-disable-next-line
    }, [page, chapter, name]);
    return (
        <>
            <ChakraProvider>
                <GoBackBtn page={"Hadith"} name={name} />
                <Box
                    bg={"#1F2125"}
                    pl={{ base: "5%", md: "50px", lg: "108px" }}
                    pr={{ base: "5%", md: "50px", lg: "108px" }}
                >
                    {offline ? (
                        <Offline />
                    ) : (
                        <>
                            <Hadiths
                                loadingHadith={loadingHadith}
                                bookname={bookName}
                                chapter={chapter}
                                loading={loading}
                                data={hadith}
                                page={page}
                                // from={1}
                                // totalItems={30}
                                total={totalHadiths}
                                // to={10}
                                name={name}
                            />
                        </>
                    )
                    }
                </Box >
            </ChakraProvider>
            {lastpage > 1 && (
                <MuiBox
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    pt={"10px"}
                    pb={"10px"}
                    bgcolor={"white"}
                >
                    <Pagination color='primary' count={lastpage} page={page} onChange={handleChange} />
                </MuiBox>
            )}
        </>

    )
}

export default HadithPage