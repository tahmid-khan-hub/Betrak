"use client";
import { FormData } from "@/types/FormData";
import { defaultFormData } from "@/types/formDefaults";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AssessmentContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 1;

  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToStep = (stepNumber: number) => {
    router.push(`/assessment?step=${stepNumber}`);
  };
  return <div></div>;
};

export default AssessmentContent;
