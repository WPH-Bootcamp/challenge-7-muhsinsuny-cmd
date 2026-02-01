import { useQuery } from '@tanstack/react-query';

export interface OrderItem {
  menuId: number;
  name: string;
  price: number;
  qty: number;
}

export interface MyOrderData {
  data: OrderItem[];
  isLoading: boolean;
  isError: boolean;
}

export function useOrderQuery() {
  return useQuery<OrderItem[]>({
    queryKey: ['order'],
    queryFn: async () => {
      return [];
    },
    initialData: [],
  });
}
