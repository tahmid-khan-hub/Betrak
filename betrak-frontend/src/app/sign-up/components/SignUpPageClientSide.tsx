"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SignUpFormFields from "./SignUpFormFields";
import { FcGoogle } from "react-icons/fc";

const SignUpPageClientSide = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/"; // return to the last visited page or home page

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-2 overflow-x-hidden bg-[#0c121f]">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 w-full max-w-xl p-1 rounded-md mt-16"
      >
        <div className="bg-gray-900 w-full max-w-xl p-8 space-y-6 rounded-md mt-6">
          {/* Title */}
          <h2 className="jakartaSans text-3xl font-bold text-center pt-4 text-gray-50">
            Create Your Account
          </h2>
          <p className="text-center text-sm text-gray-400 -mt-2 mb-12">
            Sign up to track your social media habits and get personalized insights
          </p>
          
          {/* Form */}
          <SignUpFormFields callbackUrl={callbackUrl} />

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-400 text-sm">or continue with</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Google Login */}
          <Button
            onClick={() => signIn("google", { callbackUrl })}
            type="button"
            className=" bg-indigo-500/70 text-white hover:bg-indigo-600/70 py-6 btn-outline rounded-lg font-semibold text-[16px] w-full"
          >
            <FcGoogle />
            Sign up with Google
          </Button>

          {/* link of sign in page */}
          <p className="mb-4 mt-1 text-gray-50">
            Already have an account? Please Sign-in{" "}
            <Link className="text-indigo-500 hover:underline" href={"/sign-in"}>
              here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPageClientSide;
