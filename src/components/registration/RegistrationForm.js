import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import { RegistrationSchema } from "./registration-schema";
import { sendNewUserData } from "../../store/registration-slice";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const registration = useSelector((state) => state.registration);

  const dispatch = useDispatch();

  const onSubmitHandler = (values, actions) => {
    dispatch(
      sendNewUserData(
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
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={onSubmitHandler}
    >
      {() => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="test@example.com"
            autoComplete="email"
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
            autoComplete="new-password"
          />
          <ErrorMessage name="password">
            {(msg) => <p className="error">*{msg}</p>}
          </ErrorMessage>
          <label htmlFor="confirmPassword">Password</label>
          <Field
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="2-nd password"
            autoComplete="new-password"
          />
          <ErrorMessage name="confirmPassword">
            {(msg) => <p className="error">*{msg}</p>}
          </ErrorMessage>
          <button type="submit">
            {registration.isLoading ? <p>Wait for it...</p> : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
