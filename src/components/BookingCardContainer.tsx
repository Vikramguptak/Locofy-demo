import { FunctionComponent, useMemo, type CSSProperties } from "react";

type BookingCardContainerType = {
  airlineLogoUrl?: string;
  airlineCode?: string;
  flightPrice?: string;
  airportCode?: string;
  locationName?: string;
  flightDuration?: string;
  cityName?: string;
  seatType?: string;
  passengerCount?: string;
  travelProviderName?: string;
  timeStampText?: string;

  /** Style props */
  propTextAlign?: CSSProperties["textAlign"];
};

const BookingCardContainer: FunctionComponent<BookingCardContainerType> = ({
  airlineLogoUrl,
  airlineCode,
  flightPrice,
  airportCode,
  locationName,
  flightDuration,
  cityName,
  seatType,
  passengerCount,
  travelProviderName,
  timeStampText,
  propTextAlign,
}) => {
  const arrNameStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="self-stretch rounded-md flex flex-col items-start justify-start p-2.5 gap-[10px] text-left text-xs text-lightslategray font-inter border-[1px] border-solid border-whitesmoke-200">
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <img
            className="relative rounded-9xs w-6 h-6"
            alt=""
            src={airlineLogoUrl}
          />
          <div className="relative leading-[16px]">{airlineCode}</div>
        </div>
        <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right">
          {flightPrice}
        </div>
      </div>
      <div className="self-stretch rounded-9xs bg-whitesmoke-100 flex flex-row items-center justify-start p-2 gap-[7px] text-base text-cornflowerblue-200">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
          <div className="relative font-semibold">{airportCode}</div>
          <div className="relative text-xs text-lightslategray">
            {locationName}
          </div>
        </div>
        <img
          className="relative w-[48.8px] h-3"
          alt=""
          src="/flight-icon.svg"
        />
        <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
          <div className="relative font-semibold">{flightDuration}</div>
          <div
            className="relative text-xs text-lightslategray text-right"
            style={arrNameStyle}
          >
            {cityName}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-9xs flex flex-row items-center justify-start gap-[20px]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/class-icon.svg"
          />
          <div className="relative leading-[16px]">{seatType}</div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/calender.svg"
          />
          <div className="relative leading-[16px]">{passengerCount}</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between pt-2 px-0 pb-0 border-t-[1px] border-solid border-whitesmoke-200">
        <div className="relative leading-[16px]">
          <span>{`Booked on `}</span>
          <span className="text-studio-darkmode-maincta-457eff">
            {travelProviderName}
          </span>
        </div>
        <div className="relative leading-[16px] font-semibold text-orange-100">
          {timeStampText}
        </div>
      </div>
    </div>
  );
};

export default BookingCardContainer;
