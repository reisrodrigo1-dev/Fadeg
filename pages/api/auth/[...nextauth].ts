import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type ICredentials = {
  email: string;
  password: string;
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "email", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const response = await fetch(
          "https://apiecommerce.meucurso.com.br/api/studentlogin",

          {
            method: "POST",
            body: new URLSearchParams({ email, password }),
          }
        );
        const data = await response.json();

        return data;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
