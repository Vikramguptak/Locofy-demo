import { FunctionComponent, useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";

const HeroContainer: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch flex flex-col items-center justify-start text-center text-42xl text-background-paper font-baloo-bhai">
        <header className="self-stretch bg-background-paper h-[77px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-500 font-typography-body-1 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] overflow-hidden shrink-0">
              <img
                className="absolute h-[96.97%] w-[99.83%] top-[1.52%] right-[0.17%] bottom-[1.52%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/webscreen.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
              <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-typography-body-1 text-cornflowerblue-200 text-left inline-block">
                  Explore
                </button>
                <div
                  className="relative cursor-pointer"
                  onClick={onSearchTextClick}
                >
                  Search
                </div>
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
        <div className="self-stretch relative h-[639.9px] bg-[url('/public/search-section@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col items-center justify-center py-0 px-[140px] box-border gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
            <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
              <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
              <div className="self-stretch relative text-5xl leading-[32px] font-typography-body-1">
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-background-paper flex flex-col items-start justify-start p-5 gap-[4px] text-left text-xl text-darkslategray-600 font-typography-body-1 md:flex-col sm:mt-5">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start p-[5px] gap-[5px] sm:flex-col sm:items-start">
                <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke-0 sm:flex-[unset] sm:self-stretch">
                  Search flights
                </b>
                <div className="flex flex-row items-center justify-start sm:w-full">
                  <div className="relative w-[216.5px] h-[38px] sm:w-[100%!important]">
                    <FormControlLabel
                      className="absolute top-[0px] left-[0px]"
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className="absolute top-[0px] left-[106px]"
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-300 md:flex-col">
                <div className="flex-1 flex flex-row items-start justify-start p-[5px] gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                  <Autocomplete
                    className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
                    size="medium"
                    disablePortal
                    options={[
                      "Singapore (SIN)",
                      "Sydney (SYD)",
                      "Siem Reap (REP)",
                      "Shanghai (PVG)",
                      "Sanya (SYX)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Departure"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Singapore -  Changi (SIN)"
                  />
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch rounded-9xs box-border h-14 flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-gray-400">
                      <div className="bg-background-paper h-0.5 flex flex-row items-center justify-start py-0 px-1 box-border">
                        <div className="relative tracking-[0.15px] leading-[12px]">
                          Arrival
                        </div>
                      </div>
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[15px] px-0 gap-[8px] text-center text-dimgray-200">
                        <div className="hidden flex-row items-start justify-start gap-[8px]">
                          <div className="flex flex-col items-start justify-start">
                            <div className="rounded-2xl bg-gainsboro-200 flex flex-row items-center justify-start p-1">
                              <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                                <div className="relative tracking-[0.16px] leading-[18px]">
                                  Chip
                                </div>
                              </div>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <div className="rounded-2xl bg-gainsboro-200 flex flex-row items-center justify-start p-1">
                              <div className="rounded-45xl bg-silver w-6 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                  F
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start py-[3px] px-1.5 text-left text-smi text-text-primary">
                                <div className="relative tracking-[0.16px] leading-[18px]">
                                  Chip
                                </div>
                              </div>
                              <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/cancel.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-text-primary text-left">
                          Los Angeles (LA)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                    <DatePicker
                      label="Date"
                      value={selectOutlinedDateTimePickerValue}
                      onChange={(newValue: any) => {
                        setSelectOutlinedDateTimePickerValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          size: "medium",
                          fullWidth: true,
                          color: "primary",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-[5px] text-center text-mini text-background-paper md:w-full md:text-left">
                  <div
                    className="rounded-9xs bg-orange-200 w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] cursor-pointer hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                    onClick={onSearchFlightsButtonClick}
                  >
                    <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block w-[147px]">
                      Search flights
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
