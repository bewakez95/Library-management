import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAdmin } from "../../user/userSlice";
import { auth } from "../../config/firebase-config";

function Header() {
  const dispatch = useDispatch();
  const handlelogout = () => {
    signOut(auth).then(() => {
      dispatch(setAdmin({}));
    });
  };
  const { admin } = useSelector((state) => state.adminInfo);
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Library Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            {admin?.uid ? (
              <>
                <Link
                  onClick={handlelogout}
                  className="nav-link"
                  to="/admin-signup"
                >
                  Sign Out
                </Link>
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
