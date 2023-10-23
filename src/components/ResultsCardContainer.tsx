import { FunctionComponent } from "react";
import PrimaryButton from "./PrimaryButton";

type ResultsCardContainerType = {
  imageDimensions?: string;
  hotelName?: string;
  roomTypeDescription?: string;
  reviewCount?: string;
  rating?: string;
  carPriceCarBrand?: string;
};

const ResultsCardContainer: FunctionComponent<ResultsCardContainerType> = ({
  imageDimensions,
  hotelName,
  roomTypeDescription,
  reviewCount,
  rating,
  carPriceCarBrand,
}) => {
  return (
    <div className="self-stretch rounded-3xs bg-cornflowerblue-500 flex flex-row items-start justify-start gap-[16px] text-left text-base text-darkslategray-600 font-typography-body-1 sm:flex-col">
      <img
        className="relative rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[260px] h-[220px] object-cover sm:w-[100%!important] sm:rounded-[10px!important]"
        alt=""
        src={imageDimensions}
      />
      <div className="flex-1 flex flex-col items-start justify-start py-[15px] pr-3 pl-0 gap-[31px] sm:p-[15px] sm:box-border sm:flex-[unset] sm:self-stretch">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="relative w-[273.9px] h-[76px]">
            <b className="absolute top-[25px] left-[0px] text-3xl tracking-[0.04em] capitalize inline-block w-[273.9px]">
              {hotelName}
            </b>
            <div className="absolute top-[0px] left-[0px] tracking-[0.02em] text-gray-100 inline-block w-[172.8px]">
              {roomTypeDescription}
            </div>
            <div className="absolute top-[57px] left-[0px] w-[202.8px] h-[19px] text-cornflowerblue-200">
              <div className="absolute top-[0px] left-[64.1px] tracking-[0.04em] inline-block w-[138.7px]">
                {reviewCount}
              </div>
              <div className="absolute top-[0px] left-[0px] w-[54.1px] h-[19px] text-darkslategray-600">
                <div className="absolute top-[0px] left-[25.9px] tracking-[0.04em] font-medium inline-block w-[28.2px]">
                  {rating}
                </div>
                <img
                  className="absolute h-[84.21%] w-[34.75%] top-[0%] right-[65.25%] bottom-[15.79%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[164.5px] h-[83.6px] text-3xl">
          <div className="absolute top-[0px] left-[0px] w-28 h-[26px]">
            <b className="absolute top-[0px] left-[0px] tracking-[0.02em] capitalize">
              {carPriceCarBrand}
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

export default ResultsCardContainer;
