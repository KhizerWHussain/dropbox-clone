import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

interface Video_Prop {
  source: string;
}

const Video = ({ source }: Video_Prop) => {
  return (
    <Box
      style={{
        height: "60vh",
        overflow: "hidden",
      }}
    >
      <ReactPlayer
        url={source}
        height="100%"
        // width="100%"
        loop={true}
        light={false}
        stopOnUnmount={true}
        muted={true}
        controls={false}
        playing={true}
        volume={0}
        playsinline={true}
        style={{
          objectFit: "contain",
          contain: "content",
          zoom: "normal",
        }}
      />
    </Box>
  );
};

export default Video;
