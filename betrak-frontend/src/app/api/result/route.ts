import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import pool from "@/lib/postgresql";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json( { success: false, message: "Unauthorized" }, { status: 401 } );

    const result = await pool.query(
      `SELECT * FROM user_predictions  WHERE user_id = $1  ORDER BY created_at DESC LIMIT 1`,
      [session.user.id],
    );

    if (result.rows.length === 0) return NextResponse.json( { success: false, message: "No result found" }, { status: 404 } );
    
    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json( { success: false, message: "Internal server error" }, { status: 500 } );
  }
}
