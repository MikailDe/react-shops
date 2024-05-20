import { configureStore } from '@reduxjs/toolkit';
import filters from './slices/filtersSlice';
import card from './slices/cardSlice';
import cart from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filters,
    card,
    cart,
  },
});
