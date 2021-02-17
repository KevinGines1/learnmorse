import {
    Box,
    // Text,
    Button,
    ButtonGroup,
    Heading,
} from "@chakra-ui/react"

import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from "react-icons/ai"

import {
    useState
} from "react"


function Interactable(props) {
    const [index, updateIndex] = useState(parseInt(props.index, 10))

    const prevClick = () => {
        index === 0 ? updateIndex(38) : updateIndex(index - 1)
    }

    const nextClick = () => {
        index === 38 ? updateIndex(0) : updateIndex(index + 1)
    }

    return (
        <Box >
            <Box h="40vh" d="flex" alignItems="center" justifyContent="center" flexDir="column">
                <Heading margin="10px" size="4xl">{props.symbol[index].morse}</Heading>
                <Heading margin="10px" size="4xl">{props.symbol[index].symbol}</Heading>
            </Box>
            <ButtonGroup margin="20px" spacing="50">
                <Button leftIcon={<AiOutlineArrowLeft />} onClick={prevClick}>Previous</Button>
                <Button rightIcon={<AiOutlineArrowRight />} onClick={nextClick}>Next</Button>
            </ButtonGroup>
        </Box>
    );
}

export default Interactable