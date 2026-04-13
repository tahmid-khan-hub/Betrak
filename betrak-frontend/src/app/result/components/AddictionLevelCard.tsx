"use client"
import ScrollAnimate from "@/app/hooks/ScrollAnimate";

type AddictionLevel = "high" | "medium" | "low";

interface AddictionLevelCardProps {
  addictionLevel: AddictionLevel;
  confidence: number;
  mentalHealthScore: number;
}

const levelConfig = {
  high: {
    label: "High",
    badge: "bg-red-500/15 text-red-400 border border-red-500/40",
    glow: "shadow-[0_0_24px_rgba(239,68,68,0.15)]",
  },
  medium: {
    label: "Medium",
    badge: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/40",
    glow: "shadow-[0_0_24px_rgba(234,179,8,0.15)]",
  },
  low: {
    label: "Low",
    badge: "bg-green-500/15 text-green-400 border border-green-500/40",
    glow: "shadow-[0_0_24px_rgba(34,197,94,0.15)]",
  },
};

const AddictionLevelCard = ({ addictionLevel, confidence, mentalHealthScore }: AddictionLevelCardProps) => {
  const config = levelConfig[addictionLevel] ?? levelConfig["low"];

  return (
    <ScrollAnimate delay={0.4}>
      <div className={`mx-auto max-w-4xl mt-16 md:mt-24`}>
        
        {/* 3 stats row */}
        <div className="flex flex-col divide-y divide-white/10 md:flex-row md:divide-y-0 md:divide-x items-center justify-center">
          
          {/* Addiction Level */}
          <div className="flex flex-col items-center gap-3 px-12 py-6 md:py-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500"> Addiction Level </span>
            <span className={`rounded-full px-5 py-1.5 text-sm font-semibold ${config.badge} hover:bg-red-500/25`}>
              {config.label}
            </span>
          </div>

          {/* Accuracy */}
          <div className="flex flex-col items-center gap-3 px-12 py-6 md:py-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500"> Accuracy </span>
            <span className="text-4xl font-bold bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
              {confidence}%{" "}
              <span className="text-base font-medium text-gray-100">Score</span>
            </span>
          </div>

          {/* Mental Balance */}
          <div className="flex flex-col items-center gap-3 px-12 py-6 md:py-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500"> Mental Balance </span>
            <span className="text-4xl font-bold bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
              {mentalHealthScore}
              <span className="text-xl font-medium text-gray-100">/10</span>
            </span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs italic text-gray-500 leading-relaxed max-w-xl mx-auto"> Please note: Our AI model provides estimates based on behavioral patterns and cannot guarantee 100% accurate medical results. </p>
      </div>
    </ScrollAnimate>
  );
};

export default AddictionLevelCard;
