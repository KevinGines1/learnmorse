// import logo from './logo.svg';
import morseIcon from "./assets/morse-code-1.png"
import './App.css';

import {
  Box,
  Image,
  Text,
} from "@chakra-ui/react";

import {
  GiHamburgerMenu,
} from "react-icons/gi"

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  IconButton,
  Button
} from "@chakra-ui/react"

// import DrawerComponent from './components/drawer/DrawerComponent.js';

function App() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w="100%" bg="rgba(77, 87, 140, 255)" display="flex" alignItems="center">
      <IconButton icon={<GiHamburgerMenu />} bg="rgba(77, 87, 140, 255)" marginLeft="5px" size="lg" onClick={onOpen} />
      <Box w="80%" h="15vh" display="flex" justifyContent="center" alignItems="center" flexDir="row">
        <Drawer placement="left" onClose={onClose} size="xs" isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader>
                Learn Morse Code
                      </DrawerHeader>
              <DrawerBody>
                <Box display="flex" flexDir="column" justifyContent="space-evenly" h="25vh">
                  <Button>Home</Button>
                  <Button>Learn</Button>
                  <Button>Test Yourself</Button>
                </Box>
              </DrawerBody>
              <DrawerFooter>
                Gines, Kevin A.
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        <a href="/">
          <Image src={morseIcon} alt="Morse Code Icon" boxSize="100px" objectFit="cover" justifyContent="center" />
        </a>
        <Text paddingLeft="5" fontFamily="Montserrat" fontWeight="extrabold">Learn Morse Code</Text>
      </Box>
    </Box>
  );
}

export default App;
