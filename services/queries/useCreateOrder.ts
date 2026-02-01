import { useQueryClient } from '@tanstack/react-query';
import { OrderItem } from './useOrdersQuery';

export function useCreateOrder() {
  const queryClient = useQueryClient();

  const addItem = (item: Omit<OrderItem, 'qty'>) => {
    queryClient.setQueryData<OrderItem[]>(['order'], (old = []) => {
      const exist = old.find((o) => o.menuId === item.menuId);

      if (exist) {
        return old.map((o) =>
          o.menuId === item.menuId ? { ...o, qty: o.qty + 1 } : o
        );
      }

      return [...old, { ...item, qty: 1 }];
    });
  };

  const minusItem = (menuId: number) => {
    queryClient.setQueryData<OrderItem[]>(['order'], (old = []) =>
      old
        .map((o) => (o.menuId === menuId ? { ...o, qty: o.qty - 1 } : o))
        .filter((o) => o.qty > 0)
    );
  };

  return {
    addItem,
    minusItem,
  };
}
