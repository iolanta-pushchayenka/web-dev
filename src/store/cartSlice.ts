import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  cart: Record<string, number>;
   isAuthenticated: boolean;
   token: string|null;
};

const initialState: CartState = {
  cart: JSON.parse(localStorage.getItem("cart") || "{}"),
 isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token")
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.cart[id] = (state.cart[id] || 0) + 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
  delete state.cart[action.payload];
   localStorage.setItem("cart", JSON.stringify(state.cart));
},
login: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { addToCart, removeFromCart, login, logout} = cartSlice.actions;
export default cartSlice.reducer;
