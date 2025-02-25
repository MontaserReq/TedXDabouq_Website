"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/user";
import { SponsorSchema } from "@/schemas";
import * as z from "zod";

export const createSponsor = async (values: z.infer<typeof SponsorSchema>) => {
  const validatedFields = SponsorSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error("Validation error:", validatedFields.error);
    return { error: "Invalid fields!" };
  }

  const user = await currentUser();

  if (!user) {
    console.error("Unauthorized: No user found.");
    return { error: "Unauthorized!" };
  }

  const { Name, Imgpath, fileId, Category, SocialLink } = validatedFields.data;

  console.log("Validated Data:", validatedFields.data);

  try {
    await db.sponser.create({
      data: {
        Name,
        Imgpath,
        fileId,
        Category,
        SocialLink,
        createdBy: user?.id as string,
      },
    });
    return { success: "Sponsor created successfully!" };
  } catch (error) {
    console.error("Failed to create sponsor:", error);
    return { error: "Failed to create sponsor." };
  }
};
