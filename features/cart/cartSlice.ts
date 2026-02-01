// features/cart/cartSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  menuId: string | number;
  qty: number;
  [key: string]: string | number | boolean;
}

interface CartState {
  items: CartItem[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] } as CartState,
  reducers: {
    addToCart: (state: CartState, action) => {
      const item = state.items.find((i) => i.menuId === action.payload.menuId);
      if (item) item.qty++;
      else state.items.push({ ...action.payload, qty: 1 });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.menuId !== action.payload);
    },
    changeQty: (state, action) => {
      const item = state.items.find((i) => i.menuId === action.payload.menuId);
      if (item) item.qty = action.payload.qty;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, changeQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
