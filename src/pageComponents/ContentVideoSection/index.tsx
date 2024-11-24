import { Box } from "@chakra-ui/react";
import React from "react";
import Video from "../Video";
import bottleSectionSvg from "./bottleSectionSvg.svg";
import { Avatar } from "@/components/ui/avatar";

const bottleVideoSoruce =
  "https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/collaboration/Bottle-Solo.mp4";

const ContentVideoSection = () => {
  return (
    <>
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box maxW="4/5" position="relative">
          <Box width="2/3">
            <Video source={bottleVideoSoruce} />
          </Box>
          <Box
            width="1/3"
            style={{
              position: "absolute",
              top: "15%",
              right: "20%",
              height: "70%",
            }}
          >
            <Avatar src={bottleSectionSvg} as="svg" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContentVideoSection;
