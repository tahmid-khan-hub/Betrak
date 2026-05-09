"use client";
import { HistoryType } from "@/types/HistoryType";
import { useQuery } from "@tanstack/react-query";
import { TbChartLine } from "react-icons/tb";

const levelColor = {
  high: "bg-red-500/20 text-red-400 border-red-500/30",
  medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  low: "bg-green-500/20 text-green-400 border-green-500/30",
}

const ProgressChart = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["history"],
        queryFn: async () => {
            const res = await fetch ("/api/result/history")
            return res.json();
        }
    })

    const historyDataRows: HistoryType[] = data?.data ?? [];

    const ChartData = historyDataRows.map((row, i) => ({
        session: `#${i+1}`,
        "Daily Usage (hrs)": row.avg_daily_usage_hours,
        "Sleep (hrs)": row.sleep_hours_per_night,
        "Mental Health": row.mental_health_score,
        "Confidence (%)": Math.round(row.confidence),
        addiction_level: row.addiction_level,
        date: new Date(row.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short"}),
    }))
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {/*header  */}
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <TbChartLine className="text-indigo-400" size={20} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-50">Progress Over Time</h2>
                    <p className="text-xs text-gray-400">{historyDataRows.length} assessments tracked</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressChart;