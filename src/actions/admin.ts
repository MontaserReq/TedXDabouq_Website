"use server";

import { currentRole } from "@/lib/user";

const UserRole = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" };
};
