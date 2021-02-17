import Card from "../card/Card.js"
import {
    Box,
    Divider,
} from "@chakra-ui/react"

function CardsHolder(props) {
    return (
        <Box w="90%" display="flex" flexDir="row" flexWrap="wrap" justifyContent="space-evenly" alignContent="space-evenly">
            <Card symbol={props.symbol} />
            <Divider />
        </Box>
    );
}

export default CardsHolder