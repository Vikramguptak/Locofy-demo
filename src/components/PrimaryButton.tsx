import { FunctionComponent, useMemo, type CSSProperties } from "react";

type PrimaryButtonType = {
  searchFlights?: string;

  /** Style props */
  primaryButtonWidth?: CSSProperties["width"];
  primaryButtonHeight?: CSSProperties["height"];
  primaryButtonCursor?: CSSProperties["cursor"];
  primaryButtonBorder?: CSSProperties["border"];
  primaryButtonPadding?: CSSProperties["padding"];
  primaryButtonBackgroundColor?: CSSProperties["backgroundColor"];
  primaryButtonPosition?: CSSProperties["position"];
  primaryButtonTop?: CSSProperties["top"];
  primaryButtonLeft?: CSSProperties["left"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  searchFlightsLeft?: CSSProperties["left"];
  searchFlightsDisplay?: CSSProperties["display"];
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  searchFlights,
  primaryButtonWidth,
  primaryButtonHeight,
  primaryButtonCursor,
  primaryButtonBorder,
  primaryButtonPadding,
  primaryButtonBackgroundColor,
  primaryButtonPosition,
  primaryButtonTop,
  primaryButtonLeft,
  rectangleDivBackgroundColor,
  searchFlightsLeft,
  searchFlightsDisplay,
}) => {
  const primaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: primaryButtonWidth,
      height: primaryButtonHeight,
      cursor: primaryButtonCursor,
      border: primaryButtonBorder,
      padding: primaryButtonPadding,
      backgroundColor: primaryButtonBackgroundColor,
      position: primaryButtonPosition,
      top: primaryButtonTop,
      left: primaryButtonLeft,
    };
  }, [
    primaryButtonWidth,
    primaryButtonHeight,
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
    primaryButtonPosition,
    primaryButtonTop,
    primaryButtonLeft,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const searchFlightsStyle: CSSProperties = useMemo(() => {
    return {
      left: searchFlightsLeft,
      display: searchFlightsDisplay,
    };
  }, [searchFlightsLeft, searchFlightsDisplay]);

  return (
    <div
      className="w-[220px] h-[72px] text-center text-lg text-background-paper font-typography-body-1"
      style={primaryButtonStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-orange-200"
        style={rectangleDivStyle}
      />
      <div
        className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_62.5px)] tracking-[0.04em] font-medium"
        style={searchFlightsStyle}
      >
        {searchFlights}
      </div>
    </div>
  );
};

export default PrimaryButton;
