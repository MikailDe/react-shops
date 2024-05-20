import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
};

export const fetchCarts = createAsyncThunk('card/fetchCartsStatus', async () => {
  const { data } = await axios.get('http://localhost:3005/products');
  return data;
});

const cartSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      state.status = 'succes';
      state.items = action.payload;
    });
    builder.addCase(fetchCarts.pending, state => {
      state.status = 'pending';
    });
    builder.addCase(fetchCarts.rejected, state => {
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = cartSlice.actions;

export default cartSlice.reducer;
