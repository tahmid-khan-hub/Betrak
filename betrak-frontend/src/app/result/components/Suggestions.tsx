"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";

interface SuggestionsProps {
  suggestions: string[];
}

const Suggestions = ({ suggestions }: SuggestionsProps) => {
  return (
    <div className="mx-auto max-w-4xl mt-24">
      <ScrollAnimate delay={0.4}><h2 className="jakartaSans text-xl font-bold text-gray-50 mb-6">
        Personalized Suggestions
      </h2></ScrollAnimate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {suggestions.map((suggestion, i) => (
          <ScrollAnimate key={i} delay={i*0.08}><div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 hover:bg-gray-900 h-full"
          >
            {/* Number badge */}
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold bg-linear-to-r from-indigo-400 to-indigo-600 text-white">
              {i + 1}
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              {suggestion}
            </p>
          </div></ScrollAnimate>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
