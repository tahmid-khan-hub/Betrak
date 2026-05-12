"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { questionOptions } from "./components/questionOptions";
import MentalHealthQuestionsSkeleton from "./components/MentalHealthQuestionsSkeleton";
import ErrorState from "./components/ErrorState"
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { getQuestions } from "@/app/api/getQuestions";
import { MentalHealthQuestionsPros, Question } from "@/types/MentalHealthQuestions";

const MentalHealthQuestions = ({ back, onFinish, isSubmitting, hasExistingAssessment }: MentalHealthQuestionsPros) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showWarning, setShowWarning] = useState(false);

  const { data: questions, isLoading, isError, refetch } = useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  const allAnswered = questions && questions.length > 0 && questions.every((q) => answers[q.id]);

  const handleFinish = () => {
    if (!allAnswered) return;
    if (hasExistingAssessment && !showWarning) {
      setShowWarning(true); // show warning first
      return;
    }
    onFinish(answers); // second click proceeds
  }

  if (isLoading) return <MentalHealthQuestionsSkeleton />;
  if (isError) return <ErrorState retry={refetch} />;
  return (
    <div className="flex flex-col gap-8">
      <ScrollAnimate delay={0.3}>
          <div>
            <h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">
              Reflect On Yourself
            </h2>
          </div>
        </ScrollAnimate>
      {questions?.map((q, i) => (
        <div key={q.id} className="flex flex-col gap-3">
          {/* show question */}
          <p className="text-sm font-medium text-gray-300">
            <span className="mr-2 text-indigo-400">{i + 1}.</span>
            {q.question}
          </p>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {questionOptions[i].map((option) => {
              const isSelected = answers[q.id] === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [q.id]: option.value,
                    }))
                  }
                  className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-500/20 text-indigo-300"
                      : "border-white/10 bg-white/5 text-gray-400 hover:border-indigo-500/40 hover:text-gray-200"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" onClick={back}
          className="rounded-xl border border-indigo-500 bg-white/5 px-8 py-5 text-sm font-medium text-gray-300 transition hover:bg-white/10"
        > Back </Button>
        <Button type="button" onClick={handleFinish}
          disabled={!allAnswered || isSubmitting}
          className="flex-1 rounded-xl bg-indigo-600 px-8 py-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
        > {isSubmitting ? "Analyzing..." : "Finish"} </Button>
      </div>
    </div>
  );
};

export default MentalHealthQuestions;
