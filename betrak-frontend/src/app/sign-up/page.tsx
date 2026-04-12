import { Suspense } from "react";
import SignUpPageClientSide from "./components/SignUpPageClientSide";
import SignUpPageSkeleton from "./components/SignUpPageSkeleton";

export default function SignUpPage () {
    return (
        <Suspense fallback={ <SignUpPageSkeleton /> }>
            <SignUpPageClientSide />
        </Suspense>
    )
}