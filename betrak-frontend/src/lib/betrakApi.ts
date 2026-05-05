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
      answer_1: answers["1"],
      answer_2: answers["2"],
      answer_3: answers["3"],
    },
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    let message = "Prediction failed";
    try {
      const error = await res.json();
      const detail = error.detail;
      message =
        typeof detail === "string"
          ? detail
          : Array.isArray(detail)
            ? detail.map((d: { msg: string; loc: string[] }) => {
                const field = d.loc[d.loc.length - 1];
                return `${field}: ${d.msg}`;
              }).join(", ")
            : message;
    } catch {
      message = `Request failed with status ${res.status}`;
    }
    throw new Error(message);
  }

  return res.json();
}
