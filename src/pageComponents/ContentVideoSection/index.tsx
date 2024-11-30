"use client";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Video from "../Video";
import bottleSectionSvg from "./bottleSectionSvg.svg";
import { Avatar } from "@/components/ui/avatar";

const bottleVideoSoruce =
  "https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/collaboration/Bottle-Solo.mp4";

const ContentVideoSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyleVideo = {
    transform: `translateY(${scrollY * 0.3}px)`, // Adjust the multiplier for a slower parallax effect
  };

  const parallaxStyleAvatar = {
    transform: `translateY(${scrollY * 0.5}px)`, // Adjust the multiplier for a different effect speed
  };

  return (
    <>
      <Box
        height={{
          mdDown: "50vh",
          lgTo2xl: "100vh",
        }}
        style={{
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Box maxW="4/5" position="relative">
          <Box
            width="2/3"
            display={{
              mdDown: "none",
            }}
            // style={parallaxStyleVideo}
          >
            <Video source={bottleVideoSoruce} />
          </Box>
          <Box
            position={{
              mdDown: "initial",
              lgTo2xl: "absolute",
            }}
            width="1/3"
            style={{
              top: "15%",
              right: "20%",
              height: "70%",
              // ...parallaxStyleAvatar,
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
