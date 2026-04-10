"use client";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SignInFormFields from "./SignInFormFields";
import { FcGoogle } from "react-icons/fc";

const SignInPageClientSide = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
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
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-400 -mt-2 mb-12">
            Sign in to continue your journey with Betrak
          </p>

          {/* Form */}
          <SignInFormFields callbackUrl={callbackUrl} />

          {/* Google Login */}
          <Button
            onClick={() => signIn("google", { callbackUrl })}
            type="button"
            className=" bg-indigo-500/70 text-white hover:bg-indigo-600/70 py-6 btn-outline rounded-lg font-semibold text-[16px] w-full"
          >
            <FcGoogle />
            Sign in with Google
          </Button>

          {/* link of sign in page */}
          <p className="mb-4 mt-1 text-gray-50">
            New to this site? Sign-up{" "}
            <Link className="text-indigo-500 hover:underline" href={"/sign-up"}>
              here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInPageClientSide;
