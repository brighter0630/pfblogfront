import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (token.user.role !== 9) {
      const url = req.nextUrl.clone();
      url.pathname = "/not-admin";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (
    req.nextUrl.pathname.startsWith("/analysis") &&
    !req.nextUrl.pathname.includes("AAPL")
  ) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/not-a-member";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/transactionhistory")) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/not-a-member";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
}
