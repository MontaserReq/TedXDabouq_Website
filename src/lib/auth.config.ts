import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import bcryptjs from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db } from "./db";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcryptjs.compare(password, user.password);

          if (passwordMatch) {
            await db.user.update({
              where: { email },
              data: {
                failedLoginAttempts: 0,
                lockoutUntil: null,
              },
            });
            return user;
          }

          const updatedFailedAttempts = user.failedLoginAttempts + 1;

          let lockoutTime = null;
          if (updatedFailedAttempts >= 5 && updatedFailedAttempts < 10) {
            lockoutTime = new Date(Date.now() + 30 * 1000);
          } else if (
            updatedFailedAttempts >= 10 &&
            updatedFailedAttempts < 15
          ) {
            lockoutTime = new Date(Date.now() + 2 * 60 * 1000);
          } else if (updatedFailedAttempts >= 15) {
            lockoutTime = new Date(Date.now() + 10 * 60 * 1000);
          }

          await db.user.update({
            where: { email },
            data: {
              failedLoginAttempts: updatedFailedAttempts,
              lockoutUntil: lockoutTime,
            },
          });

          throw new Error(
            `Invalid credentials! ${
              lockoutTime ? "Account is temporarily locked." : ""
            }`
          );
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
