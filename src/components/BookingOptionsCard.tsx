import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

type BookingOptionsCardType = {
  stopOptionsText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const BookingOptionsCard: FunctionComponent<BookingOptionsCardType> = ({
  stopOptionsText,
  propWidth,
  propWidth1,
}) => {
  const stopsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const resultsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="relative w-[296.6px] h-[106px] text-left text-3xl text-dimgray-300 font-typography-body-1"
      style={stopsStyle}
    >
      <b
        className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[65.3px]"
        style={resultsStyle}
      >
        {stopOptionsText}
      </b>
      <FormControlLabel
        className="absolute top-[50px] left-[0px]"
        label="1 Stop"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className="absolute top-[86px] left-[0px]"
        label="2 Stops"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

export default BookingOptionsCard;
