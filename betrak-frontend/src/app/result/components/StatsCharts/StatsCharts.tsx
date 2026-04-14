"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import IntensityGauge from "./components/IntensityGauge";

type AddictionLevel = "high" | "medium" | "low";

interface StatsChartsProps {
  addictionLevel: AddictionLevel;
  avgDailyUsageHours: number;
  sleepHoursPerNight: number;
  confidence: number;
}

const StatsCharts = ({ addictionLevel, avgDailyUsageHours, sleepHoursPerNight }: StatsChartsProps) => {
  return (
    <ScrollAnimate delay={0.4}>
      <div className="mx-auto max-w-4xl mt-24">
        <div className="flex flex-col gap-4 md:flex-row">
          <IntensityGauge
            addictionLevel={addictionLevel}
            avgDailyUsageHours={avgDailyUsageHours}
          />
          
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default StatsCharts;
