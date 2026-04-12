"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import PersonalInfo from "./components/PersonalInfo";
import UsageInfo from "./components/UsageInfo";
import { Button } from "@/components/ui/button";
import { FormData } from "@/types/FormData";

interface PersonalAndUsageInfoProps {
  formData: FormData;
  onChange: (name: keyof FormData, value: string) => void;
  next: () => void;
}

const PersonalAndUsageInfo = ({ formData, onChange, next } : PersonalAndUsageInfoProps) => {
  const allFilled = Object.values(formData).every((val) => val !== "");

  return (
    <div>
      <div>
        {/* personal info form fields */}
        <ScrollAnimate delay={0.3}>
          <div className="mb-18">
            <h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">
              Personal Info
            </h2>
            <PersonalInfo formData={formData} onChange={onChange} />
          </div>
        </ScrollAnimate>

        {/* usage info form fields */}
        <ScrollAnimate delay={0.3}>
          <div className="mb-18">
            <h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">
              Usage Info
            </h2>
            <UsageInfo formData={formData} onChange={onChange} />
          </div>
        </ScrollAnimate>
      </div>

      {/* next button */}
      <div className="flex justify-end">
        <Button onClick={next} disabled={!allFilled}
         className=" bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-6 py-5 ml-4 text-md font-semibold">
          Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalAndUsageInfo;
