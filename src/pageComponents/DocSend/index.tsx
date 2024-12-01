import { Avatar } from "@/components/ui/avatar";
import { Box } from "@chakra-ui/react";
import React from "react";
import Video from "../Video";
import { Parallax } from "react-scroll-parallax";

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
          lgTo2xl: "120vh",
        }}
        style={{
          widows: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* mobile */}
        <Box display={{ lgTo2xl: "none", mdDown: "flex" }} maxWidth="90%">
          <Video
            source={videoSource}
            playerHeight="50%"
            playerWidth="100%"
            boxShadow="0px 0px 48px 10px rgba(0,0,0,0.2)"
          />
        </Box>

        {/* web  */}
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
            background="none"
            backgroundColor="transparent"
            style={{
              height: "40vh",
              width: "40vw",
            }}
          />
          <Box
            display={{ mdDown: "none", lgTo2xl: "flex" }}
            style={{
              zIndex: 1,
            }}
            width="10vw"
          >
            <Parallax
              speed={15}
              style={{
                position: "absolute",
                top: "15%",
                right: "40%",
                boxShadow: "0px 0px 42px 18px rgba(0,0,0,0.07)",
              }}
            >
              <Video
                source={videoSource}
                playerHeight="100%"
                playerWidth="100%"
              />
            </Parallax>
          </Box>

          <Box
            display={{
              mdDown: "none",
              lgTo2xl: "flex",
            }}
            style={{
              height: "90vh",
              width: "60%",
              zIndex: 0,
            }}
          >
            <Parallax speed={-5} style={{ height: "100%", width: "100%" }}>
              <Avatar
                src={imageSource}
                objectFit="contain"
                shape="rounded"
                size="full"
              />
            </Parallax>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DocSend;
