import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {},
};

export const userSlice = createSlice({
  name: "Set-admin",
  initialState,
  reducers: {
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdmin } = userSlice.actions;

export default userSlice.reducer;
