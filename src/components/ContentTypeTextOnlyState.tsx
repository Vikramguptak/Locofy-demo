import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ContentTypeTextOnlyStateType = {
  /** Style props */
  contentTypeTextOnlyStateAlignSelf?: CSSProperties["alignSelf"];
};

const ContentTypeTextOnlyState: FunctionComponent<
  ContentTypeTextOnlyStateType
> = ({ contentTypeTextOnlyStateAlignSelf }) => {
  const contentTypeTextOnlyStateStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contentTypeTextOnlyStateAlignSelf,
    };
  }, [contentTypeTextOnlyStateAlignSelf]);

  return (
    <div
      className="bg-action-hover flex flex-col items-start justify-start py-1.5 px-4 text-left text-base text-text-primary font-typography-body-1"
      style={contentTypeTextOnlyStateStyle}
    >
      <div className="relative tracking-[0.15px] leading-[150%]">Option 1</div>
    </div>
  );
};

export default ContentTypeTextOnlyState;
