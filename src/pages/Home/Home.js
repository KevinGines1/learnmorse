import {
    Box,
    Image,
    Text,
    Heading,
    Button
} from "@chakra-ui/react"

// icons
import {
    CgNotes,
} from 'react-icons/cg'

function Home() {

    return (
        <Box w="100%" display="flex" flexDir="row" justifyContent="center" marginTop="20px">
            <Box w="50%" display="flex" flexDir="column" justifyContent="center" alignItems="center">
                <Heading >The Morse Code</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, tortor ut consectetur consectetur, metus magna vestibulum tortor, consectetur egestas libero ante et mauris.</Text>
                <Button leftIcon={<CgNotes />} w="20%">Start Learning</Button>

            </Box>
        </Box>
    );
}

export default Home