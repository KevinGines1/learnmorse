import Card from "../card/Card.js"
import {
    Box,
} from "@chakra-ui/react"

function CardsHolder(props) {
    return (
        <Box w="90%" display="flex" flexDir="row" flexWrap="wrap" justifyContent="space-evenly" alignContent="space-evenly">
            <Card symbol={props.symbol} />
        </Box>
    );
}

export default CardsHolder