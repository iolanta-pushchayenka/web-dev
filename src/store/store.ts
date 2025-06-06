import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice';
import cartReducer from './cartSlice';
import menuReducer from './menuSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    menu: menuReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;