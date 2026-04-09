"use client";
import { getQuestions } from "@/api/getQuestions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { questionOptions } from "./components/questionOptions";
import MentalHealthQuestionsSkeleton from "./components/MentalHealthQuestionsSkeleton";
import ErrorState from "./components/ErrorState"

interface Question {
  id: string;
  question: string;
}

interface MentalHealthQuestionsPros {
  back: () => void;
  onFinish: (answers: Record<string, string>) => void;
}

const MentalHealthQuestions = ({ back, onFinish, }: MentalHealthQuestionsPros) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const { data: questions, isLoading, isError, refetch } = useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  const allAnswered = questions && questions.length > 0 && questions.every((q) => answers[q.id]);

  if (isLoading) return <MentalHealthQuestionsSkeleton />;
  if (isError) return <ErrorState retry={refetch} />;
  return (
    <div className="flex flex-col gap-8">
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
      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          onClick={back}
          className="rounded-xl border border-white/10 bg-white/5 px-8 py-5 text-sm font-medium text-gray-300 transition hover:bg-white/10"
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={() => allAnswered && onFinish(answers)}
          disabled={!allAnswered}
          className="flex-1 rounded-xl bg-indigo-600 px-8 py-5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Finish
        </Button>
      </div>
    </div>
  );
};

export default MentalHealthQuestions;
