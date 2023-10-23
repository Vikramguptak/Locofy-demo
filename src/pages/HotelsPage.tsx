import { FunctionComponent } from "react";
import Header from "../components/Header";
import Pilldefault from "../components/Pilldefault";
import HotelResultsContainer from "../components/HotelResultsContainer";
import NewsletterContainer from "../components/NewsletterContainer";

const HotelsPage: FunctionComponent = () => {
  return (
    <div className="relative bg-background-paper w-full overflow-hidden flex flex-col items-start justify-start text-left text-23xl text-background-paper font-baloo-bhai">
      <Header />
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch relative h-[192.6px] bg-[url('/public/banner@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[50px] left-[0px] w-[1440px] flex flex-col items-start justify-start py-0 px-20 box-border gap-[8px] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="relative tracking-[0.02em] leading-[48px] inline-block w-[1280px] sm:text-13xl">
              Stays in Los Angeles
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <Pilldefault
                beds="Recommended"
                pilldefaultBackgroundColor="#fff"
                bedsColor="#1262af"
              />
              <Pilldefault
                beds="Price"
                pilldefaultBackgroundColor="unset"
                bedsColor="#fff"
              />
              <Pilldefault
                beds="Rating"
                pilldefaultBackgroundColor="unset"
                bedsColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
      <HotelResultsContainer />
      <NewsletterContainer />
    </div>
  );
};

export default HotelsPage;
