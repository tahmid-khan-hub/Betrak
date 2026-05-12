const LastPredictionSkeleton = () => (
  <div className="mx-auto mt-6 max-w-xl flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 animate-pulse">
    <div className="flex flex-col items-start gap-2">
      <div className="h-3 w-24 rounded bg-white/10" />
      <div className="h-4 w-32 rounded bg-white/10" />
    </div>
    <div className="flex items-center gap-3">
      <div className="h-6 w-16 rounded-full bg-white/10" />
      <div className="h-3 w-20 rounded bg-white/10" />
    </div>
  </div>
);

export default LastPredictionSkeleton;
