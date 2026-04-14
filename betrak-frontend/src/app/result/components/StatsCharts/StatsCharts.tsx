"use client";

type AddictionLevel = "high" | "medium" | "low";

interface StatsChartsProps {
    addictionLevel: AddictionLevel;
    avgDailyUsageHours: number;
    sleepHoursPerNight: number;
    confidence: number;
}

const StatsCharts = ({ addictionLevel, avgDailyUsageHours, sleepHoursPerNight } : StatsChartsProps) => {
    return (
        <div>
            
        </div>
    );
};

export default StatsCharts;