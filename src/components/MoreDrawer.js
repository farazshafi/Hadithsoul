import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Box,
    Text,
    Link
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const MoreDrawer = () => {

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Box
                onClick={onOpen}
            >
                <HamburgerIcon
                    color={"white"}
                    boxSize={7}
                />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Hadithsoul.com</DrawerHeader>
                    <DrawerBody>
                        <Box
                        // borderBottom={"1px"}
                        >
                            <Text
                                fontFamily={"Istok Web"}
                                fontSize={{ lg: "lg", sm: "sm" }}
                            >
                                MENU :</Text>
                        </Box>
                        {/* Home */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "grey" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-house "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Home</Text>
                            </Link>
                        </Box>
                        {/* collections */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/collections")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-users "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Collections</Text>
                            </Link>
                        </Box>
                        {/* About */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/about")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-circle-info "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >About</Text>
                            </Link>
                        </Box>
                        {/* Help */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/help")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-circle-question "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Help</Text>
                            </Link>
                        </Box>
                        {/* Coming soon */}
                        <Box
                            // borderBottom={"1px"}
                            mt={"20px"}
                        >
                            <Text
                                fontFamily={"Istok Web"}
                                fontSize={{ lg: "lg", sm: "sm" }}
                            >
                                COMING SOON :</Text>
                        </Box>
                        {/* Track Readings */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-clock-rotate-left"></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >recent read</Text>
                            </Link>
                        </Box>
                        {/* Feedback */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-comment-dots "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >feedback</Text>
                            </Link>
                        </Box>
                        {/* Bookmark */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-bookmark "></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >bookmark</Text>
                            </Link>
                        </Box>
                        {/* Ringtones */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-volume-high"></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Ringtones</Text>
                            </Link>
                        </Box>
                        {/* posts */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-image"></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Post</Text>
                            </Link>
                        </Box>
                        {/* videos */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-video"></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Videos</Text>
                            </Link>
                        </Box>
                        {/* 99 names of allah */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-file"></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >99 Names of Allah</Text>
                            </Link>
                        </Box>
                        {/* Adhkar */}
                        <Box
                            borderBottom={"1px"}
                            _hover={{ color: "#181D31" }}
                            display={"flex"}
                            textAlign={"center"}
                            pt={"3px"}
                            pb={"3px"}
                            mb={"10px"}
                        >
                            <Link display={"flex"} onClick={()=>{navigate("/comingsoon")}}>
                                <i style={{ marginTop: "3px", }} className="fa-solid fa-pray"></i>
                                <Text
                                    fontFamily={"Istok Web"}
                                    fontSize={{ lg: "lg", sm: "sm" }}
                                    marginBottom={"0"}
                                    ml={"5px"}
                                >Adhkar</Text>
                            </Link>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MoreDrawer