export async function submitReview(rating: number, comment: string) {
    try {
        const res = await fetch("/api/review", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({rating, comment})
        })

        if(!res.ok) return { success: false }
        const data = await res.json();
        return { success: true, data };
    } catch (error) {
        console.error(error)
        return { success: false };
    }
}

export async function getUserReviews() {
    try {
        const res = await fetch("/api/review", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        if(!res.ok) return { success: false }
        const data = await res.json();

        return { success: true, data };
    } catch (error) {
        console.error(error)
        return { success: false };
    }
}