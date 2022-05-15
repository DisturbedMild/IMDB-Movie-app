import RegistrationForm from "../components/registration/RegistrationForm";

import classes from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={classes.registration}>
      <h1>Create new account</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
