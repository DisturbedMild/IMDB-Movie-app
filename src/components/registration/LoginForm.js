import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAction } from "../../store/login-slice";
import { Formik, Form, Field } from "formik";
import { LoginSchema } from "./login-schema";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (values) => {
    dispatch(
      loginAction(
        {
          email: values.email,
          password: values.password,
          returnSecureToken: true,
        },
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
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            placeholder="Password..."
          />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
