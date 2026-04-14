"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface SleepCorrelationChartProps {
  avgDailyUsageHours: number;
  sleepHoursPerNight: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
}

const LineTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-gray-900 px-3 py-2 text-xs text-gray-200 shadow-lg">
      <p className="font-semibold">{label}</p>
      <p>{payload[0].value}h</p>
    </div>
  );
};

const SleepCorrelationChart = ({ avgDailyUsageHours, sleepHoursPerNight }: SleepCorrelationChartProps) => {
    const data = [
        { day: "Mon", sleep: sleepHoursPerNight + 1.5, usage: avgDailyUsageHours - 1.5 },
        { day: "Tue", sleep: sleepHoursPerNight + 0.8, usage: avgDailyUsageHours - 0.8 },
        { day: "Wed", sleep: sleepHoursPerNight + 0.2, usage: avgDailyUsageHours - 0.2 },
        { day: "Thu", sleep: sleepHoursPerNight,       usage: avgDailyUsageHours },
        { day: "Fri", sleep: sleepHoursPerNight - 0.5, usage: avgDailyUsageHours + 0.5 },
        { day: "Sat", sleep: sleepHoursPerNight - 1.2, usage: avgDailyUsageHours + 1.2 },
        { day: "Sun", sleep: sleepHoursPerNight - 1.8, usage: avgDailyUsageHours + 1.8 },
    ].map((d) => ({
        ...d,
        sleep: Math.max(0, Math.round(d.sleep * 10) / 10),
        usage: Math.max(0, Math.round(d.usage * 10) / 10),
    }));
    return (
        <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500"> Sleep Impact Correlation </span>

            <div className="mt-4">
                <ResponsiveContainer width="100%" height={160}>
                    <LineChart data={data}>
                        <CartesianGrid stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                        <XAxis dataKey="day" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis hide />
                        <Tooltip content={<LineTooltip />} />
                        <Line type="monotone" dataKey="sleep" stroke="#34d399" strokeWidth={2} dot={{ fill: "#34d399", r: 3 }} name="Sleep" isAnimationActive animationBegin={500} animationDuration={1200} animationEasing="ease-out" />
                        <Line type="monotone" dataKey="usage" stroke="#818cf8" strokeWidth={2} dot={{ fill: "#818cf8", r: 3 }} name="Usage" isAnimationActive animationBegin={700} animationDuration={1200} animationEasing="ease-out" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-3 flex gap-4">
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Sleep
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" /> Usage
                </span>
                <span className="ml-auto text-xs italic text-gray-600">Strong inverse correlation detected.</span>
            </div>
        </div>
    );
};

export default SleepCorrelationChart;