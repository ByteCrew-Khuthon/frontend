import { IoNotifications } from 'react-icons/io5';

const baseStyle = { height: '64px', border: false };

export const AppBar = () => ({
  ...baseStyle,
  backgroundColor: '#FFC9C9',
  renderLeft: () => <span className='logo ml-4 text-white'>Piggo</span>,
  renderRight: () => <IoNotifications size={21} className='mr-4 text-white' />,
});

export const TitleAppBar = (title?: string) => ({
  ...baseStyle,
  backgroundColor: '#fff',
  title: title,
});
