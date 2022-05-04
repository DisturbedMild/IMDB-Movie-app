import RegistrationForm from "../components/registration/RegistrationForm";

import classes from "./Registration.module.css";

const Registration = () => {
  return (
    <div className={classes.registration}>
      <h1>Sign up</h1>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
