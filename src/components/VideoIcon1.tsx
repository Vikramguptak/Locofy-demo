import { FunctionComponent, useMemo, type CSSProperties } from "react";

type VideoIcon1Type = {
  videoIcon1Video?: string;

  /** Style props */
  videoIconWidth?: CSSProperties["width"];
  videoIconHeight?: CSSProperties["height"];
  videoIconPosition?: CSSProperties["position"];
  videoIconTop?: CSSProperties["top"];
  videoIconLeft?: CSSProperties["left"];
};

const VideoIcon1: FunctionComponent<VideoIcon1Type> = ({
  videoIcon1Video,
  videoIconWidth,
  videoIconHeight,
  videoIconPosition,
  videoIconTop,
  videoIconLeft,
}) => {
  const videoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: videoIconWidth,
      height: videoIconHeight,
      position: videoIconPosition,
      top: videoIconTop,
      left: videoIconLeft,
    };
  }, [
    videoIconWidth,
    videoIconHeight,
    videoIconPosition,
    videoIconTop,
    videoIconLeft,
  ]);

  return (
    <img
      className="w-[50px] h-[50px] overflow-hidden"
      alt=""
      src={videoIcon1Video}
      style={videoIconStyle}
    />
  );
};

export default VideoIcon1;
