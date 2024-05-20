import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: '',
  categoryId: 0,
  pageCount:1,
  sort: {
    name:'популярности',
    sortProperty:'rating',
  }
};

const filterSlice = createSlice({
  name:'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state,action) {
      state.searchValue = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.pageCount = action.payload
    },
    setFilter(state, action) {
      state.sort.sortProperty = action.payload.sort
      state.pageCount = Number(action.payload.pageCount)
      state.categoryId = Number(action.payload.categoryId)
    }
  }
});

export const selectSort = (state) => state.filter.sort

export const { setCategoryId, setSort, setCurrentPage, setFilter, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;