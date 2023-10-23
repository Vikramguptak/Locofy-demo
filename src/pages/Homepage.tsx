import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import NewsletterContainer from "../components/NewsletterContainer";

const Homepage: FunctionComponent = () => {
  return (
    <div className="relative bg-background-paper w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
      <HeroContainer />
      <div className="w-full flex flex-col items-center justify-start py-0 px-20 box-border gap-[80px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <UpcomingFlightSectionContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysForm />
      </div>
      <NewsletterContainer propBackgroundImage="url('/subscribe-section@3x.png')" />
    </div>
  );
};

export default Homepage;
