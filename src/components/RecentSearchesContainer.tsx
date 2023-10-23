import { FunctionComponent } from "react";

type RecentSearchesContainerType = {
  locationCode?: string;
  airportCode?: string;
  departureLocation?: string;
  departureDates?: string;
};

const RecentSearchesContainer: FunctionComponent<
  RecentSearchesContainerType
> = ({ locationCode, airportCode, departureLocation, departureDates }) => {
  return (
    <div className="flex-1 rounded-lg flex flex-col items-center justify-center p-5 gap-[21px] text-left text-5xl text-cornflowerblue-300 font-typography-body-1 border-[1px] border-solid border-whitesmoke-200 lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between">
        <b className="relative tracking-[0.04em] capitalize inline-block w-[44.7px] shrink-0">
          {locationCode}
        </b>
        <img
          className="relative w-[117.4px] h-6"
          alt=""
          src="/flight-icons.svg"
        />
        <b className="relative tracking-[0.04em] capitalize inline-block text-right w-[51.3px] shrink-0">
          {airportCode}
        </b>
      </div>
      <div className="relative text-xl tracking-[0.04em] capitalize text-black">
        <b>{departureLocation}</b>
        <span>{departureDates}</span>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
