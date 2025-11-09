import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSideBar } = navSlice.actions;

export default navSlice.reducer;
