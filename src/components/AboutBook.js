import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from "../components/Loader"
import { ArrowRightIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'
import booksOfBukhari from "../data/book chapters/bukhariBookChapters"
import booksOfMuslim from "../data/book chapters/muslimBookChapters"
import booksOfMalik from "../data/book chapters/malikBookChapters"
import booksOfNasai from "../data/book chapters/nasaiBookChapter"
import booksOfAbudawd from "../data/book chapters/abudawudBookChapter"
import booksOfIbnmajah from "../data/book chapters/ibnmajahBookChapter"
import booksOfAhmad from "../data/book chapters/ahmadBookChapter"

const AboutBook = ({ name }) => {
    const [bookName, setBookName] = useState([])
    const [loading, setLoading] = useState(false)
    const [internet, setInternet] = useState(true)
    const navigate = useNavigate()

    const bookData = {
        bukhari: booksOfBukhari.data,
        muslim: booksOfMuslim.data,
        malik: booksOfMalik.data,
        nasai: booksOfNasai.data,
        abudawud: booksOfAbudawd.data,
        ibnmajah: booksOfIbnmajah.data,
        ahmad: booksOfAhmad.data,

    };

    const fetchBookname = async () => {
        try {
            setLoading(true)
            setInternet(true)
            const selectedBookData = bookData[name]
            if (selectedBookData) {
                setBookName(selectedBookData);
            }
            setLoading(false)
        } catch (error) {
            setInternet(false)
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBookname()
        // eslint-disable-next-line
    }, []);

    return (
        <>

            {/* option one */}
            <Box
                bg={"#1F2125"}
                pl={{ base: "25px", md: "91px", lg: "91px" }}
                pr={{ base: "25px", md: "91px", lg: "91px" }}
                pb={{ base: "30px", md: "78px", lg: "78px" }}
            >
                {internet ? (
                    <>
                        <Box
                            bg={"#242424"}
                        >
                            <Table size={{ base: "sm", md: "md", lg: "lg" }}>
                                {loading ? (
                                    <Loader />
                                ) : (<>
                                    <Thead>
                                        <Tr>
                                            <Th color={"white"} textAlign={""}>Book</Th>
                                            <Th color={"white"} textAlign={""}>Title</Th>
                                            <Th color={"white"} textAlign={""}>Read</Th>
                                            {/* <Th color={"white"} textAlign={"center"}>Starting</Th> */}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {bookName && bookName.map((singleBook, index) => (
                                            <Tr key={index + 1} cursor={"pointer"} onClick={() => {
                                                navigate(`/collections/${name}/book/${singleBook.book[0].name}/${singleBook.bookNumber}`)
                                            }}>
                                                <Td key={index + 2} color={"white"} textAlign={""}>{singleBook.bookNumber}</Td>
                                                <Td key={index + 3} color={"white"} textAlign={""}>{singleBook.book[0].name}</Td>
                                                <Td key={index + 4} color={"white"} textAlign={""}><ArrowRightIcon /></Td>
                                                {/* <Td color={"white"} textAlign={"center"}>1/9</Td> */}
                                            </Tr>
                                        ))}

                                    </Tbody>
                                </>)}

                            </Table>
                        </Box>
                    </>
                ) : (
                    <></>
                )}

            </Box>
        </>
    )
}

export default AboutBook