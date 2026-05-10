"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { HistoryType } from "@/types/HistoryType";
import { TbChartLine } from "react-icons/tb";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, } from "recharts";
import ProgressChartEmpty from "./ProgressChartEmpty";

const levelColor = {
  high: "bg-red-500/20 text-red-400 border-red-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-green-500/20 text-green-400 border-green-500/30",
};

const ProgressChart = ({ historyData }:{ historyData:HistoryType[] }) => {

  const ChartData = historyData.map((row, i) => ({
    session: `#${i + 1}`,
    "Daily Usage (hrs)": row.avg_daily_usage_hours,
    "Sleep (hrs)": row.sleep_hours_per_night,
    "Mental Health": row.mental_health_score,
    "Confidence (%)": Math.round(row.confidence),
    addiction_level: row.addiction_level,
    date: new Date(row.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", }),
  }));

  if(historyData.length < 2) return <ProgressChartEmpty />;
  return (
    <ScrollAnimate delay={0.4}>
        <div className="mx-auto max-w-4xl mt-24 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {/*header  */}
            <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <TbChartLine className="text-indigo-400" size={20} />
            </div>
            <div>
                <h2 className="jakartaSans text-lg font-semibold text-gray-50"> Progress Over Time </h2>
                <p className="text-xs text-gray-400"> {historyData.length} assessments tracked </p>
            </div>
            </div>

            {/* addiction level badges per session */}
            <div className="flex flex-wrap gap-2 mb-6">
            {ChartData.map((data) => (
                <div key={data.session} className="flex flex-col items-center gap-1" >
                <span className="text-xs text-gray-500">{data.date}</span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border capitalize ${levelColor[data.addiction_level as keyof typeof levelColor]}`}
                >
                    {data.addiction_level}
                </span>
                </div>
            ))}
            </div>

            {/* line chart */}
            <div>
            <ResponsiveContainer width="100%" height={160}>
                <LineChart data={ChartData} margin={{ top: 4, right: 16, left: -16, bottom: 0 }}>
                <XAxis dataKey="session" tick={{ fill: "#9ca3af", fontSize: 12 }}/>
                <YAxis tick={{ fill: "#9ca3af", fontSize: 12 }} />
                <Tooltip
                    contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #ffffff15",
                    borderRadius: "8px",
                    }}
                    labelStyle={{ color: "#e5e7eb" }} itemStyle={{ color: "#9ca3af" }}
                />
                <Legend wrapperStyle={{ color: "#9ca3af", fontSize: "12px" }} />
                <Line type="monotone" dataKey="Daily Usage (hrs)" stroke="#818cf8" strokeWidth={2} dot={{ r: 4 }}/>
                <Line type="monotone" dataKey="Sleep (hrs)" stroke="#34d399" strokeWidth={2} dot={{ r: 4 }}/>
                <Line type="monotone" dataKey="Mental Health" stroke="#fb923c" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Confidence (%)" stroke="#a78bfa" strokeWidth={2} dot={{ r: 4 }} strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
        </div>
    </ScrollAnimate>
  );
};

export default ProgressChart;
