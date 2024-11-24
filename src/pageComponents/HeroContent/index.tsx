import { Box } from "@chakra-ui/react";
import React from "react";
// import DropboxDesktop from "../../../public/images/hero/hero-desktop.png";

import DropboxMobile from "../../../public/images/hero/hero-mobile.png";
import DropboxDesktopWithoutBackground from "../../../public/images/hero/heroDesktop.png";

import { Avatar } from "@/components/ui/avatar";
import { VideoLinks } from "../../../data";
import Video from "../Video";
import { motion } from "framer-motion";
import { Colors } from "../../../constants";

interface HeroProp {
  scale?: any;
  opacity: any;
}

const HeroContent = ({ scale, opacity }: HeroProp) => {
  return (
    <Box
      style={{
        width: "100vw",
        // height: opacity === 1 ? "fit-content" : "80vh",
        // height: opacity === 0 ? "80vh" : "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        // overflow: "hidden",
        // marginTop: "-2rem",
        // backgroundColor: opacity === 0 ? Colors.back : "transparent",
        height: "80vh",
        backgroundColor: Colors.back,
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100vw",
          marginTop: "-14rem",
        }}
      >
        <motion.div
          initial={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          exit={{ display: "none" }}
          style={{ opacity, overflow: "hidden" }}
        >
          <Video source={VideoLinks.heroContent1} />
        </motion.div>
        <Avatar
          // src={DropboxDesktop.src}
          src={DropboxDesktopWithoutBackground.src}
          borderRadius={0}
          style={{
            height: "60vh",
            width: "60vw",
            objectFit: "contain",
            boxShadow: "0px 0px 16px 1px rgba(0, 0, 0, 0.5)", // Equal shadow on all sides
            // marginTop: "-12rem",
          }}
        />
        <Avatar
          src={DropboxMobile.src}
          borderRadius={0}
          style={{
            height: "50vh",
            width: "15vw",
            objectFit: "contain",
            position: "absolute", // Position this avatar relative to the parent
            top: "10%", // Adjust the vertical alignment
            right: "20%", // Align to the middle-right side
          }}
        />
        <motion.div
          initial={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          exit={{ display: "none" }}
          style={{ opacity, overflowX: "hidden" }}
        >
          <Video source={VideoLinks.heroContent2} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroContent;
