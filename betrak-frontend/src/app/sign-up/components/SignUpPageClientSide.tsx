"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SignUpFormFields from "./SignUpFormFields";

const SignUpPageClientSide = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/"; // return to the last visited page or home page

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex w-full items-center justify-center p-8 mb-11"
      >
        <div className="bg-gray-900 w-full max-w-md p-8 space-y-6 rounded-md mt-16">
          {/* Title */}
          <h2 className="jakartaSans text-3xl font-bold text-center pt-4 text-gray-50">
            Create Your Account
          </h2>
          <p className="text-center text-sm text-gray-50 mb-12">
            Sign up to track your social media habits and get personalized insights
          </p>
          
          {/* Form */}
          <SignUpFormFields callbackUrl={callbackUrl} />

          {/* Divider */}


          {/* Google Login */}
          <Button
            onClick={() => signIn("google", { callbackUrl })}
            type="button"
            className=" bg-indigo-500/70 text-white hover:bg-indigo-600/70 py-6 btn-outline rounded-lg font-semibold text-[16px] w-full"
          >
            <svg aria-label="Google logo"
              width="20" height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g> <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path> </g>
            </svg>
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
