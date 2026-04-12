import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // if token exists then allow access
  if (!token) {
    const callbackUrl = pathname + req.nextUrl.search;
    return NextResponse.redirect(
      new URL(`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`, req.url)
    );
  }

  return NextResponse.next();
};

// Paths where authentication needed
export const config = {
  matcher: ["/assessment/:path*", "/result/:path*"],
};