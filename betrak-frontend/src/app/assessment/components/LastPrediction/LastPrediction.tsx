"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";

interface LastPredictionDataType {
  addiction_level: string;
  confidence: number;
  avg_daily_usage_hours: number;
  sleep_hours_per_night: number;
  mental_health_score: number;
  created_at: string;
}

const LastPrediction = ({ lastPredictionData }: { lastPredictionData: LastPredictionDataType }) => {
  return (
    <div>
      <ScrollAnimate delay={0.4}>
        <div className="mx-auto mt-6 max-w-xl flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Last Assessment
            </span>
            <span className="text-sm text-gray-300">
              {new Date(lastPredictionData.created_at).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                },
              )}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border capitalize
                    ${
                      lastPredictionData.addiction_level === "high"
                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                        : lastPredictionData.addiction_level === "medium"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          : "bg-green-500/20 text-green-400 border-green-500/30"
                    }`}
            >
              {lastPredictionData.addiction_level}
            </span>
            <span className="text-xs text-gray-500">
              {Math.round(lastPredictionData.confidence)}% confidence
            </span>
          </div>
        </div>
      </ScrollAnimate>
    </div>
  );
};

export default LastPrediction;
