import {
    Box,
    Flex,
    HStack,
    Text,
    IconButton,
    useDisclosure,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                bg="#fff7f1"
                color="#444444"
                px={{ base: "5", md: "120px" }}
                position="sticky"
                top="0"
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        variant={"ghost"}
                        _hover={{ variant: "ghost" }}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />

                    <Link to="/">
                        <Box lineHeight="17px" color="#ed64a6">
                            <Text
                                fontFamily="Kalam"
                                fontWeight="bold"
                                fontSize={{ base: "20px", md: "23px" }}
                            >
                                zero
                            </Text>
                            <Text
                                fontFamily="Kalam"
                                fontWeight="bold"
                                fontSize={{ base: "20px", md: "23px" }}
                            >
                                degree<sup>0</sup>
                            </Text>
                        </Box>
                    </Link>
                    
                    <HStack as={"nav"} spacing={6} fontWeight="bold">
                        <Link to="/">
                            <Text display={{ base: "none", md: "flex" }}>Home</Text>
                        </Link>

                        <Link to="/icecreams">
                            <Text display={{ base: "none", md: "flex" }}>Ice Creams</Text>
                        </Link>

                        <Link to="/owner_section">
                            <Text display={{ base: "none", md: "flex" }}>Owner section</Text>
                        </Link>

                        <Link to="/cart">
                            <Text mr={{ base: "3", md: "0" }}>Cart</Text>
                        </Link>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={6} pt={6} pl={3} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={5} fontWeight="bold">
                            <Text>Home</Text>
                            <Text>Ice Creams</Text>
                            <Text>Owner section</Text>
                            <Text></Text>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
