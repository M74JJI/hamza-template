import { EmailService } from "@/modules/auth/services/mail.sender";
import bcrypt from "bcryptjs";
import { auth } from "@/auth";
import slugify from "slugify";
import { nanoid } from "nanoid";
import { db } from "@/lib/db";

export async function sendEmailVerification(email: string, token: string) {
  const verificationLink = `http://localhost:3000/auth/email_verify?token=${token}`;
  const sender = new EmailService();
  await sender.sendVerificationEmail(email, verificationLink);
}

export const hashMyPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export async function sendResetPasswordEmail(email: string, token: string) {
  const sender = new EmailService();
  const link = `http://localhost:3000/auth/new-password?token=${token}`;
  await sender.sendResetPasswordEmail(email, link);
}

export async function currentUser() {
  const session = await auth();
  return session?.user;
}
export async function currentRole() {
  const session = await auth();
  return session?.user?.role;
}

export async function generateUniqueUsername(
  firstName: string,
  lastName: string
): Promise<string> {
  // Normalize names and create a base username
  const baseUsername = slugify(`${firstName} ${lastName}`, {
    lower: true,
    strict: true,
    trim: true,
  }).replace(/-/g, "");

  let username = baseUsername;
  let counter = 1;

  while (true) {
    // Check if username exists in the database
    const existingUser = await db.user.findUnique({
      where: { username },
      select: { id: true },
    });

    if (!existingUser) break; // Username is unique

    // Modify username by appending a numeric suffix or nanoid
    username = `${baseUsername}${counter < 5 ? counter : nanoid(5)}`;
    counter++;
  }

  return username;
}
