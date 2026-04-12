const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`animate-pulse rounded-xl bg-white/5 ${className}`} />
);

const AssessmentSkeleton = () => {
  return (
    <div className="min-h-screen px-2 py-24">
      {/* Header */}
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center flex flex-col items-center gap-4">
          <SkeletonBox className="h-10 w-72" />
          <SkeletonBox className="h-4 w-full max-w-2xl" />
          <SkeletonBox className="h-4 w-3/4 max-w-xl" />
        </div>
      </div>

      <div className="mt-48 max-w-5xl mx-auto">
        {/* Personal Info section */}
        <div className="mb-18">
          <SkeletonBox className="h-7 w-36 mb-8" />
          <div className="flex flex-col gap-5">
            {/* Age */}
            <div className="flex flex-col gap-1.5">
              <SkeletonBox className="h-4 w-10" />
              <SkeletonBox className="h-12" />
            </div>
            {/* Gender */}
            <div className="flex flex-col gap-1.5">
              <SkeletonBox className="h-4 w-16" />
              <SkeletonBox className="h-12" />
            </div>
            {/* Country */}
            <div className="flex flex-col gap-1.5">
              <SkeletonBox className="h-4 w-16" />
              <SkeletonBox className="h-12" />
            </div>
          </div>
        </div>

        {/* Usage Info section */}
        <div className="mb-18 mt-12">
          <SkeletonBox className="h-7 w-36 mb-8" />
          <div className="flex flex-col gap-5">
            {/* Platform */}
            <div className="flex flex-col gap-1.5">
              <SkeletonBox className="h-4 w-40" />
              <SkeletonBox className="h-12" />
            </div>
            {/* Daily usage */}
            <div className="flex flex-col gap-1.5">
              <SkeletonBox className="h-4 w-52" />
              <SkeletonBox className="h-12" />
            </div>
            {/* Sleep hours */}
            <div className="flex flex-col gap-1.5">
              <SkeletonBox className="h-4 w-44" />
              <SkeletonBox className="h-12" />
            </div>
          </div>
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <SkeletonBox className="h-11 w-24" />
        </div>
      </div>
    </div>
  );
};

export default AssessmentSkeleton;