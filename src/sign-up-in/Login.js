import React from "react";
import Defaultlayout from "../components/layouts/Defaultlayout";
import CustomInput from "../components/customInput/CustomInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "abc@xyz.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];
  return (
    <Defaultlayout>
      <div className="p-3 border shadow rounded admin-form">
        <Form>
          {inputs.map((input) => (
            <CustomInput
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
