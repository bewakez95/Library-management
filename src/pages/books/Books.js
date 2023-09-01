import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import BookTable from "../../components/book/BookTable";

function Books() {
  return (
    <AdminLayout>
      <h3>Books</h3>
      <hr></hr>
      <div>
        {/* Create a react button */}
        <Link to="/new-book"> 
          <Button>Add Book</Button>
        </Link>
        <BookTable />
      </div>
    </AdminLayout>
  );
}

export default Books;
// Create a Button for new book
// Create new Component for new book
// Can copy layout from book
// fot the add new book form we can copy from log in js