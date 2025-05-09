import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

const submitReportRequest = async () => {
  const response = await get({
    request: REQUEST.EVALUATE,
  });
  return response.data;
};

export const useSubmitReportRequest = () => {
  return useQuery({
    queryKey: ['report'],
    queryFn: submitReportRequest,
  });
};
