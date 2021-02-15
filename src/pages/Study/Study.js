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

function Study() {

    return (
        <Box>
            <Tabs align="center">
                <TabList>
                    <Tab>One by one</Tab>
                    <Tab>View All</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>One by one morse code to letter</TabPanel>
                    <TabPanel>Display all the morse code and letters</TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );

}

export default Study