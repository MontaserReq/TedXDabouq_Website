"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerficationToken } from "@/lib/tokens";
import { sendVereficationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already exists!" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  //TODO:Send verification email token

  const verficationToken = await generateVerficationToken(email);
  await sendVereficationEmail(verficationToken.email, verficationToken.token);

  return {
    success: "Confirmation email sent!",
  };
};
