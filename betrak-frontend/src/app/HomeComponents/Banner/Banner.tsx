import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden text-center py-32">
      {/* Badge */}
      <ScrollAnimate delay={0.08}><div
       className="lato flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
          Digital Wellness Check
        </span>
      </div></ScrollAnimate>

      {/* Heading */}
      <ScrollAnimate delay={0.2}><h1
       className="jakartaSans text-5xl font-extrabold text-gray-50 md:text-6xl">
        Are you addicted to{" "}
        <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
          social media?
        </span>
      </h1></ScrollAnimate>

      <ScrollAnimate delay={0.4}><p
       className="my-6 max-w-3xl mx-auto text-lg leading-relaxed text-gray-400">
        Betrak uses AI to analyze your habits and give you an honest,
        personalized addiction level plus tips to help you reclaim your time.
      </p></ScrollAnimate>

      <ScrollAnimate delay={0.5}><div>
        <Link href={"/assessment"}><Button className="bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-8 py-6 text-md font-semibold">Take Free Test</Button></Link>
      </div></ScrollAnimate>
    </div>
  );
};

export default Banner;
