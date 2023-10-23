import { FunctionComponent, useMemo, type CSSProperties } from "react";

type HotelCardContainerType = {
  unsplashHhRfsdWxXus?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  reviews?: string;
  prop?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = ({
  unsplashHhRfsdWxXus,
  entireBungalow,
  matterhornSuites,
  night,
  reviews,
  prop,
  propBorder,
}) => {
  const moreDetailsButton1Style: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className="self-stretch flex-1 flex flex-row items-start justify-center py-0 px-[3.0096113681793213px] box-border w-3/12 text-left text-[4.01px] text-darkslategray-600 font-typography-body-1 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
      <a className="[text-decoration:none] self-stretch flex-1 rounded-[2.51px] bg-background-paper box-border flex flex-col items-start justify-start py-[3.762014865875244px] px-[3.2604126930236816px] gap-[5.77px] w-3/12 text-[inherit] border-[0.3px] border-solid border-whitesmoke-200 hover:bg-gainsboro-300 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-[2.51px] max-w-full overflow-hidden h-[50.2px] shrink-0 object-cover"
          alt=""
          src={unsplashHhRfsdWxXus}
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[2.76px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.5px]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {entireBungalow}
            </div>
            <b className="self-stretch relative text-[5.52px] tracking-[0.04em] capitalize sm:text-xl">
              {matterhornSuites}
            </b>
            <div className="self-stretch relative text-[4.51px] tracking-[0.04em]">
              {night}
            </div>
          </div>
          <img
            className="relative w-[6.3px] h-[6.3px] overflow-hidden shrink-0"
            alt=""
            src="/video4.svg"
          />
        </div>
        <div className="self-stretch relative h-[4.8px] text-cornflowerblue-200">
          <div className="absolute top-[0px] left-[13.5px] tracking-[0.04em] inline-block w-[54.3px] h-[4.8px]">
            {reviews}
          </div>
          <div className="absolute top-[0px] left-[0px] w-[11.1px] h-[4.8px] text-darkslategray-600">
            <div className="absolute top-[0px] left-[5.1px] tracking-[0.04em] font-medium inline-block w-1.5 h-[4.8px]">
              {prop}
            </div>
            <img
              className="absolute h-[89.58%] w-[37.84%] top-[0%] right-[62.16%] bottom-[10.42%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector8.svg"
            />
          </div>
        </div>
        <button
          className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-12xs box-border h-[11.5px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.3px] border-solid border-lavender-200 sm:w-[100%!important]"
          style={moreDetailsButton1Style}
        >
          <div className="relative text-[3.76px] tracking-[0.12px] leading-[6.52px] uppercase font-medium font-typography-body-1 text-cornflowerblue-200 text-left inline-block w-[27.3px] h-[6.5px] shrink-0">
            More details
          </div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardContainer;
