import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { BiBrain } from "react-icons/bi";
import { LuBedDouble, LuTrendingDown, LuUsers } from "react-icons/lu";

const WhyItMattersData = [
  {
    icon: <BiBrain size={28} />,
    heading: "Mental Health Impact",
  },
  {
    icon: <LuBedDouble size={28} />,
    heading: "Disrupted Sleep",
  },
  {
    icon: <LuTrendingDown size={28} />,
    heading: "Loss of Productivity",
  },
  {
    icon: <LuUsers size={28} />,
    heading: "Young Adults Most at Risk",
  },
];

const WhyItMatters = () => {
  return (
    <section className="bg-gray-900">
      <div className="px-2 py-32 mx-auto max-w-5xl">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">

          {/* Left Side — Text */}
          <div className="flex flex-col gap-6">
            <div>
              <ScrollAnimate><h2 className="jakartaSans text-4xl font-bold text-gray-50">
                Why It Matters
              </h2></ScrollAnimate>
              <ScrollAnimate><p className="mt-3 text-gray-400">
                Social media addiction affects more than just screen time. 
                It impacts mental health, sleep quality, productivity and how people connect with others. Over time, these effects quietly shape daily habits and overall well-being.
              </p></ScrollAnimate>
            </div>

          </div>

          {/* Right Side — Icon Grid */}
          <div className="grid grid-cols-2 gap-4">
            {WhyItMattersData.map((item, i) => (
              <ScrollAnimate key={i} direction="right" delay={i * 0.08}><div
                key={item.heading}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:border-indigo-500/40 hover:bg-white/10 h-full"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  {item.icon}
                </div>
                <p className="font-jakarta text-sm font-semibold text-gray-100">
                  {item.heading}
                </p>
              </div></ScrollAnimate>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;