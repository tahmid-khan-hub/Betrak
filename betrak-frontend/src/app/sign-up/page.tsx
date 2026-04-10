import { Suspense } from "react";
import SignUpPageClientSide from "./components/SignUpPageClientSide";

export default function SignUpPage () {
    return (
        <Suspense fallback={<p>loading...</p>}>
            <SignUpPageClientSide />
        </Suspense>
    )
}