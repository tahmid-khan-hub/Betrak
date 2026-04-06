"use client"
import AddictionLevels from "./HomeComponents/AddictionLevels/AddictionLevels";
import Banner from "./HomeComponents/Banner/Banner";
import HowItWorks from "./HomeComponents/HowItWorks/HowItWorks";
import WhatWeMeasure from "./HomeComponents/WhatWeMeasure/WhatWeMeasure";
import WhyItMatters from "./HomeComponents/WhyItMatters/WhyItMatters";

export default function Home() {
  return (
    <div className="max-w-325 mx-auto px-2">
      <Banner />
      <HowItWorks />
      <WhatWeMeasure />
      <AddictionLevels />
      <WhyItMatters />
    </div>
  );
}
