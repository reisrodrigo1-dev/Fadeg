import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      StudentId?: number;
      LastOrderId?: number;
      Name?: string | null;
      Token?: string | null;
      CustomerId?: string | null;
      StudentAddress?: any;
    };
  }
}
