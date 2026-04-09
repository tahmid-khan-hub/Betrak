"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import PersonalInfo from "./components/PersonalInfo";
import UsageInfo from "./components/UsageInfo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { defaultFormData } from "./components/formDefaults";
import { FormData } from "@/types/FormData";

const PersonalAndUsageInfo = ({ next }: { next: () => void; }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const allFilled = Object.values(formData).every((val) => val !== "");

  // keyof - TypeScript protecting from accidentally passing a wrong field name that doesn't exist in form
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <div>
        {/* personal info form fields */}
        <ScrollAnimate delay={0.3}>
          <div className="mb-18">
            <h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">
              Personal Info
            </h2>
            <PersonalInfo formData={formData} onChange={handleChange} />
          </div>
        </ScrollAnimate>

        {/* usage info form fields */}
        <ScrollAnimate delay={0.3}>
          <div className="mb-18">
            <h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">
              Usage Info
            </h2>
            <UsageInfo formData={formData} onChange={handleChange} />
          </div>
        </ScrollAnimate>
      </div>

      {/* next button */}
      <div className="flex justify-end">
        <Button onClick={next} disabled={!allFilled}
         className=" bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-6 py-5 text-md font-semibold">
          Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalAndUsageInfo;
