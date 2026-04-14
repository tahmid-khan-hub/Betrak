"use client"
import ScrollAnimate from "@/app/hooks/ScrollAnimate";

interface InputProfileProps {
  age: number;
  gender: string;
  country: string;
  most_used_platform: string;
  avg_daily_usage_hours: number;
  sleep_hours_per_night: number;
}


const InputProfile = ({ age, gender, country, most_used_platform, avg_daily_usage_hours, sleep_hours_per_night }:InputProfileProps) => {
    return (
    <ScrollAnimate delay={0.4}>
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-gray-900 px-8 py-7 mt-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-0">

          {/* Left — title */}
          <div className="md:w-56 shrink-0">
            <h3 className="jakartaSans text-lg font-bold text-gray-50">Your Input Profile</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed"> Data analyzed for your personalized addiction assessment. </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch bg-white/10 mx-8" />

          {/* Right — stats grid */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 md:flex-nowrap md:gap-x-10">
            {[
              { label: "Age", value: age },
              { label: "Gender", value: gender },
              { label: "Country", value: country },
              { label: "Platform", value: most_used_platform },
              { label: "Usage", value: `${avg_daily_usage_hours}h` },
              { label: "Sleep", value: `${sleep_hours_per_night}h` },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-500"> {stat.label} </span>
                <span className="text-lg font-semibold text-gray-100"> {stat.value} </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </ScrollAnimate>
    );
};

export default InputProfile;