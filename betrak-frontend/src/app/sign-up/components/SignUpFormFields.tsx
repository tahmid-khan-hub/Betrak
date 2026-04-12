import { ErrorAlert } from "@/app/hooks/Alert/ErrorAlert";
import { SuccessAlert } from "@/app/hooks/Alert/SucessAlert";
import { Button } from "@/components/ui/button";
import { UserSignUp } from "@/lib/auth/UserSignUP";
import { AnimatePresence } from "framer-motion";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface SignUpFormProps { callbackUrl: string; }

const SignUpFormFields = ({callbackUrl} : SignUpFormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{8,}$/; 

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name") as string;
        const image = formData.get("image") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        // if password does not match with given pattern, show error alert
        if (!passwordPattern.test(password)) {
            setErrorMessage("Password must be at least 8 characters and include: 1 uppercase, 1 lowercase and 1 special character.");
            setAlertType("error");
            return;
        }
        const res = await UserSignUp({ name, email, password, image }) // push user to db

        if(res.success){
            const signUp = await signIn("credentials", {
                redirect: false, email, password, callbackUrl
            });
            if (signUp?.ok) {
                setAlertType("success");
                form.reset();
                setTimeout(() => {
                    window.location.href = signUp.url || callbackUrl;
                }, 1500);
            } else {
                setErrorMessage("Registered but failed to sign in. Please try signing in manually.");
                setAlertType("error");
            }
        } else {
            setErrorMessage("User already exists or sign up failed. Please try again.");
            setAlertType("error");
        }
    }
    return (
    <div>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-50">
            <input type="text" name="name" required
            placeholder="Enter your Name"
            className="w-full p-3 mb-6 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <input type="text" name="image" placeholder="Enter your PhotoURL - (PhotoURL is optional)"
            className="w-full p-3 mb-6 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <input type="email" name="email" required
            placeholder="Enter your email"
            className="w-full p-3 mb-6 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <div className="relative">
            <input type={showPassword ? "text" : "password"}
                name="password" placeholder="Enter your password" required
                className="w-full p-3 mb-2 bg-gray-800 border border-gray-800 hover:border-indigo-500 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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

        {/* alert */}
        <AnimatePresence>
            {alertType === "success" && (
                <SuccessAlert title="Account Created!" description="You have successfully signed up. Redirecting you now..."
                onClose={() => setAlertType(null)}
                /> )}
            {alertType === "error" && (
                <ErrorAlert title="Sign Up Failed" description={errorMessage}
                onClose={() => setAlertType(null)}
                /> )}
        </AnimatePresence>
    </div>
    );
};

export default SignUpFormFields;