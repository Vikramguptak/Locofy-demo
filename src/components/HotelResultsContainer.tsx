import { FunctionComponent } from "react";
import ResultsCardContainer1 from "./ResultsCardContainer1";
import ResultsCardContainer from "./ResultsCardContainer";

const HotelResultsContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-[50px] px-20 gap-[20px] text-left text-lg text-darkslategray-600 font-typography-body-1 lg:p-10 lg:box-border md:py-[30px] md:px-6 md:box-border">
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex-1 relative tracking-[0.04em] uppercase font-medium">
          200+ results
        </div>
        <div className="relative w-[86px] h-6 text-base">
          <img
            className="absolute top-[0px] left-[62px] w-6 h-6 overflow-hidden"
            alt=""
            src="/filters1.svg"
          />
          <div className="absolute top-[2.5px] left-[0px] tracking-[0.04em]">
            Filters
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[23px] text-base text-gray-100">
        <div className="w-[561.9px] flex flex-col items-start justify-start gap-[12px] md:w-[100%!important] sm:gap-[20px]">
          <ResultsCardContainer1
            roomImageId="/results-image@2x.png"
            roomTypeDescription="1 king bed standard"
            hotelImageDescription="Holiday Inn Expre..."
          />
          <ResultsCardContainer
            imageDimensions="/results-image1@2x.png"
            hotelName="Freehand Los Angeles"
            roomTypeDescription="Bed in Quad"
            reviewCount="(1,941 reviews)"
            rating="4.2"
            carPriceCarBrand="$S 198"
          />
          <ResultsCardContainer
            imageDimensions="/results-image2@2x.png"
            hotelName="The Westin Bonavent..."
            roomTypeDescription="1 King, City view"
            reviewCount="(1,002 reviews)"
            rating="4.1"
            carPriceCarBrand="$S 289"
          />
          <ResultsCardContainer1
            roomImageId="/results-image3@2x.png"
            roomTypeDescription="Deluxe King"
            hotelImageDescription="The Ritz-Carlton, L..."
            propCursor="pointer"
          />
          <iframe
            className="[border:none] self-stretch relative h-[600px] hidden md:flex md:max-w-[1000px]"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className="[border:none] self-stretch flex-1 relative md:hidden"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </div>
  );
};

export default HotelResultsContainer;
