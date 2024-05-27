'use client';

import React from 'react';
import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/use-current-user';

const SettingPage = () => {
  const session = useCurrentUser();
  const onClick = () => {
    logout();
  };

  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <button onClick={onClick} type='submit'>
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingPage;
