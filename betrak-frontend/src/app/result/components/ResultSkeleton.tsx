const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-xl bg-white/5 ${className}`} />
);

const ResultSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-12 mt-24 flex flex-col items-center gap-4">
        <SkeletonBox className="h-7 w-48 rounded-full" />
        <SkeletonBox className="h-10 w-80" />
        <SkeletonBox className="h-4 w-full max-w-2xl" />
        <SkeletonBox className="h-4 w-3/4 max-w-xl" />
      </div>

      <div className="mx-auto max-w-4xl space-y-6 px-2">
        {/* AddictionLevelCard — 3 stat columns */}
        <div className="px-8 py-8 mt-24">
            <div className="flex flex-col items-center divide-y divide-white/10 md:flex-row md:divide-y-0 md:divide-x md:justify-center">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center gap-3 px-12 py-6 md:py-0">
                <SkeletonBox className="h-3 w-24" />
                <SkeletonBox className="h-8 w-20" />
                </div>
            ))}
            </div>
            <SkeletonBox className="mx-auto mt-8 h-3 w-96" />
        </div>

        {/* StatsCharts — 1:2 layout */}
        <div className="flex flex-col gap-4 md:flex-row mt-24">
          {/* Gauge — big left */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:w-1/2">
            <SkeletonBox className="h-3 w-32 mb-6" />
            <SkeletonBox className="mx-auto h-48 w-48 rounded-full" />
            <SkeletonBox className="mx-auto mt-6 h-3 w-56" />
            <SkeletonBox className="mx-auto mt-2 h-3 w-40" />
          </div>
          {/* Two charts stacked right */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <SkeletonBox className="h-3 w-36 mb-4" />
              <SkeletonBox className="h-40 w-full" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <SkeletonBox className="h-3 w-44 mb-4" />
              <SkeletonBox className="h-40 w-full" />
            </div>
          </div>
        </div>

        {/* Progress chart */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3 mb-6">
            <SkeletonBox className="w-9 h-9 rounded-lg" />
            <div className="flex flex-col gap-2">
              <SkeletonBox className="w-40 h-4" />
              <SkeletonBox className="w-24 h-3" />
            </div>
          </div>
          <div className="flex gap-3 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <SkeletonBox className="w-10 h-3" />
                <SkeletonBox className="w-14 h-5 rounded-full" />
              </div>
            ))}
          </div>
          <SkeletonBox className="w-full h-40" />
        </div>

        {/* InputProfile */}
        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-7 my-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex flex-col gap-2 md:w-56">
              <SkeletonBox className="h-5 w-36" />
              <SkeletonBox className="h-3 w-48" />
              <SkeletonBox className="h-3 w-40" />
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-5 md:flex-nowrap">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <SkeletonBox className="h-3 w-12" />
                  <SkeletonBox className="h-5 w-16" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suggestions cards */}
        <div>
          <SkeletonBox className="h-6 w-48 mb-6" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
                <SkeletonBox className="h-8 w-8 rounded-lg" />
                <SkeletonBox className="h-3 w-full" />
                <SkeletonBox className="h-3 w-4/5" />
                <SkeletonBox className="h-3 w-3/5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSkeleton;