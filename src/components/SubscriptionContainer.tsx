import { FunctionComponent } from "react";
import NewsletterContainer from "./NewsletterContainer";

const SubscriptionContainer: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start">
      <NewsletterContainer propBackgroundImage="url('/newsletter-form-section1@3x.png')" />
    </div>
  );
};

export default SubscriptionContainer;
