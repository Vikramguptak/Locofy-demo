import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightContainer from "../components/FlightContainer";
import BookingCardContainer from "../components/BookingCardContainer";
import SubscriptionContainer from "../components/SubscriptionContainer";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="relative bg-background-paper w-full overflow-hidden flex flex-col items-start justify-start text-left text-base text-cornflowerblue-300 font-typography-body-1">
      <header className="self-stretch bg-background-paper h-[77px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-500 font-typography-body-1 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden shrink-0"
            onClick={onFickleflightLogoClick}
          >
            <img
              className="absolute h-[96.97%] w-[99.83%] top-[1.52%] right-[0.17%] bottom-[1.52%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/webscreen.svg"
            />
          </button>
          <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
            <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
              <div
                className="relative cursor-pointer"
                onClick={onExploreTextClick}
              >
                Explore
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-typography-body-1 text-cornflowerblue-200 text-left inline-block">
                Search
              </button>
              <div
                className="relative cursor-pointer"
                onClick={onHotelsTextClick}
              >
                Hotels
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-typography-body-1 text-darkslategray-500 text-left inline-block">
                Offers
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hidden md:flex"
                alt=""
                src="/notification.svg"
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/notification1.svg"
              />
              <img
                className="rounded-19xl w-9 h-9 object-cover"
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <SearchFormContainer />
      <div className="self-stretch flex flex-row items-start justify-center py-[50px] px-20 lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
        <SearchFilterContainer />
        <div className="flex-1 flex flex-row items-start justify-start gap-[24px] md:flex-col md:gap-[80]">
          <FlightContainer />
          <div className="rounded-md bg-background-paper w-[257px] flex flex-col items-start justify-start pt-0 px-0 pb-5 box-border gap-[18px] md:w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
              <b className="self-stretch relative tracking-[0.04em] uppercase">
                Recently booked
              </b>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-xs text-cornflowerblue-200 font-inter">
              <BookingCardContainer
                airlineLogoUrl="/icon.svg"
                airlineCode="Singapore Airlines"
                flightPrice="$1128"
                airportCode="SIN"
                locationName="Singapore"
                flightDuration="LAX"
                cityName="Los Angeles"
                seatType="Economy"
                passengerCount="2 Adults"
                travelProviderName="Expedia"
                timeStampText="1s ago!"
              />
              <BookingCardContainer
                airlineLogoUrl="/icon1.svg"
                airlineCode="American Airlines"
                flightPrice="$1024"
                airportCode="SFO"
                locationName="San Francisco"
                flightDuration="SIN"
                cityName="Singapore"
                seatType="First Class"
                passengerCount="1 Adults"
                travelProviderName="Kayak"
                timeStampText="2s ago!"
                propTextAlign="right"
              />
              <BookingCardContainer
                airlineLogoUrl="/icon2.svg"
                airlineCode="Japan Airlines"
                flightPrice="$2996"
                airportCode="PHX"
                locationName="Phoenix"
                flightDuration="DXB"
                cityName="Dubai"
                seatType="Economy"
                passengerCount="3 Adults"
                travelProviderName="Skyscanner"
                timeStampText="3s ago!"
                propTextAlign="left"
              />
              <div className="self-stretch rounded-10xs bg-cornflowerblue-400 flex flex-row items-center justify-center py-[7px] px-2.5 gap-[4px]">
                <div className="relative leading-[16px]">Show more</div>
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon--back.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionContainer />
    </div>
  );
};

export default ResultsPage;
