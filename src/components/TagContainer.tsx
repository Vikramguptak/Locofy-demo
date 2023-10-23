import { FunctionComponent, useMemo, type CSSProperties } from "react";

type TagContainerType = {
  taggingActionText?: string;
  additionalTaggingActionTe?: string;
  layersActionText?: string;
  preTaggedLayersActionText?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propLeft1?: CSSProperties["left"];
  propLeft2?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const TagContainer: FunctionComponent<TagContainerType> = ({
  taggingActionText,
  additionalTaggingActionTe,
  layersActionText,
  preTaggedLayersActionText,
  propLeft,
  propLeft1,
  propLeft2,
  propWidth,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const taggingStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const weveAlreadyPreTaggedStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth,
    };
  }, [propLeft2, propWidth]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[500px] h-[471px] text-center text-21xl text-studio-darkmode-maincta-457eff font-typography-body-1"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] w-[500px] h-[471px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xl bg-gainsboro-100 w-[500px] h-[471px]" />
        <div
          className="absolute top-[51.5px] left-[179px] leading-[51px] text-studio-darkmode-explainertext-485269"
          style={taggingStyle}
        >
          {taggingActionText}
        </div>
        <b className="absolute top-[105.5px] left-[86.8px] text-131xl leading-[150px] inline-block w-[326.4px]">
          {additionalTaggingActionTe}
        </b>
        <b className="absolute top-[248.2px] left-[81.8px] text-32xl tracking-[0.06em] leading-[75px] uppercase inline-block w-[326.4px]">
          {layersActionText}
        </b>
      </div>
      <div
        className="absolute top-[329.5px] left-[64px] text-13xl leading-[51px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[372px] h-[87px]"
        style={weveAlreadyPreTaggedStyle}
      >
        {preTaggedLayersActionText}
      </div>
    </div>
  );
};

export default TagContainer;
