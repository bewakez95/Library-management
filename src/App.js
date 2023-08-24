import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Books from "./pages/books/Books";
import Clients from "./pages/clients/Clients";
import Dashboard from "./pages/dashboard/Dashboard";
import History from "./pages/history/History";

function App() {
  return (
    <div>
      <Routes>
        {/* //public */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        {/* //private */}
        <Route path="/admin-signup" element={<Signup />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
