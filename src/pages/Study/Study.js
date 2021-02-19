import {
    Box,
} from "@chakra-ui/react"

//tabs
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
} from "@chakra-ui/react"

//important ones
import CardHolder from "../../components/CardsHolder/CardsHolder.js"
import Interactable from "../../components/InteractableCardHolder/Interactable.js"

function Study() {

    const symbol1 = [
        { morse: "• –", symbol: "A" },
        { morse: "– • • •", symbol: "B" },
        { morse: "– • – •", symbol: "C" },
        { morse: "– • •", symbol: "D" },
        { morse: "•", symbol: "E" },
        { morse: "• • – •", symbol: "F" },
        { morse: "– – •", symbol: "G" },
        { morse: "• • • •", symbol: "H" },
        { morse: "• •", symbol: "I" },
        { morse: "• – – –", symbol: "J" },
        { morse: "– • –", symbol: "K" },
        { morse: "• – • •", symbol: "L" },
        { morse: "– –", symbol: "M" },
        { morse: "– •", symbol: "N" },
        { morse: "– – –", symbol: "O" },
        { morse: "• – – •", symbol: "P" },
        { morse: "– – • –", symbol: "Q" },
        { morse: "• – •", symbol: "R" },
        { morse: "• • •", symbol: "S" },
        { morse: "–", symbol: "T" },
        { morse: "• • –", symbol: "U" },
        { morse: "• • • –", symbol: "V" },
        { morse: "• – –", symbol: "W" },
        { morse: "– • • –", symbol: "X" },
        { morse: "– • – –", symbol: "Y" },
        { morse: "– – • •", symbol: "Z" },
        { morse: "• – – – –", symbol: "1" },
        { morse: "• • – – –", symbol: "2" },
        { morse: "• • • – –", symbol: "3" },
        { morse: "• • • • –", symbol: "4" },
        { morse: "• • • • •", symbol: "5" },
        { morse: "– • • • •", symbol: "6" },
        { morse: "– – • • •", symbol: "7" },
        { morse: "– – – • •", symbol: "8" },
        { morse: "– – – – •", symbol: "9" },
        { morse: "– – – – –", symbol: "0" },
        { morse: "• – • – • –", symbol: "." },
        { morse: "– – • • – –", symbol: "," },
        { morse: "• • – – • •", symbol: "?" },

    ]


    return (
        <Box w="100%">
            <Tabs align="center">
                <TabList>
                    <Tab>One by one</Tab>
                    <Tab>View All</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel><Interactable symbol={symbol1} index="0" /></TabPanel>
                    <TabPanel><CardHolder symbol={symbol1} /></TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );

}

export default Study