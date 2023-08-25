import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput";
import { Link, useParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewBookAction,
  getAllBookAction,
  getBookAction,
  updateBookAction,
} from "./bookAction";

function EditBooks() {
  const dispatch = useDispatch();
  const { selectedBook } = useSelector((state) => state.book);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getBookAction);
    setForm(selectedBook);
  }, [id]);
  useEffect(() => {
    setForm(selectedBook);
  }, [selectedBook]);
  const [form, setForm] = useState({});

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      value: form.title,
      placeholder: "Title",
    },
    {
      label: "Author name",
      name: "name",
      type: "text",
      value: form.name,

      placeholder: "Password",
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      value: form.year,

      placeholder: "2023",
    },
    {
      label: "Image url",
      name: "url",
      type: "url",
      value: form.url,

      placeholder: "www.dwad.com",
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      value: form.summary,

      placeholder: "Your summary goes here",
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target; //destructure
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateBookAction(form));
    console.log(form);
  };
  return (
    <AdminLayout>
      <h3>Edit Books</h3>
      <hr></hr>

      <Link to="/books">
        <Button variant="primary">
          <BsFillArrowLeftCircleFill />
          List of Books
        </Button>
      </Link>

      <Form onSubmit={handleOnSubmit}>
        {inputs.map((input) => (
          <CustomInput
            onChange={handleOnChange}
            // label={input.label}
            // placeholder={input.placeholder}
            // type={input.type}
            {...input}
          />
        ))}
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </AdminLayout>
  );
}

export default EditBooks;
