import { get, REQUEST } from '@/shared/api';
import type { Notification } from '../types';
import { useQuery } from '@tanstack/react-query';

const fetchNotification = async () => {
  const response = await get<Notification[]>({
    request: REQUEST.NOTIFICATION,
  });
  return response.data;
};

export const useFetchNotification = () => {
  return useQuery({
    queryKey: ['notification'],
    queryFn: fetchNotification,
    refetchInterval: 5000,
  });
};
