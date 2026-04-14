export async function submitReview(rating: number, comment: string) {
    try {
        const res = await fetch("/api/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({rating, comment})
        })

        const data = await res.json();
        if(!res.ok) return { success: false }
        return { success: true, data };
    } catch (error) {
        console.error(error)
        return { success: false };
    }
}