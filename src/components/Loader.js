import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <>
            <Box
                pt={"20px"}
                display={"flex"}
                pb="50px"
            >

                <Spinner
                    size={{ lg: "xl", base: "xs", md: "lg" }}
                    color='white'
                    w={20}
                    h={20}
                    alignSelf={'center'}
                    margin={"auto"}
                />
            </Box>
        </>
    )
}

export default Loader