import { SponsersCatg, UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New Password is required",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (!data.password && data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Current Password is required",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  password: z.string().min(6, {
    message: "Minimum password length is 6",
  }),
});

export const SpeakerSchema = z.object({
  FName: z.string().min(1, "First name is required"),
  LName: z.string().min(1, "Last name is required"),
  Imgpath: z.string(),
  fileId: z.string(),
  SocialLink: z.string().url("Invalid URL").optional(),
});

export const SponsorSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  Imgpath: z.string(),
  fileId: z.string(),
  Category: z.enum([
    SponsersCatg.Bronze,
    SponsersCatg.Silver,
    SponsersCatg.Gold,
    SponsersCatg.Platinum,
  ]),
});
