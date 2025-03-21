import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  if (typeof email !== 'string') {
    console.error("email is not a string");
    return null;
  }
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    console.error("Error in getUserByEmail:", error);
    return null;
  }
};

export const getUserById = async (id: string) => {
    if (typeof id !== 'string') {
        console.error("id is not a string");
        return null;
      }
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error("Error in getUserById:", error);
    return null;
  }
};