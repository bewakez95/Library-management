import React, { useState } from "react";
import Defaultlayout from "../components/layouts/Defaultlayout";
import CustomInput from "../components/customInput/CustomInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { toast } from "react-toastify";

function Login() {
  const [form, setForm] = useState({});

  const inputs = [
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
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target; //destructure
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    try {
      const { email, password } = form;
      const signInPromise = signInWithEmailAndPassword(auth, email, password);
      toast.promise(signInPromise, {
        pending: "In Progress",
        success: "Successfully Logged in!",
      });
      const signInValue = await signInPromise;
      console.log(signInValue);
    } catch (e) {
      let { message } = e;
      if (message.includes("wrong")) {
        toast.error("Invalid password");
      } else {
        toast.error(message);
      }
    }
  };
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
            Sign in
          </Button>
        </Form>
      </div>
    </Defaultlayout>
  );
}

export default Login;
