import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if(!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized"}, { status: 401 });

    // get the data from backend - v1/predict/latest
    const res = await fetch(`http://localhost:8000/api/v1/predict/latest?user_id=${session.user.id}`, {
        method: "GET", 
        headers: { "Content-Type": "application/json" }
    })

    if(!res.ok) return NextResponse.json({ success: false, message: "No result data found." }, { status: res.status });

    const data = await res.json();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json( { success: false, message: "Internal server error" }, { status: 500 }, );
  }
}
