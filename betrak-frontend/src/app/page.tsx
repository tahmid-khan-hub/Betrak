"use client"
import AddictionLevels from "./HomeComponents/AddictionLevels/AddictionLevels";
import Banner from "./HomeComponents/Banner/Banner";
import CTA from "./HomeComponents/CTA/CTA";
import HowItWorks from "./HomeComponents/HowItWorks/HowItWorks";
import Reviews from "./HomeComponents/Reviews/Reviews";
import WhatWeMeasure from "./HomeComponents/WhatWeMeasure/WhatWeMeasure";
import WhyItMatters from "./HomeComponents/WhyItMatters/WhyItMatters";

export default function Home() {
  return (
    <div className=" px-2 overflow-x-hidden">
      <Banner />
      <HowItWorks />
      <WhatWeMeasure />
      <AddictionLevels />
      <WhyItMatters />
      <Reviews />
      <CTA />
    </div>
  );
}
