"use client"
import Banner from "./HomeComponents/Banner/Banner";
import HowItWorks from "./HomeComponents/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <div className="max-w-325 mx-auto px-2">
      <Banner />
      <HowItWorks />
    </div>
  );
}
