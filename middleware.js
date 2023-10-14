import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  console.log("미들웨어가 보는 token을 출력함.", token);

  if (
    req.nextUrl.pathname.startsWith("/admin") &&
    (token.user.role !== 9 || !token)
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/not-admin";
    return NextResponse.redirect(url);
  } else if (
    (req.nextUrl.pathname.startsWith("/analysis") &&
      !req.nextUrl.pathname.includes("AAPL") &&
      !token) ||
    (req.nextUrl.pathname.startsWith("/transactionhistory") && !token)
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/not-a-member";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
