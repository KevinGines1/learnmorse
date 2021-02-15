import {
    Box,
    Text,
    Heading,
    Button
} from "@chakra-ui/react"

// icons
import {
    CgNotes,
} from 'react-icons/cg'

// route
import { Link } from "react-router-dom"

function Home() {

    return (
        <Box w="100%" display="flex" flexDir="row" justifyContent="center" marginTop="20px">
            <Box w="50%" h="70vh" display="flex" flexDir="column" justifyContent="center" alignItems="center">
                <Heading fontFamily="Fira Sans" fontSize="8xl">The Morse Code</Heading>
                <Box w="90%">
                    <Text margin="10px" fontFamily="Montserrat" fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, tortor ut consectetur consectetur, metus magna vestibulum tortor, consectetur egestas libero ante et mauris.</Text>
                </Box>
                <Button margin="10px" leftIcon={<CgNotes />} w="20%"><Link to="/study">Start Learning</Link></Button>
            </Box>
        </Box>
    );
}

export default Home