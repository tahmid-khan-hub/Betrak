import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface SignUpFormProps { callbackUrl: string; }

const SignUpFormFields = ({callbackUrl} : SignUpFormProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/; // password pattern

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-50">
            <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="w-full p-3 mb-6 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required
            />
            <input
            type="text"
            name="image"
            placeholder="Enter your PhotoURL - (PhotoURL is optional)"
            className="w-full p-3 mb-6 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
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
                onClick={() => setShowPassword(!showPassword)} >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            </div>
            
            <p className="text-sm text-gray-400 mb-8">Password must be at least 8 characters and include: 1 uppercase letter, 1 lowercase letter and 1 special character</p>

            <Button type="submit" className="bg-indigo-500/70 text-white hover:bg-indigo-600/70 py-6 btn-outline rounded-lg font-semibold text-[16px] w-full mt-5">
            Sign up
            </Button>
        </form>
    </div>
    );
};

export default SignUpFormFields;