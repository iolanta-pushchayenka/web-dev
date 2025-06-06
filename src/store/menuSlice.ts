import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../types/product';

const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
  const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
  const data = await response.json();
  return data as Product[];
});

interface MenuState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
  selectedCategory: string | null;
  itemsCount: number;
}

const initialState: MenuState = {
  items: [],
  isLoading: false,
  error: null,
  selectedCategory: null,
  itemsCount: 6,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.itemsCount = 6;
    },
    seeMoreItems: (state) => {
      state.itemsCount += 6;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});

export { fetchMenu }; 
export const { setSelectedCategory, seeMoreItems } = menuSlice.actions;

export default menuSlice.reducer;
