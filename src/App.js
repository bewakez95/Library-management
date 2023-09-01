import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./pages/auth/Login";
import AdminSignup from "./pages/auth/AdminSignup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Books from "./pages/books/Books";
import Clients from "./pages/clients/Clients";
import Dashboard from "./pages/dashboard/Dashboard";
import History from "./borrow-history/BorrowHistory";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "./config/firebase-config";
import { gerUserAction } from "./user/userAction";
import NewBooks from "./pages/books/NewBooks";
import EditBooks from "./pages/books/EditBooks";
import { getAllBookAction } from "./pages/books/bookAction";
import BookLanding from "./pages/books/BookLanding";
import PublicSignup from "./pages/auth/PublicSignup";
import ResetPassword from "./pages/auth/ResetPassword";

function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    user?.uid && dispatch(gerUserAction(user.uid));
  });
  useEffect(() => {
    dispatch(getAllBookAction());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        {/* //public */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<PublicSignup />}></Route>
        <Route path="/book/:bookId" element={<BookLanding />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        {/* //private */}
        <Route
          path="/admin-signup"
          element={
            // <PrivateRoute>
            <AdminSignup />
            // </PrivateRoute>
          }
        ></Route>
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/clients"
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/new-book"
          element={
            <PrivateRoute>
              <NewBooks />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/edit-books/:id"
          element={
            <PrivateRoute>
              <EditBooks />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/history" element={<History />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
