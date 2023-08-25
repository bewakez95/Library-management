import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./user/userSlice";
import BookReducer from "./pages/books/bookSlice";
export const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    book: BookReducer,
  },
});
