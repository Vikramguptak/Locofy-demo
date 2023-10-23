import { FunctionComponent } from "react";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className="rounded-lg bg-background-paper w-[900px] flex flex-col items-start justify-start p-5 box-border max-w-full max-h-full overflow-auto sm:p-2.5 sm:box-border">
      <section className="self-stretch relative h-[560px] sm:h-[50.625vw!important]">
        <img
          className="absolute top-[0px] left-[0px] w-[860px] h-[560px] object-cover"
          alt=""
          src="/video-thumbnail@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-600 w-[860px] h-[560px]" />
        <img
          className="absolute h-[14.29%] w-[9.3%] top-[42.86%] right-[45.35%] bottom-[42.86%] left-[45.35%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/play-icon.svg"
        />
      </section>
    </div>
  );
};

export default MatterhornPopup;
