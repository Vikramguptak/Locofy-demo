import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <header className="self-stretch bg-background-paper h-[77px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-500 font-typography-body-1 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div
          className="relative w-[174px] h-[33px] overflow-hidden shrink-0 cursor-pointer"
          onClick={onFickleflightLogoContainerClick}
        >
          <img
            className="absolute h-[96.97%] w-[99.83%] top-[1.52%] right-[0.17%] bottom-[1.52%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/webscreen.svg"
            onClick={onWebScreenClick}
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
            <div
              className="relative cursor-pointer"
              onClick={onExploreTextClick}
            >
              Explore
            </div>
            <div
              className="relative cursor-pointer"
              onClick={onSearchTextClick}
            >
              Search
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-typography-body-1 text-cornflowerblue-200 text-left inline-block">
              Hotels
            </button>
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
  );
};

export default Header;
