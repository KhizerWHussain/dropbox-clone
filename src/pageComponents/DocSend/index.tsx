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
        height={{
          mdDown: "45vh",
          lgTo2xl: "100vh",
        }}
        style={{
          widows: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display={{ lgTo2xl: "none", mdDown: "flex" }} maxWidth="90%">
          <Video
            source={videoSource}
            playerHeight="50%"
            playerWidth="100%"
            boxShadow="0px 0px 48px 10px rgba(0,0,0,0.2)"
          />
        </Box>

        <Box
          display={{ mdDown: "none", lgTo2xl: "flex" }}
          maxW="11/12"
          position="relative"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            display={{ mdDown: "none", lgTo2xl: "flex" }}
            style={{
              height: "40vh",
              width: "40vw",
            }}
          />
          <Box
            display={{ mdDown: "none" }}
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
          <Box
            display={{
              mdDown: "none",
              lgTo2xl: "block",
            }}
            style={{ height: "90vh", width: "50%", zIndex: 0 }}
          >
            <Avatar
              src={imageSource}
              objectFit="contain"
              shape="rounded"
              size="full"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DocSend;
