import { useQuery } from '@tanstack/react-query';
import { getMyOrders } from './order';

export const useMyOrderQuery = () => {
  return useQuery({
    queryKey: ['my-orders'],
    queryFn: getMyOrders,
  });
};
