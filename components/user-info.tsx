import { ExtendedUser } from '@/next-auth';
import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

interface UserInfoProps {
  user?: ExtendedUser;
  label: String;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className='w-[600px] shadow-md'>
      <CardHeader>
        <p className='text-2xl font-semibold'>{label}</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex flex-row items-center justify-between rounded-lg border p-4 shadow-md'>
          <p className='text-sm font-medium'>ID</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.id}
          </p>
        </div>
        <div className='flex flex-row items-center justify-between rounded-lg border p-4 shadow-md'>
          <p className='text-sm font-medium'>Name</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.name}
          </p>
        </div>
        <div className='flex flex-row items-center justify-between rounded-lg border p-4 shadow-md'>
          <p className='text-sm font-medium'>Email</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.email}
          </p>
        </div>
        <div className='flex flex-row items-center justify-between rounded-lg border p-4 shadow-md'>
          <p className='text-sm font-medium'>Role</p>
          <p className='max-w-[180px] truncate rounded-md bg-slate-100 p-1 font-mono text-xs'>
            {user?.role}
          </p>
        </div>
        <div className='flex flex-row items-center justify-between rounded-lg border p-4 shadow-md'>
          <p className='text-sm font-medium'>Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnable ? 'success' : 'destructive'}>
            {user?.isTwoFactorEnable ? 'ON' : 'OFF'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
