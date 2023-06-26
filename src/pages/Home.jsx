import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import chocolates from "../assets/ice-cream.png";
import icecream1 from "../assets/ice-cream4.png";
import icecream2 from "../assets/pngwing1.png";
import icecream3 from "../assets/pngwing2.png";
import kulfi from "../assets/chocolate.png";

const Home = () => {
  return (
    <>
      <Box
        bg="#fff7f1"
        color="#444444"
        w="100%"
        pt={{ base: "5", md: "20" }}
        pb="10"
      >
        <Flex
          w={{ base: "90%", md: "85%" }}
          m="auto"
          alignItems="center"
          gap={{ base: "5", md: "10" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Box w="100%">
            <Box lineHeight={{ base: "50px", md: "90px" }}>
              <Text
                letterSpacing="3px"
                fontFamily="DM Serif Display"
                fontWeight="700"
                fontSize={{ base: "50px", md: "90px" }}
              >
                Plant Based{" "}
              </Text>
              <Text
                letterSpacing="3px"
                fontFamily="DM Serif Display"
                fontWeight="700"
                fontSize={{ base: "50px", md: "90px" }}
              >
                Natural Ice Creams.
              </Text>
            </Box>
            <Text mt="5">
              Ice Cream taste better when you eat it with your family and
              friends.
            </Text>

            <Button
              bg="#dc0303"
              color="#fff7f1"
              borderRadius="30"
              size="lg"
              fontSize="16px"
              fontWeight="normal"
              px="10"
              _hover={{ bg: "#af1414" }}
              mt="12"
              position="static"
            >
              Order Now
            </Button>
          </Box>
          <Box w="100%">
            <Image w="100%" src={chocolates} alt="chocolates" loading="lazy" />
          </Box>
        </Flex>
      </Box>

      {/* our products */}

      <Box bg="#2f2f2f" w="100%" pt="10" pb="20">
        <Box w={{ base: "90%", md: "85%" }} m="auto">
          <Text
            color="#7b8287"
            letterSpacing="3px"
            fontFamily="DM Serif Display"
            fontWeight="700"
            fontSize={{ base: "50px", md: "80px" }}
          >
            Our Products
          </Text>
        </Box>

        <Flex
          w={{ base: "90%", md: "85%" }}
          m="auto"
          mt="10"
          alignItems="center"
          gap={{ base: "10", md: "20" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
          color="#edf2f7"
          textAlign="center"
        >
          <Box w="100%">
            <Box>
              <Image
                w="100%"
                h="100%"
                src={icecream2}
                alt="img2"
                loading="lazy"
              />
            </Box>
            <Box>
              <Text
                fontSize="22px"
                fontWeight="700"
                fontFamily="DM Serif Display"
                letterSpacing="2px"
              >
                Pista Flavour
              </Text>
              <Flex alignItems="center" gap="0" justifyContent="center" mt="5">
                <Button
                  position="static"
                  fontWeight="normal"
                  borderLeftRadius="20"
                  cursor="none"
                  borderRightRadius="none"
                  color="black"
                >
                  ₹ 150
                </Button>
                <Button
                  position="static"
                  fontWeight="normal"
                  borderLeftRadius="none"
                  borderRightRadius="20"
                  bg="#4b4b4b"
                  _hover={{ bg: "#444444" }}
                  color="#edf2f7"
                >
                  Order
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box w="100%">
            <Box>
              <Image
                w="100%"
                h="100%"
                src={icecream1}
                alt="img1"
                loading="lazy"
              />
            </Box>
            <Box>
              <Text
                fontSize="22px"
                fontWeight="700"
                fontFamily="DM Serif Display"
                letterSpacing="2px"
              >
                Cherry Vanilla
              </Text>
              <Flex alignItems="center" gap="0" justifyContent="center" mt="5">
                <Button
                  position="static"
                  fontWeight="normal"
                  borderLeftRadius="20"
                  cursor="none"
                  borderRightRadius="none"
                  color="black"
                >
                  ₹ 270
                </Button>
                <Button
                  position="static"
                  fontWeight="normal"
                  borderLeftRadius="none"
                  borderRightRadius="20"
                  bg="#4b4b4b"
                  _hover={{ bg: "#444444" }}
                  color="#edf2f7"
                >
                  Order
                </Button>
              </Flex>
            </Box>
          </Box>

          <Box w="100%">
            <Box>
              <Image
                w="100%"
                h="100%"
                src={icecream3}
                alt="img3"
                loading="lazy"
              />
            </Box>
            <Box>
              <Text
                fontSize="22px"
                fontWeight="700"
                fontFamily="DM Serif Display"
                letterSpacing="2px"
              >
                Strawberry Flavour
              </Text>
              <Flex alignItems="center" gap="0" justifyContent="center" mt="5">
                <Button
                  position="static"
                  fontWeight="normal"
                  borderLeftRadius="20"
                  cursor="none"
                  borderRightRadius="none"
                  color="black"
                >
                  ₹ 150
                </Button>
                <Button
                  position="static"
                  fontWeight="normal"
                  borderLeftRadius="none"
                  borderRightRadius="20"
                  bg="#4b4b4b"
                  _hover={{ bg: "#444444" }}
                  color="#edf2f7"
                >
                  Order
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* kulfii */}

      <Box bg="#fff7f1" color="#444444" w="100%" pt="10" pb="20">
        <Flex
          w={{ base: "90%", md: "85%" }}
          m="auto"
          alignItems="center"
          gap={{ base: "5", md: "10" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w="100%">
            <Image src={kulfi} alt="chocolate" loading="lazy" />
          </Box>
          <Box w="100%">
            <Box lineHeight={{ base: "33px", md: "43px" }}>
              <Text
                fontSize={{ base: "28px", md: "35px" }}
                letterSpacing="3px"
                fontFamily="DM Serif Display"
                fontWeight="700"
              >
                The Dessert does offer some health benefits.
              </Text>
            </Box>
            <Text mt="5">
              Dark chocolate is loaded with nutrients that can positively affect
              your health. Made from the seed of the cacao tree, it's one of the
              best sources of antioxidants you can find. Studies show that dark
              chocolate can improve your health and lower the risk of heart
              disease.
            </Text>

            <Button
              bg="#79422c"
              color="#fff7f1"
              borderRadius="30"
              size="lg"
              fontSize="16px"
              fontWeight="normal"
              px="10"
              _hover={{ bg: "#793115" }}
              mt="12"
              position="static"
            >
              Taste Now
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
