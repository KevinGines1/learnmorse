import {
    Box,
    // Text,
    // Image,
    Heading,
} from '@chakra-ui/react'

function Card(props) {
    // const symbol = {
    //     code: "• –",
    //     match: "A"
    // }

    return (
        props.symbol.map(morseCode => (
            <Box border="1px" w="15%" borderRadius="2xl" margin="20px">
                <Box padding="5px">
                    <Heading>{morseCode.morse}</Heading>
                    <Heading>{morseCode.symbol}</Heading>
                </Box>
            </Box>
        ))

    );
}

export default Card