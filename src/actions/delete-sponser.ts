"use server";
import { db } from "@/lib/db";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
  privateKey: process.env.PRIVATE_KEY || "",
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT || "",
});

export const deleteSponser = async (id: string) => {
  const ExistingSponser = await db.sponser.findUnique({
    where: { id },
  });

  if (!ExistingSponser) {
    throw new Error("Sponsor does not exist");
  }

  try {
    if (ExistingSponser.Imgpath) {
      await imagekit.deleteFile(ExistingSponser.fileId);
    }

    await db.sponser.delete({
      where: {
        id: ExistingSponser.id,
      },
    });

    return { success: "Sponser got deleted" };
  } catch (error) {
    console.log("Error :" + error);
    throw error;
  }
};
