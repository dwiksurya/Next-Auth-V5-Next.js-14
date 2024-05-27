import React from 'react';

import { CurrentUser } from '@/lib/auth';
import UserInfo from '@/components/user-info';

const ServerPage = async () => {
  const user = await CurrentUser();

  return <UserInfo label={'Sever Component'} user={user} />;
};

export default ServerPage;
