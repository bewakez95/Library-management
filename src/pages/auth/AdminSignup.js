import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CustomInput from "../../components/customInput/CustomInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import PrivateRoute from "../../components/privateRoutes/PrivateRoute";

function AdminSignup() {
  const [form, setForm] = useState({
    role: "admin",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target; //destructure
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    if (form.password !== form.confirmpassword) {
      toast.error("Password did not match");
    }
    const { email, password } = form;
    try {
      const authSnapPromise = createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.promise(authSnapPromise, {
        pending: "In progress",
        success: "User created successfully!",
      });
      const authSnap = await authSnapPromise;
      console.log(authSnap);
      if (authSnap.user.uid) {
        const docRef = doc(db, "users", authSnap.user.uid);
        await setDoc(docRef, form);
      }
    } catch (e) {
      // console.log(e);
      let { message } = e;
      if (e.message.includes("email-already")) {
        toast.error("Email Already Exists");
      } else {
        toast.error(message);
      }
    }
  };
  const inputs = [
    {
      id: "fname",
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Shyam",
      required: true,
    },
    {
      id: "lname",
      label: "Last Name",
      name: "LName",
      type: "text",
      placeholder: "Bahadur",
      required: true,
    },
    {
      id: "pname",

      label: "Phone number",
      name: "phone",
      type: "number",
      placeholder: "04xxxxxxxx",
      required: true,
    },
    {
      id: "ename",

      label: "Email",
      name: "email",
      type: "email",
      placeholder: "abc@xyz.com",
      required: true,
    },
    {
      id: "pwname",

      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      minLength: "6",
    },
    {
      id: "cpwname",

      label: "Confirm Password",
      name: "confirmpassword",
      type: "password",
      placeholder: "Re Enter Password",
      required: 1,
      minLength: "6",
    },
  ];
  return (
    <PrivateRoute>
      <div className="p-3 border shadow rounded admin-form">
        <Form onSubmit={handleOnSubmit}>
          {inputs.map((input, i) => (
            <CustomInput
              key={i}
              onChange={handleOnChange}
              // label={input.label}
              // placeholder={input.placeholder}
              // type={input.type}
              {...input}
            />
          ))}

          <Button variant="primary" type="submit">
            Register as Admin
          </Button>
        </Form>
      </div>
    </PrivateRoute>
  );
}

export default AdminSignup;
