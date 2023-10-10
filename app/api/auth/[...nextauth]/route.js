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
    NaverProvider({
      clientId: process.env.NaverClientID.toString(),
      clientSecret: process.env.NaverClientSecret.toString(),
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ profile }) {
      try {
        const checkMemberQuery = `SELECT * FROM users WHERE email='${profile.response.email}'`;
        const res = await executeQuery(checkMemberQuery);
        if (res.length === 0) {
          const insertQuery = `INSERT INTO users (email, name, picture, email_verified) VALUES ("${
            profile.response.email
          }", "${profile.response.name || "none"}", "${
            profile.response.picture || "none"
          }", ${profile.response.email_verified || false});`;
          await executeQuery(insertQuery);
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
