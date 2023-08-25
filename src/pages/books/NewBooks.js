import React, { useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addNewBookAction } from "./bookAction";

function NewBooks() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const inputs = [
    {
      label: "Book Title",
      name: "title",
      type: "text",
      placeholder: "Title",
    },
    {
      label: "Author name",
      name: "name",
      type: "text",
      placeholder: "Password",
    },
    {
      label: "Published Year",
      name: "year",
      type: "number",
      placeholder: "2023",
    },
    {
      label: "Image url",
      name: "url",
      type: "url",
      placeholder: "www.dwad.com",
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
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
    dispatch(addNewBookAction(form));
    console.log(form);
  };
  return (
    <AdminLayout>
      <h3>New Books</h3>
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
          Submit
        </Button>
      </Form>
    </AdminLayout>
  );
}

export default NewBooks;
