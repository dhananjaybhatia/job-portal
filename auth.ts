import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [GitHub],
    secret: process.env.NEXTAUTH_SECRET,
});

export { auth, handlers, signIn, signOut };

