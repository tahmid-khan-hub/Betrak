export async function getResultData () {
    try {
        const res = await fetch("/api/result", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        })

        const data = await res.json();
        return { success: true, data };
    } catch (error) {
        console.error(error)
        return { success: false, }
    }
}