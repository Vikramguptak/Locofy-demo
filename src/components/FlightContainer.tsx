import { FunctionComponent } from "react";
import FlightCardContainer from "./FlightCardContainer";
import PrimaryButton from "./PrimaryButton";

const FlightContainer: FunctionComponent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[12px] text-left text-base text-dimgray-300 font-typography-body-1 md:flex-[unset] md:self-stretch">
      <div className="relative text-lg tracking-[0.26px] text-lightslategray">
        10 out of 177 Results
      </div>
      <FlightCardContainer
        flightDetails="/turkish1.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        time="4:45 PM"
        price="S$ 723"
      />
      <div className="self-stretch rounded-md bg-background-paper flex flex-row items-center justify-center py-0 pr-1.5 pl-[25px] gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
        <div className="w-1/5 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
          <img
            className="relative w-[34.8px] h-[46px] sm:[transform:scale(0.8)]"
            alt=""
            src="/sia.svg"
          />
          <div className="relative tracking-[0.26px]">Singapore Airlines</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
          <div className="relative w-[93px] h-[52px] mq428small:w-20">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
              8:45 PM
            </div>
            <div className="absolute w-[79.46%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
              SIN
            </div>
          </div>
          <div className="relative w-[129px] h-[55px] text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
            <img
              className="absolute h-[27.45%] w-[83.02%] top-[0%] right-[8.29%] bottom-[72.55%] left-[8.68%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/flighticon.svg"
            />
            <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
              15H 10M, 2-stops
            </div>
          </div>
          <div className="relative w-[91px] h-[52px] text-right mq428small:w-20">
            <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
              7:55 PM
            </div>
            <div className="absolute w-[81.21%] top-[63.46%] left-[17.69%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
              LAX
            </div>
          </div>
        </div>
        <div className="w-32 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
          <img
            className="relative w-px h-[100px] sm:hidden"
            alt=""
            src="/vector-1.svg"
          />
          <b className="flex-1 relative tracking-[0.34px]">S$ 900</b>
        </div>
      </div>
      <FlightCardContainer
        flightDetails="/japan1.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        time="9:50 PM"
        price="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightCardContainer
        flightDetails="/ana1.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightDuration="19H 15M, 1-stop"
        time="9:50 PM"
        price="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightCardContainer
        flightDetails="/americanairlines1.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        time="9:50 PM"
        price="S$ 936"
        propTransform="unset"
      />
      <FlightCardContainer
        flightDetails="/turkish1.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        time="4:45 PM"
        price="S$ 673"
        propTransform="unset"
      />
      <FlightCardContainer
        flightDetails="/japan1.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightDuration="26H 45M, 1-stop"
        time="9:10 AM"
        price="S$ 859"
        propTransform="scale(0.8)"
      />
      <PrimaryButton
        searchFlights="Show more results"
        primaryButtonWidth="220px"
        primaryButtonHeight="72px"
        primaryButtonCursor="unset"
        primaryButtonBorder="unset"
        primaryButtonPadding="unset"
        primaryButtonBackgroundColor="unset"
        primaryButtonPosition="relative"
        primaryButtonTop="unset"
        primaryButtonLeft="unset"
        rectangleDivBackgroundColor="#1262af"
        searchFlightsLeft="calc(50% - 81.5px)"
        searchFlightsDisplay="inline-block"
      />
    </div>
  );
};

export default FlightContainer;
