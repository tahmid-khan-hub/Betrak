import { Suspense } from "react";
import SignInPageClientSide from "./components/SignInPageClientSide";
import SignInPageSkeleton from "./components/SignInPageSkeleton";

export default function SignInPage () {
    return (
        <Suspense fallback={ <SignInPageSkeleton /> }>
            <SignInPageClientSide />
        </Suspense>
    )
}