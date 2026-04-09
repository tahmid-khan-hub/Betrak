const MentalHealthQuestionsSkeleton = () => {
  return (
    <div className="flex flex-col gap-8 animate-pulse">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          {/* Question line */}
          <div className="h-4 w-3/4 rounded bg-white/10"></div>

          {/* Options grid */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[1,2,3,4].map((_, j) => (
              <div
                key={j}
                className="h-10 rounded-xl border border-white/10 bg-white/5"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentalHealthQuestionsSkeleton;
