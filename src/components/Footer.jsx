import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="#2f2f2f" color="#fff7f1" w="100%" pt="12">
      <SimpleGrid
        columns={[1, 2, null, 4]}
        spacing="40px"
        w={{ base: "90%", md: "85%" }}
        m="auto"
      >
        <Box>
          <Link to="/">
            <Box lineHeight="17px" color="#ed64a6">
              <Text
                fontFamily="Kalam"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "24px" }}
              >
                zero
              </Text>
              <Text
                fontFamily="Kalam"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "24px" }}
              >
                degree<sup>0</sup>
              </Text>
            </Box>
          </Link>
          
          <Text mt="2" fontStyle="italic" fontSize="12px">
            Plant Based Natural Ice Creams.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold">Address</Text>

          <Box mt="4" fontSize="14px">
            <Text>Emmanson Business Area</Text>
            <Text mt="1">32 west street,</Text>
            <Text mt="1">washington dc, 777032</Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight="bold">Contact us</Text>

          <Box mt="4" fontSize="14px">
            <Text>+91 8865765485</Text>
            <Text mt="1">info@frostyicecreams.com</Text>
            <Text mt="1">frostyicecreams@gmail.com</Text>
          </Box>
        </Box>

        <Box>
          <Text fontWeight="bold">Follow us</Text>
          <Stack direction={"row"} spacing={4} fontSize="20" mt="4">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </Stack>
        </Box>
      </SimpleGrid>
      <Box textAlign="center" p="4" mt="10" borderTop="1px solid #7b8287">
        <Text fontSize="13px">© 2023, Made By Vrushabh Veer.</Text>
      </Box>
    </Box>
  );
};

export default Footer;
