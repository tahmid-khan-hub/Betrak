import { Suspense } from "react";
import AssessmentContent from "./components/AssessmentContent";
import AssessmentSkeleton from "./components/AssessmentSkeleton";

const AssessmentPage = () => {
  return (
    <Suspense fallback={ <AssessmentSkeleton /> }>
      <AssessmentContent />
    </Suspense>
  );
};

export default AssessmentPage;
