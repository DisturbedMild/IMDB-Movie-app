import ReactDOM from "react-dom";
import classes from "./Notification.module.css";

const Notification = (props) => {
  return ReactDOM.createPortal(
    <div
      className={`${classes.notification} ${
        props.className === "success" ? classes.success : classes.error
      }`}
    >
      {props.children}
    </div>,
    document.getElementById("notification")
  );
};

export default Notification;
