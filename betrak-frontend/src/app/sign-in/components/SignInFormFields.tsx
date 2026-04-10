import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface SignInFormProps { callbackUrl: string; }

const SignInFormFields = ({ callbackUrl }: SignInFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form className="space-y-4 text-gray-50">
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

        <Button
          type="submit"
          className="bg-indigo-500/70 text-white hover:bg-indigo-600/70 py-6 btn-outline rounded-lg font-semibold text-[16px] w-full mt-5"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default SignInFormFields;
