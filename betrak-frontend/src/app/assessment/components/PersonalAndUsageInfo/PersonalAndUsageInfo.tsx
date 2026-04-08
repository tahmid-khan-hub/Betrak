"use client";
import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import PersonalInfo from "./components/PersonalInfo";
import UsageInfo from "./components/UsageInfo";
import { Button } from "@/components/ui/button";

const PersonalAndUsageInfo = ({ next }: { next: () => void; }) => {
  return (
    <div>
      <div>
        {/* personal info form fields */}
        <ScrollAnimate delay={0.3}>
          <div className="mb-18">
            <h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">
              Personal Info
            </h2>
            <PersonalInfo />
          </div>
        </ScrollAnimate>

        {/* usage info form fields */}
        <ScrollAnimate delay={0.3}>
          <div className="mb-18">
            <h2 className="jakartaSans text-2xl text-gray-50 font-bold underline underline-offset-8 decoration-indigo-500 mb-8">
              Usage Info
            </h2>
            <UsageInfo />
          </div>
        </ScrollAnimate>
      </div>

      {/* next button */}
      <div className="flex justify-end">
        <Button onClick={next} className=" bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-6 py-5 text-md font-semibold">
          Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalAndUsageInfo;
