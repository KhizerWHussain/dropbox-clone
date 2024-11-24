import { Avatar } from "@/components/ui/avatar";
import { Box } from "@chakra-ui/react";
import React from "react";
import Video from "../Video";

interface DocSendProp {
  videoSource: string;
  imageSource: string;
}

const DocSend = ({ imageSource, videoSource }: DocSendProp) => {
  return (
    <>
      <Box
        style={{
          widows: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          maxW="11/12"
          position="relative"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              height: "40vh",
              width: "40vw",
            }}
          />
          <Box
            style={{
              zIndex: 1,
            }}
          >
            <Video
              source={videoSource}
              playerHeight="60vh"
              playerWidth="50vw"
              boxShadow="2px 16px 24px rgba(0,0,0,0.05)"
              position="absolute"
              top="18%"
              right="40%"
            />
          </Box>
          <Box style={{ height: "90vh", width: "50%", zIndex: 0 }}>
            <Avatar
              src={imageSource}
              borderRadius={0}
              objectFit="contain"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DocSend;
