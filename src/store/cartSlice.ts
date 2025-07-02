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
  delete state.cart[action.payload];
},
  },
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
