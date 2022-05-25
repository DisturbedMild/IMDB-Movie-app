import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAction } from "../../store/login-slice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginSchema } from "./login-schema";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (values, actions) => {
    dispatch(
      loginAction(
        {
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        },
        actions,
        navigate
      )
    );
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmitHandler}
      validationSchema={LoginSchema}
    >
      {() => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <ErrorMessage name="email">
            {(msg) => <p className="error">*{msg}</p>}
          </ErrorMessage>
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Password..."
          />
          <ErrorMessage name="password">
            {(msg) => <p className="error">*{msg}</p>}
          </ErrorMessage>
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
