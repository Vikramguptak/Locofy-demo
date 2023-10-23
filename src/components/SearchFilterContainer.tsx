import { FunctionComponent } from "react";
import BookingOptionsCard from "./BookingOptionsCard";

const SearchFilterContainer: FunctionComponent = () => {
  return (
    <div className="w-[253px] flex flex-col items-start justify-start gap-[39px] text-left text-xl text-dimgray-300 font-typography-body-1 lg:hidden">
      <div className="w-[228px] flex flex-col items-start justify-start gap-[24px]">
        <div className="relative tracking-[0.26px] inline-block w-[219.4px]">
          10 out of 177 Results
        </div>
        <img className="relative w-[228px] h-px" alt="" src="/vector-2.svg" />
      </div>
      <BookingOptionsCard stopOptionsText="Stops" />
      <BookingOptionsCard
        stopOptionsText="Booking Options"
        propWidth="221px"
        propWidth1="189px"
      />
      <BookingOptionsCard
        stopOptionsText="Flight Experience"
        propWidth="310.8px"
        propWidth1="198px"
      />
      <img className="relative w-[228px] h-px" alt="" src="/vector-2.svg" />
      <BookingOptionsCard
        stopOptionsText="Airlines"
        propWidth="181px"
        propWidth1="87.8px"
      />
    </div>
  );
};

export default SearchFilterContainer;
