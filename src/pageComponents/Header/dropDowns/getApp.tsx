import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const GetApp = ({ onMouseEnter, onMouseLeave }: any) => {
  return (
    <Box
      style={{
        display: "flex",
        height: "15vh",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "end",
          width: "100%",
          marginRight: "17.5rem",
        }}
      >
        <VStack
          style={{
            justifyItems: "start",
            alignItems: "start",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Text
            style={{ padding: "0.4rem" }}
            _hover={{
              backgroundColor: "#52321a",
              borderRadius: "0.5rem",
            }}
          >
            Desktop app
          </Text>
          <Text
            style={{ padding: "0.4rem" }}
            _hover={{
              backgroundColor: "#52321a",
              borderRadius: "0.5rem",
            }}
          >
            Mobile app
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default GetApp;
