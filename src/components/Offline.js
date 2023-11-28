import { Box } from '@chakra-ui/react'
import React from 'react'
import Lottie from "lottie-react"
import NetworkAnimation from "../animations/networkIssue.json"

const Offline = () => {

    // lottie styles
    const lottieStyleNetwork = {
        width: "300px",
        // marginBottom: 5,
        // marginLeft: 0
    }

    return (
        <>
            <Box>

                <Box
                    ml="auto"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="100%" // Adjust height as needed
                >
                    <Lottie
                        animationData={NetworkAnimation}
                        style={lottieStyleNetwork}
                        loop={true}
                        autoPlay={true}
                    />
                </Box>



            </Box>
        </>
    )
}

export default Offline