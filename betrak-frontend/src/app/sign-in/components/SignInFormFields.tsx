import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";
import { SuccessAlert } from "@/app/hooks/Alert/SucessAlert";
import { ErrorAlert } from "@/app/hooks/Alert/ErrorAlert";

interface SignInFormProps {
  callbackUrl: string;
}

const SignInFormFields = ({ callbackUrl }: SignInFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const signin = await signIn("credentials", {
      redirect: false, email, password, callbackUrl,
    });
      if (signin?.ok) {
        setAlertType("success");
        setTimeout(() => {
          window.location.href = signin.url || callbackUrl;
        }, 1500); // show alert for 1.5 seconds
      } else setAlertType("error") 
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-50">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-6 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-2 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
          />
          <span
            className="absolute text-xl right-3 top-5.5 -translate-y-1/2 cursor-pointer text-gray-200"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <Button type="submit"
          className="bg-indigo-500/70 text-white hover:bg-indigo-600/70 py-6 btn-outline rounded-lg font-semibold text-[16px] w-full mt-5"
        > Sign in </Button>
      </form>

      {/* alert */}
      <AnimatePresence>
        {alertType === "success" && 
        ( <SuccessAlert title="Welcome Back!" description="You have successfully signed in to your Betrak account." 
        onClose={() => setAlertType(null)} /> )}

        {alertType === "error" && 
        ( <ErrorAlert title="Sign In Failed" description="Incorrect email or password. Please try again." 
        onClose={() => setAlertType(null)} /> )}
      </AnimatePresence>
    </div>
  );
};

export default SignInFormFields;
