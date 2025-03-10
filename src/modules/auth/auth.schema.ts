import * as z from "zod";
export const ForgotPasswordSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export const ResetPasswordSchema = z.object({
  password: z.string().min(7, {
    message: "Password is required",
  }),
  confirmPassword: z.string().min(7, {
    message: "Password is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

const nameRegex = /^(?!.*\s{2})[a-zA-ZÀ-ÿÁ-ÿ\s\'-]+$/;

export const SignupSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must be at most 50 characters long" })
    .regex(nameRegex, {
      message:
        "First name can only contain letters, spaces, apostrophes, and hyphens",
    }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name must be at most 50 characters long" })
    .regex(nameRegex, {
      message:
        "Last name can only contain letters, spaces, apostrophes, and hyphens",
    }),

  email: z.string().email({ message: "Please enter a valid email address" }),

  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message:
      "Please enter a valid phone number (E.164 format required, e.g., +1234567890)",
  }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one digit" })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character.",
    }),
});

export const MagicSignInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});
export type MagicSignInType = z.infer<typeof MagicSignInSchema>;
export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type SignupSchemaType = z.infer<typeof SignupSchema>;
export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
