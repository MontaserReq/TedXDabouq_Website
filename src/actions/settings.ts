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

  // إذا كان المستخدم يستخدم OAuth، قم بتعيين قيم معينة إلى undefined لتجنب التحديث.
  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  // التحقق من تغيير البريد الإلكتروني
  if (values.email && typeof values.email === 'string' && values.email !== user.email) {
    try {
      const existingUser = await getUserByEmail(values.email);

      if (existingUser && existingUser.id !== user.id) {
        return { error: "Email already in use" };
      }

      const verificationToken = await generateVerficationToken(values.email);
      await sendVereficationEmail(verificationToken.email, verificationToken.token);

      return { success: "Email changed, please verify your email" };
    } catch (error) {
      console.error("Error changing email:", error);
      return { error: "An error occurred while changing email." };
    }
  } else if (values.email && typeof values.email !== 'string'){
      return {error : "Email must be a string."};
  }

  // التحقق من تغيير كلمة المرور
  if (values.newPassword && values.password && dbUser.password) {
    if(typeof values.newPassword !== 'string'){
        console.error("values.newPassword is not a string");
        return {error: "Invalid new password format."};
    }
  try {
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
  } catch (error) {
    console.error("Error changing password:", error);
    return { error: "An error occurred while changing password." };
  }
}

  // تحديث بيانات المستخدم في قاعدة البيانات
  try {
    await db.user.update({
      where: { id: dbUser.id },
      data: {
        ...values,
      },
    });

    return { success: "Settings Updated!" };
  } catch (error) {
    console.error("Error updating settings:", error);
    return { error: "An error occurred while updating settings." };
  }
};