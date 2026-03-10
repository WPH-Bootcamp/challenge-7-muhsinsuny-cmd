import { useQuery } from '@tanstack/react-query';
import { getRestaurantDetail } from '../restaurants';

export const useRestaurantDetail = (id?: string | number) => {
  return useQuery({
    queryKey: ['restaurant-detail', id],
    queryFn: () => getRestaurantDetail(id!),
    enabled: !!id,
  });
};
