"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { SettingsSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import { generateVerficationToken } from "@/lib/tokens";
import { sendVereficationEmail } from "@/lib/mail";
import bcryptjs from "bcryptjs";
import { currentUser } from "@/lib/user";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();

  if (!user || !user.id) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const ExistingUser = await getUserByEmail(values.email);

    if (ExistingUser && ExistingUser.id !== user.id) {
      return { error: "Email already in use" };
    }

    const verficationToken = await generateVerficationToken(values.email);
    await sendVereficationEmail(verficationToken.email, verficationToken.token);

    return { success: "Email changed, please verify your email" };
  }

  if (values.newPassword && values.password && dbUser.password) {
    const passwordsMatch = await bcryptjs.compare(
      values.password,
      dbUser.password
    );

    if (!passwordsMatch) {
      return { error: "Invalid password" };
    }

    const hashedPassword = await bcryptjs.hash(values.newPassword, 10);

    values.password = hashedPassword;
    values.newPassword = undefined;
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  });

  return { success: "Settings Updated!" };
};
