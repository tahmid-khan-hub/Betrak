"use client"
import WhatWeMeasureData from "./WhatWeMeasureData";

const WhatWeMeasure = () => {
  return (
    <section className="px-2 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="jakartaSans text-4xl font-bold text-gray-50">
            What We Measure
          </h2>
          <p className="mt-3 text-gray-400">
            Six key signals your answers provide to power the prediction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {WhatWeMeasureData.map((item) => (
            <div
              key={item.heading}
              className="flex-col md:flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-indigo-500/40 hover:bg-white/10 "
            >
              {/* Icon */}
              <div className="mt-0.5 mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-jakarta text-base font-semibold text-gray-100">
                  {item.heading}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeMeasure;