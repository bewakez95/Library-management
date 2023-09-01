import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./user/userSlice";
import BookReducer from "./pages/books/bookSlice";
import BorrowHistory from "./borrow-history/borrowSlice";
export const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    book: BookReducer,
    borrowHistory: BorrowHistory,
  },
});
