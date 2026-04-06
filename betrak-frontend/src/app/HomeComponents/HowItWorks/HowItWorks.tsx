"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { BsClipboardData } from "react-icons/bs";
import { MdOutlinePsychology } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri";

const HowItWorksData = [
  {
    id: "01",
    icon: <BsClipboardData size={28} />,
    heading: "Answer Questions",
    paragraph:
      "Tell us about your daily habits how long you scroll, what platforms you use, how well you sleep and a few quick questions about how social media makes you feel.",
  },
  {
    id: "02",
    icon: <MdOutlinePsychology size={28} />,
    heading: "AI Analyzes Pattern",
    paragraph:
      "Our trained model looks at your usage behavior and mental health signals together to find patterns linked to social media dependency.",
  },
  {
    id: "03",
    icon: <RiMedalLine size={28} />,
    heading: "Get Result & Tips",
    paragraph:
      "Receive your addiction level High, Medium, or Low along with personalized suggestions to help you build healthier digital habits.",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-2 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <ScrollAnimate><h2 className="jakartaSans text-4xl font-bold text-gray-50">
            How It Works
          </h2></ScrollAnimate>
          <ScrollAnimate><p className=" mt-3 text-gray-400">
            Three simple steps to understand your relationship with social media.
          </p></ScrollAnimate>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {HowItWorksData.map((item, i) => (
            <ScrollAnimate key={i} direction="up" delay={i * 0.08}><div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-indigo-500/40 hover:bg-white/10"
            >
              {/* Step + Icon */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                  Step {item.id}
                </span>
                <span className="text-indigo-400">{item.icon}</span>
              </div>

              {/* Heading */}
              <h3 className="font-jakarta text-lg font-semibold text-gray-100">
                {item.heading}
              </h3>

              {/* Paragraph */}
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {item.paragraph}
              </p>
            </div></ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
