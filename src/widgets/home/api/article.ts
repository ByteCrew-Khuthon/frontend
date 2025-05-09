import { get, REQUEST } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';
import type { Article } from '../types';

const fetchArticle = async () => {
  const response = await get<Article[]>({
    request: REQUEST.ARTICLE,
  });
  return response.data;
};

export const useFetchArticle = () => {
  return useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: fetchArticle,
  });
};
