import { FunctionComponent } from "react";
import VideoIcon1 from "./VideoIcon1";

const MainHeader: FunctionComponent = () => {
  return (
    <div className="absolute top-[0px] left-[115.2px] w-[2760px] h-[865.5px] text-left text-[27.66px] text-studio-darkmode-explainertext-485269 font-typography-body-1">
      <div className="absolute top-[0px] left-[0px] rounded-11xl bg-background-paper w-[2760px] h-[865.5px]" />
      <img
        className="absolute top-[109.1px] left-[87.2px] w-[592.5px] h-[178.5px] object-cover"
        alt=""
        src="/locofy-logo-1@2x.png"
      />
      <img
        className="absolute h-[26.47%] w-[8.7%] top-[9.38%] right-[46.6%] bottom-[64.15%] left-[44.71%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/group91.svg"
      />
      <img
        className="absolute h-[30.03%] w-[9.87%] top-[66.16%] right-[23.11%] bottom-[3.81%] left-[67.03%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/group92.svg"
      />
      <div className="absolute top-[-243.4px] left-[1543.2px] w-[1179px] h-[540px] opacity-[0.2] text-darkslategray-300 font-source-code-pro">
        <div className="absolute top-[0px] left-[0px] leading-[41.49px] font-semibold whitespace-pre-wrap flex items-center w-[1179px] h-[540px] opacity-[0.8]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              <span className="text-slateblue">import</span>
              <span>{` React `}</span>
              <span className="text-slateblue">from</span>
              <span className="text-darkslategray-300">{` `}</span>
              <span className="text-studio-universal-confirm-4fc786">
                "react"
              </span>
              <span className="text-darkslategray-300">;</span>
            </p>
            <p className="m-0">
              <span className="text-slateblue">import</span>
              <span>{` { AppHeader } `}</span>
              <span className="text-slateblue">from</span>
              <span className="text-darkslategray-300">{` `}</span>
              <span className="text-studio-universal-confirm-4fc786">
                "./app-header"
              </span>
            </p>
            <p className="m-0">
              <span className="text-slateblue">import</span>
              <span>{` { Footer } `}</span>
              <span className="text-slateblue">from</span>
              <span className="text-darkslategray-300">{` `}</span>
              <span className="text-studio-universal-confirm-4fc786">
                "./footer"
              </span>
            </p>
            <p className="m-0 text-studio-universal-confirm-4fc786">
              <span className="text-slateblue">import</span>
              <span className="text-darkslategray-300"> '</span>
              <span>./home-ui.css</span>
              <span className="text-darkslategray-300">'</span>
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              <span className="text-darkslategray-300">{`type `}</span>
              <span className="text-indianred">HomeUIProps</span>
              <span>{` = {`}</span>
            </p>
            <p className="m-0">
              <span>{`   header: `}</span>
              <span className="text-indianred">HeaderProps</span>
              <span className="text-darkslategray-300">;</span>
            </p>
            <p className="m-0">{`};`}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-indianred">
              <span className="text-slateblue">export</span>
              <span className="text-darkslategray-300">{` const `}</span>
              <span className="text-indianred">HomeUI</span>
              <span className="text-darkslategray-300">{`: `}</span>
              <span>React.FunctionComponent</span>
              <span className="text-darkslategray-300">{`<`}</span>
              <span className="text-indianred">HomeUIProps</span>
              <span className="text-darkslategray-300">{`> = React.memo(`}</span>
            </p>
            <p className="m-0 text-slateblue">{`   ({ header }) => {`}</p>
            <p className="m-0 text-slateblue"> return (</p>
            <p className="m-0 text-slateblue">
              <span>{`        <div class=`}</span>
              <span className="text-studio-universal-confirm-4fc786">{`"home-ui-root">`}</span>
            </p>
          </span>
        </div>
      </div>
      <img
        className="absolute h-[145.56%] w-[22.24%] top-[20.98%] right-[-2.14%] bottom-[-66.54%] left-[79.9%] max-w-full overflow-hidden max-h-full opacity-[0.7]"
        alt=""
        src="/pluginmockup.svg"
      />
      <div className="absolute top-[672.5px] left-[87.2px] w-[1588.2px] h-[100px] text-41xl text-studio-darkmode-maincta-457eff">
        <div className="absolute top-[0px] left-[0px] w-[1588.2px] h-[100px]">
          <div className="absolute top-[0px] left-[0px] w-[604px] h-[100px]">
            <a
              className="absolute top-[6px] left-[130px] [text-decoration:underline] leading-[87.51px] font-bold text-[inherit]"
              href="https://www.figma.com/community/plugin/1056467900248561542/Locofy---Figma-to-React-code-(BETA)"
              target="_blank"
            >
              Get Locofy plugin
            </a>
            <img
              className="absolute h-full w-[16.56%] top-[0%] right-[83.44%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon--plugin.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[704px] w-[466px] h-[100px]">
            <a
              className="absolute top-[6px] left-[130px] [text-decoration:underline] leading-[87.51px] font-bold text-[inherit]"
              href="https://www.youtube.com/watch?v=XF-3ncTbacw"
              target="_blank"
            >
              Watch demo
            </a>
            <VideoIcon1
              videoIcon1Video="/video3.svg"
              videoIconWidth="100px"
              videoIconHeight="100px"
              videoIconPosition="absolute"
              videoIconTop="0px"
              videoIconLeft="0px"
            />
          </div>
          <div className="absolute top-[6px] left-[1270px] w-[318.2px] h-[88px]">
            <a
              className="absolute top-[0px] left-[130.2px] [text-decoration:underline] leading-[87.51px] font-bold text-[inherit]"
              href="https://guide.locofy.ai/"
              target="_blank"
            >
              Guides
            </a>
            <img
              className="absolute h-[90.91%] w-[31.43%] top-[5.11%] right-[68.57%] bottom-[3.98%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/books-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[485px] left-[87.2px] text-52xl leading-[92px] inline-block w-[2147.3px]">
        <span>{`Ship products 2X faster - Convert `}</span>
        <b>Figma designs</b>
        <span>{` to `}</span>
        <b>React code</b>
        <span>!</span>
      </div>
      <b className="absolute top-[349.5px] left-[87.2px] text-74xl leading-[110px] inline-block font-alegreya w-[2342.1px]">
        Turn your designs into production-ready frontend code
      </b>
    </div>
  );
};

export default MainHeader;
