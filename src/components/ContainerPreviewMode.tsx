import { FunctionComponent, useState } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import HotelCardContainer from "./HotelCardContainer";
import HotelCardForm from "./HotelCardForm";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";

const ContainerPreviewMode: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="absolute top-[1276.7px] left-[58.8px] w-[481.8px] h-[673.5px] text-left text-lg text-studio-darkmode-explainertext-485269 font-typography-body-1">
        <div className="absolute top-[0px] left-[0px] w-[481.8px] h-[299.5px]">
          <div className="absolute top-[34.6px] left-[42.2px] leading-[28px] inline-block w-[435px]">
            Switch to preview mode to view a live prototype running on code
          </div>
          <div className="absolute h-[64.07%] w-[91.24%] top-[35.93%] right-[0%] bottom-[0%] left-[8.76%] text-center text-[4.51px] text-background-paper">
            <div className="absolute h-[8.81%] w-[3.84%] top-[6.41%] right-[12.01%] bottom-[84.78%] left-[84.14%] rounded-[50%] bg-studio-universal-confirm-4fc786 box-border border-[4.6px] border-solid border-mediumseagreen" />
            <img
              className="absolute top-[0.1px] left-[0px] w-[363.7px] h-[191.9px] object-cover"
              alt=""
              src="/image-18@2x.png"
            />
            <div className="absolute top-[16px] left-[0px] bg-background-paper w-[361px] h-[173px] overflow-hidden flex flex-col items-center justify-start gap-[17.31px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
              <div className="self-stretch flex flex-col items-center justify-start text-base-3 font-baloo-bhai">
                <header className="self-stretch bg-background-paper h-[19.3px] flex flex-row items-center justify-center py-[5.517621040344238px] px-[20.064075469970703px] box-border sticky w-full top-[0] [background:white] text-left text-[3.51px] text-darkslategray-500 font-typography-body-1 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
                  <div className="flex-1 flex flex-row items-center justify-between">
                    <img
                      className="relative w-[43.6px] h-[8.3px] overflow-hidden shrink-0"
                      alt=""
                      src="/fickleflight-logo.svg"
                    />
                    <div className="flex flex-row items-center justify-end gap-[9.03px] sm:flex">
                      <div className="flex flex-row items-center justify-end gap-[7.52px] md:hidden">
                        <div className="relative text-cornflowerblue-200 inline-block w-[11.8px] h-1 shrink-0">
                          Explore
                        </div>
                        <div className="relative inline-block w-[10.8px] h-1 shrink-0">
                          Search
                        </div>
                        <div className="relative inline-block w-[10.3px] h-1 shrink-0">
                          Hotels
                        </div>
                        <div className="relative inline-block w-[9.8px] h-1 shrink-0">
                          Offers
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[3.01px]">
                        <img
                          className="relative w-1.5 h-1.5 overflow-hidden shrink-0 hidden md:flex"
                          alt=""
                          src="/notification2.svg"
                        />
                        <img
                          className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                          alt=""
                          src="/notification3.svg"
                        />
                        <img
                          className="rounded-[9.53px] w-[9px] h-[9px] object-cover"
                          alt=""
                          src="/top_avatar1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </header>
                <div className="self-stretch relative h-[160.5px]">
                  <div className="absolute w-[calc(100%_+_0.2px)] top-[0px] right-[-0.2px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[160.5px]" />
                  <img
                    className="absolute w-[calc(100%_+_0.2px)] top-[0.1px] right-[-0.2px] left-[0px] max-w-full overflow-hidden h-[160.5px] object-cover"
                    alt=""
                    src="/banner--background@2x.png"
                  />
                  <div className="absolute top-[0px] left-[0px] w-full h-[160.5px] flex flex-col items-center justify-center py-0 px-[35.11212921142578px] box-border gap-[10.78px] md:pl-[30px] md:pr-[30px] md:box-border">
                    <div className="self-stretch flex flex-col items-center justify-start gap-[1.25px]">
                      <div className="self-stretch relative leading-[16.8px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                      <div className="self-stretch relative text-[6.02px] leading-[8.03px] font-typography-body-1">
                        Find the best destinations and the most popular stays!
                      </div>
                    </div>
                    <div className="self-stretch rounded-[2.51px] bg-background-paper flex flex-row items-start justify-start p-[5.016018867492676px] text-left text-[3.01px] text-gray-300 font-typography-body-1 md:flex-col">
                      <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                        <div className="flex-1 flex flex-col items-center justify-center p-[1.254004716873169px] sm:w-full sm:flex-[unset] sm:self-stretch">
                          <Autocomplete
                            className="self-stretch"
                            size="medium"
                            disablePortal
                            options={[
                              "Singapore (SIN)",
                              "Sydney (SYD)",
                              "Siem Reap (REP)",
                              "Shanghai (PVG)Sanya (SYX)",
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
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-[1.254004716873169px] sm:w-full sm:flex-[unset] sm:self-stretch">
                          <div className="self-stretch h-3.5 flex flex-col items-start justify-start">
                            <div className="self-stretch rounded-12xs box-border h-3.5 flex flex-col items-start justify-start py-0 px-[3.0096113681793213px] border-[0.3px] border-solid border-gray-400">
                              <div className="bg-background-paper h-[0.5px] flex flex-row items-center justify-start py-0 px-[1.0032038688659668px] box-border">
                                <div className="relative tracking-[0.04px] leading-[3.01px] flex items-center w-[8.8px] h-[3px] shrink-0">
                                  Arrival
                                </div>
                              </div>
                              <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[3.762014865875244px] px-0 gap-[2.01px] text-center text-dimgray-200">
                                <div className="hidden flex-row items-start justify-start gap-[2.01px]">
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="rounded-[4.01px] bg-gainsboro-200 flex flex-row items-center justify-start p-[1.0032038688659668px]">
                                      <div className="rounded-[16.05px] bg-silver w-1.5 h-1.5 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                        <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[166%] flex items-center justify-center">
                                          F
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-start justify-start py-[0.7524029016494751px] px-[1.5048058032989502px] text-left text-[3.26px] text-text-primary">
                                        <div className="relative tracking-[0.04px] leading-[4.51px]">
                                          Chip
                                        </div>
                                      </div>
                                      <img
                                        className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                                        alt=""
                                        src="/cancel1.svg"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <div className="rounded-[4.01px] bg-gainsboro-200 flex flex-row items-center justify-start p-[1.0032038688659668px]">
                                      <div className="rounded-[16.05px] bg-silver w-1.5 h-1.5 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                        <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[166%] flex items-center justify-center">
                                          F
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-start justify-start py-[0.7524029016494751px] px-[1.5048058032989502px] text-left text-[3.26px] text-text-primary">
                                        <div className="relative tracking-[0.04px] leading-[4.51px]">
                                          Chip
                                        </div>
                                      </div>
                                      <img
                                        className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                                        alt=""
                                        src="/cancel1.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 relative text-[4.01px] tracking-[0.04px] leading-[6.02px] text-text-primary text-left">
                                  Los Angeles (LA)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center p-[1.254004716873169px] sm:w-full sm:flex-[unset] sm:self-stretch">
                          <div className="self-stretch">
                            <DatePicker
                              label="Date"
                              value={dateFieldDateTimePickerValue}
                              onChange={(newValue: any) => {
                                setDateFieldDateTimePickerValue(newValue);
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
                      </div>
                      <div className="flex flex-col items-center justify-center p-[1.254004716873169px] text-center text-[3.76px] text-background-paper md:w-full md:text-left">
                        <div className="rounded-12xs bg-orange-200 w-[41.1px] h-3.5 overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-orange-200 md:mr-[auto] sm:w-[100%!important]">
                          <div className="relative tracking-[0.12px] leading-[6.52px] uppercase font-medium inline-block w-[36.9px]">
                            Search flights
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-start py-0 px-[20.064075469970703px] box-border gap-[20.06px] max-w-[1280px] text-left text-darkslategray-600 md:pl-[30px] md:pr-[30px] md:box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5.02px] md:block">
                  <b className="relative tracking-[0.04em] uppercase inline-block w-[318px]">
                    Upcoming Flight
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[9.03px] text-[6.02px] text-cornflowerblue-300 md:flex-col">
                    <div className="rounded-[2.01px] flex flex-col items-start justify-start p-[5.016018867492676px] gap-[5.27px] border-[0.3px] border-solid border-whitesmoke-200 lg:w-[520px] md:w-full md:block md:mb-[30px]">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative w-[18.1px] h-[11.5px]">
                          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[11.2px] h-[7px]">
                            SIN
                          </b>
                          <div className="absolute top-[7.5px] left-[0px] text-[3.51px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[18.1px] h-1">
                            Singapore
                          </div>
                        </div>
                        <div className="relative w-[29.4px] h-[11.1px] text-[3.51px] text-gray-100">
                          <b className="absolute top-[7px] left-[5.9px] tracking-[0.02em] capitalize inline-block w-[16.5px] h-1">
                            15H 55M
                          </b>
                          <img
                            className="absolute top-[0px] left-[0px] w-[29.4px] h-1.5"
                            alt=""
                            src="/group-17.svg"
                          />
                        </div>
                        <div className="relative w-[21.9px] h-[11.5px] text-right">
                          <b className="absolute top-[0px] left-[9px] tracking-[0.04em] capitalize inline-block w-[12.9px] h-[7px]">
                            LAX
                          </b>
                          <div className="absolute top-[7.5px] left-[0px] text-[3.51px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[21.9px] h-1">
                            Los Angeles
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative box-border h-[0.3px] border-t-[0.3px] border-solid border-whitesmoke-200 md:w-full" />
                      <div className="self-stretch flex flex-row items-center justify-between text-[3.51px] text-gray-100">
                        <div className="relative tracking-[0.02em] capitalize inline-block w-[51.1px] shrink-0">
                          Departs on: 1 May, 08:00 AM
                        </div>
                        <div className="relative tracking-[0.02em] text-right inline-block w-[21.9px] shrink-0">
                          <b>4 days</b>
                          <span> to go</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative box-border w-[0.3px] h-[36.6px] border-r-[0.3px] border-solid border-whitesmoke-200 md:hidden" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[5.02px] text-[4.51px] text-lightgray md:w-full md:flex-[unset] md:self-stretch">
                      <div className="self-stretch relative tracking-[0.04em] uppercase">
                        Prepare for your trip
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[2.01px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                          <img
                            className="relative w-[16.4px] h-[16.4px]"
                            alt=""
                            src="/group-21.svg"
                          />
                          <div className="relative text-[3.76px] tracking-[0.04em] font-typography-body-1 text-gray-100 text-left inline-block w-[9.8px] h-[4.5px] shrink-0">
                            Hotel
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[2.01px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                          <div className="relative w-[16.4px] h-[16.4px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[4.01px] bg-sandybrown w-[16.4px] h-[16.4px]" />
                            <img
                              className="absolute h-[48.17%] w-[48.17%] top-[26.22%] right-[26.22%] bottom-[25.61%] left-[25.61%] max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/group15.svg"
                            />
                          </div>
                          <div className="relative text-[3.76px] tracking-[0.04em] font-typography-body-1 text-gray-100 text-center inline-block w-[20.1px] h-[4.5px] shrink-0">
                            Attractions
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[2.01px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                          <img
                            className="relative w-[16.4px] h-[16.4px]"
                            alt=""
                            src="/group-211.svg"
                          />
                          <div className="relative text-[3.76px] tracking-[0.04em] font-typography-body-1 text-gray-100 text-center inline-block w-2 h-[4.5px] shrink-0">
                            Eats
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[2.01px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                          <div className="relative w-[16.4px] h-[16.4px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[4.01px] bg-gold w-[16.4px] h-[16.4px]" />
                            <img
                              className="absolute h-[48.17%] w-[41.46%] top-[26.22%] right-[29.27%] bottom-[25.61%] left-[29.27%] max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/vector5.svg"
                            />
                          </div>
                          <div className="relative text-[3.76px] tracking-[0.04em] font-typography-body-1 text-gray-100 text-center inline-block w-[17.6px] h-[4.5px] shrink-0">
                            Commute
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[2.01px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                          <div className="relative w-[17.6px] h-[16.4px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[4.01px] bg-cornflowerblue-100 w-[17.6px] h-[16.4px]" />
                            <img
                              className="absolute h-[40.24%] w-[40.34%] top-[29.88%] right-[30.11%] bottom-[29.88%] left-[29.55%] max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/vector6.svg"
                            />
                          </div>
                          <div className="relative text-[3.76px] tracking-[0.04em] font-typography-body-1 text-gray-100 text-center inline-block w-[8.1px]">
                            Taxi
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[2.01px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                          <div className="relative w-[16.4px] h-[16.4px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[4.01px] bg-yellowgreen w-[16.4px] h-[16.4px]" />
                            <img
                              className="absolute h-[35.37%] w-[39.63%] top-[32.32%] right-[30.49%] bottom-[32.32%] left-[29.88%] max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/vector7.svg"
                            />
                          </div>
                          <div className="relative text-[3.76px] tracking-[0.04em] font-typography-body-1 text-gray-100 text-center inline-block w-[13px] h-[4.5px] shrink-0">
                            Movies
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[6.02px] text-cornflowerblue-300">
                  <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.5px] sm:flex-[unset] sm:self-stretch">
                      <b className="self-stretch relative tracking-[0.04em] uppercase">
                        Plan your next trip
                      </b>
                      <b className="self-stretch relative text-[7.52px] tracking-[0.04em] capitalize text-darkslategray-600 sm:text-3xl">
                        Most Popular Destinations
                      </b>
                    </div>
                    <a className="[text-decoration:none] rounded-[7.77px] bg-background-paper w-[58px] flex flex-row items-start justify-start gap-[2.51px] text-right text-[inherit] md:hidden">
                      <div className="relative tracking-[0.04em] font-medium inline-block w-[49.5px] shrink-0">
                        View all destinations
                      </div>
                      <img
                        className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowright3.svg"
                      />
                    </a>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                      <div className="self-stretch relative rounded-[2.51px] h-[45.6px] overflow-hidden shrink-0">
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src="/unsplashnnzkznywhau@2x.png"
                        />
                        <div className="absolute w-[calc(100%_-_0.1px)] top-[0px] right-[0px] left-[0.1px] flex flex-row items-start justify-start py-[2.0064077377319336px] px-[3.0096113681793213px] box-border">
                          <b className="flex-1 relative text-[5.02px] tracking-[0.02em] font-typography-body-1 text-background-paper text-left">
                            Paris
                          </b>
                          <div className="relative w-[22.8px] h-[14.8px]">
                            <div className="absolute top-[5.3px] left-[0px] text-[9.53px] leading-[9.53px] font-baloo-bhai text-background-paper text-right inline-block w-[22.8px] h-[9.5px]">
                              $699
                            </div>
                            <div className="absolute top-[0px] left-[9.6px] text-[4.01px] tracking-[0.04em] uppercase font-typography-body-1 text-background-paper text-right inline-block w-[13.2px] h-[4.8px]">
                              from
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                      <div className="self-stretch relative rounded-[2.51px] h-[45.6px] overflow-hidden shrink-0">
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src="/unsplashyc8qqp50bda@2x.png"
                        />
                        <div className="absolute w-[calc(100%_-_0.1px)] top-[0px] right-[0px] left-[0.1px] flex flex-row items-start justify-start py-[2.0064077377319336px] px-[3.0096113681793213px] box-border">
                          <b className="flex-1 relative text-[5.02px] tracking-[0.02em] font-typography-body-1 text-background-paper text-left">
                            Greece
                          </b>
                          <div className="relative w-[25.1px] h-[14.8px]">
                            <div className="absolute top-[5.3px] left-[0px] text-[9.53px] leading-[9.53px] font-baloo-bhai text-background-paper text-right inline-block w-[24.8px] h-[9.5px]">
                              $1079
                            </div>
                            <div className="absolute top-[0px] left-[11.9px] text-[4.01px] tracking-[0.04em] uppercase font-typography-body-1 text-background-paper text-right inline-block w-[13.2px] h-[4.8px]">
                              from
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                      <div className="self-stretch relative rounded-[2.51px] h-[45.6px] overflow-hidden shrink-0">
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src="/unsplashltnpejwdsay@2x.png"
                        />
                        <div className="absolute w-[calc(100%_-_0.1px)] top-[0px] right-[0px] left-[0.1px] flex flex-row items-start justify-start py-[2.0064077377319336px] px-[3.0096113681793213px] box-border">
                          <b className="flex-1 relative text-[5.02px] tracking-[0.02em] font-typography-body-1 text-background-paper text-left">
                            Norway
                          </b>
                          <div className="relative w-[22.8px] h-[14.8px]">
                            <div className="absolute top-[5.3px] left-[0px] text-[9.53px] leading-[9.53px] font-baloo-bhai text-background-paper text-right inline-block w-[22.8px] h-[9.5px]">
                              $895
                            </div>
                            <div className="absolute top-[0px] left-[9.6px] text-[4.01px] tracking-[0.04em] uppercase font-typography-body-1 text-background-paper text-right inline-block w-[13.2px] h-[4.8px]">
                              from
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                      <div className="self-stretch relative rounded-[2.51px] h-[45.6px] overflow-hidden shrink-0">
                        <img
                          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                          alt=""
                          src="/unsplashm0oiyn5u8zm@2x.png"
                        />
                        <div className="absolute w-[calc(100%_-_0.1px)] top-[0px] right-[0px] left-[0.1px] flex flex-row items-start justify-start py-[2.0064077377319336px] px-[3.0096113681793213px] box-border">
                          <b className="flex-1 relative text-[5.02px] tracking-[0.02em] font-typography-body-1 text-background-paper text-left">
                            Tuscany
                          </b>
                          <div className="relative w-[25.2px] h-[14.8px]">
                            <div className="absolute top-[5.3px] left-[0px] text-[9.53px] leading-[9.53px] font-baloo-bhai text-background-paper text-right inline-block w-[25.2px] h-[9.5px]">
                              $1245
                            </div>
                            <div className="absolute top-[0px] left-[12.1px] text-[4.01px] tracking-[0.04em] uppercase font-typography-body-1 text-background-paper text-right inline-block w-[13.2px] h-[4.8px]">
                              from
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="rounded-[7.77px] bg-background-paper w-[58px] hidden flex-row items-start justify-start gap-[2.51px] text-right md:flex md:mt-4">
                    <div className="relative tracking-[0.04em] font-medium inline-block w-[49.5px] shrink-0 md:w-auto">
                      View all destinations
                    </div>
                    <img
                      className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright3.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[6.02px] text-[7.52px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
                      Recommended Holidays
                    </b>
                    <a className="[text-decoration:none] rounded-[7.77px] bg-background-paper w-[50.1px] flex flex-row items-start justify-start gap-[2.51px] text-right text-[4.51px] text-cornflowerblue-300 md:hidden">
                      <div className="relative tracking-[0.04em] font-medium inline-block w-[41.6px] shrink-0">
                        View all holidays
                      </div>
                      <img
                        className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowright4.svg"
                      />
                    </a>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
                      <img
                        className="self-stretch relative rounded-t-[2.51px] rounded-b-none max-w-full overflow-hidden h-[60.7px] shrink-0 object-cover"
                        alt=""
                        src="/unsplash5mv818tzxeo1@2x.png"
                      />
                      <div className="self-stretch rounded-t-none rounded-b-[2.51px] bg-background-paper flex flex-col items-center justify-center py-[5.016018867492676px] px-[4.012815475463867px] border-[0.3px] border-solid border-whitesmoke-200">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[0.75px]">
                            <div className="self-stretch relative text-[5.02px] tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                              Bali
                            </div>
                            <div className="self-stretch relative text-[4.01px] tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                              4D3N
                            </div>
                          </div>
                          <div className="relative text-[8.03px] leading-[8.53px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[18.1px] h-[8.5px] shrink-0">
                            $899
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
                      <img
                        className="self-stretch relative rounded-t-[2.51px] rounded-b-none max-w-full overflow-hidden h-[60.7px] shrink-0 object-cover"
                        alt=""
                        src="/unsplashj82dskoxvy8@2x.png"
                      />
                      <div className="self-stretch rounded-t-none rounded-b-[2.51px] bg-background-paper flex flex-col items-center justify-center py-[5.016018867492676px] px-[4.012815475463867px] border-[0.3px] border-solid border-whitesmoke-200">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[0.75px]">
                            <div className="self-stretch relative text-[5.02px] tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                              Switzerland
                            </div>
                            <div className="self-stretch relative text-[4.01px] tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                              6D5N
                            </div>
                          </div>
                          <div className="relative text-[8.03px] leading-[8.53px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[18.8px] h-[8.5px] shrink-0">
                            $900
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 sm:w-full sm:mb-8">
                      <img
                        className="self-stretch relative rounded-t-[2.51px] rounded-b-none max-w-full overflow-hidden h-[60.7px] shrink-0 object-cover"
                        alt=""
                        src="/unsplash4ezkckxolre@2x.png"
                      />
                      <div className="self-stretch rounded-t-none rounded-b-[2.51px] bg-background-paper flex flex-col items-center justify-center py-[5.016018867492676px] px-[4.012815475463867px] border-[0.3px] border-solid border-whitesmoke-200">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[0.75px]">
                            <div className="self-stretch relative text-[5.02px] tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                              Boracay
                            </div>
                            <div className="self-stretch relative text-[4.01px] tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                              5D4N
                            </div>
                          </div>
                          <div className="relative text-[8.03px] leading-[8.53px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[18.1px] h-[8.5px] shrink-0">
                            $699
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] py-0 px-[4.012815475463867px] bg-[transparent] flex-1 flex flex-col items-center justify-start box-border w-3/12 md:w-6/12 sm:w-full">
                      <img
                        className="self-stretch relative rounded-t-[2.51px] rounded-b-none max-w-full overflow-hidden h-[60.7px] shrink-0 object-cover"
                        alt=""
                        src="/unsplashuyqmxhjr3ne@2x.png"
                      />
                      <div className="self-stretch rounded-t-none rounded-b-[2.51px] bg-background-paper flex flex-col items-center justify-center py-[5.016018867492676px] px-[4.012815475463867px] border-[0.3px] border-solid border-whitesmoke-200">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 flex flex-col items-start justify-start gap-[0.75px]">
                            <div className="self-stretch relative text-[5.02px] tracking-[0.02em] font-medium font-typography-body-1 text-darkslategray-500 text-left">
                              Palawan
                            </div>
                            <div className="self-stretch relative text-[4.01px] tracking-[0.02em] font-typography-body-1 text-darkgray-300 text-left">
                              4D3N
                            </div>
                          </div>
                          <div className="relative text-[8.03px] leading-[8.53px] font-baloo-bhai text-cornflowerblue-200 text-right inline-block w-[17.6px] h-[8.5px] shrink-0">
                            $789
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="rounded-[7.77px] bg-background-paper w-[50.1px] hidden flex-row items-start justify-start gap-[2.51px] text-right text-[4.51px] text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
                    <div className="relative tracking-[0.04em] font-medium inline-block w-[41.6px] shrink-0 md:w-auto">
                      View all holidays
                    </div>
                    <img
                      className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright4.svg"
                    />
                  </div>
                </div>
                <form className="self-stretch flex flex-col items-start justify-start gap-[5.02px]">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="flex-1 relative h-[8.8px]">
                      <b className="absolute top-[0px] left-[0px] text-[7.52px] tracking-[0.04em] capitalize inline-block font-typography-body-1 text-darkslategray-600 text-left w-[277.2px] h-[8.8px] sm:text-3xl">
                        Popular Stays
                      </b>
                    </div>
                    <a className="[text-decoration:none] rounded-[7.77px] bg-background-paper flex flex-row items-start justify-start gap-[2.51px] md:hidden">
                      <div className="relative text-[4.51px] tracking-[0.04em] font-medium font-typography-body-1 text-cornflowerblue-300 text-right inline-block w-[35.3px] shrink-0">
                        View all stays
                      </div>
                      <img
                        className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowright5.svg"
                      />
                    </a>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
                    <HotelCardContainer
                      unsplashHhRfsdWxXus="/unsplashhhrfsdwxxus@2x.png"
                      entireBungalow="Entire bungalow"
                      matterhornSuites="Matterhorn Suites"
                      night="$575/night"
                      reviews="(60 reviews)"
                      prop="4.9"
                    />
                    <HotelCardForm
                      unsplashtSn8bPOpVEo="/unsplashtsn8bpopveo@2x.png"
                      storyBeachfrontSuite="2-Story beachfront suite"
                      discoveryShores="Discovery Shores"
                      night="$360/night"
                      reviews="(116 reviews)"
                      prop="4.8"
                      vector="/vector8.svg"
                    />
                    <HotelCardForm
                      unsplashtSn8bPOpVEo="/unsplashrlwe8f8anoc@2x.png"
                      storyBeachfrontSuite="Single deluxe hut"
                      discoveryShores="Arctic Hut "
                      night="$420/night"
                      reviews="(78 reviews)"
                      prop="4.7"
                      vector="/vector9.svg"
                    />
                    <HotelCardContainer
                      unsplashHhRfsdWxXus="/unsplashyqrybvxug5q@2x.png"
                      entireBungalow="Deluxe King Room"
                      matterhornSuites="Lake Louise Inn"
                      night="$244/night"
                      reviews="(63 reviews)"
                      prop="4.6"
                      propBorder="0.3px solid #cdddec"
                    />
                  </div>
                  <div className="rounded-[7.77px] bg-background-paper hidden flex-row items-start justify-start gap-[2.51px] md:flex md:mt-4">
                    <div className="relative text-[4.51px] tracking-[0.04em] font-medium font-typography-body-1 text-cornflowerblue-300 text-right inline-block w-[35.3px] shrink-0 md:w-auto">
                      View all stays
                    </div>
                    <img
                      className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright6.svg"
                    />
                  </div>
                </form>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
                <div className="self-stretch relative bg-aliceblue h-[132.7px] overflow-hidden shrink-0">
                  <img
                    className="absolute w-[calc(100%_+_0.2px)] top-[0px] right-[-0.2px] left-[0px] max-w-full overflow-hidden h-[132.9px] object-cover"
                    alt=""
                    src="/rectangle-186@2x.png"
                  />
                  <div className="[position:relative!important] top-[13px] left-[auto!important] w-[137.7px] flex flex-col items-center justify-start p-[5.016018867492676px] box-border gap-[7.52px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
                    <div className="self-stretch flex flex-col items-center justify-start gap-[1.76px]">
                      <b className="self-stretch relative tracking-[0.04em] uppercase">
                        subscribe to our newsletter
                      </b>
                      <b className="self-stretch relative text-[7.52px] text-darkslategray-400">
                        Get weekly updates
                      </b>
                    </div>
                    <div className="self-stretch rounded-[3.01px] bg-background-paper shadow-[0px_0px_6.02px_rgba(0,_0,_0,_0.03)] flex flex-col items-start justify-start py-[7.022426605224609px] px-[7.524029731750488px] gap-[4.26px] text-left text-slategray border-[0.3px] border-solid border-whitesmoke-200">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[8.53px]">
                          Fill in your details to join the party!
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[2.51px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <TextField
                            className="[border:none] bg-[transparent] self-stretch"
                            color="primary"
                            label="Your name"
                            size="medium"
                            variant="outlined"
                            type="text"
                          />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <TextField
                            className="[border:none] bg-[transparent] self-stretch"
                            color="primary"
                            label="Email address"
                            size="medium"
                            variant="outlined"
                            type="text"
                          />
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded-12xs w-[41.1px] h-3.5 overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru">
                        <VariantContainedSizeLarge
                          button="submit"
                          variantContainedSizeLargeBoxSizing="border-box"
                          buttonColor="#fff"
                          buttonDisplay="inline-block"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-start py-[8.2764310836792px] px-[21.067279815673828px] gap-[11.04px] text-left text-[4.51px] text-background-paper font-typography-body-1 lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[3.51px] mb-[40px!important] md:flex-[unset] md:self-stretch">
                    <img
                      className="relative w-[43.6px] h-[8.3px] overflow-hidden shrink-0"
                      alt=""
                      src="/logo1.svg"
                    />
                    <div className="self-stretch relative leading-[6.77px]">
                      Fickle Flight is your one-stop travel portal. We offer
                      hassle free flight and hotel bookings. We also have all
                      your flight needs in you online shop.
                    </div>
                    <img
                      className="relative w-[32.6px] h-[7.5px]"
                      alt=""
                      src="/social-icons1.svg"
                    />
                  </div>
                  <div className="relative box-border w-[0.3px] h-[39.6px] border-r-[0.3px] border-solid border-gray-500 md:hidden" />
                  <div className="flex-1 flex flex-row items-start justify-between text-[4.01px] md:flex-[unset] md:self-stretch sm:flex-col">
                    <div className="relative w-[49.5px] h-[40.1px] sm:mb-[40px!important]">
                      <a className="[text-decoration:none] absolute top-[12px] left-[0px] text-[inherit] inline-block w-[34px] h-[4.8px]">
                        About Us
                      </a>
                      <div className="absolute top-[0px] left-[0px] text-[5.02px] leading-[6.77px] font-medium inline-block w-[43.8px] h-[6.8px]">
                        Company
                      </div>
                      <div className="absolute top-[19.8px] left-[0px] inline-block w-[21.1px] h-[4.8px]">
                        News
                      </div>
                      <div className="absolute top-[27.5px] left-[0px] inline-block w-[28.9px] h-[4.8px]">
                        Careers
                      </div>
                      <div className="absolute top-[35.3px] left-[0px] inline-block w-[49.5px] h-[4.8px]">
                        How we work
                      </div>
                    </div>
                    <div className="relative w-[49.5px] h-[40.1px] sm:mb-[40px!important]">
                      <div className="absolute top-[12px] left-[0px] inline-block w-[27.5px] h-[4.8px]">
                        Account
                      </div>
                      <div className="absolute top-[0px] left-[0px] text-[5.02px] leading-[6.77px] font-medium inline-block w-[33px] h-[6.8px]">
                        Support
                      </div>
                      <div className="absolute top-[19.8px] left-[0px] inline-block w-[49.5px] h-[4.8px]">
                        Support Center
                      </div>
                      <div className="absolute top-[27.5px] left-[0px] inline-block w-[13.3px] h-[4.8px]">
                        FAQ
                      </div>
                      <div className="absolute top-[35.3px] left-[0px] inline-block w-[41.2px] h-[4.8px]">
                        Accessibility
                      </div>
                    </div>
                    <div className="relative w-[49.5px] h-[40.1px]">
                      <div className="absolute top-[12px] left-[0px] inline-block w-[43.4px] h-[4.8px]">
                        Covid Advisory
                      </div>
                      <div className="absolute top-[0px] left-[0px] text-[5.02px] leading-[6.77px] font-medium inline-block w-[19.2px] h-[6.8px]">
                        More
                      </div>
                      <div className="absolute top-[19.8px] left-[0px] inline-block w-[33.9px] h-[4.8px]">
                        Airline Fees
                      </div>
                      <div className="absolute top-[27.5px] left-[0px] inline-block w-[12.7px] h-[4.8px]">
                        Tips
                      </div>
                      <div className="absolute top-[35.3px] left-[0px] inline-block w-[49.5px] h-[4.8px]">
                        Quarantine Rules
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[363.7px] h-[191.9px] object-cover"
              alt=""
              src="/image-181@2x.png"
            />
            <img
              className="absolute top-[6.7px] left-[361.4px] w-[17.4px] h-[14.3px]"
              alt=""
              src="/vector-60.svg"
            />
            <img
              className="absolute top-[14.5px] left-[311.1px] rounded-xl w-[134.6px] h-[37.7px] object-cover"
              alt=""
              src="/screenshot-20220302-at-758-1@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[225.1px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[42.1px] leading-[28px] uppercase">
              Preview your work
            </b>
            <div className="absolute top-[1.7px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
              <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                3
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[379.8px] left-[42.1px] leading-[28px] inline-block w-[435px]">
          Once you are satisfied with your changes, you can finalize your
          framework settings before exporting
        </div>
        <div className="absolute top-[345.2px] left-[0px] w-[244.1px] h-7 text-darkslategray-100">
          <b className="absolute top-[0px] left-[42.1px] leading-[28px] uppercase">
            Export your project
          </b>
          <div className="absolute top-[1.7px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
            <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
              4
            </b>
          </div>
        </div>
        <img
          className="absolute top-[453.6px] left-[42.1px] w-[257px] h-[220px] object-cover"
          alt=""
          src="/screenshot-20220302-at-812-1@2x.png"
        />
      </div>
    </LocalizationProvider>
  );
};

export default ContainerPreviewMode;
