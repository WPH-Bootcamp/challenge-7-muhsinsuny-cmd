import { api } from '@/services/api/axios';
import { RestaurantDetail } from '@/types/restaurant';

export const getRestaurantDetail = async (
  id: string | number
): Promise<RestaurantDetail> => {
  const res = await api.get(`/api/resto/${id}`);
  return res.data;
};
