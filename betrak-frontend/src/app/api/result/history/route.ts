import { authOptions } from "@/lib/authOptions";
import pool from "@/lib/postgresql";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json( { success: false, message: "Unauthorized" }, { status: 401 } );

    try {
        const result = await pool.query(`
        SELECT addiction_level, confidence, avg_daily_usage_hours,
        sleep_hours_per_night, mental_health_score, created_at
        FROM user_predictions
        WHERE user_id = $1
        ORDER BY created_at ASC`,
        [session.user.id] );

        if (result.rows.length === 0) return NextResponse.json( { success: false, message: "No result found" }, { status: 404 } );

        return NextResponse.json({ success: true, data: result.rows[0] });

    } catch (error) {
        console.error("User result history not found:", error);
        return NextResponse.json( { success: false, message: "Internal server error" }, { status: 500 } );
    }
}