import { Button } from "@/components/ui/button";

const ErrorState = ({ retry }: { retry?: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      
      <div className="flex h-18 w-18 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xl font-bold">
        !
      </div>

      <h2 className="jakartaSans text-lg font-semibold text-gray-200">
        Something went wrong
      </h2>

      <p className="max-w-sm text-sm text-gray-400">
        We couldn’t load the questions. Please try again.
      </p>

      {retry && (
        <Button
          onClick={retry}
          className="mt-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;