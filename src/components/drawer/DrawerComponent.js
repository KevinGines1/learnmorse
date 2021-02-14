import morseIcon from "../../assets/morse-code-1.png"

import {
    GiHamburgerMenu,
} from "react-icons/gi"

// other chakra UI components
import {
    Box,
    Image,
    Text,
    IconButton,
    Button
} from "@chakra-ui/react";

// Drawer Components
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react"

// router
import { Link } from 'react-router-dom'


function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box w="100%" bg="rgba(77, 87, 140, 255)" display="flex" alignItems="center">
            <IconButton icon={<GiHamburgerMenu />} bg="rgba(77, 87, 140, 255)" marginLeft="5px" size="lg" onClick={onOpen} />
            <Box w="80%" h="15vh" display="flex" justifyContent="center" alignItems="center" flexDir="row">
                <Drawer placement="left" onClose={onClose} size="xs" isOpen={isOpen}>
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>
                                Learn Morse Code
              </DrawerHeader>
                            <DrawerBody>
                                <Box display="flex" flexDir="column" justifyContent="space-evenly" h="25vh">
                                    <Button>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link to="/study">
                                            Learn
                                        </Link>
                                    </Button>
                                    <Button>
                                        <Link to="/test">
                                            Test Yourself
                                        </Link>
                                    </Button>
                                </Box>
                            </DrawerBody>
                            <DrawerFooter>
                                Gines, Kevin A.
              </DrawerFooter>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>

                <a href="/" marginLeft="5px">
                    <Image src={morseIcon} alt="Morse Code Icon" boxSize="100px" objectFit="cover" justifyContent="center" />
                </a>
                <Text paddingLeft="5" fontFamily="Montserrat" fontWeight="extrabold">Learn Morse Code</Text>
            </Box>
        </Box>
    );
}

export default DrawerComponent;