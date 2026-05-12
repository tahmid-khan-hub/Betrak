export interface Question {
  id: string;
  question: string;
}

export interface MentalHealthQuestionsPros {
  back: () => void;
  onFinish: (answers: Record<string, string>) => void;
  isSubmitting?: boolean;
  lastAssessmentDate?: string;
}
