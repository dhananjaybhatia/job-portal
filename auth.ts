// lib/auth.ts or auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github"; // or any other provider

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
    secret: process.env.NEXTAUTH_SECRET,
});
  