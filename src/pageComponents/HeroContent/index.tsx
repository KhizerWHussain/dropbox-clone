import { Box } from "@chakra-ui/react";
import React from "react";

import DropboxDesktop from "../../../public/images/hero/hero-desktop.png";
import DropboxMobile from "../../../public/images/hero/hero-mobile.png";
import { Avatar } from "@/components/ui/avatar";
import { Colors } from "../../../constants";

interface HeroProp {
  scale?: any;
}

const HeroContent = ({ scale }: any) => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative", // Enable absolute positioning for children
        backgroundColor: Colors.back,
      }}
    >
      <Avatar
        src={DropboxDesktop.src}
        borderRadius={0}
        style={{
          height: "60vh",
          width: "80vw",
          objectFit: "contain",
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
          top: "20%", // Adjust the vertical alignment
          right: "10%", // Align to the middle-right side
        }}
      />
    </Box>
  );
};

export default HeroContent;
