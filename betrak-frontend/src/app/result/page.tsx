"use client"
import { useQuery } from "@tanstack/react-query";
import ScrollAnimate from "../hooks/ScrollAnimate";
import { getResultData } from "@/lib/resultData";
import AddictionLevelCard from "./components/AddictionLevelCard";
import InputProfile from "./components/InputProfile";
import StatsCharts from "./components/StatsCharts/StatsCharts";
import Suggestions from "./components/Suggestions";
import { BsShieldFillCheck } from "react-icons/bs";
import ResultSkeleton from "./components/ResultSkeleton";
import UserReview from "./components/UserReview";
import NoResultFound from "./components/NoResultFound/NoResultFound";
import ProgressChart from "./components/StatsCharts/components/ProgressChart";

const ResultPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["result"],
    queryFn: getResultData,
  })
  if(isLoading) return <ResultSkeleton />;

  if (!data?.data.data) return <NoResultFound />; // without taking the assessment, user can not see the result
  const predictionResult = data?.data.data;

  return (
    <div className="min-h-screen ">
      <div className="mb-12 mt-24 text-center">
        {/* Badge */}
        <ScrollAnimate delay={0.08}>
          <div className="max-w-62.5 mx-auto flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 mb-3">
            <BsShieldFillCheck className="text-indigo-500/85 mr-2 animate-pulse" size={14} />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300"> Assessment Complete </span>
          </div>
        </ScrollAnimate>
        {/* heading & paragraph */}
        <ScrollAnimate delay={0.2}>
          <h1 className="jakartaSans text-4xl font-bold text-gray-50">
            Your Digital{" "}
            <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
            Wellness Report
            </span>{" "}
          </h1>
        </ScrollAnimate>
        <ScrollAnimate delay={0.3}>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400 leading-relaxed">
            Based on your responses, our model has assessed your current relationship with social media. 
            Review your results below and explore personalized suggestions to help you build healthier digital habits.
          </p>
        </ScrollAnimate>
      </div>
      {/* addiction level card */}
      <div>
        <AddictionLevelCard addictionLevel={predictionResult.addiction_level} confidence={Math.round(predictionResult.confidence)} mentalHealthScore={predictionResult.mental_health_score} />
      </div>
      {/* Stats charts */}
      <div>
        <StatsCharts addictionLevel={predictionResult.addiction_level} avgDailyUsageHours={predictionResult.avg_daily_usage_hours} 
        sleepHoursPerNight={predictionResult.sleep_hours_per_night} confidence={predictionResult.confidence} />
      </div>
      {/* input profile */}
      <div>
        <InputProfile
        age={predictionResult.age}
        gender={predictionResult.gender}
        country={predictionResult.country}
        most_used_platform={predictionResult.most_used_platform}
        avg_daily_usage_hours={predictionResult.avg_daily_usage_hours}
        sleep_hours_per_night={predictionResult.sleep_hours_per_night}
        />
      </div>
      {/* suggestions */}
      <div>
        <Suggestions suggestions={predictionResult.suggestions} />
      </div>
      {/* user review */}
      <div>
        <UserReview />
      </div>
    </div>
  );
};

export default ResultPage;
