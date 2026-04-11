interface SignInData {
    email: string;
    password: string;
}

export async function UserSignIN({ email, password }: SignInData): Promise<{ success: boolean }> {
    try {
        const res = await fetch("/api/auth/sign-in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        return { success: data.success };

    } catch (error) {
        console.error(error);
        return { success: false };
    }
}
