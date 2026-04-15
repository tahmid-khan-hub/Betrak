"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TbClipboardOff } from "react-icons/tb";

const NoResultFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-12">
      <div className="w-18 h-18 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
        <TbClipboardOff size={32} className="text-indigo-500" />
      </div>
      <h2 className="jakartaSans text-4xl font-bold text-gray-50 mb-5">
        No assessment
        <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
          {" "}
          results yet
        </span>
      </h2>
      <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
        Complete the assessment first to view your personalized digital wellness report.
      </p>
      <Link href="/assessment">
        <Button className="inline-flex items-center gap-2 px-6 py-5 rounded-lg bg-indigo-500/70 text-white hover:bg-indigo-600/70 text-sm font-medium transition-colors">
          Take the assessment
        </Button>
      </Link>
    </div>
  );
};

export default NoResultFound;
