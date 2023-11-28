import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Box
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const SearchDrawer = () => {
    const [keyword, setKeyword] = useState()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/search/${keyword}`)
        onClose()
    }

    return (
        <>
            <SearchIcon
                color={"white"}
                boxSize={{lg:8,md:6,base:5}}
                onClick={onOpen}
                ref={btnRef}
            />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Search for Hadith</DrawerHeader>
                    <DrawerBody>
                        <Box
                            display={"flex"}
                        >
                            <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} mr={2} placeholder='Search here..' />
                            <Button onClick={handleSearch}>Go</Button>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SearchDrawer