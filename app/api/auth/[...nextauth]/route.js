import executeQuery from "@/libs/mariadb/excuteQuery";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GoogleClientID.toString(),
      clientSecret: process.env.GoogleClientSecret.toString(),
    }),
    // NaverProvider({
    //   clientId: process.env.NaverClientID.toString(),
    //   clientSecret: process.env.NaverClientSecret.toString(),
    // }),
  ],
  // callbacks: {
  // async jwt({ token, user, account }) {
  //   if (account) {
  //     const checkMemberQuery = `SELECT * FROM users WHERE email='${user.email}'`;
  //     const res = await executeQuery(checkMemberQuery);
  //     if (res.length === 0) {
  //       return {
  //         accessToken: account.access_token,
  //         accessTokenExpires: account.expires_at,
  //         refreshToken: account.refresh_token,
  //         user: user,
  //       };
  //     }
  //     return {
  //       accessToken: account.access_token,
  //       accessTokenExpires: account.expires_at,
  //       refreshToken: account.refresh_token,
  //       user: { ...user, role: res[0].role },
  //     };
  //   }
  //   return token;
  // },
  // async session({ session, token }) {
  //   session.user = token.user;
  //   session.accessToken = token.accessToken;
  //   session.accessTokenExpires = token.accessTokenExpires;
  //   session.error = token.error;
  //   return session;
  // },
  // },
  // },
});

export { handler as GET, handler as POST };

// https://www.dividendgrowthinvesting.co.kr/api/auth/callback/google
