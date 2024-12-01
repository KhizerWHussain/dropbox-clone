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
  position?: Position | undefined;
  top?: string | number | undefined;
  right?: string | number | undefined;
  left?: string | number | undefined;
  bottom?: string | number | undefined;
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
        borderRadius: 0,
        width: "fit-content",
        position: position,
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        background: "none",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default Video;
