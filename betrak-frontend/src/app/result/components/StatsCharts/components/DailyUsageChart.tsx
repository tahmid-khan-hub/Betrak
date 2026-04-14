"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

type AddictionLevel = "high" | "medium" | "low";

interface DailyUsageChartProps {
  addictionLevel: AddictionLevel;
  avgDailyUsageHours: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
}

const BarTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-gray-900 px-3 py-2 text-xs text-gray-200 shadow-lg">
      <p className="font-semibold">{label}</p>
      <p>{payload[0].value}h</p>
    </div>
  );
};

const DailyUsageChart = ({ addictionLevel, avgDailyUsageHours }: DailyUsageChartProps) => {
    const data = [
        { name: "Current", hours: avgDailyUsageHours },
        { name: "Healthy", hours: 2 },
    ];

    const currentColor = addictionLevel === "high" ? "#ef4444" : addictionLevel === "medium" ? "#eab308" : "#34d399";

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500"> Daily Usage vs Target </span>

            <div className="mt-4">
                <ResponsiveContainer width="100%" height={160}>
                    <BarChart data={data} barCategoryGap="40%">
                        <XAxis dataKey="name" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis hide domain={[0, 24]} />
                        <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                            <Bar dataKey="hours" radius={[6, 6, 0, 0]} isAnimationActive animationBegin={400} animationDuration={1000} animationEasing="ease-out">
                                <Cell fill={currentColor} />
                                <Cell fill="#2dd4bf" />
                            </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DailyUsageChart;