import { FunctionComponent } from "react";
import TagContainer from "./TagContainer";

const TaggingContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[1727.1px] left-[115.2px] w-[2760px] h-[471px] text-center text-21xl text-studio-darkmode-maincta-457eff font-typography-body-1">
      <TagContainer
        taggingActionText="Tagging"
        additionalTaggingActionTe="3"
        layersActionText="Layers"
        preTaggedLayersActionText="(We’ve already pre-tagged 12 other layers for you)"
      />
      <div className="absolute top-[0px] left-[565px] w-[500px] h-[471px]">
        <div className="absolute top-[0px] left-[0px] w-[500px] h-[471px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-gainsboro-100 w-[500px] h-[471px]" />
          <div className="absolute top-[51.5px] left-[189px] leading-[51px] text-studio-darkmode-explainertext-485269">
            Editing
          </div>
          <b className="absolute top-[105.5px] left-[86.8px] text-131xl leading-[150px] inline-block w-[326.4px]">
            1
          </b>
          <b className="absolute top-[248.2px] left-[81.8px] text-32xl tracking-[0.06em] leading-[75px] uppercase inline-block w-[326.4px]">
            property
          </b>
        </div>
        <div className="absolute top-[329.5px] left-[64px] text-13xl leading-[51px] text-studio-darkmode-popuplabels-5e6a86 inline-block w-[372px] h-[87px]">
          <p className="m-0">{`In the Styling & `}</p>
          <p className="m-0">Layouts tab</p>
        </div>
      </div>
      <TagContainer
        taggingActionText="Adding"
        additionalTaggingActionTe="1"
        layersActionText="Action"
        preTaggedLayersActionText="In the Actions tab"
        propLeft="1130px"
        propLeft1="187px"
        propLeft2="93.1px"
        propWidth="313.7px"
      />
      <div className="absolute top-[0px] left-[1695px] w-[500px] h-[471px] text-29xl text-studio-darkmode-explainertext-485269">
        <div className="absolute top-[0px] left-[0px] w-[500px] h-[471px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-gainsboro-100 w-[500px] h-[471px]" />
          <b className="absolute top-[161.5px] left-[73.5px] tracking-[0.06em] leading-[74px] uppercase inline-block w-[353px]">
            <p className="m-0">Getting</p>
            <p className="m-0 text-studio-darkmode-maincta-457eff">
              Live preview
            </p>
          </b>
        </div>
      </div>
      <div className="absolute top-[0px] left-[2260px] w-[500px] h-[471px] text-29xl text-studio-darkmode-explainertext-485269">
        <div className="absolute top-[0px] left-[0px] w-[500px] h-[471px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xl bg-gainsboro-100 w-[500px] h-[471px]" />
          <b className="absolute top-[161.5px] left-[72.8px] tracking-[0.06em] leading-[74px] uppercase inline-block w-[354.4px]">
            <span>Exporting</span>
            <span className="text-studio-darkmode-maincta-457eff"> code</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default TaggingContainer;
