import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

import { RegistrationSchema } from "./registration-schema";
import { sendNewUserData } from "../../store/registration-slice";

const RegistrationForm = () => {
  const registration = useSelector((state) => state.registration);
  const history = useNavigate();
  const dispatch = useDispatch();
  const onSubmitHandler = (values, actions) => {
    dispatch(sendNewUserData(values));
   if(registration.isCreated) {
    actions.resetForm();
    history("../login", { replace: true });
   }
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        changepassword: "",
      }}
      validationSchema={RegistrationSchema}
      onSubmit={onSubmitHandler}
    >
      {() => (
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
          <label htmlFor="changepassword">Password</label>
          <Field
            id="changepassword"
            name="changepassword"
            type="password"
            placeholder="2-nd password"
            autoComplete="new-password"
          />
          <ErrorMessage name="changepassword">
            {(msg) => <p className="error">*{msg}</p>}
          </ErrorMessage>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
