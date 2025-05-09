import { IoNotifications } from 'react-icons/io5';
import { HiDocumentReport } from 'react-icons/hi';

const baseStyle = { height: '64px', border: false };

export const AppBar = (onClick: () => void, documentClick: () => void) => ({
  ...baseStyle,
  backgroundColor: '#FFC9C9',
  renderLeft: () => <span className='logo ml-4 text-white'>Piggo</span>,
  renderRight: () => (
    <div className='flex gap-2'>
      <button name='document' onClick={documentClick}>
        <HiDocumentReport size={21} className='mr-4 text-white' />
      </button>
      <button name='notification' onClick={onClick}>
        <IoNotifications size={21} className='mr-4 text-white' />
      </button>
    </div>
  ),
});

export const TitleAppBar = (title?: string) => ({
  ...baseStyle,
  backgroundColor: '#fff',
  title: title,
});
