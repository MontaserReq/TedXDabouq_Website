"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/user";
import { SponsorSchema } from "@/schemas";
import * as z from "zod";

export const createSponsor = async (values: z.infer<typeof SponsorSchema>) => {
  const validatedFields = SponsorSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const { Name, Imgpath } = validatedFields.data;

  try {
    await db.sponser.create({
      data: {
        Name: Name,
        Imgpath: Imgpath,
        createdBy: user?.id as string,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to create sponsor:", error);
    return { error: "Failed to create sponsor." };
  }
};
