"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { FormData } from "@/types/FormData";
import { defaultFormData } from "@/types/formDefaults";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PersonalAndUsageInfo from "./PersonalAndUsageInfo/PersonalAndUsageInfo";
import MentalHealthQuestions from "./MentalHealthQuestions/MentalHealthQuestions";
import { submitAssessment } from "@/lib/betrakApi";
import { AnimatePresence } from "framer-motion";
import { SuccessAlert } from "@/app/hooks/Alert/SucessAlert";
import { ErrorAlert } from "@/app/hooks/Alert/ErrorAlert";
import useSessionForm from "@/app/hooks/useSessionForm";

const AssessmentContent = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData, clearForm] = useSessionForm<FormData>("betrak_form", defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null)
  const [errorMsg, setErrorMsg] = useState("");

  // keyof - TypeScript protecting from accidentally passing a wrong field name that doesn't exist in form
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFinish = async (answers: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      await submitAssessment(formData, answers);
      clearForm();
      setAlertType("success")
      router.push("/result");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
      setAlertType("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen px-2 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <ScrollAnimate delay={0.2}>
            <h1 className="jakartaSans text-4xl font-bold text-gray-50">
              Know Your{" "}
              <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
                Digital Habits
              </span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate delay={0.3}>
            <p className="max-w-3xl mx-auto mt-4 text-gray-400 leading-relaxed">
              Answer honestly across three sections covering your personal background, social media usage and mental well-being.
              Your responses are used solely to generate your personalized addiction assessment.
            </p>
          </ScrollAnimate>
        </div>
      </div>

      <div className="mt-48">
        <div className="max-w-5xl mx-auto">
          {/* step-1 : personal and uage info */}
          {step === 1 && <PersonalAndUsageInfo
          formData={formData} onChange={handleChange}
          next={() => setStep(2)} />}
          {/* step2 : mental health related questions */}
          {step === 2 && (
            <MentalHealthQuestions
              back={() => setStep(1)}
              onFinish={handleFinish} isSubmitting={isSubmitting} /> )}
        </div>
      </div>

      {/* alert*/}
      <AnimatePresence>
        {alertType === "success" && 
        ( <SuccessAlert title="Assessment Submitted Successfully" description="We've analyzed your digital habits and your personalized report is ready." 
        onClose={() => setAlertType(null)} /> )}
        {alertType === "error" && 
        ( <ErrorAlert title="Submission Failed" description={errorMsg}
        onClose={() => setAlertType(null)} /> )}
      </AnimatePresence>
    </div>
  );
};

export default AssessmentContent;
