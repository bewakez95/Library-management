import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Defaultlayout({ children }) {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

export default Defaultlayout;
