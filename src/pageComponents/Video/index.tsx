import ReactPlayer from "react-player";

export type Position =
  | "-webkit-sticky"
  | "absolute"
  | "fixed"
  | "relative"
  | "static"
  | "sticky";
interface Video_Prop {
  source: string;
  playerHeight?: string;
  playerWidth?: string;
  boxShadow?: string;
  position?: Position;
  top?: string | number;
  right?: string | number;
  left?: string | number;
  bottom?: string | number;
}

const Video = ({
  source,
  playerHeight,
  playerWidth,
  boxShadow,
  bottom,
  left,
  position,
  right,
  top,
}: Video_Prop) => {
  return (
    <ReactPlayer
      url={source}
      height={playerHeight || "100%"}
      width={playerWidth}
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
        boxShadow: boxShadow,
        borderRadius: "inherit",
        width: "fit-content",
        position: position,
        top: top,
        right: right,
        left: left,
        bottom: bottom,
      }}
    />
  );
};

export default Video;
