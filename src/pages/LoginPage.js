import LoginForm from "../components/registration/LoginForm";
import classes from "./LoginPage.module.css";

const LoginPage = () => {

  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
