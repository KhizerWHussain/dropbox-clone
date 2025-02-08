import { Box } from "@chakra-ui/react";
import React from "react";

import DropboxMobile from "../../../public/images/hero/hero-mobile.png";
// import DropboxDesktopWithoutBackground from "../../../public/images/hero/heroDesktop.png";

import { Avatar } from "@/components/ui/avatar";
import { VideoLinks } from "../../../data";
import Video from "../Video";
import { motion, MotionValue } from "framer-motion";
import { Colors } from "../../../constants";
import { Parallax } from "react-scroll-parallax";

interface HeroProp {
  opacity: MotionValue<number>;
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
          marginTop: "-16rem",
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

        <Parallax speed={5} style={{ zIndex: 5, marginTop: "-1rem" }}>
          <Avatar
            background="none"
            shape="rounded"
            size="full"
            src={source}
            style={{
              height: "70vh",
              width: "60vw",
              objectFit: "cover",
              boxShadow: "0px 4px 52px 32px rgba(0, 0, 0, 0.1)", // Equal shadow on all sides
              zIndex: 50,
            }}
          />
        </Parallax>
        <Parallax
          speed={10}
          style={{ position: "absolute", top: "2%", right: "15%", zIndex: 5 }}
        >
          <Avatar
            src={DropboxMobile.src}
            shape="rounded"
            size="full"
            background="none"
            style={{
              height: "60vh",
              width: "15vw",
              objectFit: "cover",
              boxShadow: "0px 0px 24px 1px rgba(0, 0, 0, 0.25)",
              zIndex: 50,
            }}
          />
        </Parallax>
        <motion.div
          initial={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          exit={{ display: "none" }}
          style={{ opacity, overflowX: "hidden" }}
        >
          <Video source={VideoLinks.heroContent2} />
        </motion.div>
      </Box>

      <Parallax speed={5}>
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
      </Parallax>
    </Box>
  );
};

export default HeroContent;
