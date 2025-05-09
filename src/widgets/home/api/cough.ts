import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

type CoughCnt = {
  date: string;
  coughCount: number;
};

const fetchCoughCnt = async () => {
  const response = await get<CoughCnt[]>({
    request: REQUEST.COUGH,
  });
  return response.data;
};

export const useFetchCoughCnt = () => {
  return useQuery({
    queryKey: ['coughCnt'],
    queryFn: fetchCoughCnt,
    select: data => data[0].coughCount,
  });
};
