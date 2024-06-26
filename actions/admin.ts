'use server';

import { CurrentRole } from '@/lib/auth';
import { UserRole } from '@prisma/client';

export const Admin = async () => {
  const role = await CurrentRole();

  if (role === UserRole.ADMIN) {
    return { success: 'Allowed!' };
  }
  return { error: 'Forbidden!' };
};
