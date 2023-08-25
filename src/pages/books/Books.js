import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookTable from "../../components/book/BookTable";

function Books() {
  return (
    <AdminLayout>
      <h3>Books</h3>
      <hr></hr>
      <div>
        <Link to="/new-book">
          <Button>Add Book</Button>
        </Link>
        <BookTable />
      </div>
    </AdminLayout>
  );
}

export default Books;
