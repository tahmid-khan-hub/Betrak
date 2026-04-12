import ScrollAnimate from "../hooks/ScrollAnimate";

const ResultPage = () => {
  return (
    <div className="min-h-screen">
      <div className="mb-12 mt-24 text-center">
        <ScrollAnimate delay={0.2}>
          <h1 className="jakartaSans text-4xl font-bold text-gray-50">
            Your Digital{" "}
            <span className="bg-linear-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
            Wellness Report
            </span>{" "}
          </h1>
        </ScrollAnimate>
        <ScrollAnimate delay={0.3}>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400 leading-relaxed">
            Based on your responses, our model has assessed your current relationship with social media. 
            Review your results below and explore personalized suggestions to help you build healthier digital habits.
          </p>
        </ScrollAnimate>
      </div>
    </div>
  );
};

export default ResultPage;
