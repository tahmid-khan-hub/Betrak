import ScrollAnimate from "@/app/hooks/ScrollAnimate";

const NoLastPrediction = () => {
  return (
    <div>
      <ScrollAnimate delay={0.4}>
        <div className="mx-auto mt-6 max-w-xl flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
          <span className="text-sm text-gray-400">
            No previous assessment found. Complete the form below to get your first result.
          </span>
        </div>
      </ScrollAnimate>
    </div>
  );
};

export default NoLastPrediction;
