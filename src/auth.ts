import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [GitHub, Google],
  basePath: "/auth",
  secret: "7Mms/dhgqEQLv3SxE5VXBpDIXlXy5LQoPVJVJOJq+bs=",
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   console.log("redirect", url, baseUrl);
    //   // this place is where you can redirect the user to a different page while they are signing in or signing out
    //   return baseUrl;
    // },
  },
});
