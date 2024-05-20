import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice:0,
  totalCount:0,
  items:[],
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItems = state.items.find(obj => obj.id === action.payload.id);

      if(findItems) {
        findItems.count++;
        state.totalCount++
      } else {
        state.items.push(
          {
            ...action.payload,
            count:1
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0)
    },
    minusItem(state, action) {
      const findItems = state.items.find(obj => obj.id === action.payload);
      if(findItems) {
        findItems.count--;
        state.totalCount--
      }

      if(findItems.count < 0) {
        findItems.count = 0
      }
      
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
      }, 0)
    },
    totalCounts(state) {
      state.totalCount = state.items.reduce((sum, item) => sum + item.count,0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)
    },
    clearItem(state) {
      state.items = []
      state.totalCount = 0;
      state.totalPrice = 0;
    }
  }
})

export const selectCart = (state) => state.cart
export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id)

export const { addItem, removeItem, minusItem, clearItem, totalCounts } = cartSlice.actions

export default cartSlice.reducer
