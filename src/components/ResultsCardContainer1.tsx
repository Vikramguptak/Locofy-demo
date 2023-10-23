import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryButton from "./PrimaryButton";

type ResultsCardContainer1Type = {
  roomImageId?: string;
  roomTypeDescription?: string;
  hotelImageDescription?: string;

  /** Style props */
  propCursor?: CSSProperties["cursor"];
};

const ResultsCardContainer1: FunctionComponent<ResultsCardContainer1Type> = ({
  roomImageId,
  roomTypeDescription,
  hotelImageDescription,
  propCursor,
}) => {
  const videoIcon1Style: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="self-stretch rounded-3xs bg-cornflowerblue-500 flex flex-row items-start justify-start gap-[16px] text-left text-base text-gray-100 font-typography-body-1 sm:flex-col">
      <img
        className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
        alt=""
        src={roomImageId}
      />
      <div className="flex-1 flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:w-full sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.02em] inline-block w-[146.9px]">
              {roomTypeDescription}
            </div>
            <b className="relative text-3xl tracking-[0.04em] capitalize inline-block text-darkslategray-600 w-[232.9px]">
              {hotelImageDescription}
            </b>
            <div className="relative w-[173.9px] h-[19px] text-cornflowerblue-200">
              <div className="absolute top-[0px] left-[56px] tracking-[0.04em] inline-block w-[117.9px]">
                (1,136 reviews)
              </div>
              <div className="absolute top-[0px] left-[0px] w-[46px] h-[19px] text-darkslategray-600">
                <div className="absolute top-[0px] left-[22px] tracking-[0.04em] font-medium inline-block w-6">
                  4.7
                </div>
                <img
                  className="absolute h-[84.21%] w-[34.78%] top-[0%] right-[65.22%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/video1.svg"
            style={videoIcon1Style}
          />
        </div>
        <div className="relative w-[164.5px] h-[83.6px] text-3xl text-darkslategray-600">
          <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
              $S 286
            </b>
            <div className="absolute top-[8px] left-[73px] text-sm tracking-[0.02em]">
              /night
            </div>
          </div>
          <PrimaryButton
            searchFlights="View Details"
            primaryButtonWidth="164px"
            primaryButtonHeight="46px"
            primaryButtonCursor="pointer"
            primaryButtonBorder="none"
            primaryButtonPadding="0"
            primaryButtonBackgroundColor="transparent"
            primaryButtonPosition="absolute"
            primaryButtonTop="37.6px"
            primaryButtonLeft="0.5px"
            rectangleDivBackgroundColor="#1262af"
            searchFlightsLeft="calc(50% - 54.5px)"
            searchFlightsDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsCardContainer1;
