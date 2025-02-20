import { db } from "@/lib/db";

export const getAllSpeakers = async () => {
  try {
    const speakers = await db.speakers.findMany();

    return speakers;
  } catch {
    return null;
  }
};
