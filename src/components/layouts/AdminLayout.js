import React from "react";
import SideBar from "../sidebar/SideBar";
import Header from "./Header";
import Footer from "./Footer";

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <SideBar />
        <div className="main">{children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default AdminLayout;
