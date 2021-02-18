import {
    Box,
    Text,
    Heading,
    Button
} from "@chakra-ui/react"

// import {
//     createBreakpoints
// } from "@chakra-ui/theme-tools"
// icons
import {
    CgNotes,
} from 'react-icons/cg'

// route
import { Link } from "react-router-dom"

// const breakpoints = createBreakpoints({ // make some elements responsive as layout changes (web-> mobile, e.g.)
//     sm: "30em",
//     md: "48em",
//     lg: "62em",
//     xl: "80em",
//     "2xl": "96em",
// })

function Home() {

    return (
        <Box w="100%" display="flex" flexDir="row" justifyContent="center" marginTop="20px">
            <Box w="70%" h="70vh" display="flex" flexDir="column" justifyContent="center" alignItems="center">
                <Heading align="center" fontFamily="Fira Sans" fontSize={{ base: "6xl", md: null, lg: "8xl" }}>The Morse Code</Heading>
                <Box w="100%">
                    <Text margin="10px" fontFamily="Montserrat" fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, tortor ut consectetur consectetur, metus magna vestibulum tortor, consectetur egestas libero ante et mauris.</Text>
                </Box>
                <Button margin="10px" leftIcon={<CgNotes />} w={{ base: "80%", md: null, lg: "20%" }}><Link to="/study">Start Learning</Link></Button>
            </Box>
        </Box>
    );
}

export default Home