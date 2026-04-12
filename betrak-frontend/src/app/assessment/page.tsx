import { Suspense } from "react";
import AssessmentContent from "./components/AssessmentContent";

const AssessmentPage = () => {
  return (
    <Suspense>
      <AssessmentContent />
    </Suspense>
  );
};

export default AssessmentPage;
