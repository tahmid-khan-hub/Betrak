"use client"
import Dropdown from "@/app/hooks/Dropdown";
import { FormData } from "@/types/FormData";
interface UsageInfoProps {
  formData: FormData;
  onChange: (name: keyof FormData, value: string) => void;
}

const platforms = [
    "Instagram",
    "TikTok",
    "Twitter",
    "Facebook",
    "YouTube",
    "Snapchat",
];

const UsageInfo = ({ formData, onChange }: UsageInfoProps) => {
    return (
        <form className="flex flex-col gap-5">

            {/* most Used Platform */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                    Most Used Platform
                </label>
                <Dropdown name="most_used_platform" options={platforms} placeholder="Select a platform" />
            </div>

            {/* Average Daily Usage Hours */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                    Average Daily Usage Hours
                </label>
                <input
                    type="number"
                    name="avg_daily_usage_hours"
                    min={0}
                    max={24}
                    placeholder="Enter hours per day"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-500 outline-none transition focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
            </div>

            {/* Sleep Hours Per Night */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-300">
                    Sleep Hours Per Night
                </label>
                <input
                    type="number"
                    name="sleep_hours_per_night"
                    min={0}
                    max={24}
                    placeholder="Enter hours of sleep"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-100 placeholder-gray-500 outline-none transition focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
            </div>

        </form>
    );
};

export default UsageInfo;
