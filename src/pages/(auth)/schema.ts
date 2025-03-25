import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  flow: z.literal("signIn"),
});

export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(5, { message: "Username must contain at least 5 characters" })
      .max(20, { message: "Username can't be longer then 20 characters" }),
    email: z.string().trim().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(3, { message: "Password must contain at least 8 characters" }),
    passwordConfirm: z.string(),
    isSiteAdmin: z.boolean().default(false),
    flow: z.literal("signUp"),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["passwordConfirm"],
      });
    }
  });
