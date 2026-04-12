import { FormData } from "@/types/FormData";
import { getSession } from "next-auth/react";

export interface PredictionResult {
  addiction_level: string;
  confidence: number;
  suggestions: string[];
  mental_health_score: number;
  created_at: string;
}

export async function submitAssessment(
  formData: FormData,
  answers: Record<string, string>,
): Promise<PredictionResult> {
  const session = await getSession();

  const payload = {
    user_id: session?.user?.id,
    age: Number(formData.age),
    gender: formData.gender,
    country: formData.country,
    avg_daily_usage_hours: Number(formData.avg_daily_usage_hours),
    most_used_platform: formData.most_used_platform,
    sleep_hours_per_night: Number(formData.sleep_hours_per_night),
    mental_health_answers: {
      answer_1: answers["q1"],
      answer_2: answers["q2"],
      answer_3: answers["q3"],
    },
  };

  const res = await fetch("http://localhost:8000/api/v1/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Prediction failed");
  }

  return res.json();
}
