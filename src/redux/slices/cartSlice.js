import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  count: 0,
  price: 0,
  items: [],
  status: 'idle',
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const { data } = await axios.get('http://localhost:3005/carts');
  const uniqueItems = data.reduce((acc, currentItem) => {
    const existingItemIndex = acc.findIndex(item => item.id === currentItem.id);
    if (existingItemIndex === -1) {
      acc.push(currentItem);
    }
    return acc;
  }, []);
  return uniqueItems;
});

export const deleteCartItem = createAsyncThunk('cart/deleteCartItem', async id => {
  await axios.delete(`http://localhost:3005/carts/${id}`);
  return id;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
    addItem(state, action) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
      state.count = state.items.reduce((total, item) => total + item.count, 0);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCart.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const newItems = action.payload.filter(
          item => !state.items.some(existingItem => existingItem.id === item.id),
        );
        state.items = [...state.items, ...newItems];
        state.count = state.items.reduce((total, item) => total + item.count, 0);
      })

      .addCase(fetchCart.rejected, state => {
        state.status = 'failed';
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.count = state.items.length;
      });
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
