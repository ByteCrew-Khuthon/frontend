import React from 'react';

import { IoIosNotifications } from 'react-icons/io';

export default function AppBar() {
  return (
    <div className='absolute top-0 flex w-full items-center justify-between bg-transparent px-6 py-4'>
      <span className='logo text-xl text-white'>Piggo</span>
      <IoIosNotifications size={28} className='text-white' />
    </div>
  );
}
