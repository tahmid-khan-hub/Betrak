const ProgressChartSkeleton = () => (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 animate-pulse">
        {/* header */}
        <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-white/10" />
            <div className="flex flex-col gap-2">
                <div className="w-40 h-4 rounded bg-white/10" />
                <div className="w-24 h-3 rounded bg-white/10" />
            </div>
        </div>
        {/* badges */}
        <div className="flex gap-3 mb-6">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                    <div className="w-10 h-3 rounded bg-white/10" />
                    <div className="w-14 h-5 rounded-full bg-white/10" />
                </div>
            ))}
        </div>
        {/* chart area */}
        <div className="w-full h-40 rounded-xl bg-white/5" />
    </div>
);

export default ProgressChartSkeleton;