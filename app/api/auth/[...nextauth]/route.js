import executeQuery from "@/libs/mariadb/excuteQuery";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GoogleClientID,
      clientSecret: process.env.GoogleClientSecret,
      authorization: {
        params: {
          redirect_uri: `${process.env.BASE_URL}/api/auth/callback/google`,
        },
        response_types: ["code"],
      },
    }),
    NaverProvider({
      clientId: process.env.NaverClientID,
      clientSecret: process.env.NaverClientSecret,
      authorization: {
        params: {
          redirect_uri: `${process.env.BASE_URL}/api/auth/callback/naver`,
        },
        response_types: ["code"],
      },
    }),
    KakaoProvider({
      clientId: process.env.KakaoClientID,
      clientSecret: process.env.KakaoClientSecret,
      authorization: {
        params: {
          redirect_uri: `${process.env.BASE_URL}/api/auth/callback/kakao`,
        },
        response_types: ["code"],
      },
    }),
  ],
  callbacks: {
    async signIn({ user }, account, profile) {
      const checkMemberQuery = `SELECT * FROM users WHERE email='${user.email}'`;
      const res = await executeQuery(checkMemberQuery);
      if (res.length === 0) {
        const insertQuery = `INSERT INTO users (email, email_verified, picture, name, role) values ("${user.email}", false, "${user.image}", "${user.name}", 0);`;
        await executeQuery(insertQuery);
      } else if (res.length === 1) {
        const updateQuery = `UPDATE users SET picture="${user.image}", name="${user.name}" WHERE email = "${user.email}";`;
        await executeQuery(updateQuery);
      }
      return true;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.error = token.error;
      return session;
    },
    async jwt({ token, user, account }) {
      if (account) {
        const checkMemberQuery = `SELECT * FROM users WHERE email='${user.email}'`;
        const res = await executeQuery(checkMemberQuery);
        if (res.length === 0) {
          return {
            accessToken: account.access_token,
            accessTokenExpires: account.expires_at,
            refreshToken: account.refresh_token,
            user: { ...user, role: 0 },
          };
        }
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at,
          refreshToken: account.refresh_token,
          user: { ...user, role: res[0].role },
        };
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
