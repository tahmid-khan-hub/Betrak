"use client";
import ScrollAnimate from "../hooks/ScrollAnimate";
import { useRouter, useSearchParams } from "next/navigation";
import PersonalAndUsageInfo from "./components/PersonalAndUsageInfo/PersonalAndUsageInfo";
import MentalHealthQuestions from "./components/MentalHealthQuestions/MentalHealthQuestions";

const AssessmentPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const step = Number(searchParams.get("step")) || 1;

  const goToStep = (stepNumber: number) => {
    router.push(`/assessment?step=${stepNumber}`);
  };
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

      <div className="mt-48">
        <div className="max-w-5xl mx-auto">
          {/* step-1 : personal and uage info */}
          {step === 1 && <PersonalAndUsageInfo next={() => goToStep(2)} />}
          {/* step2 : mental health related questions */}
          {step === 2 && <MentalHealthQuestions back={() => goToStep(1)} onFinish={() => alert("Finished!")} />}
        </div>

      </div>
    </div>
  );
};

export default AssessmentPage;
