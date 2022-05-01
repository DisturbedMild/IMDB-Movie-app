// import { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import useHttp from "../hooks/use-http";
import classes from "./Registration.module.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Name is too short!")
    .max(40, "Name is too long!")
    .required("Name is required"),
  lastName: Yup.string()
    .min(3, "Last Name is too short!")
    .max(40, "Last Name is too long!")
    .required("Last Name is required"),
  email: Yup.string().email().required("Email field required"),
  password: Yup.string()
    .min(6, "Password is too short, it must be at least 6 characters")
    .max(
      40,
      "Password is too long, your password must be less then 40 characters"
    )
    .required("Password field is required"),
  changepassword: Yup.string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both passwords need to be the same"
      ),
    })
    .required("Both passwords need to be the same and they are both required"),
});

const Registration = () => {
  const { isLoading, error, sendRequest: sendPostRequest } = useHttp();

  const onSubmitHandler = (values, actions) => {
    sendPostRequest({
      url: "https://imdb-app-b363e-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
				values
			},
    });
		console.log('New user was created')
    actions.resetForm();
  };
  return (
    <div className={classes.registration}>
      <h1>Sign up</h1>
      {error && <p>{error}</p>}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          changepassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmitHandler}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="firstname">First Name</label>
            <Field id="firstName" name="firstName" placeholder="John" />
            <ErrorMessage name="firstName">
              {(msg) => <p className="error">*{msg}</p>}
            </ErrorMessage>
            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" placeholder="Smith" />
            <ErrorMessage name="lastName">
              {(msg) => <p className="error">*{msg}</p>}
            </ErrorMessage>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="test@example.com"
            />
            <ErrorMessage name="email">
              {(msg) => <p className="error">*{msg}</p>}
            </ErrorMessage>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />
            <ErrorMessage name="password">
              {(msg) => <p className="error">*{msg}</p>}
            </ErrorMessage>
            <label htmlFor="changepassword">Password</label>
            <Field
              id="changepassword"
              name="changepassword"
              type="password"
              placeholder="2-nd password"
            />
            <ErrorMessage name="changepassword">
              {(msg) => <p className="error">*{msg}</p>}
            </ErrorMessage>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
