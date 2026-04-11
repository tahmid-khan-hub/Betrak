interface SignUpData {
    name: string;
    email: string;
    password: string;
    image?: string;
}

export async function UserSignUp({ name, email, password, image }: SignUpData): Promise<{ success: boolean }> {
    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, image }),
        });

        const data = await res.json();
        return { success: data.success };

    } catch (error) {
        console.error(error);
        return { success: false };
    }
}
