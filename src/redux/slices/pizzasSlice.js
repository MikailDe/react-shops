import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items:[],
  status: 'loading',
}

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params) => {
  const { categoryId, sortType, search, pageCount } = params;

  const { data } = await axios.get(`https://660f84d8356b87a55c518a18.mockapi.io/items?page=${pageCount}&limit=4${
  categoryId > 0 ? `&category=${categoryId}` : ''  }&sortBy=${sortType}&order=desc${search}`);
  return data;
})

const pizzasSlice = createSlice({
  name:"pizza",
  initialState,
  reducers: {
    setItems (state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPizzas.fulfilled, (state, action) => {
        state.status = 'succes'
        state.items = action.payload
    })
    builder.addCase(
      fetchPizzas.pending,(state) => {
        state.status = 'loading'
    })
    builder.addCase(
      fetchPizzas.rejected,(state) => {
        state.status = 'error'
        state.items = []
      }
    )
  }
})

export const selectPizzaData = (state) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;