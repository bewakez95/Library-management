import React, { useEffect, useState } from "react";
import Defaultlayout from "../../components/layouts/Defaultlayout";
import CustomInput from "../../components/customInput/CustomInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { gerUserAction } from "../../user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "abc@xyz.com",
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
      const { email } = form;
      const resetPromise = sendPasswordResetEmail(auth, email);
      toast.promise(resetPromise, {
        pending: "In Progress",
        success: "Reset Link has been sent",
      });
      const resetPromiseValue = await resetPromise;
      // console.log(signInValue);
      //once logged in then send another call to firebase and save response to store
      //   await gerUserAction(resetPromiseValue.user.uid, dispatch);
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
            Reset Password
          </Button>
        </Form>
      </div>
    </Defaultlayout>
  );
}

export default ResetPassword;
