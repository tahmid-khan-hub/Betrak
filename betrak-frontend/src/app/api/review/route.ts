import { authOptions } from "@/lib/authOptions";
import pool from "@/lib/postgresql";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });

        const { rating, comment } = await req.json();

        if (!rating || rating < 1 || rating > 5) return NextResponse.json({ success: false, message: "Invalid rating" }, { status: 400 });
        if (!comment?.trim()) return NextResponse.json({ success: false, message: "Comment is required" }, { status: 400 });

        await pool.query(
            `INSERT INTO reviews (user_id, user_name, user_image, rating, comment) VALUES ($1, $2, $3, $4, $5)`,
            [session.user.id, session.user.name, session.user.image ?? null, rating, comment.trim()]
        )
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}

