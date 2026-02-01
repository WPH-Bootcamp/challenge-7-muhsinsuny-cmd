// src/types/order.ts

export type OrderStatus =
  | 'preparing'
  | 'on_the_way'
  | 'delivered'
  | 'done'
  | 'cancelled';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

export interface Order {
  id: number;
  restaurantName: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
  createdAt: string;
}
