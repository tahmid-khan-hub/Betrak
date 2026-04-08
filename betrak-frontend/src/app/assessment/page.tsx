"use client";
import ScrollAnimate from "../hooks/ScrollAnimate";
import PersonalInfo from "./components/PersonalInfo";
import UsageInfo from "./components/UsageInfo";

const AssessmentPage = () => {
  return (
    <div className="min-h-screen px-2 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <ScrollAnimate delay={0.2}><h1 className="jakartaSans text-4xl font-bold text-gray-50">
            Know Your{" "}
            <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
              Digital Habits
            </span>
          </h1></ScrollAnimate>
          <ScrollAnimate delay={0.3}><p className="max-w-3xl mx-auto mt-4 text-gray-400 leading-relaxed">
            Answer honestly across three sections covering your personal background, social media usage and mental well-being. Your
            responses are used solely to generate your personalized addiction assessment.
          </p></ScrollAnimate>
        </div>

      </div>
      {/* personal info */}
      <div className="mt-48">
        <div className="max-w-5xl mx-auto">
          {/* personal info form fields */}
          <ScrollAnimate delay={0.3}><div className="mb-18"><h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">Personal Info</h2>
          <PersonalInfo /></div></ScrollAnimate>

          {/* usage info form fields */}
          <ScrollAnimate delay={0.3}><div><h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">Usage Info</h2>
          <UsageInfo /></div></ScrollAnimate>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;
