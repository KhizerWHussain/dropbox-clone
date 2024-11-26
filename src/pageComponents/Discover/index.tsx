import { Box, Text } from "@chakra-ui/react";
import React from "react";
import DiscoveryCard from "./card";

const Discover = () => {
  return (
    <>
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        backgroundColor="#F7F5F2"
      >
        <Text fontSize={36}>Discover, learn, thrive with Dropbox</Text>
        <Box>{/* <DiscoveryCard /> */}</Box>
      </Box>
    </>
  );
};

export default Discover;
