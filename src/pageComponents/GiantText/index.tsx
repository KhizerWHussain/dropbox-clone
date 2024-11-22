import { Box, Text } from "@chakra-ui/react";
import React from "react";

const GiantText = () => {
  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Text color="black">
        With Dropbox, you can edit and sign your documents, collaborate on
        projects and search across all your apps, and it happens in the same
        place you securely store all your content. It’s that simple :
      </Text>
    </Box>
  );
};

export default GiantText;
