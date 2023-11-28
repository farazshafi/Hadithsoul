import React, { useEffect } from 'react'
import GoBackBtn from '../components/GoBackBtn'
import BetweenLine from '../components/BetweenLine'
import AboutBook from '../components/AboutBook'
import ShortProfileImam from '../components/ShortProfileImam'
import { useParams } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"


const CollectionsPage = () => {
    const params = useParams()
    const name = params.name
    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

    useEffect(() => {
        scrollTop()
    }, []);

    return (
        <ChakraProvider>
            <GoBackBtn page={"Home"} />
            <ShortProfileImam profilePage={false} name={name} />
            <BetweenLine />
            <AboutBook name={name} />
            <BetweenLine />
        </ChakraProvider>
    )
}

export default CollectionsPage