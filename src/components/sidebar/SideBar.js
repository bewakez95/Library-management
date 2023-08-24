import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-dark text-light sidebar">
      <div className="mt-4 text-center">Admin</div>
      <hr />
      <div className="">
        <ul className="list-unstyled ms-5 me-5">
          <Link className="nav-link" to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link className="nav-link" to="/books">
            <li>Books</li>
          </Link>
          <Link className="nav-link" to="/clients">
            <li>Clients</li>
          </Link>
          <Link className="nav-link" to="/history">
            <li>History</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
