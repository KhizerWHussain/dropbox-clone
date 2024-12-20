import { Box } from "@chakra-ui/react";
import React from "react";

import DropboxMobile from "../../../public/images/hero/hero-mobile.png";
import DropboxDesktopWithoutBackground from "../../../public/images/hero/heroDesktop.png";

import { Avatar } from "@/components/ui/avatar";
import { VideoLinks } from "../../../data";
import Video from "../Video";
import { motion } from "framer-motion";
import { Colors } from "../../../constants";

interface HeroProp {
  opacity: any;
}

const source =
  "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-desktop-en_GB.png?id=e6b22640-bccc-4e88-a817-c28e0c80b615&width=2880&output_type=png";

const HeroContent = ({ opacity }: HeroProp) => {
  return (
    <Box
      height={{
        mdDown: "80vh",
        lgTo2xl: "80vh",
      }}
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: Colors.back,
      }}
    >
      <Box
        display={{
          mdDown: "none",
          lgTo2xl: "flex",
        }}
        style={{
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
          background="none"
          shape="rounded"
          size="full"
          // src={DropboxDesktopWithoutBackground.src}
          src={source}
          style={{
            height: "70vh",
            width: "60vw",
            objectFit: "cover",
            boxShadow: "0px 4px 52px 32px rgba(0, 0, 0, 0.1)", // Equal shadow on all sides
            zIndex: 50,
          }}
        />
        <Avatar
          src={DropboxMobile.src}
          shape="rounded"
          size="full"
          background="none"
          style={{
            height: "60vh",
            width: "15vw",
            objectFit: "cover",
            position: "absolute", // Position this avatar relative to the parent
            top: "8%", // Adjust the vertical alignment
            right: "15%", // Align to the middle-right side
            boxShadow: "0px 0px 24px 1px rgba(0, 0, 0, 0.25)",
            zIndex: 50,
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

      <Avatar
        src={DropboxMobile.src}
        display={{
          mdDown: "block",
          lgTo2xl: "none",
        }}
        shape="rounded"
        size="full"
        height={{
          mdDown: "100vh",
          lgTo2xl: "50vh",
        }}
        width={{
          mdDown: "4/5",
          lgTo2xl: "60%",
        }}
        marginTop={{
          mdDown: "-18rem",
        }}
        objectFit="contain"
        background="none"
      />
    </Box>
  );
};

export default HeroContent;
