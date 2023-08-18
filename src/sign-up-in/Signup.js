import React, { useState } from "react";
import Defaultlayout from "../components/layouts/Defaultlayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../components/customInput/CustomInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target; //destructure
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (form.password !== form.confirmpassword) {
      toast.error("Password did not match");
    }
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Shyam",
      required: true,
    },
    {
      label: "Last Name",
      name: "LName",
      type: "text",
      placeholder: "Bahadur",
      required: true,
    },
    {
      label: "Phone number",
      name: "phone",
      type: "number",
      placeholder: "04xxxxxxxx",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "abc@xyz.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      minLength: "6",
    },
    {
      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "Re Enter Password",
      required: 1,
      minLength: "6",
    },
  ];
  return (
    <Defaultlayout>
      <div className="p-3 border shadow rounded admin-form">
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
            Register
          </Button>
        </Form>
      </div>
    </Defaultlayout>
  );
}

export default Signup;
