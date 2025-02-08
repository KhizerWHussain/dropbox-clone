"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import Video from "../Video";
import { Parallax } from "react-scroll-parallax";
import BottleSVGComponent from "./bottle";

const bottleVideoSoruce =
  "https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/collaboration/Bottle-Solo.mp4";

const ContentVideoSection = () => {
  return (
    <>
      <Box
        height={{
          mdDown: "50vh",
          lgTo2xl: "60vh",
        }}
        style={{
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* mobile */}

        <Box
          width="full"
          height="full"
          display={{ lgTo2xl: "none", mdDown: "flex" }}
        >
          <BottleSVGComponent />
        </Box>

        {/* web */}
        <Box maxW="4/5" position="relative" display={{ mdDown: "none" }}>
          <Parallax speed={-5}>
            <Box
              width="2/3"
              height="60%"
              display={{
                mdDown: "none",
                lgTo2xl: "flex",
              }}
            >
              <Video source={bottleVideoSoruce} />
            </Box>
          </Parallax>
          <Box
            position={{
              mdDown: "initial",
              lgTo2xl: "absolute",
            }}
            width="full"
            style={{
              top: "15%",
              right: "-15%",
              height: "100%",
            }}
          >
            <Parallax speed={15}>
              <BottleSVGComponent />
            </Parallax>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContentVideoSection;
