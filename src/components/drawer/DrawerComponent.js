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


function DrawerComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Drawer onClose={onClose} size="xs">
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader>
                        Drawer Header
                    </DrawerHeader>
                    <DrawerBody>
                        Hello World!
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}

export default DrawerComponent;