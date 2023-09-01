import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  borrowList: [],
  selectedborrow: [],
};

export const borrowSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {
    setborrow: (state, { payload }) => {
      state.borrowList = payload;
    },
    setSelectedborrow: (state, { payload }) => {
      state.selectedborrow = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setborrow, setSelectedborrow } = borrowSlice.actions;

export default borrowSlice.reducer;
