"use client"
import ScrollAnimate from "@/app/hooks/ScrollAnimate";

type AddictionLevel = "High" | "Medium" | "Low";

interface AddictionLevelCardProps {
  addictionLevel: AddictionLevel;
  confidence: number;
  mentalHealthScore: number;
}

const levelStyles = {
  High: "bg-red-500/10 text-red-400 border-red-500/30",
  Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  Low: "bg-green-500/10 text-green-400 border-green-500/30",
};

const AddictionLevelCard = ({ addictionLevel, confidence, mentalHealthScore, }: AddictionLevelCardProps) => {
  return (
    <ScrollAnimate delay={0.4}>
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-lg shadow-lg">
        {/* Badge */}
        <div
          className={`inline-flex items-center px-4 py-1 rounded-full border text-sm font-medium ${
            levelStyles[addictionLevel]
          }`}
        >
          {addictionLevel} Addiction Level
        </div>

        {/* Confidence */}
        <h2 className="mt-6 text-2xl font-semibold text-gray-100">
          Our model is {confidence}% confident
        </h2>

        {/* Mental health score */}
        <div className="mt-4 text-gray-400">Mental Health Score</div>

        <div className="mt-2 text-4xl font-bold text-indigo-400">
          {mentalHealthScore} / 10
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default AddictionLevelCard;
