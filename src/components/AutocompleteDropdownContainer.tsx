import { FunctionComponent } from "react";

const AutocompleteDropdownContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[2701.3px] left-[60.1px] w-[444.5px] h-[162px] text-left text-xl text-studio-darkmode-explainertext-485269 font-typography-body-1">
      <div className="absolute top-[34px] left-[41.5px] leading-[32px] inline-block w-[403px]">
        A default dropdown has been applied to your autocomplete which you can
        change using Link Mode. Loco can show you which dropdown to select!
      </div>
      <img
        className="absolute h-[12.78%] w-[6.32%] top-[83.52%] right-[42.47%] bottom-[3.7%] left-[51.2%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group2.svg"
      />
      <div className="absolute top-[0px] left-[0px] w-[444.5px] h-7 text-darkslategray-100">
        <b className="absolute top-[0px] left-[38.8px] leading-[28px] uppercase inline-block w-[405.7px]">
          Link Mode
        </b>
        <div className="absolute top-[2px] left-[0px] w-[22.3px] h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-[22.3px] h-6" />
          <b className="absolute top-[3.9px] left-[7.8px] inline-block w-[8.2px] h-[17.6px]">
            3
          </b>
        </div>
      </div>
    </div>
  );
};

export default AutocompleteDropdownContainer;
