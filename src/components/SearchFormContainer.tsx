import { FunctionComponent, useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const SearchFormContainer: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9bd7)] flex flex-col items-start justify-start text-left text-42xl text-background-paper font-baloo-bhai">
        <div className="self-stretch relative h-[362px] bg-[url('/public/search-container@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0px] left-[0px] flex flex-col items-center justify-center py-0 px-20 box-border gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(32%_-_96.5px_-_0px)]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[67px] md:text-23xl md:leading-[48px] sm:text-12xl sm:leading-[40px]">
                Where are you off too?
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-background-paper flex flex-row items-start justify-start p-5 md:flex-col">
              <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
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
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <Autocomplete
                    className="self-stretch"
                    size="medium"
                    sx={{ width: "100%" }}
                    disablePortal
                    options={[
                      "Clark (CRK)",
                      "Launceston (LST)",
                      "Kalibo (KLO)",
                      "Colombo CMB",
                      "Melbourne (AVV)",
                      "Los Angeles (LA)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Arrival"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Los Angeles (LA)"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-[5px] sm:w-full sm:flex-[unset] sm:self-stretch">
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
              <div className="flex flex-col items-center justify-center p-[5px] md:w-full md:text-left">
                <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded-9xs w-[164px] h-14 overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]">
                  <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-typography-body-1 text-background-paper text-center inline-block w-[147px]">
                    Search flights
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchFormContainer;
