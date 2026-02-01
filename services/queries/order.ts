import axios from 'axios';

interface OrderData {
  restaurantId: number;
  items: {
    menuId: number;
    quantity: number;
  }[];
  totalPrice: number;
}
export const getMyOrders = async () => {
  const res = await axios.get('/api/order/my-order');
  return res.data;
};

export const createOrder = async (data: OrderData) => {
  const res = await axios.post('/api/order', data);
  return res.data;
};
