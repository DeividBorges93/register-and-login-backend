import { z } from "zod";

const needANumber = "(?=.*[0-9])";
const regexNeedANumber = new RegExp(needANumber);

const needAUpCase = "(?=.*[A-Z])";
const regexneedAUpCase = new RegExp(needAUpCase);

const numMinUsername = 3;
const numMinPassword = 8;

const messages = {
  minUsername: "User must be at least 3 characters",
  minLogin: "Password must be at least 8 characters long",
  minOneNumber: "Password must have a number",
  oneUpCase: "Password must have a capital letter",
  noPermitted: "'@' is not allowed in the password",
};

export const UserSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(numMinUsername, messages.minUsername),
  email: z.string({ required_error: "Email is required" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(numMinPassword, messages.minLogin)
    .regex(regexNeedANumber, { message: messages.minOneNumber })
    .regex(regexneedAUpCase, { message: messages.oneUpCase })
    .refine((password) => !password.includes("@"), {
      message: messages.noPermitted,
    }),
});

export type User = z.infer<typeof UserSchema>;

export const UserLoginSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
});
