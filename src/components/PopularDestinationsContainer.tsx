import { FunctionComponent } from "react";
import TripContainer from "./TripContainer";

const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-left text-lg text-cornflowerblue-300 font-typography-body-1">
      <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
          <b className="self-stretch relative tracking-[0.04em] uppercase">
            Plan your next trip
          </b>
          <b className="self-stretch relative text-11xl tracking-[0.04em] capitalize text-darkslategray-600 sm:text-3xl">
            Most Popular Destinations
          </b>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-background-paper rounded-12xl w-[231.4px] flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-typography-body-1 text-cornflowerblue-300 text-right inline-block w-[197.3px] shrink-0">
            View all destinations
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrowright.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
        <TripContainer destinationPrice="Paris" destinationPriceRange="$699" />
        <TripContainer
          destinationPrice="Greece"
          destinationPriceRange="$1079"
          propBackgroundImage="url('/greececard@3x.png')"
          propWidth="99.9px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.4px"
        />
        <TripContainer
          destinationPrice="Norway"
          destinationPriceRange="$895"
          propBackgroundImage="url('/norwaycard@3x.png')"
          propWidth="90.9px"
          propDisplay="inline-block"
          propWidth1="90.9px"
          propLeft="38.4px"
        />
        <TripContainer
          destinationPrice="Tuscany"
          destinationPriceRange="$1245"
          propBackgroundImage="url('/tuscanycard@3x.png')"
          propWidth="100.6px"
          propDisplay="inline-block"
          propWidth1="100.6px"
          propLeft="48.1px"
        />
      </div>
      <div className="rounded-12xl bg-background-paper w-[231.4px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-4">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[197.3px] shrink-0 md:w-auto">
          View all destinations
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowright.svg"
        />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
