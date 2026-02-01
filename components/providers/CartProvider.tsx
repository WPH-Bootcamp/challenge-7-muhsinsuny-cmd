'use client';

import { createContext, useContext, useState } from 'react';
import { MenuItem } from '@/services/queries/useMenusQuery';

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  totalQty: number;
  removeFromCart: (id: number) => void;
  getQtyById: (id: number) => number;
  decreaseQty: (id: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // const addToCart = (item: MenuItem) => {
  //   setCart((prev) => {
  //     const existing = prev.find((c) => c.id === item.id);

  //     if (existing) {
  //       return prev.map((c) =>
  //         c.id === item.id ? { ...c, qty: c.qty + 1 } : c
  //       );
  //     }

  //     return [...prev, { ...item, qty: 1 }];
  //   });
  // };

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);

      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }

      const newItem: CartItem = {
        id: item.id,
        name: item.foodName,
        price: item.price ?? 0,
        image: item.image,
        qty: 1,
      };

      return [...prev, newItem];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const getQtyById = (id: number) => {
    const item = cart.find((c) => c.id === id);
    return item?.qty ?? 0;
  };

  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQty,
        totalQty,
        getQtyById,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
