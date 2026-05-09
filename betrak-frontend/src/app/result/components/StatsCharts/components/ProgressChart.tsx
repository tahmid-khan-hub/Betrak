"use client";
import { HistoryType } from "@/types/HistoryType";
import { useQuery } from "@tanstack/react-query";

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

    const historyData: HistoryType[] = data?.data ?? [];
    return (
        <div>
            
        </div>
    );
};

export default ProgressChart;