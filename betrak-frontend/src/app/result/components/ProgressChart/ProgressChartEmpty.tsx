import { TbChartLine } from "react-icons/tb";

const ProgressChartEmpty = () => (
  <div className="mx-auto max-w-4xl mt-24 ">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
          <TbChartLine className="text-indigo-400" size={20} />
        </div>
        <div>
          <h2 className="jakartaSans text-lg font-semibold text-gray-50">
            Progress Over Time
          </h2>
          <p className="text-xs text-gray-400">assessment tracked</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8 gap-2">
        <p className="text-sm text-gray-400">
          Complete one more assessment to unlock your progress chart.
        </p>
        <p className="text-xs text-gray-600">
          Your trends across sessions will appear here.
        </p>
      </div>
    </div>
  </div>
);

export default ProgressChartEmpty;
