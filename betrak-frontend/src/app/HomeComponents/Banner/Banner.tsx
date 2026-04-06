import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden text-center py-32">
      {/* Badge */}
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
       className="lato flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-3">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
          Digital Wellness Check
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
       className="jakartaSans text-5xl font-extrabold text-gray-50 md:text-6xl">
        Are you addicted to{" "}
        <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
          social media?
        </span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
       className="my-6 max-w-3xl mx-auto text-lg leading-relaxed text-gray-400">
        Betrak uses AI to analyze your habits and give you an honest,
        personalized addiction level plus tips to help you reclaim your time.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
        <Link href={"/assessment"}><Button className="bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-8 py-6 text-md font-semibold">Take Free Test</Button></Link>
      </motion.div>
    </div>
  );
};

export default Banner;
