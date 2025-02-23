"use server";
import { db } from "@/lib/db";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
  privateKey: process.env.PRIVATE_KEY || "",
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT || "",
});

export const deleteSpeaker = async (id: string) => {
  const ExistingSpeaker = await db.speakers.findUnique({
    where: { id },
  });

  if (!ExistingSpeaker) {
    throw new Error("Speaker does not exist");
  }

  try {
    if (ExistingSpeaker.Imgpath) {
      await imagekit.deleteFile(ExistingSpeaker.fileId);
    }

    await db.speakers.delete({
      where: {
        id: ExistingSpeaker.id,
      },
    });

    return { success: "Sponser got deleted" };
  } catch (error) {
    console.log("Error :" + error);
    throw error;
  }
};
