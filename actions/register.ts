'use server';

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import * as z from 'zod';
import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    }
  });

  if (existingUser) {
    return { error: 'User already exists!' };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: 'User created!' };
};
