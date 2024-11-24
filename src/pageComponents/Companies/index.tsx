import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Companies = () => {
  return (
    <>
      <Box
        style={{
          width: "100%",
          marginTop: "2rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text opacity={0.7}>Trusted by the biggest companies in the world</Text>
      </Box>
    </>
  );
};

export default Companies;
