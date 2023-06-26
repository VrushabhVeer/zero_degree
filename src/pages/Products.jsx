import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Products = () => {
  return (
    <Box
      bg="#fff7f1"
      color="#444444"
      w="100%"
      pt={{ base: "10", md: "20" }}
      pb="10"
    >
      <SimpleGrid
        w={{ base: "90%", md: "85%" }}
        m="auto"
        columns={[1, 2, 3, null, 4]}
        spacing="40px"
      >
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
    </Box>
  );
};

export default Products;
