import { FunctionComponent } from "react";
import IconFalseHoverFalseDisab from "./IconFalseHoverFalseDisab";
import ContentTypeTextOnlyState from "./ContentTypeTextOnlyState";

const List: FunctionComponent = () => {
  return (
    <div className="w-[347px] flex flex-col items-start justify-start py-2 px-0 box-border text-left text-base text-text-primary font-typography-body-1">
      <IconFalseHoverFalseDisab />
      <ContentTypeTextOnlyState contentTypeTextOnlyStateAlignSelf="stretch" />
      <div className="self-stretch bg-background-paper flex flex-col items-start justify-center py-1.5 px-4">
        <div className="relative tracking-[0.15px] leading-[150%]">
          Mactan International Airport (MIA)
        </div>
      </div>
      <IconFalseHoverFalseDisab />
      <IconFalseHoverFalseDisab />
    </div>
  );
};

export default List;
