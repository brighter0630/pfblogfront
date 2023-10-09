import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GoogleClientID.toString(),
      clientSecret: process.env.GoogleClientSecret.toString(),
    }),
    NaverProvider({
      clientId: process.env.NaverClientID,
      clientSecret: process.env.NaverClientSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
