import { db } from "@/lib/db";

export const getAllSponsers = async () => {
  try {
    const sponsers = await db.sponser.findMany();

    return sponsers;
  } catch {
    return null;
  }
};
