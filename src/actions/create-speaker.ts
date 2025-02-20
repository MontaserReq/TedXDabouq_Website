"use server";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/user";
import { SpeakerSchema } from "@/schemas";
import * as z from "zod";

export const createSpeaker = async (values: z.infer<typeof SpeakerSchema>) => {
  const validatedFields = SpeakerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const user = await currentUser();

  if (!user) {
    return { error: "unauthorized access" };
  }

  const { FName, LName, Imgpath, SocialLink = "" } = validatedFields.data;

  try {
    await db.speakers.create({
      data: {
        FName,
        LName,
        Imgpath,
        SocialLink,
        createdBy: user.id as string,
      },
    });
    return { success: "Speaker created successfully!" };
  } catch (error) {
    return { error: "Failed to create speaker" + error };
  }
};
