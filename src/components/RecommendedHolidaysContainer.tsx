import { FunctionComponent } from "react";

const RecommendedHolidaysContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-left text-11xl text-darkslategray-600 font-typography-body-1">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
          Recommended Holidays
        </b>
        <button className="cursor-pointer [border:none] p-0 bg-background-paper rounded-12xl w-[199.9px] flex flex-row items-start justify-start gap-[10px] md:hidden">
          <div className="relative text-lg tracking-[0.04em] font-medium font-typography-body-1 text-cornflowerblue-300 text-right inline-block w-[165.9px] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/arrowright1.svg"
          />
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
            alt=""
            src="/unsplash5mv818tzxeo@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-background-paper flex flex-col items-center justify-center py-5 px-4 border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                  Bali
                </div>
                <div className="self-stretch relative text-base tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                  4D3N
                </div>
              </div>
              <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                $899
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
            alt=""
            src="/switzerlandimage@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-background-paper flex flex-col items-center justify-center py-5 px-4 border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                  Swiss
                </div>
                <div className="self-stretch relative text-base tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                  6D5N
                </div>
              </div>
              <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                $900
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 sm:w-full sm:mb-8">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
            alt=""
            src="/boracayimage@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-background-paper flex flex-col items-center justify-center py-5 px-4 border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                  Boracay
                </div>
                <div className="self-stretch relative text-base tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                  5D4N
                </div>
              </div>
              <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                $699
              </div>
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 sm:w-full">
          <img
            className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
            alt=""
            src="/palawanimage@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-3xs bg-background-paper flex flex-col items-center justify-center py-5 px-4 border-[1px] border-solid border-whitesmoke-200">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                  Palawan
                </div>
                <div className="self-stretch relative text-base tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                  4D3N
                </div>
              </div>
              <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                $789
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="rounded-12xl bg-background-paper w-[199.9px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[165.9px] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
