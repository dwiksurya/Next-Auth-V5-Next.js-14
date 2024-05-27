import NextAuth, { DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
  role: 'ADMIN' | 'USER';
  isTwoFactorEnable: boolean;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
