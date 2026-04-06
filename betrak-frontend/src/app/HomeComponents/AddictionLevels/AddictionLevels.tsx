"use client"
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import AddictionLevelsData, { colorMap } from "./AddictionLevelsData";

const AddictionLevels = () => {
  return (
    <section className="px-2 py-32">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <ScrollAnimate><h2 className="jakartaSans text-4xl font-bold text-gray-50">
            Addiction Levels
          </h2></ScrollAnimate>
          <ScrollAnimate><p className="mt-3 text-gray-400">
            Betrak classifies your result into one of three levels. Here is what each one means.
          </p></ScrollAnimate>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {AddictionLevelsData.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <ScrollAnimate key={i} direction="scale" delay={i * 0.08}><div
                key={item.level}
                className={`rounded-2xl border ${c.border} bg-white/5 p-6 transition-colors hover:bg-white/10 h-full`}
              >
                {/* Icon + Level Badge */}
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                    {item.icon}
                  </div>
                  <span className={`rounded-full ${c.badge} ${c.badgeText} px-3 py-1 text-xs font-bold uppercase tracking-widest`}>
                    {item.level}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>

                {/* Signs */}
                <ul className="mt-4 space-y-2">
                  {item.signs.map((sign) => (
                    <li key={sign} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div></ScrollAnimate>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AddictionLevels;