import { FunctionComponent } from "react";
import ContainerGettingStarted from "../components/ContainerGettingStarted";
import AutocompleteDropdownContainer from "../components/AutocompleteDropdownContainer";
import PreviewContainer from "../components/PreviewContainer";
import AirportDropdownContainer from "../components/AirportDropdownContainer";
import TaggingContainer from "../components/TaggingContainer";
import MainHeader from "../components/MainHeader";
import ActionContainer from "../components/ActionContainer";
import GettingStartedContainer from "../components/GettingStartedContainer";
import HotelsPageContainer from "../components/HotelsPageContainer";
import FrameworkContainer from "../components/FrameworkContainer";
import BuilderContainer from "../components/BuilderContainer";
import ContainerPreviewMode from "../components/ContainerPreviewMode";

const Instructions: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[19592px] text-center text-41xl text-background-paper font-typography-body-1">
      <div className="absolute top-[7392px] left-[27px] w-[657px] h-[1434px] font-helvetica">
        <ContainerGettingStarted />
        <div className="absolute top-[69px] left-[0px] w-[100px] h-[100px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-darkmode-maincta-457eff w-[100px] h-[100px]" />
          <b className="absolute top-[25.3px] left-[37.6px] leading-[105px] flex items-center justify-center w-[24.7px] h-[49.4px]">
            2
          </b>
        </div>
      </div>
      <b className="absolute top-[2707.5px] left-[76.6px] text-[100px] text-studio-darkmode-normalsolid-icons-96a2be text-left">
        Instructions
      </b>
      <div className="absolute top-[2976px] left-[82px] bg-ghostwhite-100 w-[595px] h-[3971px] overflow-hidden text-left text-xl text-studio-darkmode-explainertext-485269">
        <div className="absolute top-[41.5px] left-[60.6px] w-[487.5px] h-[195.5px] text-46xl text-darkslategray-100">
          <div className="absolute top-[35.5px] left-[0px] leading-[80px] font-black inline-block w-[487.5px]">
            Tagging your Layers
          </div>
          <div className="absolute top-[0px] left-[2.5px] text-11xl uppercase font-medium text-studio-darkmode-explainertext-485269">
            Getting Started
          </div>
        </div>
        <div className="absolute top-[261px] left-[60.1px] text-5xl leading-[38px] inline-block w-[474px]">{`Start by tagging the layers on this  Fickle Flight Figma file. `}</div>
        <div className="absolute top-[1667px] left-[60.1px] leading-[32px] inline-block w-[474px]">
          Great job! You’ve just tagged a button! Let’s try tagging another
          layer.
        </div>
        <div className="absolute top-[3863.7px] left-[60.1px] leading-[32px] inline-block w-[474px]">
          <span>{`Awesome! You’ve now tagged a `}</span>
          <b>button</b>
          <span>{` and an `}</span>
          <b>autocomplete</b>
          <span>.</span>
        </div>
        <div className="absolute top-[436px] left-[60.6px] w-[444.5px] h-[130px]">
          <div className="absolute top-[34px] left-[41.5px] leading-[32px] inline-block w-[403px]">
            <span>{`Select the “Search Flights” button on the design to the right and select `}</span>
            <b>Button</b>
            <span> in the Tag Layers widget in the Locofy plugin</span>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[219.8px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[41.8px] leading-[28px] uppercase">
              Select the LAYER
            </b>
            <div className="absolute top-[2px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
              <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                1
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[1842px] left-[60.6px] w-[444.5px] h-[130px]">
          <div className="absolute top-[34px] left-[41.5px] leading-[32px] inline-block w-[403px]">
            <span>{`Select the “Arrival field” on the design and select `}</span>
            <b>Autocomplete</b>
            <span> on the Tag Layers widget in the plugin.</span>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[219.8px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[41.8px] leading-[28px] uppercase">
              Select the LAYER
            </b>
            <div className="absolute top-[2px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
              <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                1
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[756px] left-[60.6px] w-[444.5px] h-[103px]">
          <div className="absolute top-[0px] left-[0px] w-[444.5px] h-[103px]">
            <div className="absolute top-[39px] left-[41.5px] leading-[32px] inline-block w-[403px]">
              <p className="m-0">
                <span className="font-typography-body-1">{`For now, select `}</span>
                <b className="font-typography-body-1">None</b>
                <span>{` for this Button example. `}</span>
              </p>
              <p className="m-0">
                You’ll see how to work with UI libraries later!
              </p>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[221.8px] h-7 text-darkslategray-100">
              <b className="absolute top-[0px] left-[41.8px] leading-[28px] uppercase">
                Select UI Library
              </b>
              <div className="absolute top-[2px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
                <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                  2
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2109.3px] left-[60.6px] w-[444.5px] h-[135px] text-[inherit]">
          <div className="absolute top-[0px] left-[0px] w-[444.5px] h-[135px]">
            <div className="absolute top-[39px] left-[41.5px] leading-[32px] inline-block w-[403px]">
              {`This Autocomplete comes from the `}
              <a
                className="text-[inherit]"
                href="https://material-ui.com/store/items/figma-react/"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Material UI design kit
                </span>
              </a>
              , so please select Material UI. Then, choose the outlined
              variation.
            </div>
            <div className="absolute top-[0px] left-[0px] w-[347.8px] h-7 text-darkslategray-100">
              <b className="absolute top-[0px] left-[41.8px] leading-[28px] uppercase">{`Select UI Library & Variation`}</b>
              <div className="absolute top-[2px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
                <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                  2
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1128px] left-[60.6px] w-[444.5px] h-[98px]">
          <div className="absolute top-[34px] left-[41.5px] leading-[32px] inline-block w-[403px]">
            You can edit attributes for your button. For now, leave these
            attributes as default.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[444.5px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[38.8px] leading-[28px] uppercase inline-block w-[405.7px]">
              edit basic and advanceD attributes
            </b>
            <div className="absolute top-[2px] left-[0px] w-[22.3px] h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-[22.3px] h-6" />
              <b className="absolute top-[3.9px] left-[7.8px] inline-block w-[8.2px] h-[17.6px]">
                3
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[723.5px] left-[59.6px] box-border w-[476px] h-px opacity-[0.5] border-t-[1px] border-solid border-studio-lightmode-placeholders-bac2d6" />
        <div className="absolute top-[1095.5px] left-[59.6px] box-border w-[476px] h-px opacity-[0.5] border-t-[1px] border-solid border-studio-lightmode-placeholders-bac2d6" />
        <img
          className="absolute top-[1250px] left-[116.1px] w-[363px] h-[385px] object-cover"
          alt=""
          src="/image-10@2x.png"
        />
        <div className="absolute top-[883px] left-[151.1px] w-[281px] h-[181px]">
          <img
            className="absolute top-[0px] left-[0px] w-[281px] h-[181px] object-cover"
            alt=""
            src="/image-11@2x.png"
          />
          <div className="absolute top-[103.2px] left-[256.2px] rounded-[50%] bg-studio-universal-confirm-4fc786 box-border w-[17.7px] h-[17.7px] border-[3.8px] border-solid border-mediumseagreen" />
        </div>
        <div className="absolute top-[2264.3px] left-[157.1px] w-[281px] h-[182px]">
          <img
            className="absolute top-[0px] left-[0px] w-[281px] h-[182px] object-cover"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="absolute top-[101.2px] left-[62.2px] rounded-[50%] bg-studio-universal-confirm-4fc786 box-border w-[17.7px] h-[17.7px] border-[3.8px] border-solid border-mediumseagreen" />
        </div>
        <div className="absolute top-[369px] left-[60.1px] text-11xl uppercase font-extrabold inline-block w-[481px]">
          TRY: tagging a button
        </div>
        <div className="absolute top-[1775px] left-[60.1px] text-11xl uppercase font-extrabold inline-block w-[488px]">
          tagging aN AUTOCOMPLETE
        </div>
        <img
          className="absolute top-[1989.5px] left-[104px] w-[318.7px] h-[88.9px] object-cover"
          alt=""
          src="/group-7511@2x.png"
        />
        <div className="absolute top-[2462.3px] left-[163.1px] w-[268px] h-[195px]">
          <img
            className="absolute top-[0px] left-[0px] w-[268px] h-[195px] object-cover"
            alt=""
            src="/image-15@2x.png"
          />
          <div className="absolute top-[149.2px] left-[246.2px] rounded-[50%] bg-studio-universal-confirm-4fc786 box-border w-[17.7px] h-[17.7px] border-[3.8px] border-solid border-mediumseagreen" />
        </div>
        <div className="absolute top-[3804px] left-[102.1px] leading-[28px] inline-block w-[410.6px]">
          Leave the other attributes unchanged for now.
        </div>
        <div className="absolute top-[3557px] left-[60.1px] w-[444.5px] h-[98px]">
          <div className="absolute top-[34px] left-[41.5px] leading-[32px] inline-block w-[403px]">
            In the attributes section, look for “Options” and add a few items.
            Eg. Norway, Italy, Spain
          </div>
          <div className="absolute top-[0px] left-[0px] w-[444.5px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[38.8px] leading-[28px] uppercase inline-block w-[405.7px]">
              edit attributes
            </b>
            <div className="absolute top-[2px] left-[0px] w-[22.3px] h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-[22.3px] h-6" />
              <b className="absolute top-[3.9px] left-[7.8px] inline-block w-[8.2px] h-[17.6px]">
                5
              </b>
            </div>
          </div>
        </div>
        <div className="absolute top-[3169px] left-[60.1px] w-[444.5px] h-[98px]">
          <div className="absolute top-[34px] left-[41.5px] leading-[32px] inline-block w-[403px]">
            Select a pallette that fits the colors of your selected component
          </div>
          <div className="absolute top-[0px] left-[0px] w-[444.5px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[38.8px] leading-[28px] uppercase inline-block w-[405.7px]">
              Select a pallette
            </b>
            <div className="absolute top-[2px] left-[0px] w-[22.3px] h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-[22.3px] h-6" />
              <b className="absolute top-[3.9px] left-[7.8px] inline-block w-[8.2px] h-[17.6px]">
                4
              </b>
            </div>
          </div>
        </div>
        <AutocompleteDropdownContainer />
        <div className="absolute top-[3679px] left-[112px] w-[370px] h-[93px]">
          <div className="absolute top-[0px] left-[0px] w-[370px] h-[93px]">
            <img
              className="absolute top-[0px] left-[0px] w-[370px] h-[93px] object-cover"
              alt=""
              src="/image-14@2x.png"
            />
            <div className="absolute top-[47.9px] left-[346.3px] rounded-[50%] bg-studio-universal-confirm-4fc786 box-border w-[17.7px] h-[17.7px] border-[3.8px] border-solid border-mediumseagreen" />
          </div>
        </div>
        <img
          className="absolute top-[556.2px] left-[102.3px] w-[331.2px] h-[134.8px] object-cover"
          alt=""
          src="/group-656@2x.png"
        />
        <div className="absolute top-[3278.4px] left-[101.6px] w-[281.6px] h-[247px]">
          <img
            className="absolute top-[0px] left-[0px] w-[281.6px] h-[247px] object-cover"
            alt=""
            src="/screenshot-20220204-at-809-1@2x.png"
          />
          <div className="absolute top-[16.5px] left-[259.5px] rounded-[50%] bg-studio-universal-confirm-4fc786 box-border w-[17.7px] h-[17.7px] border-[3.8px] border-solid border-mediumseagreen" />
        </div>
        <div className="absolute top-[2888px] left-[349.4px] w-[105.3px] h-[237px] overflow-hidden text-9xs-5 text-darkslategray-200">
          <PreviewContainer />
          <div className="absolute h-[37.97%] w-[87.75%] top-[31.01%] right-[6.17%] bottom-[31.01%] left-[6.08%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle10.svg"
                />
                <div className="absolute h-[9.33%] w-[46.65%] top-[87.11%] right-[26.62%] bottom-[3.56%] left-[26.73%] text-[3.15px] text-studio-darkmode-maincta-457eff">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-[46.43%] w-[28.54%] top-[29.76%] left-[0%] font-medium inline-block">
                      CANCEL
                    </div>
                    <div className="absolute h-full w-[61.72%] top-[0%] right-[0%] bottom-[0%] left-[38.28%] text-background-paper">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/rectangle11.svg"
                      />
                      <div className="absolute h-[46.43%] w-[78.95%] top-[29.76%] left-[10.53%] font-medium inline-block">
                        YES, PROCEED
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute h-[10.89%] w-full top-[0%] right-[0%] bottom-[89.11%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle12.svg"
                />
                <div className="absolute h-[4.67%] w-[35.61%] top-[3%] left-[32.25%] font-medium inline-block">
                  You are in Link Mode
                </div>
                <div className="absolute h-[4.67%] w-[31.49%] top-[16%] left-[34.31%] inline-block">{`You have selected: `}</div>
                <div className="absolute h-[4.67%] w-[92.42%] top-[75.11%] left-[4%] inline-block">{`Is this the correct dropdown? If ready, please proceed… `}</div>
                <div className="absolute h-[4.89%] w-[35.93%] top-[26.89%] right-[32.03%] bottom-[68.22%] left-[32.03%] text-studio-darkmode-maincta-457eff">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-[85.24%] top-[0%] left-[14.76%] font-medium inline-block">
                      Airport Dropdown
                    </div>
                    <img
                      className="absolute h-[61.36%] w-[10.54%] top-[18.18%] right-[89.46%] bottom-[20.45%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/folder1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute h-[37.22%] w-[52.81%] top-[35%] right-[23.59%] bottom-[27.78%] left-[23.59%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
        <AirportDropdownContainer />
      </div>
      <div className="absolute top-[3044px] left-[24.1px] w-[100px] h-[100px] font-helvetica">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-darkmode-maincta-457eff w-[100px] h-[100px]" />
        <b className="absolute top-[25.3px] left-[37.6px] leading-[105px] flex items-center justify-center w-[24.7px] h-[49.4px]">
          1
        </b>
      </div>
      <div className="absolute top-[2707.5px] left-[793.5px] box-border w-px h-[16885px] border-r-[1px] border-solid border-studio-darkmode-normalsolid-icons-96a2be" />
      <div className="absolute top-[2707.5px] left-[808.5px] box-border w-px h-[16885px] border-r-[1px] border-solid border-studio-darkmode-normalsolid-icons-96a2be" />
      <b className="absolute top-[1057.9px] left-[88.2px] text-[180px] leading-[240px] text-darkslategray-100 text-left">
        Getting Started with Locofy
      </b>
      <div className="absolute top-[1299.9px] left-[104.3px] leading-[87px] text-studio-darkmode-explainertext-485269 text-left inline-block w-[2147.3px]">
        <span>{`To get started, here is a quick guide to using the plugin. This is our responsive `}</span>
        <b>Fickle Flight Website</b>
        <span> Sample project.</span>
      </div>
      <TaggingContainer />
      <div className="absolute top-[1590.1px] left-[115.2px] leading-[87px] font-semibold text-studio-darkmode-explainertext-485269 text-left inline-block w-[2147.3px]">
        In this guided sample project, you will be:
      </div>
      <div className="absolute top-[2254.6px] left-[115.2px] w-[2264.3px] h-[87.5px] text-left text-studio-darkmode-explainertext-485269">
        <div className="absolute top-[0px] left-[117px] leading-[87px] inline-block w-[2147.3px]">
          Total time: 10 to 15 minutes
        </div>
        <img
          className="absolute top-[0.5px] left-[0px] w-[87px] h-[87px]"
          alt=""
          src="/group-767.svg"
        />
      </div>
      <MainHeader />
      <img
        className="absolute top-[621.4px] left-[calc(50%_+_685.3px)] w-[415.9px] h-[379.6px]"
        alt=""
        src="/guide-guy.svg"
      />
      <ActionContainer />
      <div className="absolute top-[10239.8px] left-[20px] w-[100px] h-[100px] font-helvetica">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-darkmode-maincta-457eff w-[100px] h-[100px]" />
        <b className="absolute top-[25.3px] left-[37.6px] leading-[105px] flex items-center justify-center w-[24.7px] h-[49.4px]">
          3
        </b>
      </div>
      <GettingStartedContainer />
      <div className="absolute top-[13813.8px] left-[0px] w-[100px] h-[100px] font-helvetica">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-darkmode-maincta-457eff w-[100px] h-[100px]" />
        <b className="absolute top-[25.3px] left-[37.6px] leading-[105px] flex items-center justify-center w-[24.7px] h-[49.4px]">
          4
        </b>
      </div>
      <div className="absolute top-[15623px] left-[89px] bg-ghostwhite-100 w-[595px] h-[1379px] overflow-hidden text-left text-5xl text-studio-darkmode-explainertext-485269">
        <div className="absolute top-[258px] left-[59px] leading-[38px] inline-block w-[456px]">
          Once you are happy with your preview, you are now ready to sync to
          Locofy Builder where you can view and export your code.
        </div>
        <div className="absolute top-[404.3px] left-[58.8px] w-[440.2px] h-[386.2px] text-lg">
          <div className="absolute top-[0px] left-[0px] w-[440.2px] h-[90px]">
            <div className="absolute top-[34px] left-[42.2px] leading-[28px] inline-block w-[398px]">
              On this Figma file, select the frames you wish to sync and click
              the “View code” button.
            </div>
            <div className="absolute top-[0px] left-[0px] w-[219.1px] h-7 text-darkslategray-100">
              <b className="absolute top-[0px] left-[42.1px] leading-[28px] uppercase">
                Select the frames
              </b>
              <div className="absolute top-[1.7px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
                <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                  1
                </b>
              </div>
            </div>
          </div>
          <HotelsPageContainer />
        </div>
        <div className="absolute top-[41.7px] left-[59px] w-[477px] h-[195px] text-46xl text-darkslategray-100">
          <div className="absolute top-[35px] left-[0px] leading-[80px] font-black inline-block w-[477px]">
            <p className="m-0">{`Sync to `}</p>
            <p className="m-0">Locofy Builder</p>
          </div>
          <div className="absolute top-[0px] left-[3.4px] text-11xl uppercase font-medium text-studio-darkmode-explainertext-485269">
            Getting Started
          </div>
        </div>
        <FrameworkContainer />
      </div>
      <div className="absolute top-[17196px] left-[89px] bg-ghostwhite-100 w-[595px] h-[2396px] overflow-hidden text-left text-lg text-studio-darkmode-explainertext-485269">
        <div className="absolute top-[354px] left-[59px] text-5xl leading-[38px] inline-block w-[456px]">
          Once the sync is complete, you’ll be taken to the Locofy Builder.
        </div>
        <div className="absolute top-[41.7px] left-[59px] w-[477px] h-[275px] text-46xl text-darkslategray-100">
          <div className="absolute top-[35px] left-[0px] leading-[80px] font-black inline-block w-[477px]">
            <p className="m-0">{`View and `}</p>
            <p className="m-0">{`Export code on `}</p>
            <p className="m-0">Locofy Builder</p>
          </div>
          <div className="absolute top-[0px] left-[3.4px] text-11xl uppercase font-medium text-studio-darkmode-explainertext-485269">
            Getting Started
          </div>
        </div>
        <div className="absolute top-[461.2px] left-[58.8px] w-[477.2px] h-[333.7px]">
          <div className="absolute top-[34px] left-[42.2px] leading-[28px] inline-block w-[435px]">
            Once your project has been synced, you can now view the code in the
            builder and make further changes.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[318.1px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[42.1px] leading-[28px] uppercase">
              View code and make changes
            </b>
            <div className="absolute top-[1.7px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
              <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                1
              </b>
            </div>
          </div>
          <img
            className="absolute top-[104px] left-[42.2px] rounded-9xs w-[435px] h-[229.7px] object-cover"
            alt=""
            src="/image-17@2x.png"
          />
        </div>
        <BuilderContainer />
        <ContainerPreviewMode />
        <div className="absolute top-[1996.3px] left-[58.8px] w-[477.2px] h-[340.1px]">
          <div className="absolute top-[36.6px] left-[42.2px] leading-[28px] inline-block w-[435px]">
            You’re done! After exporting your project, you will be shown the
            next steps to run your project.
          </div>
          <div className="absolute top-[0px] left-[0px] w-[213.1px] h-7 text-darkslategray-100">
            <b className="absolute top-[0px] left-[42.1px] leading-[28px] uppercase">
              Run your project
            </b>
            <div className="absolute top-[1.7px] left-[0px] w-6 h-6 text-sm text-studio-darkmode-maincta-457eff font-helvetica">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-lightmode-midseparator-dee3eb w-6 h-6" />
              <b className="absolute top-[3.9px] left-[8.4px] inline-block w-[8.8px] h-[17.6px]">
                5
              </b>
            </div>
          </div>
          <img
            className="absolute top-[106px] left-[42.2px] w-[212.2px] h-[234.1px] object-cover"
            alt=""
            src="/image-19@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[15688.1px] left-[23px] w-[100px] h-[100px] font-helvetica">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-darkmode-maincta-457eff w-[100px] h-[100px]" />
        <b className="absolute top-[25.3px] left-[37.6px] leading-[105px] flex items-center justify-center w-[24.7px] h-[49.4px]">
          5
        </b>
      </div>
      <div className="absolute top-[17261.1px] left-[23px] w-[100px] h-[100px] font-helvetica">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-studio-darkmode-maincta-457eff w-[100px] h-[100px]" />
        <b className="absolute top-[25.3px] left-[35.8px] leading-[105px] flex items-center justify-center w-[28.4px] h-[49.4px]">
          6
        </b>
      </div>
      <div className="absolute top-[3190px] left-[2382px] w-[928.8px] h-[269.7px] text-55xl text-studio-darkmode-maincta-457eff font-just-me-again-down-here">
        <div className="absolute top-[0px] left-[9.3px] tracking-[-0.04em] leading-[90px] inline-block w-[920.7px] [transform:_rotate(2.97deg)] [transform-origin:0_0]">{`Try tagging the Search Flight button, Autocomplete field and Date & Time Picker`}</div>
        <img
          className="absolute top-[195px] left-[37.4px] w-[106.3px] h-[81.7px]"
          alt=""
          src="/vector-6.svg"
        />
      </div>
      <img
        className="absolute h-[0.82%] w-[6.09%] top-[16.48%] right-[0%] bottom-[82.71%] left-[93.91%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group21.svg"
      />
      <div className="absolute top-[6539px] left-[1354.4px] text-55xl tracking-[-0.04em] leading-[75px] font-just-me-again-down-here text-studio-darkmode-maincta-457eff inline-block w-[468.5px] [transform:_rotate(3.53deg)] [transform-origin:0_0]">
        Use this as the Autocomplete Dropdown
      </div>
      <img
        className="absolute h-[0.78%] w-[5.91%] top-[34.92%] right-[66.46%] bottom-[64.3%] left-[27.63%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group22.svg"
      />
      <img
        className="absolute top-[6714.5px] left-[1308.2px] w-[144.1px] h-[30.2px]"
        alt=""
        src="/vector-7.svg"
      />
      <div className="absolute top-[8439px] left-[2383px] w-[893.6px] h-[365.1px] text-55xl text-studio-darkmode-maincta-457eff font-just-me-again-down-here">
        <div className="absolute top-[19px] left-[0px] tracking-[-0.04em] leading-[66px] inline-block w-[891px] [transform:_rotate(-1.22deg)] [transform-origin:0_0]">{`Try defining behaviour & responsiveness for the “Show more results” button`}</div>
        <div className="absolute top-[155.9px] left-[218.2px] text-27xl tracking-[-0.04em] text-left [transform:_rotate(-2.03deg)] [transform-origin:0_0]">
          ( Make sure you tag the button first )
        </div>
        <img
          className="absolute top-[178.6px] left-[51.2px] w-[90.1px] h-[178.8px]"
          alt=""
          src="/vector-71.svg"
        />
      </div>
      <img
        className="absolute h-[0.83%] w-[5.64%] top-[42.31%] right-[20.58%] bottom-[56.86%] left-[73.78%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group31.svg"
      />
      <div className="absolute top-[9775px] left-[1110.2px] w-[683.6px] h-[361.1px] text-55xl text-studio-darkmode-maincta-457eff font-just-me-again-down-here">
        <div className="absolute top-[76.4px] left-[0px] tracking-[-0.04em] leading-[74px] inline-block w-[671.1px] [transform:_rotate(-6.54deg)] [transform-origin:0_0]">
          Try adding an action to the Play Video button in this screen
        </div>
        <img
          className="absolute top-[193.7px] left-[440.2px] w-[52.9px] h-[166px]"
          alt=""
          src="/vector-8.svg"
        />
      </div>
      <img
        className="absolute h-[0.83%] w-[6.43%] top-[50.29%] right-[67.81%] bottom-[48.88%] left-[25.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group32.svg"
      />
      <div className="absolute top-[12365px] left-[887px] w-[689.2px] h-[256.2px] text-55xl text-studio-darkmode-maincta-457eff font-just-me-again-down-here">
        <div className="absolute top-[0.3px] left-[53.5px] tracking-[-0.04em] leading-[66px] inline-block w-[635.7px] [transform:_rotate(-0.03deg)] [transform-origin:0_0]">
          Choose this as your pop-up
        </div>
        <img
          className="absolute top-[93px] left-[37.6px] w-[61.6px] h-[160.6px]"
          alt=""
          src="/vector-10.svg"
        />
        <div className="absolute top-[79.7px] left-[94.2px] text-27xl tracking-[-0.04em] text-left [transform:_rotate(-0.47deg)] [transform-origin:0_0]">
          ( Make sure you tag this as a pop-up first )
        </div>
      </div>
      <img
        className="absolute h-[0.78%] w-[6.65%] top-[63.17%] right-[47.52%] bottom-[36.04%] left-[45.83%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group23.svg"
      />
    </div>
  );
};

export default Instructions;
