"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import IntensityGauge from "./components/IntensityGauge";
import DailyUsageChart from "./components/DailyUsageChart";
import SleepCorrelationChart from "./components/SleepCorrelationChart";
import ProgressChart from "./components/ProgressChart";

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
          <div className="flex flex-col gap-4 md:w-1/2">
            <DailyUsageChart addictionLevel={addictionLevel} avgDailyUsageHours={avgDailyUsageHours} />
            <SleepCorrelationChart avgDailyUsageHours={avgDailyUsageHours} sleepHoursPerNight={sleepHoursPerNight} />
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <ProgressChart />
          </div>
        </div>
      </div>
    </ScrollAnimate>
  );
};

export default StatsCharts;
