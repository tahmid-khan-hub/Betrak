import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden text-center py-24">
      {/* Badge */}
      <div className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
          Digital Wellness Check
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-jakarta text-5xl font-extrabold text-gray-50 md:text-6xl">
        Are you addicted to{" "}
        <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
          social media?
        </span>
      </h1>

      <p className="my-6 max-w-3xl mx-auto text-lg leading-relaxed text-gray-400">
        Betrak uses AI to analyze your habits and give you an honest,
        personalized addiction level plus tips to help you reclaim your time.
      </p>

      <Link href={"/"}><button className="text-white">Take the Free Test</button></Link>
    </div>
  );
};

export default Banner;
