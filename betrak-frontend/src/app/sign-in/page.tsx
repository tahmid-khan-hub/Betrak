import { Suspense } from "react";
import SignInPageClientSide from "./components/SignInPageClientSide";

export default function SignInPage () {
    return (
        <Suspense fallback={<p>laoding....</p>}>
            <SignInPageClientSide />
        </Suspense>
    )
}