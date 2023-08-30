import React, { useState } from "react";
import styles from "./Auth.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../schema/signupvalidation";
import initialValues from "../../constants/signupFormConstants";

function SignupForm({ statefun }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (values) => {
    // if (localStorage.getItem("UserCount") == null) {
    //   localStorage.setItem("UserCount", 1);
    // }
    // localStorage.setItem(
    //   `${values.email}`,
    //   JSON.stringify({
    //     id: localStorage.getItem("UserCount"),
    //     name: `${values.name}`,
    //     email: `${values.email}`,
    //     password: `${values.password}`,
    //   })
    // );
    // localStorage.setItem(
    //   "UserCount",
    //   parseInt(localStorage.getItem("UserCount")) + 1
    // );
    statefun(false);
  };

  const handleClick = () => {
    statefun(false);
  };

  return (
    <>
      <div className={`col-8 ${styles.formside}`}>
        <h1 className={styles.headingtext}>Create a New Account</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="row pt-4">
              <Field
                className="form-control"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="row pt-3">
              <Field
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="row pt-3 pb-3">
              <Field
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button className={`btn ${styles.formbtn}`} type="submit">
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
      <div
        className={`col-4 ${styles.imgside} px-5`}
        style={{ alignItems: "center", textAlign: "center" }}
      >
        <h1 className="pb-3 fs-1 fw-bold">Welcome!</h1>
        <h3 className="pb-4 fw-light">Already have an account?</h3>
        <button
          className="btn btn-outline-light mt-2 px-5"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default SignupForm;
