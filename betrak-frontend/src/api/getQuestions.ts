const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getQuestions() {
    const res = await fetch(`${BASE_URL}/api/v1/questions`)
    if (!res.ok) throw new Error("Failed to fetch questions");
    return res.json();
}