import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
      isTwoFactorEnabled: boolean;
      isOAuth: boolean;
    } & DefaultSession["user"];
  }
}
