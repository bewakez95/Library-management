import React, { useEffect, useState } from "react";
import Defaultlayout from "../../components/layouts/Defaultlayout";
import CustomInput from "../../components/customInput/CustomInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { gerUserAction } from "../../user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.adminInfo);
  useEffect(() => {
    admin?.uid && navigate("/dashboard");
  }, [admin, navigate]);

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
      // console.log(signInValue);
      //once logged in then send another call to firebase and save response to store
      await gerUserAction(signInValue.user.uid, dispatch);
      navigate("/dashboard");
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
