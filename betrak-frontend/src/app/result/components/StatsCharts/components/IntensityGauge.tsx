"use client";
import { RadialBarChart, RadialBar, ResponsiveContainer, Cell } from "recharts";

type AddictionLevel = "high" | "medium" | "low";

interface IntensityGaugeProps {
    addictionLevel: AddictionLevel;
    avgDailyUsageHours: number;
}

const getIntensityScore = (level: AddictionLevel, usage: number) => {
    const base = level === "high" ? 70 : level === "medium" ? 40 : 15;
    return Math.min(Math.round(base + Math.min((usage / 24) * 30, 30)), 100);
}

const getColor = (level: AddictionLevel) => level === "high" ? "#f87171" : level === "medium" ? "#facc15" : "#34d399";

const getLabel = (score: number) => score >= 70 ? "Critical" : score >= 40 ? "Moderate" : "Healthy";


const IntensityGauge = ({ addictionLevel, avgDailyUsageHours } : IntensityGaugeProps) => {
    const score = getIntensityScore(addictionLevel, avgDailyUsageHours);
    const color = getColor(addictionLevel)

    return (
        <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">Intensity Gauge</span>

            <div className="flex flex-col items-center flex-1 py-4">
                <ResponsiveContainer width="100%" height={220}>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" startAngle={180} endAngle={-180} data={[{ value: score }]} barSize={14}>
                        <RadialBar dataKey="value" cornerRadius={10} background={{ fill: "rgba(255,255,255,0.05)" }} isAnimationActive animationBegin={300} animationDuration={1200} animationEasing="ease-out">
                            <Cell fill={color} />
                        </RadialBar>
                    </RadialBarChart>
                </ResponsiveContainer>

                <div className="relative -mt-35 mb-16 flex flex-col items-center">
                    <span className="text-5xl font-bold text-gray-50">{score}</span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-widest" style={{ color }}>
                        {getLabel(score)}
                    </span>
                </div>
            </div>

            <p className="text-center text-xs text-gray-500 leading-relaxed">
                {addictionLevel === "high"
                ? "Your usage falls within the top 15% of high-risk digital behaviors."
                : addictionLevel === "medium"
                ? "Your usage shows moderate risk. Small changes can make a big difference."
                : "Your digital habits are within a healthy range. Keep it up!"}
            </p>
        </div>
    );
};

export default IntensityGauge;