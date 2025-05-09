import { Stack } from '@/app/stackflow';
import { useNotification } from '@/shared/hook';
import { useEffect } from 'react';

export default function App() {
  const { handleAllowNotification } = useNotification();

  useEffect(() => {
    handleAllowNotification();
  }, [handleAllowNotification]);
  return <Stack />;
}
