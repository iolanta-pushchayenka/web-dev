import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  cart: Record<string, number>;
};

const initialState: CartState = {
  cart: {},

};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.cart[id] = (state.cart[id] || 0) + 1;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id] -= 1;
        if (state.cart[id] <= 0) {
          delete state.cart[id];
        }
      }
    },
    resetCart: (state) => {
      state.cart = {};
    },
  },
});

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;
