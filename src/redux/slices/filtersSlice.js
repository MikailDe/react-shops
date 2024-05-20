import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popUp:false,
  active:false,
}

const filtersSlice = createSlice({
  name:'filters',
  initialState,
  reducers: {
    setPopup(state, action) {
      state.popUp = action.payload
    },
    setClass(state, action) {
      state.active = action.payload
    }
  }
})

export const { setPopup, setClass } = filtersSlice.actions

export default filtersSlice.reducer