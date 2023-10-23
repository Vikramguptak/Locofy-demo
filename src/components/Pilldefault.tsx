import { FunctionComponent, useMemo, type CSSProperties } from "react";

type PilldefaultType = {
  beds?: string;

  /** Style props */
  pilldefaultBackgroundColor?: CSSProperties["backgroundColor"];
  bedsColor?: CSSProperties["color"];
};

const Pilldefault: FunctionComponent<PilldefaultType> = ({
  beds,
  pilldefaultBackgroundColor,
  bedsColor,
}) => {
  const pilldefaultStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: pilldefaultBackgroundColor,
    };
  }, [pilldefaultBackgroundColor]);

  const bedsStyle: CSSProperties = useMemo(() => {
    return {
      color: bedsColor,
    };
  }, [bedsColor]);

  return (
    <div
      className="rounded-8xl flex flex-row items-center justify-center py-[11px] px-[21px] text-center text-base text-background-paper font-typography-body-1 border-[1px] border-solid border-background-paper"
      style={pilldefaultStyle}
    >
      <div
        className="relative tracking-[0.04em] capitalize font-medium"
        style={bedsStyle}
      >
        {beds}
      </div>
    </div>
  );
};

export default Pilldefault;
